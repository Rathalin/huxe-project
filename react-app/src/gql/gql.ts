/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n      query MoodPriority {\n        moodPriorities {\n          data {\n            attributes {\n              Title\n              IconName\n              WeeklyGoal\n              Test\n            }\n          }\n        }\n      }\n    ": types.MoodPriorityDocument,
};

export function graphql(source: "\n      query MoodPriority {\n        moodPriorities {\n          data {\n            attributes {\n              Title\n              IconName\n              WeeklyGoal\n              Test\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query MoodPriority {\n        moodPriorities {\n          data {\n            attributes {\n              Title\n              IconName\n              WeeklyGoal\n              Test\n            }\n          }\n        }\n      }\n    "];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;