import { useState } from "react";
import StepWizard from "react-step-wizard";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

export type UserInfo = {
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  terms: boolean;
};

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    terms: false,
  });

  const onChange = (field: string, value: string | boolean) => {
    setUserInfo((prevState) => {
      return { ...prevState, [field]: value };
    });
  };

  const nextStep = () => {};
  const register = () => {
    localStorage.setItem("user", JSON.stringify(userInfo));
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    window.location.href = "/";
  };

  return (
    <div>
      <StepWizard>
        <FirstStep
          onChange={onChange}
          userInfo={userInfo}
          nextStep={nextStep}
        />
        <SecondStep
          onChange={onChange}
          userInfo={userInfo}
          nextStep={nextStep}
        />
        <ThirdStep
          onChange={onChange}
          userInfo={userInfo}
          onClick={() => register()}
        />
      </StepWizard>
    </div>
  );
};

export default Register;
