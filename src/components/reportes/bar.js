import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = ({
  titleChart,
  labelDataset,
  labels,
  dataDatasets,
  color,
}) => {

  const options = {
    responsive: true,
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: titleChart,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: labelDataset,
        data: dataDatasets,
        backgroundColor: color,
      },
    ],
  };


  return (
    <div>
      <Bar
        options={options}
        data={data}
      />
    </div>
  )
}
