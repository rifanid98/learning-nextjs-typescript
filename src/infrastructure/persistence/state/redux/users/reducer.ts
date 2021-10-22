import { User } from 'domain/entity/user';
import { UsersAction } from './actions';
import ActionType from './action-type';

interface UsersState {
  loading: boolean
  error: string | null
  data: Array<User>
}

const initialState: UsersState = {
  loading: false,
  error: null,
  data: [],
};

const usersReducer = (state: UsersState = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case ActionType.GET_ALL:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case ActionType.GET_ALL_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionType.GET_ALL_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    case ActionType.SAVE_ALL:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
