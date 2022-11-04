/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query DailyMoodsCalender {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood {\n            data {\n              attributes {\n                iconName\n              }\n            }\n          }\n          strong_emotions {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n": types.DailyMoodsCalenderDocument,
    "\n  query DailyMoods {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          mood {\n            data {\n              attributes {\n                iconName\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.DailyMoodsDocument,
    "\n  query DailyMoodsGraph {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood {\n            data {\n              attributes {\n                iconName\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.DailyMoodsGraphDocument,
};

export function graphql(source: "\n  query DailyMoodsCalender {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood {\n            data {\n              attributes {\n                iconName\n              }\n            }\n          }\n          strong_emotions {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query DailyMoodsCalender {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood {\n            data {\n              attributes {\n                iconName\n              }\n            }\n          }\n          strong_emotions {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query DailyMoods {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          mood {\n            data {\n              attributes {\n                iconName\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query DailyMoods {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          mood {\n            data {\n              attributes {\n                iconName\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query DailyMoodsGraph {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood {\n            data {\n              attributes {\n                iconName\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query DailyMoodsGraph {\n    dailyMoods {\n      data {\n        id\n        attributes {\n          createdAt\n          mood {\n            data {\n              attributes {\n                iconName\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;