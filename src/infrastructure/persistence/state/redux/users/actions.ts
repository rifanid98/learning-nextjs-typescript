import { User } from 'domain/entity/user';
import ActionType from './action-type';

interface GetAllAction {
  type: ActionType.GET_ALL
}

interface GetAllActionSuccess {
  type: ActionType.GET_ALL_SUCCESS,
  payload: Array<User>
}

interface SaveAllAction {
  type: ActionType.SAVE_ALL,
  payload: Array<User>
}

interface GetAllActionError {
  type: ActionType.GET_ALL_ERROR,
  payload: string
}

export type UsersAction =
    GetAllAction
    | GetAllActionSuccess
    | GetAllActionError
    | SaveAllAction;
