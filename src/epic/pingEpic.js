import { filter, mapTo, delay } from 'rxjs/operators';


export const pingEpic = action$ => action$.pipe(
    filter(action => action.type === 'PING'),
    delay(10000),
    mapTo({ type: 'PONG' })
  );


  