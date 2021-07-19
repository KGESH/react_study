import React, { useState } from 'react';
import { useInput } from 'hooks/useInput';
const LoginForm = () => {
  /**
   * useInput Validator Examples
   */
  const includeChecker = (value: string) => !value.includes('@');
  const lengthChecker = (value: string) => value.length < 10;
  const id = useInput("", includeChecker);
  const pw = useInput("", lengthChecker);


  return (
    <>
      <form className="login_form">
        <input className="login__form__id_input" {...id}/>
        <input type="password" className="login__form__pw_input" {...pw}/>
      </form>

      <div className="login_form__test">
        id: {id.value},
        pw: {pw.value},
      </div>
    </>
  );
}

export default LoginForm;