import { LogInForm as LogInForm } from '../../components';
import { SignInForm as SignInForm } from '../../components';
import classes from './LoginPage.module.scss';
import {LOGIN_FORM, REGISTRATION_FORM} from '../../constants'
import { useState } from 'react';


const LoginPage = () => {
  let [formSettings, changeFormSettings] = useState(LOGIN_FORM);
  let [formType, changeFormType] = useState("login");

  let formToggle = (type) => {
    switch (type) {
      case "login":
        changeFormSettings(LOGIN_FORM);
        changeFormType("login");
        break
      case "registration":
        changeFormSettings(REGISTRATION_FORM);
        changeFormType("registration");
    }
  }

  return (
    <div className={classes.wrapper}>
      {
        formType == "login" ? 
          <LogInForm formSettings={formSettings} formToggle={formToggle}/> : 
          <SignInForm formSettings={formSettings} formToggle={formToggle}/>
      }
    </div>
  );
};

export default LoginPage;
