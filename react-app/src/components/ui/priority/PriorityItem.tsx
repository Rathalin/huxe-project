import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { Fragment } from 'react';
import { GRAPHQL_ENDPOINT } from '../../../graphql/endpoint';
import { PRIORITY_QUERY } from '../../../graphql/queries/priority.query';
import { SATISFIED_PRIORITIES_BETWEEN_QUERY } from '../../../graphql/queries/satisfied-priorites-between.query';
import { beginningOfThisWeek, endOfToday } from '../../../utils/date.util';
import { MEDIA_ENDPOINT } from '../../../utils/media-endpoint';
import { Loading } from '../loading/Loading';
import { PriorityCard } from './PriorityCard';
import { PriorityProgress } from './PriorityProgress';
import defaultImage from '../../../assets/images/goal.png';

type PriorityItemProps = {
  priorityId: string,
  showProgress?: boolean,
  showProgressBar?: boolean,
  checked?: boolean,
};

export const PriorityItem = ({
  priorityId, showProgress = false, showProgressBar = false, checked = false,
}: PriorityItemProps) => {
  const { data: priorityData, isLoading: isLoadingPriority } = useQuery({
    queryKey: ['PRIORITY_QUERY', priorityId],
    queryFn: () => request(GRAPHQL_ENDPOINT, PRIORITY_QUERY, { priorityId }),
  });
  const progressEnabled = showProgress || showProgressBar;
  const { data: progressData, isLoading: isLoadingProgress } = useQuery({
    queryKey: ['SATISFIED_PRIORITIES_BETWEEN_QUERY', priorityId],
    queryFn: () => request(GRAPHQL_ENDPOINT, SATISFIED_PRIORITIES_BETWEEN_QUERY, {
      priorityId,
      beginDate: beginningOfThisWeek,
      endDate: endOfToday,
    }),
    enabled: progressEnabled,
  });

  const isLoading = isLoadingPriority || (progressEnabled && isLoadingProgress);

  if (isLoading) return <Loading />;

  const priority = priorityData?.priority?.data;
  const imageUrl = priorityData?.priority?.data?.attributes?.image?.data?.attributes?.url;
  const weeklyGoal = priorityData?.priority?.data?.attributes?.weeklyGoal ?? 7;
  const weeklySatisfactions = progressData?.satisfiedPriorities?.data.length ?? 0;
  const progressPercent = weeklySatisfactions * 100 / weeklyGoal;

  return (
    <Fragment>
      <PriorityCard
        priority={{
          title: priority?.attributes?.title ?? '',
          image: {
            url: imageUrl != null ? MEDIA_ENDPOINT + imageUrl : defaultImage,
            alt: priority?.attributes?.image?.data?.attributes?.alternativeText ?? ''
          },
        }}
        progressPercent={progressEnabled ? Math.floor(progressPercent) : undefined}
        checked={checked === true}
      />
      {progressEnabled && <PriorityProgress progressPercent={progressPercent} />}
    </Fragment>
  );
};
