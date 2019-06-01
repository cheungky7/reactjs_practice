import { pingEpic } from './pingEpic';
import { combineEpics } from 'redux-observable';

const rootEpic = combineEpics(
    pingEpic,
    // fetchUserEpic
  );

export default rootEpic;