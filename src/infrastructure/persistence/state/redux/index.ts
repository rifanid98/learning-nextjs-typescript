import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

// reducer
import usersReducer from './users/reducer';

const reducers = combineReducers({
  users: usersReducer,
});

type RootState = ReturnType<typeof reducers>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = createStore(reducers, {}, applyMiddleware(thunk));

export * as useUserActions from './users/hook';
