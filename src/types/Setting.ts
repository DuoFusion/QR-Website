export interface SettingFormValues {
  title?: string;
  weburl?: string;
  email?: string;
  phoneNumber?: string;
  content?: string;
  address?: string;
  userId?: string;
  facebook?: string;
  instagram?: string;
  whatsapp?: string;
  location?: string;
  qrCode?: string;
  logoImage?: string;
  bannerImage?: string;
  primary?: string;
  secondary?: string;
  backgroundColor?: string;
}

export interface SocialLinks {
  whatsapp: string;
  instagram: string;
  facebook: string;
  location: string;
}

export interface PageState {
  page: number;
  limit: number;
  page_limit: number;
}

export interface UserPayload {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  password?: string;
  email?: string;
  link?: string;
  address?: string;
}

export interface UserType extends Required<UserPayload> {
  _id: string;
  role: "admin" | "user";
  password: string;
  otp?: number | null;
  otpExpireTime?: string | null;
  isEmailVerified: boolean;
  isDeleted: boolean;
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface ProductType {
  _id: string;
  image: string;
  name: string;
  description: string;
  price: string;
  category: string;
}

export interface SettingType extends Omit<Required<SettingFormValues>, "userId"> {
  _id: string;
  userId: UserType;
  productId: ProductType;
  socialLinks: SocialLinks;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SettingDataResponse {
  setting_data: SettingType[];
  totalData: number;
  state: PageState;
}

export interface SettingApiResponse {
  data: SettingDataResponse;
  status: number;
  message: string;
  error: Record<string, any>;
}
