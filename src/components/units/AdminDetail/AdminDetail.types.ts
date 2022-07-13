import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IAdminDetailUIProps {
  data: any;
  address: string;
  zipcode: string;
  latLng: Array;
  carCategoryOp: Object;
  selected: string;
  carModel: Array;
  fixCarName: string;
  setSelected: Dispatch<SetStateAction<string>>;
  selectedChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  fixCarNameChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleComplete: (data: any) => void;
  setLatlng: Dispatch<SetStateAction<never[]>>;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePrice: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContractPeriod: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickApprove: () => void;
  onClickRefuse: () => void;
}
