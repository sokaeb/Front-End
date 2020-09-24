import React, { useEffect } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLoggedOut } from '../actions/index';

const Logout = (props) => {
    // const history = useHistory();

    useEffect(() => {
        localStorage.removeItem('token');
        // props.setLoggedOut();
    }, [props])


    return (
    <>
        <div>
            <p>You've logged out.</p>
        </div>
    </>
    )
};

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
    };
};

export default connect(mapStateToProps, { setLoggedOut })(Logout);