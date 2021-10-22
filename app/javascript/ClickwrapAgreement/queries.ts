import { gql } from '@apollo/client';

export const ClickwrapAgreementQuery = gql`
  query ClickwrapAgreementQuery {
    convention: conventionByRequestHost {
      id
      name
      clickwrap_agreement_html

      my_profile {
        id
        accepted_clickwrap_agreement
      }
    }
  }
`;
