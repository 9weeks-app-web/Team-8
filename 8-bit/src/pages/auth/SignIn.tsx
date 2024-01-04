import styled from "@emotion/styled";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Common } from "../../styles/common";

type CustomButtonProps = {
  isInputSpace: boolean;
};

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
    margin-bottom : 18px;
  }
  img {
    width : 187px;
    height : 49px;
    margin : 34px 0 39px 0;
  }
`;

const LoginForm = styled.form`
  display : flex;
  flex-direction : column;
  align-items : center;
  background : white;
  width : 496px;

  .passwordinput {
    margin-bottom : ${Common.space.lg};
  }
  p {
    font-size : ${Common.font.size.sm};
  }
`;

const Input = styled.input`
  width : 400px;
  height : 40px;
  border-radius : 8px;
  border : 1px solid #ccc;
`;

const UserLinks = styled.div`
  display : flex;
  justify-content : space-between;
  width : 400px;
  height : 24px;
`;

const SaveId = styled.label`
  font-size : ${Common.font.size.sm};
  width : 96px;
  height : 24px;
  align-items : center;
`;

const SerchIdPw = styled.div`
  display : flex;
  justify-content : flex-end;
  width : 193px;
  height : 24px;
  align-items : center;

  a {
    text-decoration : none;
    color : black;
    font-size : ${Common.font.size.md};
  }
`;

const Button = styled.button<CustomButtonProps>`
  width : 217px;
  height : 56px;
  border : none;
  background-color: ${({ isInputSpace }) => (isInputSpace ? '#337AFF' : '#CCCCCC')};
  color : white;
  border-radius : 10px;
  cursor : 'pointer';
  margin-top: 42px;

  &:hover {
    background-color: ${({ isInputSpace }) => (isInputSpace ? '#0059FF' : '#CCCCCC')};
  }
  &:active {
    background-color: ${({ isInputSpace }) => (isInputSpace ? '#0043C0' : '#CCCCCC')};
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
  margin-bottom : ${Common.space.lg};
`;

const InputLabel = styled.p`
  font-size : ${Common.font.size.sm};
  margin-bottom: ${Common.space.xs};
`;

function SignIn() {

  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isInputSpace, setIsInputSpace] = useState<boolean>(false); // 인풋 공란 확인
  const [rememberId, setRememberId] = useState<boolean>(false); // 아이디 저장 여부

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
        <img src="/logo.svg" alt="로고이미지" />
        <h3>로그인</h3>
      </Logo>
      <LoginForm onSubmit={signin}>
        <InputContainer className="emailInput">
          <InputLabel>이메일 입력</InputLabel>
          <Input 
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
            <input 
              type="checkbox"
              checked={rememberId}
              onChange={handleRememberEmailChange}
            />
            <span>아이디 저장</span>
          </SaveId>
          <SerchIdPw>
            <span>
              <a href="/findId">아이디찾기</a>
              |
              <a href="/findPassword">비밀번호 찾기</a>
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
          <img src="/kakaosns.svg" alt="카카오로그인" />
          <img src="/naversns.svg" alt="네이버로그인" />
          <img src="/googlesns.svg" alt="구글로그인" />
          <img src="/applesns.svg" alt="애플로그인" />
        </SnsContainer>

        <UnderLogo>
          <p>회원가입하고 모든 레퍼런스를 모아보세요. <a href="/signup">회원가입</a></p>
          <img src="/loginfooterimg.svg" alt="로그인하단이미지" />
        </UnderLogo>
      </LoginForm>
    </Container>
  );
}

export default SignIn;
