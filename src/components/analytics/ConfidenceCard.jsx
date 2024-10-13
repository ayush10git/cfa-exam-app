import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ConfidenceCard = () => {
  const percentage = 72;

  const [rotationAngle, setRotationAngle] = useState(-90);

  const targetRotationAngle = -90 + (percentage * 180) / 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setRotationAngle(targetRotationAngle);
    }, 100);

    return () => clearTimeout(timer);
  }, [targetRotationAngle]);

  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ["#79A8EE", "#E0E0E0"],
        borderWidth: 0,
        cutout: "80%",
        circumference: 180,
        rotation: -90,
        borderRadius: 7
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: true },
      legend: { display: false },
    },
  };

  return (
    <div className="relative sm:w-[450px] md:w-[450px] lg:w-[320px] h-[300px] flex flex-col justify-center gap-5 items-center shadow-md rounded-lg">
      <h1 className="text-center text-2xl font-semibold">Confidence</h1>
      <span className="text-md text-gray-500">{percentage}%</span>

      <div className="relative w-[280px] h-[150px] mb-6">
        <Doughnut data={data} options={options} />

        <div
          className="absolute w-1 h-[80px] bg-[#79A8EE] origin-bottom transition-transform duration-[2s] rounded-md"
          style={{
            top: "70px",
            left: "50%",
            transform: `rotate(${rotationAngle}deg) translate(-50%, 0)`,
            transformOrigin: "bottom center",
          }}
        />
      </div>
    </div>
  );
};

export default ConfidenceCard;
