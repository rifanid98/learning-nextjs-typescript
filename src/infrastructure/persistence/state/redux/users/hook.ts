import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as usersActionCreators from './action-creator';

const useUserActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(usersActionCreators, dispatch);
};

export default useUserActions;
