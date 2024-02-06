import React from "react";
import "./features.scss";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const Features = () => {
  return (
    <div className="features">
      <div className="featuresItem">
        <span className="featureTitle">Revane</span>
        <div className="featureContainer">
          <span className="featureProfit">$2,458</span>
          <span className="featureRate">
            -11.4
            <ArrowDownward className="featureIcon negative" />
          </span>
        </div>
        <div className="featureSub">Compare to Last Month</div>
      </div>
      <div className="featuresItem">
        <span className="featureTitle">Sales</span>
        <div className="featureContainer">
          <span className="featureProfit">$3,500</span>
          <span className="featureRate">
            +2.4
            <ArrowUpward className="featureIcon" />
          </span>
        </div>
        <div className="featureSub">Compare to Last Month</div>
      </div>
      <div className="featuresItem">
        <span className="featureTitle">Cost</span>
        <div className="featureContainer">
          <span className="featureProfit">$1,785</span>
          <span className="featureRate">
            -1.4
            <ArrowDownward className="featureIcon negative" />
          </span>
        </div>
        <div className="featureSub">Compare to Last Month</div>
      </div>
    </div>
  );
};

export default Features;
