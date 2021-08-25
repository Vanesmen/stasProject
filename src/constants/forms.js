// valueName должен быть уникальным в рамках одной формы
export const LOGIN_FORM = [
    {
        type: "text",
        label: "Логин",
        placeholder: "Введите свой логин",
        valueName: "login"
    },
    {
        type: "password",
        label: "Пароль",
        placeholder: "Введите пароль",
        valueName: "password"
    }
  ];

export const REGISTRATION_FORM = [
    {
        type: "text",
        label: "Логин",
        placeholder: "Введите свой логин",
        valueName: "login"
    },
    {
        type: "email",
        label: "Email",
        placeholder: "Введите email",
        valueName: "email"
    },
    {
        type: "password",
        label: "Пароль",
        placeholder: "Введите пароль",
        valueName: "password"
    },
    {
        type: "password",
        label: "Подтверждение пароля",
        placeholder: "Подтвердить пароль",
        valueName: "passwordRepeat"
    },
]