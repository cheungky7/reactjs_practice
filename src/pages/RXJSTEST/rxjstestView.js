import React from 'react';
import Button from '@material-ui/core/Button';

export default class RXJSTest extends React.Component {

    render() {
        const {actions,isPinging}= this.props;
        return (
            <div>
                <h1>is pinging: {`${isPinging}`}</h1>
                <br/>
                <Button variant="contained" onClick={actions.ping}>
                    Start Ping
                </Button>
            </div>
        );
    }
}