import { Dispatch } from 'redux';
import { UsersAction } from './actions';
import ActionType from './action-type';
import UsersRestRepository from '../../../server/rest/users.rest.repository';

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

export const searchUsers = () => new Error('Not yet implemented');
