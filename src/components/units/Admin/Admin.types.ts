import { ApolloQueryResult, OperationVariables } from "@apollo/client";

export interface IAdminUIProps {
  data: any;
  onClickMoveToCarDetail: (el: any) => void;
  refetch(
    variables?: Partial<OperationVariables> | undefined
  ): Promise<ApolloQueryResult<any>>;
  count?: number;
}
