import React from 'react';

function Title(props){
    return(
        <h1 className="main-title text-center">
            {props.title}
        </h1>
    )
}

export default Title