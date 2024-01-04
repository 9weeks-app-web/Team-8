import styled from "@emotion/styled";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`;

const Logo = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  margin-top : 2%;

  img {
    width : 187px;
    height : 49px;
    margin-bottom : 20%;
  }
`;

const LoginForm = styled.form`
  padding : 20px;
  background : white;
  width : 400px;
  .passwordinput {
    margin-top: 5%;
  }
`;

const Input = styled.input`
  display : block;
  width : 100%;
  padding : 10px;
  margin-bottom : 10px;
  border-radius : 4px;
  border : 1px solid #ccc;
`;

const SaveId = styled.label`
  display : flex;
  align-items : center;
  margin-top : 5%;
  margin-bottom : 5%;
`;

const SerchIdPw = styled.div`
  margin-left : 18%;

  a {
    text-decoration : none;
    color : black;
  }
`;

const ButtonContainer = styled.div`
  display : flex;
  justify-content : center;
`;

// 프롭스로 받아서 수정해야 함
const Button = styled.button`
  width : 217px;
  height : 56px;
  border : none;
  background-color : #CCCCCC;
  color : white;
  border-radius : 10px;
  cursor : 'pointer';
  margin : auto;

  &:hover {
    background-color : '#0059FF';
  }
`;

const SnsLine = styled.div`
  display : flex;
  align-items : center;
  width : 400px;

  hr {
    flex-grow : 1;
    border : 1px solid #808080;
    border-width : 0.5px;
    margin : 0 10px;
  }
`;

const SnsContainer = styled.div`
  display : flex;
  justify-content : space-between;
  gap : 25px;
  
  span {
    display : flex;
  }
  img {
    width : 64px;
    height : 64px;
    margin-top : 3%;
  }
`;

const UnderLogo = styled.div`
  margin : 2%;
  text-align : center;
  
  img {
    width : 728px;
    height : 90px;
    margin-top: 3%;
  }
  a {
    margin-left : 3%;
  }
`;

function SignIn() {

  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isInputSpace, setIsInputSpace] = useState<boolean>(false);

  useEffect(() => {
    setIsInputSpace(email.trim() !== '' && password.trim() !== '');
  }, [email, password]);
  
  const signin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      if (user) {
        const userName = user.displayName;
        localStorage.setItem('userName', userName || '');
      }
      navigate("/");
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Logo>
        <img src="/logo.svg" alt="로고이미지" />
        <h3>로그인</h3>
      </Logo>
      <LoginForm onSubmit={signin}>
        <p>이메일 입력</p>
        <Input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력하세요" 
        />
        <p className="passwordinput">비밀번호 입력</p>
        <Input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요" 
        />

        <SaveId>
          <input type="checkbox"/>
          <span>아이디 저장</span>
          <SerchIdPw>
          <span><a href="#">아이디찾기</a></span>
          <span> | </span>
          <span><a href="#">비밀번호 찾기</a></span>
          </SerchIdPw>
        </SaveId>

        <ButtonContainer>
          <Button 
            type="submit" 
            style={{ backgroundColor: isInputSpace ? '#337AFF' : '#CCCCCC' }}>
            로그인
          </Button>
        </ButtonContainer>
      </LoginForm>

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

    </Container>
  );
}

export default SignIn;
