"use client";
import { useState, useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const AnalyticsProgressBar = ({
  easySolved,
  easyTotal,
  mediumSolved,
  mediumTotal,
  hardSolved,
  hardTotal,
}) => {
  const easyPercentage = ((easySolved / easyTotal) * 100).toFixed(1);
  const mediumPercentage = ((mediumSolved / mediumTotal) * 100).toFixed(1);
  const hardPercentage = ((hardSolved / hardTotal) * 100).toFixed(1);

  const [easyWidth, setEasyWidth] = useState(0);
  const [mediumWidth, setMediumWidth] = useState(0);
  const [hardWidth, setHardWidth] = useState(0);

  useEffect(() => {
    const animateBars = () => {
      setEasyWidth(easyPercentage);
      setMediumWidth(mediumPercentage);
      setHardWidth(hardPercentage);
    };
    animateBars();
  }, [easyPercentage, mediumPercentage, hardPercentage]);

  return (
    <div className="w-full h-[300px] max-w-lg bg-white shadow-md rounded-lg p-2">
      <h1 className="text-2xl font-semibold mt-2 text-center">
        Difficulty Wise Accuracy
      </h1>
      <div className="flex flex-col gap-6 items-center p-2 mt-3">
        <ProgressItem
          solved={easySolved}
          total={easyTotal}
          width={easyWidth}
          color="#02FC1B"
          label="Easy"
          percentage={easyPercentage}
        />
        <ProgressItem
          solved={mediumSolved}
          total={mediumTotal}
          width={mediumWidth}
          color="#FBBF24"
          label="Medium"
          percentage={mediumPercentage}
        />
        <ProgressItem
          solved={hardSolved}
          total={hardTotal}
          width={hardWidth}
          color="#FF0303"
          label="Hard"
          percentage={hardPercentage}
        />
      </div>
    </div>
  );
};

const ProgressItem = ({ solved, total, width, color, label, percentage }) => (
  <div className="flex items-center justify-center gap-4 w-full">
    <div className="flex-grow">
      <ProgressBar
        label={label} // Pass 'Easy', 'Medium', 'Hard' as label
        solved={solved}
        total={total}
        width={width}
        color={color}
        percentage={percentage}
      />
    </div>

    <div className="flex items-center justify-center gap-2 min-w-max mt-5">
      <CheckCircleIcon style={{ color }} />
      <span className="text-gray-700 font-medium">{`${solved}/${total}`}</span>
    </div>
  </div>
);

const ProgressBar = ({ label, solved, total, width, color, percentage }) => (
  <div className="w-full">
    <div className="flex justify-between mb-1">
      <div className="text-sm text-gray-600">{label}</div>{" "}
      {/* Display Easy, Medium, Hard */}
      <div className="text-sm text-gray-600">{percentage}%</div>
    </div>

    <div className="bg-gray-300 h-2 w-full rounded-lg overflow-hidden">
      <div
        className="h-2 rounded-lg"
        style={{
          width: `${width}%`,
          backgroundColor: color,
          transition: "width 1s ease-out",
        }}
      ></div>
    </div>
  </div>
);

export default AnalyticsProgressBar;
