/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n    mutation Login($input: UsersPermissionsLoginInput!) {\n      login(input: $input) {\n        user {\n          username\n        }\n        jwt\n      }\n    }\n  ": types.LoginDocument,
    "\n    query MoodPriority {\n      moodPriorities {\n        data {\n          attributes {\n            Title\n            IconName\n            WeeklyGoal\n            Notes {\n              data {\n                attributes {\n                  Text\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ": types.MoodPriorityDocument,
};

export function graphql(source: "\n    mutation Login($input: UsersPermissionsLoginInput!) {\n      login(input: $input) {\n        user {\n          username\n        }\n        jwt\n      }\n    }\n  "): (typeof documents)["\n    mutation Login($input: UsersPermissionsLoginInput!) {\n      login(input: $input) {\n        user {\n          username\n        }\n        jwt\n      }\n    }\n  "];
export function graphql(source: "\n    query MoodPriority {\n      moodPriorities {\n        data {\n          attributes {\n            Title\n            IconName\n            WeeklyGoal\n            Notes {\n              data {\n                attributes {\n                  Text\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query MoodPriority {\n      moodPriorities {\n        data {\n          attributes {\n            Title\n            IconName\n            WeeklyGoal\n            Notes {\n              data {\n                attributes {\n                  Text\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;