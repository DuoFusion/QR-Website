import { PageState, SettingType, UserType } from "./Setting";

export interface ProductFormValues {
  image?: string ;
  name?: string;
  description?: string;
  price?: string;
  category?: string;
  userId?: string;
  settingId?: string;
}

export interface ProductType extends Omit<Required<ProductFormValues>, "userId" | "settingId"> {
  _id: string;
  userId: UserType;
  settingId: SettingType;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductDataResponse {
  product_data: ProductType[];
  totalData: number;
  state: PageState;
}

export interface ProductApiResponse {
  data: ProductDataResponse;
  status: number;
  message: string;
  error: Record<string, any>;
}
