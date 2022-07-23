import { ApolloQueryResult, OperationVariables } from "@apollo/client";

export interface IAdminUIProps {
  data: any;
  count?: number;
  statusSelect: string;
  onClickMoveToRegistrationDetail: (el: any) => void;
  onClickMoveToCarDetail: (el: any) => void;
  refetch(
    variables?: Partial<OperationVariables> | undefined
  ): Promise<ApolloQueryResult<any>>;
  refetchCarRegistrationCount: (
    variables: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<any>>;
  StatusChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  // onClickMoveToPass: () => void;
}
