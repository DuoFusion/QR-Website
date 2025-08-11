import { KEYS, URL_KEYS } from "../constants";
// import { Params, UserDataApiResponse } from "../types";
import Get from "./Get";
import { useApiGet } from "./hooks";

const Queries = {
  // ************ User ***********
  // useGetUser: (params: Params) => useApiGet<UserDataApiResponse>([KEYS.USER.ALL_USER, params], () => Get(URL_KEYS.User.GetAllUser, params)),

};

export default Queries;
