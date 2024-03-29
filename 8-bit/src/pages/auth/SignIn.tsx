import styled from "@emotion/styled";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Common } from "../../styles/common";

type CustomButtonProps = {
  isInputSpace: boolean;
};

const StyledCheckbox = styled(Checkbox)`
  width: 15px;
  height: 10px;
  margin-left: 12px;
  margin-right: ${Common.space.s};
`;

const CustomFormControlLabel = styled(FormControlLabel)`
  .MuiFormControlLabel-label {
    font-size: 14px;
  }
`;

const Container = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`;

const Logo = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;

  h3 {
    font-size : ${Common.font.size.xxxl};
    font-weight: ${Common.font.weight.semibold};
    margin-top: ${Common.space.s};
    margin-bottom: 18px;
  }
  img {
    width : 187px;
    height : 49px;
    margin-top : 31px;
  }
`;

const LoginForm = styled.form`
  display : flex;
  flex-direction : column;
  align-items : center;
  background : ${Common.colors.neutral[0]};
  width : 496px;

  .passwordinput {
    margin-bottom : 18px;
  }
  p {
    font-size : ${Common.font.size.sm};
    font-weight: ${Common.font.weight.medium};
  }
`;

const Input = styled.input`
  width : 400px;
  height : 40px;
  border-radius : 8px;
  background-color: #FBFBFB;
  border : 1px solid ${Common.colors.neutral[30]};

  &:focus {
    outline: none;
    border: 1px solid ${Common.colors.primary[100]};
  }
`;

const UserLinks = styled.div`
  display : flex;
  justify-content : space-between;
  width : 400px;
  height : 24px;
  margin-top: ${Common.space.s};
`;

const SaveId = styled.label`
  font-size : ${Common.font.size.sm};
  display: flex;
  flex-direction: row;
  align-items : center;
`;

const SerchIdPw = styled.div`
  display : flex;
  justify-content : center;
  align-items: center;
  width : 193px;
  height : 24px;

  a {
    text-decoration : none;
    color : ${Common.colors.neutral[100]};
    font-size : ${Common.font.size.md};

    &::after {
      content: "|";
      margin: 0 12px;
    }

    &:last-child::after {
      content: "";
      margin: 0;
    }
  }
`;

const Button = styled.button<CustomButtonProps>`
  width : 217px;
  height : 56px;
  border : none;
  background-color: ${({ isInputSpace }) => (isInputSpace ? 
    `${Common.colors.primary[80]}` : `${Common.colors.neutral[20]}`)};
  color : ${Common.colors.neutral[0]};; 
  
  border-radius : 10px;
  cursor : 'pointer';
  margin-top: 42px;

  &:hover {
    background-color: ${({ isInputSpace }) => (isInputSpace ? 
      `${Common.colors.primary[100]}` : `${Common.colors.neutral[20]}`)};
  }
  &:active {
    background-color: ${({ isInputSpace }) => (isInputSpace ? 
      `${Common.colors.primary[150]}` : `${Common.colors.neutral[20]}`)};
  }
`;

const SnsLine = styled.div`
  display : flex;
  align-items : center;
  width : 448px;
  height: 24px;
  margin : 42px 0 32px 0;

  hr {
    flex-grow : 1;
    margin : 0 16px;
    border: none;
    border-top: 1px solid rgba(128, 128, 128, 1);
  }
  span {
    color: rgba(128, 128, 128, 1);
  }
`;

const SnsContainer = styled.div`
  display : flex;
  justify-content : space-between;
  gap : ${Common.space.lg};
  margin-bottom : 42px;

  span {
    display : flex;
  }
  img {
    width : 64px;
    height : 64px;
  }
`;

const UnderLogo = styled.div`
  text-align : center;
  margin-bottom : 57px;

  p{
    margin-bottom : 45px;
  }
  img {
    width : 728px;
    height : 90px;
  }
  a {
    margin-left : ${Common.space.md};
  }
`;

const InputContainer = styled.div`
  display : flex;
  flex-direction : column;
  align-items : flex-start;

  .emailInput {
    margin-bottom: ${Common.space.lg};
  }
`;

const InputLabel = styled.p`
  font-size : ${Common.font.size.sm};
  margin-bottom: ${Common.space.xs};
`;

function SignIn() {

  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isInputSpace, setIsInputSpace] = useState<boolean>(false);
  const [rememberId, setRememberId] = useState<boolean>(false);

  useEffect(() => {
    setIsInputSpace(email.trim() !== '' && password.trim() !== '');
  }, [email, password]);

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberId');
    if (savedEmail && !rememberId) {
      localStorage.removeItem('rememberId');
    }
  }, [rememberId]);
  
  const signin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      if (user) {
        const userInfo = {
          email: user.email,
          username: user.displayName,
        };

        if (rememberId) {
          localStorage.setItem('rememberId', email);
        } else {
          localStorage.removeItem('rememberId');
          setPassword('');
        }
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
      }
      navigate("/");
    } catch (error) {
      if(!rememberId){
        setEmail('');
        setPassword('');
      }
      console.log(error);
      setPassword('');
      alert("로그인 실패");
    }
  }

  const handleRememberEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberId(e.target.checked);
  };

  return (
    <Container>
      <Logo>
        <img src="/auth/logo.svg" alt="로고이미지" />
        <h3>로그인</h3>
      </Logo>
      <LoginForm onSubmit={signin}>
        <InputContainer>
          <InputLabel>이메일 입력</InputLabel>
          <Input
            className="emailInput"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요" 
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>비밀번호 입력</InputLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요" 
          />
        </InputContainer>

        <UserLinks>
          <SaveId>
            <CustomFormControlLabel
              control={
                <StyledCheckbox
                  checked={rememberId}
                  onChange={handleRememberEmailChange}
                />
              }
              label="아이디 저장"
            />
          </SaveId>
          <SerchIdPw>
            <span>
              <a href="#" onClick={() => {
                alert("준비중입니다.")
              }}>아이디찾기</a>
              <a href="#" onClick={() => {
                alert("준비중입니다.")
              }}>비밀번호 찾기</a>
            </span>
          </SerchIdPw>
        </UserLinks>
        <Button 
          type="submit"
          isInputSpace={isInputSpace}>
          로그인
        </Button>

        <SnsLine>
          <hr /><span>SNS 계정으로 로그인</span><hr />
        </SnsLine>

        <SnsContainer>
          <img src="/auth/kakaosns.svg" alt="카카오로그인" />
          <img src="/auth/naversns.svg" alt="네이버로그인" />
          <img src="/auth/googlesns.svg" alt="구글로그인" />
          <img src="/auth/applesns.svg" alt="애플로그인" />
        </SnsContainer>

        <UnderLogo>
          <p>회원가입하고 모든 레퍼런스를 모아보세요. <a href="/signup">회원가입</a></p>
          <img src="/auth/loginfooterimg.svg" alt="로그인하단이미지" />
        </UnderLogo>
      </LoginForm>
    </Container>
  );
}

export default SignIn;
