import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Header(props) {
    return (
    <>
        {!props.loggedIn && (
            <div className="navLinks">
                        <Link to="/login">Login</Link>
                        <Link to="/signup">SignUp</Link>
                        <Link to="/userprofile">My Recipes</Link>
            </div>
        )}
        {props.loggedIn && (
            <div className="navLinks">
                <Link to="/logout">Log Out</Link><br/>
                <Link to="/userprofile">My Recipes</Link>
            </div>
        )}
    </>
    );
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
    };
};

export default connect(mapStateToProps, {})(Header);