import React, { useState } from 'react';

const LoginForm = () => {  
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => setId(event.target.value);
  const handlePwChange = (event: React.ChangeEvent<HTMLInputElement>) => setPw(event.target.value);

  return (
    <>
      <form className="login_form">
        <input className="login__form__id_input_feild" onChange={handleIdChange}/>
        <input type="password" className="login__form__pw_input_feild" onChange={handlePwChange}/>
      </form>

      <div className="login_form__test_feild">
        id: {id},
        pw: {pw},
      </div>
    </>
  );
}

export default LoginForm;