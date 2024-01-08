import styled from "@emotion/styled";
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

const SignUpForm = styled.div`
  background : ${Common.colors.neutral[0]};
  margin-left: ${Common.space.xxl};

  &.inputSeleteWrapper {
    display: flex;
  }
  p {
    font-size: ${Common.font.size.md};
    font-weight: ${Common.font.weight.bold};
    margin-bottom: ${Common.space.xs};
  }
`;

const EmailContainer = styled.div`
  display : flex;

  input {
    background-color: #FBFBFB;
    border : 1px solid ${Common.colors.neutral[30]};
    border-radius: 8px;
    width: 156px;
    height: 40px;
  }
  select {
    width: 152px;
    height: 40px;
    border : 1px solid ${Common.colors.neutral[20]};
    border-radius: 12px;
  }
  .newselect {
    width: 112px;
    height: 40px;
    margin-left : ${Common.space.xs};
  }
  span {
    margin : 10px ${Common.space.xs};
  }
`;

const PhoneRequest = styled.div`
  display: flex;
  align-items: flex-start;

  select {
    width: 78px;
    height: 40px;
    border: 1px solid ${Common.colors.neutral[20]};
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
`;

const Input = styled.input`
  width : 400px;
  height: 40px;
  border-radius : 8px;
  border : 1px solid ${Common.colors.neutral[20]};
  margin-bottom : ${Common.space.lg};

  &:focus {
    outline: none;
    border : 1px solid #0059FF;
  }
`;

const PasswordInput = styled.input`
  width : 400px;
  height: 40px;
  border-radius : 8px;
  border : 1px solid ${Common.colors.neutral[20]};
  margin-bottom : 11px;

  &:focus {
    outline: none;
    border: 1px solid ${Common.colors.primary[100]};
  }
`;

const ConfirmPasswordInput = styled.input<{passwordMatch?: boolean; confirmPassword?: string;}>`
  width: 400px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${Common.colors.neutral[20]};
  margin-bottom: ${({ confirmPassword }) =>
    confirmPassword === '' ? `${Common.space.lg}` : '11px'};

  &:focus {
    outline: none;
    border: 1px solid ${Common.colors.primary[100]};
  }

  &:not(:placeholder-shown) {
    border: 1px solid
      ${({ passwordMatch, confirmPassword }) =>
        confirmPassword === ''
          ? `${Common.colors.neutral[20]}`
          : passwordMatch === undefined
          ? `${Common.colors.neutral[20]}`
          : passwordMatch
          ? `${Common.colors.system.success}`
          : `${Common.colors.system.warning}`};
  }
`;

const PasswordCondition = styled.span`
  font-size: ${Common.font.size.xs};
  font-weight: ${Common.font.weight.regular};
  display: block;
  margin-bottom : 11px;
`;

const PasswordMatchText = styled.span<{ match?: boolean }>`
  font-size: ${Common.font.size.xs};
  font-weight: ${Common.font.weight.regular};
  display: block;
  margin-bottom: 21px;
  color: ${({ match }) => (match ? 
    Common.colors.system.success : Common.colors.system.warning)};
`;

const AuthenticationInput = styled.input<{ match?: boolean; isEmpty?: boolean; showPasswordMatchText?: boolean }>`
  width: 400px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${({ match, isEmpty, showPasswordMatchText }) =>
    isEmpty ? Common.colors.neutral[20] :
    match ? Common.colors.system.success :
    showPasswordMatchText ? Common.colors.system.warning : Common.colors.neutral[20]};
  margin-bottom: ${({ showPasswordMatchText }) => 
    showPasswordMatchText ? '11px' : Common.space.lg};

  &:focus {
    outline: none;
    border: 1px solid ${Common.colors.primary[100]};
  }
`;

const AuthenticationMatchText = styled.span<{ match?: boolean; show?: boolean }>`
  font-size: ${Common.font.size.xs};
  font-weight: ${Common.font.weight.regular};
  display: ${({ show }) => (show ? 'block' : 'none')};
  margin-bottom: 22px;
  color: ${({ match }) => (match ? 
    Common.colors.system.success : Common.colors.system.warning)};
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
    color : ${Common.colors.neutral[0]};
    border-radius: 12px;
    border: none;
    width: 217px;
    height: 56px;
  }
  //이전 버튼
  &.previousButton {
    background-color: ${Common.colors.neutral[0]};
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
    background-color: ${Common.colors.neutral[0]};
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
  const [emailInput, setEmailInput] = useState<string>('');
  const [emailDomain, setEmailDomain] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [authenticationNumber, setAuthenticationNumber] = useState<string>('');

  const [showCustomEmailInput, setShowCustomEmailInput] = useState<boolean>(false);
  const [showPasswordMatchText, setShowPasswordMatchText] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeUniqueInfo, setAgreeUniqueInfo] = useState(false);
  const [agreePhoneTerms, setAgreePhoneTerms] = useState(false);

  
  const navigate = useNavigate();

  const handleSingleChecked = (
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>,
    allCheckedState: React.Dispatch<React.SetStateAction<boolean>>,
    allCheckedValue: boolean
  ) => {
    setState(!state);
    if (allCheckedValue) {
      allCheckedState(false);
    }
  };

  const handleAllChecked = () => {
    const nextState = !allChecked;
    setAllChecked(nextState);
    setAgreePrivacy(nextState);
    setAgreeUniqueInfo(nextState);
    setAgreePhoneTerms(nextState);
  };

  useEffect(() => {
    if (agreePrivacy && agreeUniqueInfo && agreePhoneTerms) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [agreePrivacy, agreeUniqueInfo, agreePhoneTerms]);

  const passwordMatchText = (
    <PasswordMatchText match={password === confirmPassword}>
      {password === confirmPassword ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.'}
    </PasswordMatchText>
  );

  const authenticationMatchText = (
    <AuthenticationMatchText match={authenticationNumber === '123456'} show={authenticationNumber !== ''}>
      {authenticationNumber === '123456' ? '인증번호가 일치합니다.' : '인증번호가 일치하지 않습니다.'}
    </AuthenticationMatchText>
  );

  const handleEmailOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectOption = e.target.value;

    if (selectOption === 'type') {
      setShowCustomEmailInput(true);
    } else {
      setShowCustomEmailInput(false);
      setEmail(`${emailInput}@${selectOption}`);
    }
  }

  useEffect(() => {
    if (showCustomEmailInput) {
      setEmail(`${emailInput}@${emailDomain}`);
    }
  }, [emailDomain]);

  const handleNextButtonClick = () => {

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,32}$/;

    if (!name || !email || !password || !confirmPassword || !authenticationNumber) {
      alert('모든 입력란을 채워주세요.');
      return;
    }
    const isPasswordValid = passwordRegex.test(password);
    if (!isPasswordValid) {
      alert('비밀번호는 영문+숫자+특수문자 조합 8~32자여야 합니다.');
      return;
    }
    if (!agreePrivacy || !agreeUniqueInfo || !agreePhoneTerms) {
      alert('본인인증 약관에 동의해주세요.');
      return;
    }

    const userData = {
      name: name,
      email: email,
      password: password
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    navigate("/profile");
  };

  return (
    <Container>
      <Logo>
        <img src="/auth/logo.svg" alt="로고이미지" />
        <h4>회원가입 하고 모든 레퍼런스를 모아보세요.</h4>
      </Logo>
      <SignUpForm>
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
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="비밀번호 확인"
          confirmPassword={confirmPassword}
          passwordMatch={confirmPassword === '' ? undefined : password === confirmPassword}
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
          alert("인증번호 6자리 발송했습니다.")
        }}>인증 요청</Button>
        </PhoneRequest>

        <p>인증번호 입력</p>
        <CertifiedCheck>
          <AuthenticationInput 
            type="text" 
            placeholder="인증번호"
            onChange={(e) => setAuthenticationNumber(e.target.value)}
            match={authenticationNumber === '123456'}
            isEmpty={authenticationNumber === ''}
            showPasswordMatchText={showPasswordMatchText}
          />
          <Button
            className="certifiedCheckBtn" 
            type="submit" 
            onClick={(e) => {
              e.preventDefault();
              authenticationNumber === "123456" ? alert("인증성공") : alert("인증실패");
              setShowPasswordMatchText(true);
          }}>인증 확인</Button>
        </CertifiedCheck>
        {showPasswordMatchText && authenticationMatchText}

        <CheckboxLabel>
          <input           
            type="checkbox"
            checked={allChecked}
            onChange={handleAllChecked}
          />
          본인인증 약관 전체동의(필수)
        </CheckboxLabel>
        <CheckboxLabel>
        <input
          type="checkbox"
          checked={agreePrivacy}
          onChange={() =>
            handleSingleChecked(agreePrivacy, setAgreePrivacy, setAllChecked, allChecked)
          }
        />
        개인정보 수집이용 동의
        </CheckboxLabel>
        <CheckboxLabel>
        <input
          type="checkbox"
          checked={agreeUniqueInfo}
          onChange={() =>
            handleSingleChecked(agreeUniqueInfo, setAgreeUniqueInfo, setAllChecked, allChecked)
          }
        />
        고유식별 정보처리 동의
        </CheckboxLabel>
        <CheckboxLabel>
          <div className="phoneAgree">
            <input
              type="checkbox"
              checked={agreePhoneTerms}
              onChange={() =>
                handleSingleChecked(agreePhoneTerms, setAgreePhoneTerms, setAllChecked, allChecked)
              }
            />
            통신사 이용약관 동의
          </div>
        </CheckboxLabel>

        <ButtonContainer>
          <Button 
            onClick={() => {navigate("/signin");}}
            className="previousButton" 
            type="submit">이전</Button>
          <Button 
            onClick={handleNextButtonClick}
            className="nextButton" 
            type="submit">다음</Button>
        </ButtonContainer>
      </SignUpForm>
    </Container>
  );
}

export default SignUp;
