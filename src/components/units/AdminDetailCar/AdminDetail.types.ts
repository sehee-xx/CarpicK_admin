import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IAdminDetailUIProps {
  data: any;
  address: string;
  zipcode: string;
  latLng: any;
  carCategoryOp: Object;
  selected: string;
  carModel: any;
  fixCarName: string;
  updateCarCategory: string;
  updateCarModel: string;
  contractStart: Date;
  contractEnd: Date;
  setSelected: Dispatch<SetStateAction<string>>;
  selectedChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  fixCarNameChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleComplete: (data: any) => void;
  setLatlng: Dispatch<SetStateAction<never[]>>;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePrice: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContractPeriod: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddCarCategory: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddCarModel: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickStop: () => void;
  onClickRestart: () => void;
  onClickRefresh: () => void;
  onClickAddCarCategory: () => void;
  onClickDeleteCarCategory: () => void;
  setContractStart: Dispatch<SetStateAction<Date>>;
  setContractEnd: Dispatch<SetStateAction<Date>>;
}
