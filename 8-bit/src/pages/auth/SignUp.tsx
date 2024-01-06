import styled from "@emotion/styled";
import app from '../../firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Common } from "../../styles/common";

const Container = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`;

const Logo = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  margin-top : 31px;

  img {
    width : 187px;
    height : 49px;
    margin-bottom : ${Common.space.s};
  }
  h4 {
    margin-bottom: 11px;
    font-size : ${Common.font.size.md};
  }
`;

const SignUpForm = styled.form`
  background : #FFFFFF;
  margin-left: 6%;

  &.inputSeleteWrapper {
    display: flex;
  }
  p {
    font-size: ${Common.font.size.md};
    font-weight: ${Common.font.weight.bold};
    margin-bottom: 8px;
  }
`;

const EmailContainer = styled.div`
  display : flex;

  input {
    background-color: #FBFBFB;
    border : 1px solid #B3B3B3;
    border-radius: 8px;
    width: 156px;
    height: 40px;
  }
  select {
    width: 152px;
    height: 40px;
    border : 1px solid #CCCCCC;
    border-radius: 12px;
  }
  .newselect {
    width: 112px;
    height: 40px;
    margin-left : 8px
  }
  span {
    margin : 10px 8px;
  }
`;

const PhoneRequest = styled.div`
  display: flex;
  align-items: flex-start;

  select {
    width: 78px;
    height: 40px;
    border: 1px solid #CCCCCC;
    border-radius: 12px;
    font-size: ${Common.font.size.sm};
    font-weight: ${Common.font.weight.medium};
    margin-right: ${Common.space.xs};
  }
  input {
    width: 314px;
  }
`;

const CertifiedCheck = styled.div`
  display: flex;
  margin-bottom: 16px;

  input {
    width: 400px;
  }
`;

const Input = styled.input`
  width : 400px;
  height: 40px;
  border-radius : 8px;
  border : 1px solid #CCCCCC;
  margin-bottom : ${Common.space.lg};
`;

const PasswordInput = styled.input`
  width : 400px;
  height: 40px;
  border-radius : 8px;
  border : 1px solid #CCCCCC;
  margin-bottom : 11px;
`;

const ConfirmPasswordInput = styled.input<{ passwordMatch?: boolean }>`
  width: 400px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${({ passwordMatch }) => {
    if (passwordMatch === undefined) return '#CCCCCC';
    return passwordMatch ? '#07A320' : '#FF0000';
  }};
  margin-bottom : ${({ passwordMatch }) => (passwordMatch ? '11px' : '32px')};
`;

const PasswordCondition = styled.span`
  font-size: ${Common.font.size.xs};
  font-weight: ${Common.font.weight.regular};
  display: block;
  margin-bottom : 11px;
`;

const PasswordMatchText = styled.span`
  font-size: ${Common.font.size.xs};
  font-weight: ${Common.font.weight.regular};
  display: block;
  margin-bottom : 21px;
  color: #07A320;
`;

const ButtonContainer = styled.div`
  display : flex;
  justify-content : space-between;
  margin-top: 39px;
`;

const Button = styled.button`
  //다음 버튼
  &.nextButton {
    background-color : ${Common.colors.primary[80]};
    color : #FFFFFF;
    border-radius: 12px;
    border: none;
    width: 217px;
    height: 56px;
  }
  //이전 버튼
  &.previousButton {
    background-color: #FFFFFF;
    border : 1px solid ${Common.colors.primary[80]};
    color : ${Common.colors.primary[80]};
    border-radius: 12px;
    width: 217px;
    height: 56px;
  }
  //인증 요청, 확인 버튼
  &.certifiedRequestBtn, &.certifiedCheckBtn {
    width: 80px;
    height: 40px;
    background-color: #FFFFFF;
    border : 1px solid ${Common.colors.primary[80]};
    color: ${Common.colors.primary[80]};
    border-radius: 8.57px;
    margin-left: ${Common.space.xs};
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  margin-bottom: 18.5px;
  font-size: ${Common.font.size.sm};
  font-weight: ${Common.font.weight.medium};
`;

function SignUp() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showCustomEmailInput, setShowCustomEmailInput] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>('');
  const [emailDomain, setEmailDomain] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [authenticationNumber, setAuthenticationNumber] = useState<string>('');

  const passwordMatchText = password === confirmPassword ? (
    <PasswordMatchText>
      비밀번호가 일치합니다.
    </PasswordMatchText>
  ) : null;
  
  const navigate = useNavigate();

  const signup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      if (userCredential.user) {
        await updateProfile(userCredential.user, { displayName: name });
        console.log(userCredential.user);
      }
    } catch (error) {
      console.error(error);
      console.log(email);
    }
  };
  
  useEffect(() => {
    if (showCustomEmailInput) {
      setEmail(`${emailInput}@${emailDomain}`);
    }
  }, [emailDomain]);

  const handleEmailOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectOption = e.target.value;

    if (selectOption === 'type') {
      setShowCustomEmailInput(true);
    } else {
      setShowCustomEmailInput(false);
      setEmail(`${emailInput}@${selectOption}`);
    }
  }

  return (
    <Container>
      <Logo>
        <img src="/logo.svg" alt="로고이미지" />
        <h4>회원가입 하고 모든 레퍼런스를 모아보세요.</h4>
      </Logo>
      <SignUpForm onSubmit={signup}>
        <p>이름</p>
        <Input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름" 
        />
        <p>이메일</p>
        <div className="inputSeleteWrapper">
          <EmailContainer>
            {showCustomEmailInput ? (
              <>
                <Input
                  type="text"
                  placeholder="이메일을 입력하세요"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
                <span>@</span> 
                <Input
                  type="text"
                  placeholder="직접 입력"
                  value={emailDomain}
                  onChange={(e) => setEmailDomain(e.target.value)}/>
                <select className="newselect" onChange={handleEmailOptionChange}>
                  <option value="type">직접 입력</option>
                  <option value="naver.com">naver.com</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="hanmail.net">hanmail.net</option>
                </select>
            </>
          ) : (
            <>
              <Input
                type="text"
                placeholder="이메일을 입력하세요"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
              <span>@</span>
              <select onChange={handleEmailOptionChange}>
                <option value="emailChoice">이메일 주소 선택</option>
                <option value="naver.com">naver.com</option>
                <option value="gmail.com">gmail.com</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="type">직접 입력</option>
              </select>
              </>
            )}
          </EmailContainer>
        </div>
        <p>비밀번호</p>
        <PasswordInput
          className="passwordInput"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
        <PasswordCondition>영문+숫자+특수문자 조합 8~32자</PasswordCondition>

        <p>비밀번호 확인</p>
        <ConfirmPasswordInput
          className="passwordCheckInput"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="비밀번호 확인"
          passwordMatch={confirmPassword !== '' ? password === confirmPassword : undefined}
        />
        {confirmPassword !== '' && passwordMatchText}
        <p>휴대폰 인증</p>
        <PhoneRequest>
          <select>
            <option value="skt">SKT</option>
            <option value="kt">KT</option>
            <option value="lgu+">LGU+</option>
            <option value="skt_thrifty">SKT 알뜰폰</option>
            <option value="kt_thrifty">KT 알뜰폰</option>
            <option value="lgu+_thrifty">LGU+ 알뜰폰</option>
          </select>
          <Input 
            type="text" 
            placeholder="휴대폰 번호" 
          />
        <Button className="certifiedRequestBtn"type="submit" onClick={() => {
          alert("인증번호 6자리를 입력하세요.")
        }}>인증 요청</Button>
        </PhoneRequest>

        <p>인증번호 입력</p>
        <CertifiedCheck>
          <Input 
            type="text" 
            placeholder="인증번호"
            onChange={(e) => setAuthenticationNumber(e.target.value)}
            />
          <Button 
            className="certifiedCheckBtn" 
            type="submit" 
            onClick={() => {
              authenticationNumber === "123456" ? alert("인증성공") : alert("인증실패");
          }}>인증 확인</Button>
        </CertifiedCheck>

        <CheckboxLabel>
          <input type="checkbox" /> 본인인증 약관 전체동의(필수)
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" /> 개인정보 수집이용 동의
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" /> 고유식별 정보처리 동의
        </CheckboxLabel>
        <CheckboxLabel>
          <div className="phoneAgree">
            <input type="checkbox" /> 통신사 이용약관 동의
          </div>
        </CheckboxLabel>

        <ButtonContainer>
          <Button 
            onClick={() => {navigate("/signin");}}
            className="previousButton" 
            type="submit">이전</Button>
          <Button 
            onClick={() => {navigate("/signupTwo");}}
            className="nextButton" 
            type="submit">다음</Button>
        </ButtonContainer>
        <Button style={{ marginTop: '20px' }} type="submit">회원가입 테스트 {/*테스트 버튼*/}</Button>
      </SignUpForm>
    </Container>
  );
}

export default SignUp;
