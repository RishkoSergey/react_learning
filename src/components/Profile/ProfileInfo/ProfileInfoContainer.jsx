import ProfileInfo from './ProfileInfo';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        info: state.profilePage.info
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;