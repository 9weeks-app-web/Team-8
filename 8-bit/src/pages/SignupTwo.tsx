import styled from "@emotion/styled";

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

const Input = styled.input`
  width : 400px;
  height: 40px;
  border-radius : 7px;
  border : 1px solid #ccc;
`;

const SignUpForm = styled.form`
  padding : 20px;
  background : white;

`;

function SignupTwo() {
  return (
    <Container>
      <Logo>
        <img src="/logo.svg" alt="로고이미지" />
        <h4>회원가입 하고 모든 레퍼런스를 모아보세요.</h4>
      </Logo>
      <SignUpForm>
        <p>닉네임</p>
        <Input 
          type="text"
          placeholder="닉네임" 
        />
        <p>관심분야</p>
        ddd


        <p>제안 허용</p>
      </SignUpForm>

    </Container>
  );
}

export default SignupTwo;