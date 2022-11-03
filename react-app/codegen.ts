import type { CodegenConfig } from '@graphql-codegen/cli';
import { GRAPHQL_ENDPOINT } from './src/graphql/endpoint';

const config: CodegenConfig = {
  overwrite: true,
  schema: GRAPHQL_ENDPOINT,
  documents: ['src/**/*.tsx', 'src/**/*.ts', '!src/graphql/generated/**/*'],
  generates: {
    './src/graphql/generated/': {
      preset: 'client',
      plugins: []
    }
  }
};

export default config;
