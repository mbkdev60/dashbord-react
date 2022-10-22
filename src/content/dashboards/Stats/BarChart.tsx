import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
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

function BarChart() {
  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      },
      // title: {
      //   display: true,
      //   text: 'CA Mensuel'
      // }
    }
  };

  const labels = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Aout',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ];

  const data: any = {
    labels,
    datasets: [
      {
        label: "Chiffre d'Affaires ",
        data: [15, 53, 35, 28, 70, 43, 15, 85, 62, 78, 53, 64],
        backgroundColor: 'rgba(183, 188, 240, 0.993)'
      }
    ]
  };
  return (
    <div className="px-3 mt-5">
      <h3 className="my-3" style={{ color: 'blue' }}>
        Diagramme des Ventes
      </h3>
      <Bar options={options} data={data} />
    </div>
  );
}

export default BarChart;
