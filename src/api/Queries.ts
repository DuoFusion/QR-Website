import { KEYS, URL_KEYS } from "../constants";
import { Params, SettingApiResponse } from "../types";
import { ProductApiResponse } from "../types/Product";
// import { Params, UserDataApiResponse } from "../types";
import Get from "./Get";
import { useApiGet } from "./hooks";

const Queries = {
  // ************ User ***********
  useGetUserSetting: (params: Params) => useApiGet<SettingApiResponse>([KEYS.USER_SETTING.ALL_USER_SETTING, params], () => Get(URL_KEYS.UserSetting.GetAllUserSetting, params)),

  // ************ Product ***********
  useGetProduct: (params: Params) => useApiGet<ProductApiResponse>([KEYS.PRODUCT.ALL_PRODUCT, params], () => Get(URL_KEYS.Product.GetAllProduct, params)),
};

export default Queries;
