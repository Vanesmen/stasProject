import * as axios from "axios";

const instance = axios.create({
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  baseURL: "http://stasoclicker.ru/",
});

export const authAPI = {
  login(login, password) {
    return instance.post(`vendor/testendpoint.php`, { login, password }).then(response => {
      return response.data
    });
  },
}


