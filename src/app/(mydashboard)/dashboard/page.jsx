"use client";
import React, { useState } from "react";
import AnalyticsTab from "@/components/AnalyticsTab";
import DoughnutChart from "@/components/DoughnutChartCard";
import "../../globals.css"

const Dashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const easySolved = 88;
  const mediumSolved = 158;
  const hardSolved = 173;

  const renderAnalytics = () => {
    switch (tabIndex) {
      case 0:
        return (
          <div className="flex flex-wrap">
            <div className="max-w-[450px] doughnut-chart-container">
              <DoughnutChart
                labels={["Easy", "Medium", "Hard"]}
                data={[easySolved, mediumSolved, hardSolved]}
                backgroundColor={["#FEE501", "#02FC1B", "#FF0303"]}
                cutout="70%"
                legends={false}
              />
            </div>
            <div className="max-w-[450px] h-[300px] bg-blue-200 doughnut-chart-container"></div>
          </div>
        );
      case 1:
        return <div>Science Analytics: Charts, Performance, etc.</div>;
      case 2:
        return <div>History Analytics: Trends, Scores, etc.</div>;
      case 3:
        return <div>Geography Analytics: Maps, Data, etc.</div>;
      case 4:
        return <div>English Analytics: Performance, Comparisons, etc.</div>;
      case 5:
        return <div>Computer Science Analytics: Code, Projects, etc.</div>;
      case 6:
        return <div>Economics Analytics: Graphs, Scores, etc.</div>;
      default:
        return <div>Select a subject to view analytics</div>;
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Centralize the tabs horizontally */}
      <div className="flex justify-center">
        <AnalyticsTab setTabIndex={setTabIndex} />
      </div>

      {/* DoughnutChart content with a fixed width */}
      <div className="mt-5">
        <div className="">
          <div className="">{renderAnalytics()}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
