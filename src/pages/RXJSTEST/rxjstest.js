import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {ping, pong} from '../../action/pingAction';
import RXJSTest from './rxjstestView';

const mapDispatchToProps = dispatch => {
    const actions = {
        ping,
        pong,
    };
    return { actions: bindActionCreators(actions, dispatch) };
    }

    const mapStateToProps = state => {
        //console.log(state);
      return ({ isPinging: state.ping.isPinging,});              
    };

const RxJsTest=connect(mapStateToProps, mapDispatchToProps)(RXJSTest);
export default RxJsTest;
