import {pingReducer} from './pingReducer';
import { combineReducers } from 'redux';

 const rootReducer = combineReducers({
    ping: pingReducer,
  });

  export default rootReducer;