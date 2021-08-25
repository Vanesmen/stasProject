import { useState } from 'react';
import React from 'react';
import classes from './Form.module.scss';
import InputField from './InputField';

function LogInForm(props) {
  const [logInData, setLogInData] = useState({login: "", password: ""});

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
            key={el.valueName}
            onChange={e => setLogInData({ ...logInData, [el.valueName]: e.target.value })}
            className={classes.label}
          />)
      }

      <button className={classes.button}>Войти</button>
      <div className={classes.subTittle}>
        <span>У вас нет аккаунта? - </span> <a onClick={() => props.formToggle("registration")}>зарегистрируйтесь</a>
      </div>   

    </form>
  );
};

export default LogInForm;


