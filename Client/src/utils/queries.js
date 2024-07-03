import { gql } from '@apollo/client';

export const GET_HOUSE_IMAGES = gql`
  query getHouseImages {
    getHouseImages {
      ETag
      ImgURL
    }
  }
`;

export const GET_MATERIAL_IMAGES = gql`
  query getMaterialImages {
    getMaterialImages {
      ETag
      ImgURL
    }
  }
`;
