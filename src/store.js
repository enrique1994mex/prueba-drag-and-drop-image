import { configureStore } from '@reduxjs/toolkit';
import actorReducer from './redux/reducers/actor';

export default configureStore({
  reducer: {
    actorReducer
  },
})