import React from 'react';
import prop-types from 'prop-types';

const Temp = ({temp}) => {
    return (
        <>
            <span>{Math.floor(temp)}&deg;</span>
        </>
    );
};

Temp.propTypes ={
    temp: PropATypes.number.isRequired
}

export default Temp;