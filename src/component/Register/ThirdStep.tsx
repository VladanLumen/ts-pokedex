import React from "react";
import { UserInfo } from "./Register";

type ThirdStepType = {
  onChange: (field: string, value: string | boolean) => void;
  userInfo: UserInfo;
  onClick?: () => void;
};

const ThirdStep: React.FC<ThirdStepType> = ({
  onChange,
  userInfo,
  onClick,
}) => {
  return (
    <div className="third-step">
      <input type='checkbox'
          checked={userInfo.terms} 
          onChange={() =>onChange('terms', !userInfo.terms )}
          />
      <label> Accept terms of service</label>
      <p>
      <button disabled={!userInfo.terms} onClick={onClick}>Finish</button>
      </p>
    </div>
  );
};

export default ThirdStep;
