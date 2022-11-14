import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import request from "graphql-request";
import { GRAPHQL_ENDPOINT } from "../../../graphql/endpoint";
import { CREATE_SATISFIED_PRIORITY_MUTATION } from "../../../graphql/mutations/create-satisfied-priority.mutation";
import { REMOVE_SATISFIED_PRIORITY_MUTATION } from "../../../graphql/mutations/remove-satisfied-priority.mutation";
import { PRIORITY_QUERY } from "../../../graphql/queries/priority.query";
import { SATISFIED_PRIORITY_OF_PRIORITY_QUERY } from "../../../graphql/queries/satisfied-priorities-of-priority.query";
import { useDailyMoodIdStore } from "../../../stores/dailyMoodStore";
import { MEDIA_ENDPOINT } from "../../../utils/media-endpoint";
import { Loading } from "../loading/Loading";
import { PriorityCard } from "./PriorityCard";

type SatisfiedPriorityCheckboxProps = {
  priorityId: string,
}

export const SatisfiedPriorityCheckbox = (
  { priorityId }: SatisfiedPriorityCheckboxProps
) => {
  const { dailyMoodId } = useDailyMoodIdStore();
  const queryClient = useQueryClient();
  const { data: priorityData, isLoading: isLoadingPriority } = useQuery({
    queryKey: ['PRIORITY_QUERY', priorityId],
    queryFn: () => request(GRAPHQL_ENDPOINT, PRIORITY_QUERY, { priorityId }),
  });
  const { data: satisfiedData, isLoading: isLoadingSatisfied } = useQuery({
    queryKey: ['SATISFIED_PRIORITY_OF_PRIORITY_QUERY', dailyMoodId, priorityId],
    queryFn: () => request(GRAPHQL_ENDPOINT, SATISFIED_PRIORITY_OF_PRIORITY_QUERY, {
      dailyMoodId: dailyMoodId ?? '',
      priorityId,
    }),
  });
  const { mutate: createSatisfiedPriority } = useMutation({
    mutationKey: ['CREATE_SATISFIED_PRIORITY_MUTATION', priorityId],
    mutationFn: () => request(GRAPHQL_ENDPOINT, CREATE_SATISFIED_PRIORITY_MUTATION, {
      satisfiedPriority: {
        dailyMood: dailyMoodId ?? '',
        priority: priorityId,
        notes: [],
      }
    }),
    onSuccess: () => queryClient.invalidateQueries(['SATISFIED_PRIORITY_OF_PRIORITY_QUERY', dailyMoodId, priorityId]),
  });
  const { mutate: removeSatisfiedPriority } = useMutation({
    mutationKey: ['REMOVE_SATISFIED_PRIORITY_MUTATION', priorityId],
    mutationFn: (id: string) => request(GRAPHQL_ENDPOINT, REMOVE_SATISFIED_PRIORITY_MUTATION, {
      satisfiedPriorityId: id
    }),
    onSuccess: () => queryClient.invalidateQueries(['SATISFIED_PRIORITY_OF_PRIORITY_QUERY', dailyMoodId, priorityId]),
  });
  const isLoading = isLoadingPriority || isLoadingSatisfied;

  if (isLoading) return <Loading />;

  const satisfiedPriorityId = satisfiedData?.satisfiedPriorities?.data[0]?.id;
  const satisfied = satisfiedPriorityId != null;

  function toggleSatisfied(): void {
    if (satisfied) {
      console.log('Removing satisfied priority', satisfiedPriorityId);
      removeSatisfiedPriority(satisfiedPriorityId);
    } else {
      console.log('Creating satisfied priority for priority', priorityId);
      createSatisfiedPriority();
    }
  }

  const priority = priorityData?.priority?.data;
  const imageUrl = priorityData?.priority?.data?.attributes?.image?.data?.attributes?.url;

  return (
    <div onClick={() => toggleSatisfied()}>
      <PriorityCard
        priority={{
          title: priority?.attributes?.title ?? '',
          image: {
            url: imageUrl != null ? MEDIA_ENDPOINT + imageUrl : 'mood1.png',
            alt: priority?.attributes?.image?.data?.attributes?.alternativeText ?? ''
          },
        }}
        checked={satisfied}
      />
    </div>
  );
};
