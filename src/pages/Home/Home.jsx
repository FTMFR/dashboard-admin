import React from "react";
import Features from "../../components/Features/Features";
import "./home.scss";
import Chart from "../../components/Chart/Chart";
import xAxiosData from "../../datas";
import WidgetSm from "../../components/widgetSm/WidgetSm";

const Home = () => {
  return (
    <div className="home">
      <Features />
      <Chart grid title="Month Sale" data={xAxiosData} dataKey="Sale" />
      <div className="homeWidget">
        <WidgetSm />
      </div>
    </div>
  );
};

export default Home;
