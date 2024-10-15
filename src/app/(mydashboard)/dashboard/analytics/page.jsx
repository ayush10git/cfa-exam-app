"use client";
import React, { useState } from "react";
import "../../../globals.css";
import AnalyticsTab from "@/components/analytics/AnalyticsTab";
import Analytics from "@/components/analytics/Analytics";

const Dashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const easySolved = 88;
  const mediumSolved = 158;
  const hardSolved = 173;

  const testResults = [
    78, 85, 32, 54, 80, 61, 22, 93, 40, 51, 63, 88, 91, 73, 87,
  ];

  const renderAnalytics = () => {
    switch (tabIndex) {
      case 0:
        return (
          <Analytics
            easySolved={52}
            easyTotal={80}
            mediumSolved={46}
            mediumTotal={76}
            hardSolved={31}
            hardTotal={42}
            testResults={testResults}
          />
        );
      case 1:
        return (
          <Analytics
            easySolved={52}
            easyTotal={80}
            mediumSolved={46}
            mediumTotal={76}
            hardSolved={31}
            hardTotal={42}
            testResults={testResults}
          />
        );
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
    <div className="flex flex-col p-4 relative top-[60px] md:left-[250px] lg:left-[250px] w-[calc(100vw-250px)]">
      <div className="flex justify-center">
        <AnalyticsTab setTabIndex={setTabIndex} />
      </div>

      <div className="mt-5">
        <div className="">
          <div className="">{renderAnalytics()}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
