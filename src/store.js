import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducer/index';
import rootEpic from './epic/index';

const epicMiddleware = createEpicMiddleware();


/*
export default function configureStore() {
    const store = createStore(
      rootReducer,
      applyMiddleware(epicMiddleware)
    );
  
    epicMiddleware.run(rootEpic);
  
    return store;
  }*/

  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  );

  export default store;