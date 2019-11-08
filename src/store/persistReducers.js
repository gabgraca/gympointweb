/**
 * Realiza a gravação do reducer de autenticação
 * na localstorage do browser
 */

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'gympoint',
      storage,
      whitelist: ['auth'],
    },
    reducers
  );
  return persistedReducer;
};
