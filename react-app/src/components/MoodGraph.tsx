import { Container } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { request } from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../graphql/endpoint';
import { Loading } from './ui/loading/Loading';
import { GRAPH_QUERY } from '../graphql/queries/graph-query';

export const MoodGraph = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['GRAPH_QUERY'],
    queryFn: () => request(GRAPHQL_ENDPOINT, GRAPH_QUERY),
  });

  if (isLoading) return <Loading />;

  return (
    <Container maxWidth='xs'>

    </Container>
  );

}
