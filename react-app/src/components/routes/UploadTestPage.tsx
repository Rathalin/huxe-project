import { useMutation } from '@tanstack/react-query';
import request from 'graphql-request';
import { ChangeEvent, FormEvent, useState } from 'react';
import { GRAPHQL_ENDPOINT } from '../../graphql/endpoint';
import { graphql } from '../../graphql/generated';

/*
mutation Upload($file: Upload!, $entryId: ID!, $contentType: String!, $field: String!) {
  upload(file: $file, refId: $entryId, ref: $contentType, field: $field) {
    data {
      id
    }
  }
}
*/

export function UploadTestPage() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { mutate: upload } = useMutation({
    mutationKey: ['UPLOAD_IMAGE_MUTATION'],
    mutationFn: (file: any) => request(GRAPHQL_ENDPOINT, graphql(`
      mutation Upload($file: Upload!) {
        upload(file: $file) {
          data {
            id
          }
        }
      }
    `), {
      file
    }),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  function onFileChange(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target || !event.target.files || !event.target.files[0]) {
      console.log('Emtpy');
    } else {
      const file = event.target.files[0];
      console.log('Set image to ', file.name);
      setImageFile(file);
    }
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // const response = await fetch('http://localhost:1337/api/upload', {
    //   method: 'post',
    //   body: new FormData(event.currentTarget),
    // });

    if (imageFile != null) {
      upload(imageFile);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input type='file' name='files' accept='image/*' onChange={onFileChange} />
      <button type='submit'>Submit</button>
    </form>
  )
}
