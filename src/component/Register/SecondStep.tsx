import React, { useState } from "react";
import {UserInfo} from './Register'

type SecondStepType = {
  onChange:(field: string, value:string | boolean) => void;
  userInfo: UserInfo;
  nextStep?:() => void
}

const SecondStep:React.FC<SecondStepType> = ({onChange, userInfo, nextStep}) => {
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [checkPassword, setCheckPassword] = useState('')
  
  return <div className='second-step'>
           <p>
          <input type='password' 
          placeholder='Password'
          value={userInfo.password}
          onChange={((e) => onChange('password', e.target.value))}
          />
        </p>
        <p>
          <input type='password' 
          placeholder='Confirm Password'
          value={checkPassword}
          onChange={(e) => {
            setCheckPassword(e.target.value)
            userInfo.password === e.target.value? setIsConfirmed(true)
            : setIsConfirmed(false)
          }}
          />
        </p>
        <button>Previous Step</button>
        <button disabled={!isConfirmed} onClick={nextStep}>Next Step</button>
             
       </div>
};

export default SecondStep;

