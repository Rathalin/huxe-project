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
import { useEffect, useState } from 'react';
import { Enum_Dailymood_Mood } from '../../graphql/generated/graphql';
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

  const [graphDataSet, setGraphDataset] = useState<number[]>([])
  const mapDatasets = () => {
    setGraphDataset([])
    data?.dailyMoods?.data?.map(moodItem => {
      switch (moodItem?.attributes?.mood) {
        case (Enum_Dailymood_Mood.VeryGood):
          setGraphDataset(prevState => [...prevState, 5])
          break;
        case (Enum_Dailymood_Mood.Good):
          setGraphDataset(prevState => [...prevState, 4])
          break;
        case (Enum_Dailymood_Mood.Neutral):
          setGraphDataset(prevState => [...prevState, 3])
          break;
        case (Enum_Dailymood_Mood.Bad):
          setGraphDataset(prevState => [...prevState, 2])
          break;
        case (Enum_Dailymood_Mood.VeryBad):
          setGraphDataset(prevState => [...prevState, 1])
          break;
      }
    })
  }

  const { data, isLoading } = useQuery({
    queryKey: ['GRAPH_QUERY'],
    queryFn: () => request(GRAPHQL_ENDPOINT, GRAPH_QUERY),
    onSuccess: () => mapDatasets()
  });

  useEffect(()=> {
    mapDatasets();
  }, [data])

  if (isLoading) return <Loading />;

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
      tooltip: {
        enabled: false
      }
    },
  };

  const length = data?.dailyMoods?.data?.length ?? 0
  const graphData = {
    labels: Array.from({length: length }, (_, i) => i + 1),
    datasets: [
      {
        label: "Mood",
        data: graphDataSet,
        fill: true,
        borderColor: "#E8EAF6",
        pointRadius: 6,
        pointHoverRadius: 8
      }
    ]
  };

  return (
    <Box sx={{ flexGrow: 1, justifyContent: "center", alignItems: 'center', p:3, my: 1 }}>
      <Line data={graphData} options={options} />
    </Box>
  );

}
