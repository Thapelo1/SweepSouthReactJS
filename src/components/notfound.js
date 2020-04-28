import React from 'react';


const NotFound = (props) => {
    return (
        <div className="jumbotron">
            <h1 className="display-3">Page Not Found!</h1>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="/" role="button">Go Home</a>
            </p>
        </div>
    )
}

export default NotFound;