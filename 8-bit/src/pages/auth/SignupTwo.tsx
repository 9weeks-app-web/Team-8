import styled from "@emotion/styled";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { Common } from "../../styles/common";
import { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import app from '../../firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


interface ActiveButtonProps {
  isActive: boolean;
}

const Container = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`;

const NickNameContainer = styled.div<{ showText: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: ${props => (props.showText ? '0' : '50px')};
`;

const Logo = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  margin-bottom: 154px;

  img {
    width : 187px;
    height : 49px;
    margin-top: 31px;
    margin-bottom: ${Common.space.s};
  }
`;

const Input = styled.input<{ isNicknameAvailable: boolean | null, isNicknameValidated: boolean }>`
  width: 400px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${props =>
    props.isNicknameValidated
      ? (props.isNicknameAvailable === true
          ? Common.colors.system.success
          : Common.colors.system.warning)
      : (props.isNicknameAvailable === false
          ? Common.colors.system.warning
          : Common.colors.neutral[50])};
`;

const SignUpForm = styled.div`
  background : ${Common.colors.neutral[0]};
  margin-bottom: 143px;
  
  .nicknameText {
    font-size: ${Common.font.size.md};
    font-weight: ${Common.font.weight.semibold};
    margin-bottom: ${Common.space.xs};
  }
  .checkBoxText {
    font-size: ${Common.font.size.md};
    font-weight: ${Common.font.weight.semibold};
    margin-bottom: 22px;
  }
`;

const Button = styled.button`

  &.overlapCheck {
    background-color: ${Common.colors.neutral[0]};
    width: 80px;
    height: 40px;
    border : 1px solid ${Common.colors.primary[80]};
    color : ${Common.colors.primary[80]};
    border-radius: 8.57px;
    margin-left: 8px;
  }
  &.nextButton {
    width: 217px;
    height: 56px;
    background-color : ${Common.colors.primary[80]};
    color : ${Common.colors.neutral[0]};
    border : none;
    border-radius: 12px;
    margin-top : ${Common.space.xl};
  }
  &.previousButton {
    width: 217px;
    height: 56px;
    border : 1px solid ${Common.colors.primary[80]};
    background-color : ${Common.colors.neutral[0]};
    color : ${Common.colors.primary[80]};
    border-radius: 12px;
    margin-top: ${Common.space.xl};
    margin-right: 31px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${Common.space.xl};

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: ${Common.space.s};
    margin-bottom: ${Common.space.s};
  }
`;

const ActiveButton = styled.button<ActiveButtonProps>`
  height: 37px;
  border-radius: 12px;
  border: 1px solid ${Common.colors.neutral[20]};
  color: ${Common.colors.neutral[50]};
  font-size: ${Common.font.size.sm};
  font-weight: ${Common.font.weight.regular};

  &.active {
    border-color: ${Common.colors.primary[100]};
    color: ${Common.colors.neutral[100]};
    background-color: ${Common.colors.primary[10]};
  }
  .icon-add {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-left: 2.5px;
    margin-bottom: 2px;
    display: ${props => (props.isActive ? 'none' : 'inline-block')};
  }

  .icon-check {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-left: 2.5px;
    margin-bottom: 2px;
    color : ${Common.colors.primary[100]};
    display: ${props => (props.isActive ? 'inline-block' : 'none')};
  }
`;

const InterestText = styled.div`
  margin-bottom: ${Common.space.lg};
  
  .fieldText {
    font-size : ${Common.font.size.md};
    font-weight: ${Common.font.weight.semibold};
  }

  .choiceText {
    color: ${Common.colors.neutral[40]};;
    font-size: ${Common.font.size.xs};
    font-weight: ${Common.font.weight.regular};
    margin-left: ${Common.space.s};
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
`;

const CheckboxLabel = styled.label`
  display: flex;
  margin-right: 17px;
`;

const NicknameCheckText = styled.p<{ isNicknameAvailable: boolean }>`
  font-size: ${Common.font.size.xs};
  font-weight: ${Common.font.weight.regular};
  margin-top: ${Common.space.xs};
  margin-bottom: 42px;
  color: ${props => (props.isNicknameAvailable ?
   Common.colors.system.success : Common.colors.system.warning)};
`;

function SignupTwo() {

  const [nickname, setNickname] = useState<string>('');
  const [nicknamesArray, setNicknamesArray] = useState<string[]>([]);
  const [isNicknameAvailable, setIsNicknameAvailable] = useState<boolean>(true);
  const [nicknameTextVisible, setNicknameTextVisible] = useState<boolean>(false);
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);
  const [isNicknameValidated, setIsNicknameValidated] = useState<boolean>(false);
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(false);

  const storedNicknames = JSON.parse(localStorage.getItem('nicknames')!) || [];

  const navigate = useNavigate();

  const interestAreas = [
    ['UI/UX', 'WEB', '그래픽', '제품', '광고', '시각'],
    ['일러스트레이션', '캐릭터', '공간', '패션', '3D'],
    ['영상/모션그래픽', '편집', '브랜딩']
  ];

  const handleButtonClick = (buttonName: string) => {
    if (selectedButtons.includes(buttonName)) {
      const updatedButtons = selectedButtons.filter(btn => btn !== buttonName);
      setSelectedButtons(updatedButtons);
    } else if (selectedButtons.length < 5) {
      setSelectedButtons([...selectedButtons, buttonName]);
    }
  };

  const handleNicknameSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (nickname) {
      const isExistingNickname = storedNicknames.includes(nickname);
      if (isExistingNickname) {
        setIsNicknameAvailable(false);
        setIsNextButtonEnabled(false);
      } else {
        const updatedNicknames = [...storedNicknames, nickname];
        setNicknamesArray(updatedNicknames);
        localStorage.setItem('nicknames', JSON.stringify(updatedNicknames));
        setIsNicknameAvailable(true);
        setIsNicknameValidated(true);
        setIsNextButtonEnabled(true);
      }
      setNicknameTextVisible(true);
    } else {
      alert('닉네임을 입력해주세요.');
    }
  };

  const handleNextButtonClick = async () => {
    const userDataString = localStorage.getItem('userData');
    if (!userDataString) {
      console.error();
      return;
    }
  
    const userData = JSON.parse(userDataString);
    const { name, email, password } = userData;

    if (storedNicknames.includes(nickname)) {
      alert('이미 사용 중인 닉네임입니다.');
      return;
    }
  
    try {
      const auth = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      await updateProfile(userCredential.user, {
        displayName: name
      });

      navigate("/signupSuccess");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Logo>
        <img src="/auth/logo.svg" alt="로고이미지" />
        <h4>회원가입 하고 모든 레퍼런스를 모아보세요.</h4>
      </Logo>
      <SignUpForm>
        <p className="nicknameText">닉네임</p>
        <NickNameContainer showText={!!(nickname && nicknameTextVisible)}>
          <Input 
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => {setNickname(e.target.value)}}
            isNicknameAvailable={nickname ? isNicknameAvailable : null}
            isNicknameValidated={isNicknameValidated}
          />
          <Button 
            className="overlapCheck"
            type="submit"
            onClick={handleNicknameSave}>
            확인
          </Button>
        </NickNameContainer >
        {nickname && nicknameTextVisible && (
          <NicknameCheckText isNicknameAvailable={isNicknameAvailable}>
            {isNicknameAvailable === true
              ? '사용할 수 있는 닉네임입니다.'
              : isNicknameAvailable === false
              ? '중복된 닉네임이 존재합니다.'
              : null}
          </NicknameCheckText>
        )}
        <InterestText>
          <span className="fieldText">관심분야</span>
          <span className="choiceText">최대 5개까지 선택 가능</span>
        </InterestText>

        <ButtonContainer>
          {interestAreas.map((interestGroup, index) => (
            <div key={index}>
              {interestGroup.map(interest => (
              <ActiveButton
                key={interest}
                type="button"
                onClick={() => handleButtonClick(interest)}
                className={selectedButtons.includes(interest) ? 'active' : ''}
                isActive={selectedButtons.includes(interest)}
              >
                {interest}{' '}
                {selectedButtons.includes(interest) ? (
                  <CheckIcon className="icon-check" />
                ) : (
                  <AddIcon className="icon-add" />
                )}
              </ActiveButton>
              ))}
            </div>
          ))}
        </ButtonContainer>

          <p className="checkBoxText">제안 허용</p>
          <CheckboxContainer>
            <CheckboxLabel>
              <input type="checkbox" /> 채용 제안
            </CheckboxLabel>
            <CheckboxLabel>
              <input type="checkbox" /> 의견 제안
            </CheckboxLabel>
            <CheckboxLabel>
              <input type="checkbox" /> 프로젝트 제안
            </CheckboxLabel>
          </CheckboxContainer>

          <Button 
            onClick={() => {navigate("/signup");}}
            className="previousButton" 
            type="submit">
              이전
          </Button>
          <Button 
            onClick={handleNextButtonClick}
            className="nextButton" 
            type="button">
            다음
          </Button>
        
      </SignUpForm>

    </Container>
  );
}

export default SignupTwo;


