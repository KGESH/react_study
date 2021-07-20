import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { LoginFormValues } from 'types/FormValues';
import 'components/login-form/style/LoginForm.css'


const LoginForm = () => {
  /**
   * LoginForm Examples
   * https://react-hook-form.com/kr/get-started/#Quickstart
   */
  const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm<LoginFormValues>();

  const [data, setData] = useState<LoginFormValues>(
    {
      id: "",
      pw: ""
    }
  );

  const onSubmit = (formData: any) => setData(formData);


  return (
    <>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="login__form__id_input"
          placeholder="Input ID"
          {...register("id", { required: "필수 항목임" })}
          />
        {errors.id && <p>{errors.id.message}</p>}
        
        <input
          className="login__form__pw_input"
          placeholder="Input PassWord"
          type="password"
          {...register("pw", { required: "필수 항목임" })}
          />
        {errors.pw && <p>{errors.pw.message}</p>}

        <button className="login__form__submit_button" type="submit">로그인</button>
      </form>

      <div className="login_form__test">
        <p>ID : {data.id}</p>
        <p>PW : {data.pw}</p>
      </div>
    </>
  );
}

export default LoginForm;