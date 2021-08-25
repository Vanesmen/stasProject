import { useState } from 'react';
import React from 'react';
import classes from './Form.module.scss';
import InputField from './InputField';

function SignInForm(props) {
  const [logInData, setLogInData] = useState({login: "", email: "", password: "", passwordRepeat: ""});

  const handleSubmit = e => {
    e.preventDefault();
    props.login(logInData);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      {
        props.formSettings.map(el => 
          <InputField
            type={el.type}
            label={el.label}
            placeholder={el.placeholder}
            value={logInData[el.valueName]}
            onChange={e => setLogInData({ ...logInData, [el.valueName]: e.target.value })}
            key={el.valueName}
            className={classes.label}
          />)
      }

      <button className={classes.button}>Регистрация</button>
      <div className={classes.subTittle}>
        <span>У вас уже есть аккаунт? - </span> <a onClick={() => props.formToggle("login")}>авторизируйтесь</a>
      </div>

    </form>
  );
};

export default SignInForm;


