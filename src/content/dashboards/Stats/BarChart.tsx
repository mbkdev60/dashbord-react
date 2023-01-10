import { useState, useEffect } from 'react';
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
  const [dataBarChart, setdataBarChart] = useState<any>({});
  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      }
    }
  };
  const labels = dataBarChart?.labels;
  const data: any = {
    labels,
    datasets: [
      {
        label: "Chiffre d'Affaires",
        data: dataBarChart?.data,
        backgroundColor: 'rgb(178, 195, 212)',
        }
    ]
  };
  async function chiffreAffaires() {
    try {
      await fetch(
        `${process.env.REACT_APP_API_URL}/caMensuel/${localStorage.getItem(
          'user_id'
        )}`
      )
        .then((response) => response.json())
        .then((data) => {
          setdataBarChart(data);
        });
    } catch (error) {
      console.log(error);
    }
  }
<<<<<<< HEAD
=======

  const labels = dataBarChart?.labels;
  const data: any = {
    labels,
    datasets: [
      {
        label: 'Nombre de commandes ',
        data: dataBarChart?.data,
        backgroundColor: 'rgba(183, 188, 240, 0.993)'
      }
    ]
  };

  console.log('🚀 ~ file: BarChart.tsx ~ line 68 ~ BarChart ~ data', data);
>>>>>>> eddafbf0a3a9677b690feda0674c7b902d9c2245
  useEffect(() => {
    chiffreAffaires();
  }, []);

  return (
    <div className="px-3 mt-5">
      <h4 className="my-3" style={{ color: 'blue' }}>
        Diagramme des Ventes
      </h4>
      <Bar options={options} data={data} />
    </div>
  );
}

export default BarChart;
