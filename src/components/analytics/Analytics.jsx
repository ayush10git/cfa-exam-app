import AnalyticsTab from "@/components/analytics/AnalyticsTab";
import DoughnutChart from "@/components/analytics/DoughnutChartCard";
import AnalyticsProgressBar from "@/components/analytics/AnalyticsProgressBar";
import ConfidenceCard from "@/components/analytics/ConfidenceCard";
import LineGraph from "@/components/analytics/LineGraph";
import PerformanceTable from "@/components/analytics/PerformanceTable";

const Analytics = ({
  easySolved,
  mediumSolved,
  hardSolved,
  easyTotal,
  mediumTotal,
  hardTotal,
  testResults,
}) => {
  return (
    <div className="w-full flex flex-wrap gap-4">
      <div className="doughnut-chart-container">
        <DoughnutChart
          labels={["Easy", "Medium", "Hard"]}
          data={[easySolved, mediumSolved, hardSolved]}
          backgroundColor={["#FEE501", "#02FC1B", "#FF0303"]}
          cutout="70%"
          legends={false}
        />
      </div>
      <div className="w-full h-[300px] doughnut-chart-container">
        <AnalyticsProgressBar
          easySolved={easySolved}
          easyTotal={easyTotal}
          mediumSolved={mediumSolved}
          mediumTotal={mediumTotal}
          hardSolved={hardSolved}
          hardTotal={hardTotal}
        />
      </div>
      <div className="confidence-container">
        <ConfidenceCard />
      </div>
      <div className="w-full">
        <LineGraph subject="Math" testResults={testResults} />
      </div>
      <div className="w-full">
        <PerformanceTable />
      </div>
    </div>
  );
};

export default Analytics;
