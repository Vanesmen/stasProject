import { Router } from './router';
import './styles/index.scss';
import { Provider } from 'react-redux';
import store from "./redux/redux-store";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
