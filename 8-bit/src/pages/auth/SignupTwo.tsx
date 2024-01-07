import styled from "@emotion/styled";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { Common } from "../../styles/common";
import { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';

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
    margin-bottom: 16px;
  }
`;

const Input = styled.input<{ isNicknameAvailable: boolean | null }>`
  width: 400px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${props =>
    props.isNicknameAvailable === true
      ? '#00FF00'
      : props.isNicknameAvailable === false
      ? '#FF0000'
      : '#808080'};
`;

const SignUpForm = styled.form`
  background : #FFFFFF;
  margin-bottom: 143px;
  
  .nicknameText {
    font-size: ${Common.font.size.md};
    font-weight: ${Common.font.weight.semibold};
    margin-bottom: 8px;
  }
  .checkBoxText {
    font-size: ${Common.font.size.md};
    font-weight: ${Common.font.weight.semibold};
    margin-bottom: 22px;
  }
`;

const Button = styled.button`

  &.overlapCheck {
    background-color: #FFFFFF;
    width: 80px;
    height: 40px;
    border : 1px solid #337AFF;
    color : #337AFF;
    border-radius: 8.57px;
    margin-left: 8px;
  }
  &.nextButton {
    width: 217px;
    height: 56px;
    background-color : #337AFF;
    color : #FFFFFF;
    border : none;
    border-radius: 12px;
    margin-top : 40px;
  }
  &.previousButton {
    width: 217px;
    height: 56px;
    border : 1px solid #337AFF;
    background-color : #FFFFFF;
    color : #337AFF;
    border-radius: 12px;
    margin-top: 40px;
    margin-right: 31px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 16px;
  }
`;

const ActiveButton = styled.button<ActiveButtonProps>`
  height: 37px;
  border-radius: 12px;
  border: 1px solid #cccccc;
  color: #808080;
  font-size: ${Common.font.size.sm};
  font-weight: ${Common.font.weight.regular};

  &.active {
    border-color: #0059ff;
    color: #030303;
    background-color: #e5eeff;
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
    color : #0059FF;
    display: ${props => (props.isActive ? 'inline-block' : 'none')};
  }
`;

const InterestText = styled.div`
  margin-bottom: 18px;
  
  .fieldText {
    font-size : ${Common.font.size.md};
    font-weight: ${Common.font.weight.semibold};
  }

  .choiceText {
    color: #999999;
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
  margin-top: 8px;
  margin-bottom: 42px;
  color: ${props => (props.isNicknameAvailable ? 'green' : 'red')};
`;

function SignupTwo() {

  const [nickname, setNickname] = useState<string>('');
  const [nicknamesArray, setNicknamesArray] = useState<string[]>([]);
  const [isNicknameAvailable, setIsNicknameAvailable] = useState<boolean>(true);
  const [nicknameTextVisible, setNicknameTextVisible] = useState<boolean>(false);
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);

  const storedNicknames = JSON.parse(localStorage.getItem('nicknames')!) || [];

  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('');

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
      } else {
        const updatedNicknames = [...storedNicknames, nickname];
        setNicknamesArray(updatedNicknames);
        localStorage.setItem('nicknames', JSON.stringify(updatedNicknames));
        setIsNicknameAvailable(true);
      }
    }
    setNicknameTextVisible(true);
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
            onClick={() => {navigate("/signupSuccess");}}
            className="nextButton" 
            type="button">
            다음
          </Button>
        
      </SignUpForm>

    </Container>
  );
}

export default SignupTwo;


