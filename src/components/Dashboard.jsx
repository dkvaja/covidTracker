import { React, useEffect, useState } from "react";
import axios from "axios";
import SmallDataDiv from './SmallDataDiv';
import States from "./States";

const Dashboard = () => {
  const [stateData, setStateData] = useState([]);
  const [totalData, settotalData] = useState([0]);
  const [mainData, setmainData] = useState([]);

  const url = "https://api.rootnet.in/covid19-in/stats/latest";

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        const mainData = res.data;
        const totalData = res.data.data.summary;
        const stateList = res.data.data.regional;
        setStateData(stateList);
        settotalData(totalData);
        setmainData(mainData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const uDate = new Date(mainData.lastOriginUpdate);
  const rDate = new Date(mainData.lastRefreshed);
  return (
    <>
      <section className="main-dashboard">
        <div className="update-div">
          <h3>Last Updated : {uDate.toLocaleTimeString()}  {uDate.toDateString()} </h3>
          <h3>Last Refreshed : {rDate.toLocaleTimeString()}  {rDate.toDateString()} </h3>
        </div>
        <div className="welcome-div flex-column-center">
          <h1 className="welcome-heading">
            Welcome to Live COVID-19 Dashboard
          </h1>
          <p>Here you can find Updated data of covid-19 cases in INDIA</p>
          <p> 🏠 STAY SAFE, STAY HOME 🏠</p>
        </div>
        <div className="smalldivcontainer flex-center">
          <SmallDataDiv title={"Confirmed"} thisData={totalData.total} color={"#ff841a"} />
          <SmallDataDiv title={"Discharged"} thisData={totalData.discharged} color={"#27a844"} />
          <SmallDataDiv title={"Deceased"} thisData={totalData.deaths} color={"#e0113f"} />
        </div>
        <div className="statewise-container flex-column-center">
          <h1>State Wise Data</h1>
          <div className="statewise-box flex-center">
            { stateData && stateData.map((datad, index) => {
              return <States key={index} stateDataList={datad} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
