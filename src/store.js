import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducer/index';
import rootEpic from './epic/index';

const epicMiddleware = createEpicMiddleware();



 function configureStore() {
    const storetemp = createStore(
      rootReducer,
      applyMiddleware(epicMiddleware)
    );
  
    epicMiddleware.run(rootEpic);
  
    return storetemp;
  }

  /*
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  );
  */
const store=configureStore();

 export default store;