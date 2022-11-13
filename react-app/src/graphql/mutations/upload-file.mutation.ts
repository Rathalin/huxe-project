import { graphql } from "../generated";

export const UPLOAD_FILE_MUTATION = graphql(`
  mutation UploadFile($file: Upload!, $entryId: ID!, $contentType: String!, $field: String!) {
    upload(file: $file, refId: $entryId, ref: $contentType, field: $field) {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`);
