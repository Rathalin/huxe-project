/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  mutation CreateEmDailyMood($dailyMoodInput: DailyMoodInput!) {\n    createDailyMood(data: $dailyMoodInput) {\n      data {\n        id\n      }\n    }\n  }\n": types.CreateEmDailyMoodDocument,
    "\n  mutation SetMood($dailyMoodId: ID!, $dailyMoodInput: DailyMoodInput!) {\n    updateDailyMood(id: $dailyMoodId, data: $dailyMoodInput) {\n      data {\n        attributes {\n          mood\n        }\n      }\n    }\n  }\n": types.SetMoodDocument,
    "\n  query DailyMoodsCalender {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood\n          strongEmotions {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n": types.DailyMoodsCalenderDocument,
    "\n  query DailyMoodsBetween($startDate: DateTime!, $endDate: DateTime!) {\n    dailyMoods(filters: { createdAt: { gte: $startDate, lt: $endDate } }) {\n      data {\n        id\n      }\n    }\n  }\n": types.DailyMoodsBetweenDocument,
    "\n  query DailyMoods {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          mood\n        }\n      }\n    }\n  }\n": types.DailyMoodsDocument,
    "\n  query EmotionsByType($emotionType: String!) {\n    emotions(filters: { emotionType: { eqi: $emotionType } }) {\n      data {\n        attributes {\n          name\n        }\n      }\n    }\n  }\n": types.EmotionsByTypeDocument,
    "\n  query DailyMoodsGraph {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood\n        }\n      }\n    }\n  }\n": types.DailyMoodsGraphDocument,
    "\n  query SelectedMood($dailyMoodId: ID) {\n    dailyMood(id: $dailyMoodId) {\n      data {\n        attributes {\n          mood\n        }\n      }\n    }\n  }\n": types.SelectedMoodDocument,
};

export function graphql(source: "\n  mutation CreateEmDailyMood($dailyMoodInput: DailyMoodInput!) {\n    createDailyMood(data: $dailyMoodInput) {\n      data {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateEmDailyMood($dailyMoodInput: DailyMoodInput!) {\n    createDailyMood(data: $dailyMoodInput) {\n      data {\n        id\n      }\n    }\n  }\n"];
export function graphql(source: "\n  mutation SetMood($dailyMoodId: ID!, $dailyMoodInput: DailyMoodInput!) {\n    updateDailyMood(id: $dailyMoodId, data: $dailyMoodInput) {\n      data {\n        attributes {\n          mood\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation SetMood($dailyMoodId: ID!, $dailyMoodInput: DailyMoodInput!) {\n    updateDailyMood(id: $dailyMoodId, data: $dailyMoodInput) {\n      data {\n        attributes {\n          mood\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query DailyMoodsCalender {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood\n          strongEmotions {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query DailyMoodsCalender {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood\n          strongEmotions {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query DailyMoodsBetween($startDate: DateTime!, $endDate: DateTime!) {\n    dailyMoods(filters: { createdAt: { gte: $startDate, lt: $endDate } }) {\n      data {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query DailyMoodsBetween($startDate: DateTime!, $endDate: DateTime!) {\n    dailyMoods(filters: { createdAt: { gte: $startDate, lt: $endDate } }) {\n      data {\n        id\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query DailyMoods {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          mood\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query DailyMoods {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          mood\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query EmotionsByType($emotionType: String!) {\n    emotions(filters: { emotionType: { eqi: $emotionType } }) {\n      data {\n        attributes {\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query EmotionsByType($emotionType: String!) {\n    emotions(filters: { emotionType: { eqi: $emotionType } }) {\n      data {\n        attributes {\n          name\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query DailyMoodsGraph {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query DailyMoodsGraph {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query SelectedMood($dailyMoodId: ID) {\n    dailyMood(id: $dailyMoodId) {\n      data {\n        attributes {\n          mood\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query SelectedMood($dailyMoodId: ID) {\n    dailyMood(id: $dailyMoodId) {\n      data {\n        attributes {\n          mood\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;