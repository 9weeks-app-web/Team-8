  import styled from "@emotion/styled";
  import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
  import { useState } from "react";
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

  const Button = styled.button`
    width: 217px;
    height: 56px;
    border: none;
    background-color: '#337AFF';
    color: white;
    border-radius: 10px;
    cursor: 'pointer';
    margin: auto;
    transition: background-color 0.3s;

    &:hover {
      background-color: '#0059FF';
    }
`;

  const SnsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap : 25px;
    
    img {
      witdh : 64px;
      height : 64px;
    }
  `;

  function SignIn() {

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
    const signin = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const auth = getAuth();

      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
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
          <p>비밀번호 입력</p>
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
            <Button type="submit">로그인</Button>
          </ButtonContainer>
        </LoginForm>

        <p>SNS 계정으로 로그인</p>

        <SnsContainer>
          <img src="/kakaosns.svg" alt="카카오로그인" />
          <img src="/naversns.svg" alt="네이버로그인" />
          <img src="/googlesns.svg" alt="구글로그인" />
          <img src="/applesns.svg" alt="애플로그인" />
        </SnsContainer>

        <span>회원가입하고 모든 레퍼런스를 모아보세요. <a href="/signup">회원가입</a></span>

        <img src="/loginfooterimg.svg" alt="로그인하단이미지" />

      </Container>
    );
  }

  export default SignIn;
