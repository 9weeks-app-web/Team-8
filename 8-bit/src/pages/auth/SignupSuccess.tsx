import styled from "@emotion/styled";
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
  margin-top : 3%;
  margin-bottom : 5%;

  img {
    width : 187px;
    height : 49px;
    margin-bottom : 5%;
  }
`;

const Button = styled.button`
  background-color: #337AFF;
  color: #FFFFFF;
  border: none;
  border-radius : 7px;
  width: 217px;
  height: 56px;
  margin-top: 50px;
`;

const H1 = styled.h1`
  margin-bottom: 50px;
`;

function SignupSuccess() {

  const navigate = useNavigate();
  return (
    <Container>
      <Logo>
        <img src="/logo.svg" alt="로고이미지" />
      </Logo>

      <H1>회원가입 완료</H1>
      <p>ㅇㅇㅇ님, 환영합니다:)</p>
      <p>이제 다양한 레퍼런스를 모아볼수 있어요!</p>

      <Button onClick = {() => {
        navigate("/");
      }}type="submit">시작하기</Button>
    </Container>
  );
}

export default SignupSuccess;