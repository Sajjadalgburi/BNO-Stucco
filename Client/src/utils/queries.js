import { gql } from '@apollo/client';

export const GET_HOUSE_IMAGES = gql`
  query getHouseImages {
    getHouseImages {
      ETag
      ImgURL
    }
  }
`;
