import { Dispatch } from 'redux';
import UsersRestRepository from 'infrastructure/persistence/server/rest/users.rest.repository';
import { UsersAction } from './actions';
import ActionType from './action-type';
import { User } from '../../../../../domain/entity/user';

export const getAllUsers = () => async (dispatch: Dispatch<UsersAction>) => {
  dispatch({
    type: ActionType.GET_ALL,
  });

  try {
    const repository = UsersRestRepository.getInstance();
    const users = await repository.getAllUsers();

    dispatch({
      type: ActionType.GET_ALL_SUCCESS,
      payload: users,
    });
  } catch (e) {
    dispatch({
      type: ActionType.GET_ALL_ERROR,
      payload: e.message,
    });
  }
};

export const saveAllUsers = (users: Array<User>) => async (dispatch: Dispatch<UsersAction>) => {
  dispatch({
    type: ActionType.SAVE_ALL,
    payload: users,
  });
};

export const searchUsers = () => new Error('Not yet implemented');
