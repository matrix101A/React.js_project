import React from 'react'

const spinner=()=> {
    return(
        <div className="ui active dimmer">
            <div className="ui big text loader">
            Loading...
            </div>
        </div>
    );
};

export default spinner