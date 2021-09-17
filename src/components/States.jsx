import React from "react";
import CountUp from "react-countup";

const States = (props) => {
  return (
    <>
      <div className="statewise-div-box flex-column-center">
        <h1 className="statewise-heading">{props.stateDataList.loc}</h1>
        <h2 className="statewise-heading2">
          Current Cases :
          <CountUp
            start={
              props.stateDataList.totalConfirmed -
              props.stateDataList.totalConfirmed
            }
            end={props.stateDataList.totalConfirmed}
            duration={3}
          />
        </h2>
        <h3 className="statewise-heading3">
          Discharged :
          <CountUp
            start={
              props.stateDataList.discharged - props.stateDataList.discharged
            }
            end={props.stateDataList.discharged}
            duration={3}
          />
        </h3>
        <h3 className="statewise-heading4">
          Total Deaths :
          <CountUp
            start={props.stateDataList.deaths - props.stateDataList.deaths}
            end={props.stateDataList.deaths}
            duration={3}
          />
        </h3>
      </div>
    </>
  );
};

export default States;
