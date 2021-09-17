import React from 'react';
import CountUp from 'react-countup';

const SmallDataDiv = (props) => {
    return (
        <>
        <div className="smalldata-box flex-center" style={{backgroundColor:props.color}}>
        <i class="fas fa-viruses"></i>
            <h2>{props.title} :</h2>
            <h2><CountUp  start={props.thisData-props.thisData}  end={props.thisData} duration={3}/></h2>
        </div>
        </>
    )
}

export default SmallDataDiv
