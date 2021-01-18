import { connect } from 'react-redux';
import SwitchMode from 'src/components/SwitchMode/SwitchMode';

import { changeMode } from 'src/actions/actions';

const mapStateToProps = (state) => ({
    siteMode: state.mode.siteMode
});

const mapDispatchToProps = (dispatch) => ({
    changeMode: (value) => {
        dispatch(changeMode(value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SwitchMode);