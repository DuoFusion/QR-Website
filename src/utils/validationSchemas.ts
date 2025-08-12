import * as Yup from "yup";

export const InquiriesSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9\-+()\s]*$/, "Invalid phone number")
    .required("Phone is required"),
  message: Yup.string().required("Message is required"),
});

export const OrderSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("E-mail is invalid").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9\-+()\s]*$/, "phone number")
    .required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  paymentMethod: Yup.string().required("Payment Method is required."),
});
