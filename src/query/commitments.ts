import { Commitment } from '../state/atoms';

export interface CommitmentsQuery {
  commitments: Commitment[];
}

export const CommitmentsQueryDocument = /* GraphQL */ `
  query Commitments($lastLeafIndex: Int, $contractAddress: String!) {
    commitments(
      orderBy: leafIndex
      contractAddress: $contractAddress
      where: { leafIndex_gt: $lastLeafIndex }
    ) {
      leafIndex
      commitment
      sender
    }
  }
`;
