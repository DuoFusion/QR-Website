import { Button } from "antd";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { FC } from "react";
import { Mutations } from "../../api";
import { InquiryFormValues } from "../../types";
import { InquiriesSchema } from "../../utils/validationSchemas";

const Inquiries: FC<{ id?: string }> = ({ id }) => {
  const { mutate: createInquiries, isPending: isProductInquiries } = Mutations.useInquiry();
  const handleSubmit = async (values: InquiryFormValues, { resetForm }: FormikHelpers<InquiryFormValues>) => {
    const payload = {
      ...(id && { settingId: id }),
      ...(values.name && { name: values.name }),
      ...(values.email && { email: values.email }),
      ...(values.message && { message: values.message }),
      ...(values.phone && { phone: values.phone }),
    };

    createInquiries(payload, {
      onSuccess: () => {
        resetForm();
      },
    });
  };

  return (
    <div className="px-4 pb-24">
      <h2 className="text-3xl font-light text-primary mb-4 text-center">Inquiries</h2>
      <Formik<InquiryFormValues>
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={InquiriesSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <Form className="space-y-6 bg-white rounded-lg shadow-lg p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                      <i className="far fa-user"></i>
                    </span>
                    <Field name="name" type="text" placeholder="Your Name" className={`flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border focus:ring-blue-500 focus:border-blue-500 ${touched.name && errors.name ? "border-red-500" : "border-gray-300"}`} />
                  </div>
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                      <i className="far fa-envelope"></i>
                    </span>
                    <Field name="email" type="email" placeholder="Email Address" className={`flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border focus:ring-blue-500 focus:border-blue-500 ${touched.email && errors.email ? "border-red-500" : "border-gray-300"}`} />
                  </div>
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone<span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                      <i className="fas fa-phone"></i>
                    </span>
                    <Field name="phone" type="tel" placeholder="Enter Phone Number" className={`flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border focus:ring-blue-500 focus:border-blue-500 ${touched.phone && errors.phone ? "border-red-500" : "border-gray-300"}`} />
                  </div>
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <Field as="textarea" name="message" rows={8} placeholder="Type a message here..." className={`block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${touched.message && errors.message ? "border-red-500" : "border-gray-300"}`} />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
              </div>
            </div>

            {/* Submit */}
            <div className="text-center">
              <Button htmlType="submit" type="primary" style={{ backgroundColor: "var(--primary)" }} className="bg-primary text-white px-8 py-3 rounded-lg transition-colors font-medium" loading={isProductInquiries}>
                Send Message
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Inquiries;
