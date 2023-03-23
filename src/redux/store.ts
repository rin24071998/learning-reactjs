import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import userReducer from './features/user/userSlice';

const reducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whiteList: ['counter'],
  blacklist: ['user'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
