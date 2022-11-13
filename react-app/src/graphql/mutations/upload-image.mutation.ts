import { graphql } from "../generated";

export const UPLOAD_IMAGE_MUTATION = graphql(`
  mutation UploadImage($file: Upload!) {
    upload(file: $file) {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`);
