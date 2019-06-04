import React from 'react';
import Button from '@material-ui/core/Button';
import { fromEvent  } from 'rxjs';
import { scan } from 'rxjs/operators';


export default class PureRXJS extends React.Component {

    componentDidMount(){

        const button = document.querySelector("#TestButton1");
       // console.log(button);
        /*
        fromEvent(button, 'click')
        .pipe(scan(count => count + 3, 0))
        .subscribe(count => console.log(`Clicked ${count} times`));
        */

       this.testObservable =fromEvent(button, 'click');

       //this.testObservable.pipe(scan(count => count + 3, 0))
       this.subscription = this.testObservable.subscribe(event => console.log(event));
    }

    componentWillUnmount(){
        this.subscription.unsubscribe();
    }

    render() {

        return (
            <div>
                
                <Button variant="contained" id="TestButton1">
                    Start Ping
                </Button>
            </div>
        );
    }
}