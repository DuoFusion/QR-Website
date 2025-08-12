import { KEYS, URL_KEYS } from "../constants";
import { InquiryFormValues, OrderFormValues } from "../types";
import { useApiPost } from "./hooks";
import Post from "./Post";

const Mutations = {
  // ************ Inquiry ***********
  useInquiry: () => useApiPost<InquiryFormValues, void>([KEYS.INQUIRY.ADD_INQUIRY], (input) => Post(URL_KEYS.Inquiry.Add, input)),

  // ************ Order ***********
  useOrder: () => useApiPost<OrderFormValues, void>([KEYS.ORDER.ADD_ORDER], (input) => Post(URL_KEYS.Order.Add, input)),
};

export default Mutations;
