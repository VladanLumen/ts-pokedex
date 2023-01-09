import React from "react";
import {UserInfo} from './Register'

type FisrtStepType = {
  onChange:(field: string, value:string | boolean) => void;
  userInfo: UserInfo;
  nextStep?:() => void
}

const FirstStep:React.FC<FisrtStepType> = ({onChange, userInfo, nextStep}) => {
  
  return <div className='first-step'>  
  <p>
    <input type='text' 
    placeholder='Ime'
    value={userInfo.firstname}
    onChange={((e) => onChange('firstname', e.target.value))}
    />
  </p>
  <p>
    <input type='text' 
    placeholder='Prezime'
    value={userInfo.lastname}
    onChange={((e) => onChange('lastname', e.target.value))}
    />
  </p>
  <p>
    <input type='text' 
    placeholder='E-mail'
    value={userInfo.email}
    onChange={((e) => onChange('email', e.target.value))}
    />
  </p>
  <button disabled={!userInfo.firstname || !userInfo.lastname || !userInfo.email} onClick={nextStep}>Next Step</button>
</div>;
};

export default FirstStep;
