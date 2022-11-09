import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { request } from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../graphql/endpoint';
import { Loading } from './loading/Loading';
import { GRAPH_QUERY } from '../../graphql/queries/graph.query';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const MoodGraph = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['GRAPH_QUERY'],
    queryFn: () => request(GRAPHQL_ENDPOINT, GRAPH_QUERY),
  });

  const options = {
    responsive: true,
    scales: {
      y:{
        display: false,
      },
      x:{
        display: false,
      },
      grid: {
        display: false,
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
      },
    },
  };

  if (isLoading) return <Loading />;
  const testdata = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Mood",
        data: [33, 25, 35, 51, 54, 76],
        fill: true,
        borderColor: "#E8EAF6"
      }
    ]
  };
  return (
    <Box sx={{ flexGrow: 1, justifyContent: "center", alignItems: 'center', ml: 3 }}>
      <Line data={testdata} options={options} />
    </Box>
  );

}
