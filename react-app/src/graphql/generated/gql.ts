/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  mutation CreateNote($note: NoteInput!) {\n    createNote(data: $note) {\n      data {\n        id\n      }\n    }\n  }\n": types.CreateNoteDocument,
    "\n  mutation SetMood($dailyMoodId: ID!, $dailyMoodInput: DailyMoodInput!) {\n    updateDailyMood(id: $dailyMoodId, data: $dailyMoodInput) {\n      data {\n        attributes {\n          mood\n        }\n      }\n    }\n  }\n": types.SetMoodDocument,
    "\n  mutation UpdateDailyMood($dailyMoodId: ID!, $dailyMoodInput: DailyMoodInput!) {\n    updateDailyMood(id: $dailyMoodId, data: $dailyMoodInput) {\n      data {\n        id\n      }\n    }\n  }\n": types.UpdateDailyMoodDocument,
    "\n  query DailyMoodsCalender {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood\n          strongEmotions {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n": types.DailyMoodsCalenderDocument,
    "\n  query EmotionsByType($emotionType: String!) {\n    emotions(filters: { emotionType: { eqi: $emotionType } }) {\n      data {\n        attributes {\n          name\n        }\n      }\n    }\n  }\n": types.EmotionsByTypeDocument,
    "\n  query DailyMoodsGraph {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood\n        }\n      }\n    }\n  }\n": types.DailyMoodsGraphDocument,
    "\n  query DailyMoodHasNote($dailyMoodId: ID!) {\n    dailyMood(id: $dailyMoodId) {\n      data {\n        attributes {\n          note {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n": types.DailyMoodHasNoteDocument,
    "\n  query Note($noteId: ID!) {\n    note(id: $noteId) {\n      data {\n        id\n        attributes {\n          text\n          createdAt\n        }\n      }\n    }\n  }\n": types.NoteDocument,
    "\n  query RecentNote($limit: Int) {\n    notes(sort: \"createdAt:DESC\", pagination: { limit: $limit }) {\n      data {\n        id\n        attributes {\n          text\n        }\n      }\n    }\n  }\n": types.RecentNoteDocument,
    "\n  query SelectedMood($dailyMoodId: ID) {\n    dailyMood(id: $dailyMoodId) {\n      data {\n        attributes {\n          mood\n        }\n      }\n    }\n  }\n": types.SelectedMoodDocument,
    "\n      query Emotions {\n        emotions {\n          data {\n            id\n          }\n        }\n      }\n    ": types.EmotionsDocument,
    "\n          mutation CreateEmotion($emotion: EmotionInput!) {\n            createEmotion(data: $emotion) {\n              data {\n                id\n              }\n            }\n          }        \n        ": types.CreateEmotionDocument,
    "\n      query DailyMoodsBetween($startDate: DateTime!, $endDate: DateTime!) {\n        dailyMoods(filters: { createdAt: { gte: $startDate, lt: $endDate } }) {\n          data {\n            id\n          }\n        }\n      }\n    ": types.DailyMoodsBetweenDocument,
    "\n        mutation CreateEmDailyMood($dailyMoodInput: DailyMoodInput!) {\n          createDailyMood(data: $dailyMoodInput) {\n            data {\n              id\n            }\n          }\n        }\n      ": types.CreateEmDailyMoodDocument,
};

export function graphql(source: "\n  mutation CreateNote($note: NoteInput!) {\n    createNote(data: $note) {\n      data {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateNote($note: NoteInput!) {\n    createNote(data: $note) {\n      data {\n        id\n      }\n    }\n  }\n"];
export function graphql(source: "\n  mutation SetMood($dailyMoodId: ID!, $dailyMoodInput: DailyMoodInput!) {\n    updateDailyMood(id: $dailyMoodId, data: $dailyMoodInput) {\n      data {\n        attributes {\n          mood\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation SetMood($dailyMoodId: ID!, $dailyMoodInput: DailyMoodInput!) {\n    updateDailyMood(id: $dailyMoodId, data: $dailyMoodInput) {\n      data {\n        attributes {\n          mood\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  mutation UpdateDailyMood($dailyMoodId: ID!, $dailyMoodInput: DailyMoodInput!) {\n    updateDailyMood(id: $dailyMoodId, data: $dailyMoodInput) {\n      data {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateDailyMood($dailyMoodId: ID!, $dailyMoodInput: DailyMoodInput!) {\n    updateDailyMood(id: $dailyMoodId, data: $dailyMoodInput) {\n      data {\n        id\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query DailyMoodsCalender {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood\n          strongEmotions {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query DailyMoodsCalender {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood\n          strongEmotions {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query EmotionsByType($emotionType: String!) {\n    emotions(filters: { emotionType: { eqi: $emotionType } }) {\n      data {\n        attributes {\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query EmotionsByType($emotionType: String!) {\n    emotions(filters: { emotionType: { eqi: $emotionType } }) {\n      data {\n        attributes {\n          name\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query DailyMoodsGraph {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query DailyMoodsGraph {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query DailyMoodHasNote($dailyMoodId: ID!) {\n    dailyMood(id: $dailyMoodId) {\n      data {\n        attributes {\n          note {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query DailyMoodHasNote($dailyMoodId: ID!) {\n    dailyMood(id: $dailyMoodId) {\n      data {\n        attributes {\n          note {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query Note($noteId: ID!) {\n    note(id: $noteId) {\n      data {\n        id\n        attributes {\n          text\n          createdAt\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Note($noteId: ID!) {\n    note(id: $noteId) {\n      data {\n        id\n        attributes {\n          text\n          createdAt\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query RecentNote($limit: Int) {\n    notes(sort: \"createdAt:DESC\", pagination: { limit: $limit }) {\n      data {\n        id\n        attributes {\n          text\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query RecentNote($limit: Int) {\n    notes(sort: \"createdAt:DESC\", pagination: { limit: $limit }) {\n      data {\n        id\n        attributes {\n          text\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query SelectedMood($dailyMoodId: ID) {\n    dailyMood(id: $dailyMoodId) {\n      data {\n        attributes {\n          mood\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query SelectedMood($dailyMoodId: ID) {\n    dailyMood(id: $dailyMoodId) {\n      data {\n        attributes {\n          mood\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n      query Emotions {\n        emotions {\n          data {\n            id\n          }\n        }\n      }\n    "): (typeof documents)["\n      query Emotions {\n        emotions {\n          data {\n            id\n          }\n        }\n      }\n    "];
export function graphql(source: "\n          mutation CreateEmotion($emotion: EmotionInput!) {\n            createEmotion(data: $emotion) {\n              data {\n                id\n              }\n            }\n          }        \n        "): (typeof documents)["\n          mutation CreateEmotion($emotion: EmotionInput!) {\n            createEmotion(data: $emotion) {\n              data {\n                id\n              }\n            }\n          }        \n        "];
export function graphql(source: "\n      query DailyMoodsBetween($startDate: DateTime!, $endDate: DateTime!) {\n        dailyMoods(filters: { createdAt: { gte: $startDate, lt: $endDate } }) {\n          data {\n            id\n          }\n        }\n      }\n    "): (typeof documents)["\n      query DailyMoodsBetween($startDate: DateTime!, $endDate: DateTime!) {\n        dailyMoods(filters: { createdAt: { gte: $startDate, lt: $endDate } }) {\n          data {\n            id\n          }\n        }\n      }\n    "];
export function graphql(source: "\n        mutation CreateEmDailyMood($dailyMoodInput: DailyMoodInput!) {\n          createDailyMood(data: $dailyMoodInput) {\n            data {\n              id\n            }\n          }\n        }\n      "): (typeof documents)["\n        mutation CreateEmDailyMood($dailyMoodInput: DailyMoodInput!) {\n          createDailyMood(data: $dailyMoodInput) {\n            data {\n              id\n            }\n          }\n        }\n      "];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;