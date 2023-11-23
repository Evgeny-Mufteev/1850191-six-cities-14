import { configureStore, combineReducers } from '@reduxjs/toolkit';
import offersReducer from './features/offers';
import authorizationReducer from './features/auth';
import userReducer from './features/user';
import { apiClient } from '../network/api-client';

export const api = apiClient();

const rootReducer = combineReducers({
  offers: offersReducer,
  authorization: authorizationReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { api },
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
