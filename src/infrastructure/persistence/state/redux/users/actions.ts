import ActionType from './action-type';
import { User } from '../../../../../domain/entity/user';

interface GetAllAction {
  type: ActionType.GET_ALL
}

interface GetAllActionSuccess {
  type: ActionType.GET_ALL_SUCCESS,
  payload: Array<User>
}

interface GetAllActionError {
  type: ActionType.GET_ALL_ERROR,
  payload: string
}

export type UsersAction =
    GetAllAction
    | GetAllActionSuccess
    | GetAllActionError;
