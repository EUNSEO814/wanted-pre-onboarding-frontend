import { useState } from "react";

import Button from "../components/Button";
import Input from "../components/Input";
import FormCard from "../components/FormCard";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage("이메일의 형식이 올바르지 않습니다!");
      setIsEmail(false);
    } else {
      setEmailMessage("사용 가능한 이메일 입니다.");
      setIsEmail(true);
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
  };
  return (
    <>
      <h1>회원가입</h1>
      <FormCard>
        <label htmlFor="email">email</label>
        <Input
          data-testid="email-input"
          id="email"
          placeholder="example@example.com"
          value={email}
          onChange={onChangeEmail}
        />
        <p className="message">{emailMessage}</p>
        <label htmlFor="password">password</label>
        <Input
          data-testid="password-input"
          value={password}
          onChange={onChangePassword}
        />
        <p className="message">{passwordMessage}</p>
        <Button data-testid="signup-button" text="회원가입" type="submit" />
      </FormCard>
    </>
  );
};

export default SignUp;
