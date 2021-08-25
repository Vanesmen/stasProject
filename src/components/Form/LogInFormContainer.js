import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import LogInForm from "./LogInForm"

let mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
};

export default compose(
  connect(mapStateToProps, { login })
)(LogInForm);


