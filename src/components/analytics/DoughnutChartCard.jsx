import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({
  labels,
  data,
  backgroundColor,
  cutout,
  legends = true,
  offset,
}) => {
  const totalSolved = data.reduce((acc, val) => acc + val, 0);

  const doughnutData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 0,
        offset,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const value = tooltipItem.raw;
            const percentage = ((value / totalSolved) * 100).toFixed(1);
            return `${tooltipItem.label}: ${value} (${percentage}%)`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
    cutout,
  };

  return (
    <div className="w-full h-[300px] p-4 shadow-md rounded-md flex flex-col max-w-full">
      <h1 className="text-center text-2xl font-regular mb-5">
        Total Questions Solved
      </h1>
      <div className="flex flex-wrap items-center justify-center md:gap-[6rem] lg:gap-8 xl:gap-[5rem]">
        <div className="relative w-[200px] h-[200px] sm:w-[150px] md:w-[200px] lg:w-[200px]">
          <Doughnut data={doughnutData} options={doughnutOptions} />
          <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none text-[#625C5C]">
            <span className="text-md font-medium">{totalSolved}</span>
            <span className="text-md font-medium">Questions</span>
          </div>
        </div>

        <div className="flex flex-col justify-around sm:hidden md:block lg:block xl:block">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#02FC1B] rounded-full"></div>
            <span className="text-gray-700 text-md">Easy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#FBBF24] rounded-full"></div>
            <span className="text-gray-700 text-md">Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#FF0303] rounded-full"></div>
            <span className="text-gray-700 text-md">Hard</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
