/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  mutation CreateNote($note: NoteInput!) {\n    createNote(data: $note) {\n      data {\n        id\n      }\n    }\n  }\n": types.CreateNoteDocument,
    "\n  mutation CreatePriority($priority: PriorityInput!) {\n    createPriority(data: $priority) {\n      data {\n        id\n      }\n    }\n  }\n": types.CreatePriorityDocument,
    "\n  mutation CreateSatisfiedPriority($satisfiedPriority: SatisfiedPriorityInput!) {\n    createSatisfiedPriority(data: $satisfiedPriority) {\n      data {\n        id\n      }\n    }\n  }\n": types.CreateSatisfiedPriorityDocument,
    "\n  mutation CreateStrongEmotion($strongEmotion: StrongEmotionInput!) {\n    createStrongEmotion(data: $strongEmotion) {\n      data {\n        id\n      }\n    }\n  }\n": types.CreateStrongEmotionDocument,
    "\n  mutation RemoveSatisfiedPriority($satisfiedPriorityId: ID!) {\n    deleteSatisfiedPriority(id: $satisfiedPriorityId) {\n      data {\n        id\n      }\n    }\n  }\n": types.RemoveSatisfiedPriorityDocument,
    "\n  mutation SetMood($dailyMoodId: ID!, $dailyMoodInput: DailyMoodInput!) {\n    updateDailyMood(id: $dailyMoodId, data: $dailyMoodInput) {\n      data {\n        attributes {\n          mood\n        }\n      }\n    }\n  }\n": types.SetMoodDocument,
    "\n  mutation UpdateDailyMood($dailyMoodId: ID!, $dailyMoodInput: DailyMoodInput!) {\n    updateDailyMood(id: $dailyMoodId, data: $dailyMoodInput) {\n      data {\n        id\n      }\n    }\n  }\n": types.UpdateDailyMoodDocument,
    "\n  mutation SetPriorityActive($priorityId: ID!, $priorityInput: PriorityInput!) {\n    updatePriority(id: $priorityId, data: $priorityInput) {\n      data {\n        attributes {\n          active\n        }\n      }\n    }\n  }\n": types.SetPriorityActiveDocument,
    "\n  mutation SetPriorityActivity($priorityId: ID!, $active: Boolean!) {\n    updatePriority(id: $priorityId, data: { active: $active }) {\n      data {\n        id\n      }\n    }\n  }\n": types.SetPriorityActivityDocument,
    "\n  mutation UploadFile($file: Upload!, $entryId: ID!, $contentType: String!, $field: String!) {\n    upload(file: $file, refId: $entryId, ref: $contentType, field: $field) {\n      data {\n        id\n        attributes {\n          name\n        }\n      }\n    }\n  }\n": types.UploadFileDocument,
    "\n  mutation UploadImage($file: Upload!) {\n    upload(file: $file) {\n      data {\n        id\n        attributes {\n          name\n        }\n      }\n    }\n  }\n": types.UploadImageDocument,
    "\n  query ActivePriorities {\n    priorities(filters: { active: { eq: true } }) {\n      data {\n        id\n        attributes {\n          title\n          weeklyGoal\n          image {\n            data {\n              attributes {\n                name\n                url\n                alternativeText\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.ActivePrioritiesDocument,
    "\n  query DailyMoodsCalender {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood\n          strongEmotions {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n": types.DailyMoodsCalenderDocument,
    "\n  query DailyMoodSummary($dailyMoodId: ID!) {\n    dailyMood(id: $dailyMoodId) {\n      data {\n        attributes {\n          mood\n          note {\n            data {\n              id\n              attributes {\n                text\n              }\n            }\n          }\n          satisfiedPriorities {\n            data {\n              id\n              attributes {\n                priority {\n                  data {\n                    id\n                    attributes {\n                      title\n                      image {\n                        data {\n                          id\n                          attributes {\n                            name\n                            alternativeText\n                            url\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n          strongEmotions {\n            data {\n              id\n              attributes {\n                emotions {\n                  data {\n                    id\n                    attributes {\n                      name\n                    }\n                  }\n                }\n                note {\n                  data {\n                    id\n                    attributes {\n                      text\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.DailyMoodSummaryDocument,
    "\n  query Emotion($emotionId: ID!) {\n    strongEmotion(id: $emotionId) {\n      data {\n        id\n        attributes {\n          emotions {\n            data {\n              id\n              attributes {\n                name\n              }\n            }\n          }\n          note {\n            data {\n              id\n              attributes {\n                text\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.EmotionDocument,
    "\n  query EmotionsByType($emotionType: String!) {\n    emotions(filters: { emotionType: { eqi: $emotionType } }) {\n      data {\n        id\n        attributes {\n          name\n        }\n      }\n    }\n  }\n": types.EmotionsByTypeDocument,
    "\n  query DailyMoodsGraph {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood\n        }\n      }\n    }\n  }\n": types.DailyMoodsGraphDocument,
    "\n  query DailyMoodHasNote($dailyMoodId: ID!) {\n    dailyMood(id: $dailyMoodId) {\n      data {\n        attributes {\n          note {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n": types.DailyMoodHasNoteDocument,
    "\n  query Note($noteId: ID!) {\n    note(id: $noteId) {\n      data {\n        id\n        attributes {\n          text\n          createdAt\n        }\n      }\n    }\n  }\n": types.NoteDocument,
    "\n  query Priorities {\n    priorities(sort: \"updatedAt\") {\n      data {\n        id\n        attributes {\n          active\n        }\n      }\n    }\n  }\n": types.PrioritiesDocument,
    "\n  query Priority($priorityId: ID!) {\n    priority(id: $priorityId) {\n      data {\n        id\n        attributes {\n          title\n          weeklyGoal\n          image {\n            data {\n              attributes {\n                alternativeText\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.PriorityDocument,
    "\n  query RecentNote($limit: Int) {\n    notes(sort: \"createdAt:DESC\", pagination: { limit: $limit }) {\n      data {\n        id\n        attributes {\n          text\n        }\n      }\n    }\n  }\n": types.RecentNoteDocument,
    "\n  query SatisfiedPrioritesBetween(\n    $priorityId: ID!\n    $beginDate: DateTime!\n    $endDate: DateTime!\n  ) {\n    satisfiedPriorities(\n      filters: {\n        priority: { id: { eq: $priorityId } }\n        dailyMood: {\n          createdAt: { gte: $beginDate, lt: $endDate }\n        }\n      }\n    ) {\n      data {\n        id\n      }\n    }\n  }\n": types.SatisfiedPrioritesBetweenDocument,
    "\n  query SatisfiedPrioritiesOfPriority($dailyMoodId: ID!, $priorityId: ID!) {\n    satisfiedPriorities(\n      filters: {\n        dailyMood: { id: { eq: $dailyMoodId } }\n        priority: { id: { eq: $priorityId } }\n      }\n    ) {\n      data {\n        id\n      }\n    }\n  }\n": types.SatisfiedPrioritiesOfPriorityDocument,
    "\n  query SatisfiedPriorities($dailyMoodId: ID!) {\n    dailyMood(id: $dailyMoodId) {\n      data {\n        attributes {\n          satisfiedPriorities(filters: { priority: { active: { eq: true } } }) {\n            data {\n              id\n              attributes {\n                priority {\n                  data {\n                    attributes {\n                      weeklyGoal\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.SatisfiedPrioritiesDocument,
    "\n  query SelectedMood($dailyMoodId: ID) {\n    dailyMood(id: $dailyMoodId) {\n      data {\n        attributes {\n          mood\n        }\n      }\n    }\n  }\n": types.SelectedMoodDocument,
    "\n      query Emotions {\n        emotions {\n          data {\n            id\n          }\n        }\n      }\n    ": types.EmotionsDocument,
    "\n          mutation CreateEmotion($emotion: EmotionInput!) {\n            createEmotion(data: $emotion) {\n              data {\n                id\n              }\n            }\n          }\n        ": types.CreateEmotionDocument,
    "\n      query DailyMoodsBetween($startDate: DateTime!, $endDate: DateTime!) {\n        dailyMoods(filters: { createdAt: { gte: $startDate, lt: $endDate } }) {\n          data {\n            id\n          }\n        }\n      }\n    ": types.DailyMoodsBetweenDocument,
    "\n        mutation CreateDailyMood($dailyMoodInput: DailyMoodInput!) {\n          createDailyMood(data: $dailyMoodInput) {\n            data {\n              id\n            }\n          }\n        }\n      ": types.CreateDailyMoodDocument,
};

export function graphql(source: "\n  mutation CreateNote($note: NoteInput!) {\n    createNote(data: $note) {\n      data {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateNote($note: NoteInput!) {\n    createNote(data: $note) {\n      data {\n        id\n      }\n    }\n  }\n"];
export function graphql(source: "\n  mutation CreatePriority($priority: PriorityInput!) {\n    createPriority(data: $priority) {\n      data {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePriority($priority: PriorityInput!) {\n    createPriority(data: $priority) {\n      data {\n        id\n      }\n    }\n  }\n"];
export function graphql(source: "\n  mutation CreateSatisfiedPriority($satisfiedPriority: SatisfiedPriorityInput!) {\n    createSatisfiedPriority(data: $satisfiedPriority) {\n      data {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateSatisfiedPriority($satisfiedPriority: SatisfiedPriorityInput!) {\n    createSatisfiedPriority(data: $satisfiedPriority) {\n      data {\n        id\n      }\n    }\n  }\n"];
export function graphql(source: "\n  mutation CreateStrongEmotion($strongEmotion: StrongEmotionInput!) {\n    createStrongEmotion(data: $strongEmotion) {\n      data {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateStrongEmotion($strongEmotion: StrongEmotionInput!) {\n    createStrongEmotion(data: $strongEmotion) {\n      data {\n        id\n      }\n    }\n  }\n"];
export function graphql(source: "\n  mutation RemoveSatisfiedPriority($satisfiedPriorityId: ID!) {\n    deleteSatisfiedPriority(id: $satisfiedPriorityId) {\n      data {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation RemoveSatisfiedPriority($satisfiedPriorityId: ID!) {\n    deleteSatisfiedPriority(id: $satisfiedPriorityId) {\n      data {\n        id\n      }\n    }\n  }\n"];
export function graphql(source: "\n  mutation SetMood($dailyMoodId: ID!, $dailyMoodInput: DailyMoodInput!) {\n    updateDailyMood(id: $dailyMoodId, data: $dailyMoodInput) {\n      data {\n        attributes {\n          mood\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation SetMood($dailyMoodId: ID!, $dailyMoodInput: DailyMoodInput!) {\n    updateDailyMood(id: $dailyMoodId, data: $dailyMoodInput) {\n      data {\n        attributes {\n          mood\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  mutation UpdateDailyMood($dailyMoodId: ID!, $dailyMoodInput: DailyMoodInput!) {\n    updateDailyMood(id: $dailyMoodId, data: $dailyMoodInput) {\n      data {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateDailyMood($dailyMoodId: ID!, $dailyMoodInput: DailyMoodInput!) {\n    updateDailyMood(id: $dailyMoodId, data: $dailyMoodInput) {\n      data {\n        id\n      }\n    }\n  }\n"];
export function graphql(source: "\n  mutation SetPriorityActive($priorityId: ID!, $priorityInput: PriorityInput!) {\n    updatePriority(id: $priorityId, data: $priorityInput) {\n      data {\n        attributes {\n          active\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation SetPriorityActive($priorityId: ID!, $priorityInput: PriorityInput!) {\n    updatePriority(id: $priorityId, data: $priorityInput) {\n      data {\n        attributes {\n          active\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  mutation SetPriorityActivity($priorityId: ID!, $active: Boolean!) {\n    updatePriority(id: $priorityId, data: { active: $active }) {\n      data {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation SetPriorityActivity($priorityId: ID!, $active: Boolean!) {\n    updatePriority(id: $priorityId, data: { active: $active }) {\n      data {\n        id\n      }\n    }\n  }\n"];
export function graphql(source: "\n  mutation UploadFile($file: Upload!, $entryId: ID!, $contentType: String!, $field: String!) {\n    upload(file: $file, refId: $entryId, ref: $contentType, field: $field) {\n      data {\n        id\n        attributes {\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UploadFile($file: Upload!, $entryId: ID!, $contentType: String!, $field: String!) {\n    upload(file: $file, refId: $entryId, ref: $contentType, field: $field) {\n      data {\n        id\n        attributes {\n          name\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  mutation UploadImage($file: Upload!) {\n    upload(file: $file) {\n      data {\n        id\n        attributes {\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UploadImage($file: Upload!) {\n    upload(file: $file) {\n      data {\n        id\n        attributes {\n          name\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query ActivePriorities {\n    priorities(filters: { active: { eq: true } }) {\n      data {\n        id\n        attributes {\n          title\n          weeklyGoal\n          image {\n            data {\n              attributes {\n                name\n                url\n                alternativeText\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ActivePriorities {\n    priorities(filters: { active: { eq: true } }) {\n      data {\n        id\n        attributes {\n          title\n          weeklyGoal\n          image {\n            data {\n              attributes {\n                name\n                url\n                alternativeText\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query DailyMoodsCalender {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood\n          strongEmotions {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query DailyMoodsCalender {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood\n          strongEmotions {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query DailyMoodSummary($dailyMoodId: ID!) {\n    dailyMood(id: $dailyMoodId) {\n      data {\n        attributes {\n          mood\n          note {\n            data {\n              id\n              attributes {\n                text\n              }\n            }\n          }\n          satisfiedPriorities {\n            data {\n              id\n              attributes {\n                priority {\n                  data {\n                    id\n                    attributes {\n                      title\n                      image {\n                        data {\n                          id\n                          attributes {\n                            name\n                            alternativeText\n                            url\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n          strongEmotions {\n            data {\n              id\n              attributes {\n                emotions {\n                  data {\n                    id\n                    attributes {\n                      name\n                    }\n                  }\n                }\n                note {\n                  data {\n                    id\n                    attributes {\n                      text\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query DailyMoodSummary($dailyMoodId: ID!) {\n    dailyMood(id: $dailyMoodId) {\n      data {\n        attributes {\n          mood\n          note {\n            data {\n              id\n              attributes {\n                text\n              }\n            }\n          }\n          satisfiedPriorities {\n            data {\n              id\n              attributes {\n                priority {\n                  data {\n                    id\n                    attributes {\n                      title\n                      image {\n                        data {\n                          id\n                          attributes {\n                            name\n                            alternativeText\n                            url\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n          strongEmotions {\n            data {\n              id\n              attributes {\n                emotions {\n                  data {\n                    id\n                    attributes {\n                      name\n                    }\n                  }\n                }\n                note {\n                  data {\n                    id\n                    attributes {\n                      text\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query Emotion($emotionId: ID!) {\n    strongEmotion(id: $emotionId) {\n      data {\n        id\n        attributes {\n          emotions {\n            data {\n              id\n              attributes {\n                name\n              }\n            }\n          }\n          note {\n            data {\n              id\n              attributes {\n                text\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Emotion($emotionId: ID!) {\n    strongEmotion(id: $emotionId) {\n      data {\n        id\n        attributes {\n          emotions {\n            data {\n              id\n              attributes {\n                name\n              }\n            }\n          }\n          note {\n            data {\n              id\n              attributes {\n                text\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query EmotionsByType($emotionType: String!) {\n    emotions(filters: { emotionType: { eqi: $emotionType } }) {\n      data {\n        id\n        attributes {\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query EmotionsByType($emotionType: String!) {\n    emotions(filters: { emotionType: { eqi: $emotionType } }) {\n      data {\n        id\n        attributes {\n          name\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query DailyMoodsGraph {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query DailyMoodsGraph {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query DailyMoodHasNote($dailyMoodId: ID!) {\n    dailyMood(id: $dailyMoodId) {\n      data {\n        attributes {\n          note {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query DailyMoodHasNote($dailyMoodId: ID!) {\n    dailyMood(id: $dailyMoodId) {\n      data {\n        attributes {\n          note {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query Note($noteId: ID!) {\n    note(id: $noteId) {\n      data {\n        id\n        attributes {\n          text\n          createdAt\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Note($noteId: ID!) {\n    note(id: $noteId) {\n      data {\n        id\n        attributes {\n          text\n          createdAt\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query Priorities {\n    priorities(sort: \"updatedAt\") {\n      data {\n        id\n        attributes {\n          active\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Priorities {\n    priorities(sort: \"updatedAt\") {\n      data {\n        id\n        attributes {\n          active\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query Priority($priorityId: ID!) {\n    priority(id: $priorityId) {\n      data {\n        id\n        attributes {\n          title\n          weeklyGoal\n          image {\n            data {\n              attributes {\n                alternativeText\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Priority($priorityId: ID!) {\n    priority(id: $priorityId) {\n      data {\n        id\n        attributes {\n          title\n          weeklyGoal\n          image {\n            data {\n              attributes {\n                alternativeText\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query RecentNote($limit: Int) {\n    notes(sort: \"createdAt:DESC\", pagination: { limit: $limit }) {\n      data {\n        id\n        attributes {\n          text\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query RecentNote($limit: Int) {\n    notes(sort: \"createdAt:DESC\", pagination: { limit: $limit }) {\n      data {\n        id\n        attributes {\n          text\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query SatisfiedPrioritesBetween(\n    $priorityId: ID!\n    $beginDate: DateTime!\n    $endDate: DateTime!\n  ) {\n    satisfiedPriorities(\n      filters: {\n        priority: { id: { eq: $priorityId } }\n        dailyMood: {\n          createdAt: { gte: $beginDate, lt: $endDate }\n        }\n      }\n    ) {\n      data {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query SatisfiedPrioritesBetween(\n    $priorityId: ID!\n    $beginDate: DateTime!\n    $endDate: DateTime!\n  ) {\n    satisfiedPriorities(\n      filters: {\n        priority: { id: { eq: $priorityId } }\n        dailyMood: {\n          createdAt: { gte: $beginDate, lt: $endDate }\n        }\n      }\n    ) {\n      data {\n        id\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query SatisfiedPrioritiesOfPriority($dailyMoodId: ID!, $priorityId: ID!) {\n    satisfiedPriorities(\n      filters: {\n        dailyMood: { id: { eq: $dailyMoodId } }\n        priority: { id: { eq: $priorityId } }\n      }\n    ) {\n      data {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query SatisfiedPrioritiesOfPriority($dailyMoodId: ID!, $priorityId: ID!) {\n    satisfiedPriorities(\n      filters: {\n        dailyMood: { id: { eq: $dailyMoodId } }\n        priority: { id: { eq: $priorityId } }\n      }\n    ) {\n      data {\n        id\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query SatisfiedPriorities($dailyMoodId: ID!) {\n    dailyMood(id: $dailyMoodId) {\n      data {\n        attributes {\n          satisfiedPriorities(filters: { priority: { active: { eq: true } } }) {\n            data {\n              id\n              attributes {\n                priority {\n                  data {\n                    attributes {\n                      weeklyGoal\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query SatisfiedPriorities($dailyMoodId: ID!) {\n    dailyMood(id: $dailyMoodId) {\n      data {\n        attributes {\n          satisfiedPriorities(filters: { priority: { active: { eq: true } } }) {\n            data {\n              id\n              attributes {\n                priority {\n                  data {\n                    attributes {\n                      weeklyGoal\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query SelectedMood($dailyMoodId: ID) {\n    dailyMood(id: $dailyMoodId) {\n      data {\n        attributes {\n          mood\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query SelectedMood($dailyMoodId: ID) {\n    dailyMood(id: $dailyMoodId) {\n      data {\n        attributes {\n          mood\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n      query Emotions {\n        emotions {\n          data {\n            id\n          }\n        }\n      }\n    "): (typeof documents)["\n      query Emotions {\n        emotions {\n          data {\n            id\n          }\n        }\n      }\n    "];
export function graphql(source: "\n          mutation CreateEmotion($emotion: EmotionInput!) {\n            createEmotion(data: $emotion) {\n              data {\n                id\n              }\n            }\n          }\n        "): (typeof documents)["\n          mutation CreateEmotion($emotion: EmotionInput!) {\n            createEmotion(data: $emotion) {\n              data {\n                id\n              }\n            }\n          }\n        "];
export function graphql(source: "\n      query DailyMoodsBetween($startDate: DateTime!, $endDate: DateTime!) {\n        dailyMoods(filters: { createdAt: { gte: $startDate, lt: $endDate } }) {\n          data {\n            id\n          }\n        }\n      }\n    "): (typeof documents)["\n      query DailyMoodsBetween($startDate: DateTime!, $endDate: DateTime!) {\n        dailyMoods(filters: { createdAt: { gte: $startDate, lt: $endDate } }) {\n          data {\n            id\n          }\n        }\n      }\n    "];
export function graphql(source: "\n        mutation CreateDailyMood($dailyMoodInput: DailyMoodInput!) {\n          createDailyMood(data: $dailyMoodInput) {\n            data {\n              id\n            }\n          }\n        }\n      "): (typeof documents)["\n        mutation CreateDailyMood($dailyMoodInput: DailyMoodInput!) {\n          createDailyMood(data: $dailyMoodInput) {\n            data {\n              id\n            }\n          }\n        }\n      "];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;