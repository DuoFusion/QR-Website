import { Button } from "antd";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mutations, Queries } from "../../api";
import { ROUTES, STORAGE_KEYS } from "../../constants";
import { OrderFormValues } from "../../types";
import { OrderSchema } from "../../utils/validationSchemas";



const AllProduct = () => {
  const navigate = useNavigate();
  const { mutate: createOrder, isPending: isProductOrder } = Mutations.useOrder();
  const { data: All_PRODUCT } = Queries.useGetProduct({ settingFilter: STORAGE_KEYS.USER_SETTING.RADHIKA_JARI });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const selectedProduct = useMemo(() => All_PRODUCT?.data?.product_data.find((p) => p._id === selectedProductId) || null, [selectedProductId]);
  
  const { data } = Queries.useGetUserSetting({ settingFilter: STORAGE_KEYS.USER_SETTING.RADHIKA_JARI });

  const settings = data?.data?.setting_data?.[0];
  const primary = settings?.primary;
  const secondary = settings?.secondary;
  const backgroundColor = settings?.backgroundColor;

  useEffect(() => {
    if (primary && secondary && backgroundColor) {
      document.documentElement.style.setProperty("--primary", primary);
      document.documentElement.style.setProperty("--secondary", secondary);
      document.documentElement.style.setProperty("--container-body", backgroundColor);
    }
  }, [primary, secondary, backgroundColor]);

  const openModal = (productId: string) => {
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
  };

  const handleSubmit = (values: OrderFormValues, { resetForm }: FormikHelpers<OrderFormValues>) => {
    const payload = {
      ...(STORAGE_KEYS.USER_SETTING.RADHIKA_JARI && { settingId: STORAGE_KEYS.USER_SETTING.RADHIKA_JARI }),
      ...(selectedProductId && { productId: selectedProductId?.toString() }),
      ...(values.name && { name: values.name }),
      ...(values.email && { email: values.email }),
      ...(values.address && { address: values.address }),
      ...(values.paymentMethod && { paymentMethod: values.paymentMethod }),
      ...(values.phone && { phone: values.phone }),
      ...(selectedProduct?.price && { price: selectedProduct?.price }),
    };

    createOrder(payload, {
      onSuccess: () => {
        resetForm();
        closeModal();
      },
    });
  };

  return (
    <>
      <div className="container">
        <div className="min-h-screen bg-container-body">
          <div className="w-full mx-auto">
            {/* Header row */}
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h4 className="text-primary text-2xl sm:text-3xl font-semibold">Product</h4>
                <button type="button" onClick={() => navigate(ROUTES.RADHIKA_JARI.WEB)} className="btn bg-primary text-white px-4 py-2 rounded-md">
                  Back
                </button>
              </div>
            </div>

            {/* Products */}
            <div className="rounded-lg p-8">
              <h2 className="text-3xl font-light text-primary text-center">Products</h2>
              <div className="mt-8">
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={24}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  loop={true}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                  }}
                  className="!pb-12"
                >
                  {All_PRODUCT?.data?.product_data.map((product) => (
                    <SwiperSlide key={product._id}>
                      <div className="bg-white border border-gray-200 p-3 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-52 overflow-hidden">
                          <img src={product?.image ? product?.image : ""} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="mt-3">
                          <h3 className="text-lg font-light text-gray-950 mb-2">{product.name}</h3>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-3">{product.description}</p>
                          <span className="text-lg font-bold text-black">{product.price}</span>
                        </div>
                        <div className="mt-5 flex justify-center">
                          <button className="btn bg-primary text-white px-4 py-2 rounded-md" onClick={() => openModal(product?._id)}>
                            Acheter maintenant
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={closeModal} />

          <div className="relative bg-white rounded-lg shadow-xl w-11/12 sm:w-[520px] max-h-[90vh] overflow-y-auto modal-scroll">
            <div className="flex items-center justify-between p-4 border-b">
              <h5 className="text-lg font-semibold">Acheter un Product</h5>
              <button className="text-gray-500 hover:text-gray-700" onClick={closeModal} aria-label="Close">
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
            </div>
            <Formik<OrderFormValues>
              initialValues={{
                name: "",
                email: "",
                phone: "",
                address: "",
                paymentMethod: "",
              }}
              validationSchema={OrderSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="p-4">
                  {/* Name */}
                  <div className="mb-3">
                    <label className="block text-sm font-medium">Name :</label>
                    <Field name="name" className="mt-1 w-full border rounded-md px-3 py-2" placeholder="Entre name" />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label className="block text-sm font-medium">E-mail :</label>
                    <Field name="email" type="email" className="mt-1 w-full border rounded-md px-3 py-2" placeholder="Entre e-mail" />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Phone */}
                  <div className="mb-3">
                    <label className="block text-sm font-medium">Telephone :</label>
                    <Field name="phone" className="mt-1 w-full border rounded-md px-3 py-2" placeholder="Entre Telephone" />
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Address */}
                  <div className="mb-3">
                    <label className="block text-sm font-medium">Address :</label>
                    <Field as="textarea" name="address" rows={2} className="mt-1 w-full border rounded-md px-3 py-2" placeholder="Address" />
                    <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Payment Method */}
                  <div className="mb-3">
                    <label className="block text-sm font-medium">Payment Method :</label>
                    <Field as="select" name="paymentMethod" className="mt-1 w-full border rounded-md px-3 py-2">
                      <option value="">-- Payment Method --</option>
                      <option value="Bande">Bande</option>
                      <option value="Pay Pal">Pay Pal</option>
                      <option value="Manuellement">Manuellement</option>
                      <option value="PhonePay">PhonePay</option>
                    </Field>
                    <ErrorMessage name="paymentMethod" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Price */}
                  <div className="mt-3">
                    <label className="text-sm font-medium">Price:</label>
                    <span className="ml-2 text-sm">{selectedProduct?.price ?? "-"}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end gap-3 mt-6">
                    <Button htmlType="submit" type="primary" style={{ backgroundColor: "var(--primary)" }} loading={isProductOrder} className="btn bg-primary text-white px-4 py-2 rounded-md">
                      Submit
                    </Button>
                    <Button htmlType="button" type="primary" style={{ backgroundColor: "#ebe6e7", color: "black" }} className="btn  px-4 py-2 rounded-md" onClick={closeModal}>
                      Cancel
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
            {/* <form onSubmit={onSubmit} className="p-4">
              {errors && (
                <div className="mb-4 bg-red-500 text-white rounded-md p-3 flex items-center gap-3">
                  <i className="fa-solid fa-face-frown text-2xl"></i>
                  <span className="text-sm">{errors}</span>
                </div>
              )}

              <div className="mb-3">
                <label htmlFor="name" className="block text-sm font-medium required">
                  Name :
                </label>
                <input id="name" name="name" className="mt-1 w-full border rounded-md px-3 py-2" placeholder="Entrez le name" required value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="block text-sm font-medium required">
                  E-mail :
                </label>
                <input id="email" name="email" type="email" className="mt-1 w-full border rounded-md px-3 py-2" placeholder="Entrez l'e-mail" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Telephoner :
                </label>
                <input id="phone" name="phone" className="mt-1 w-full border rounded-md px-3 py-2" placeholder="Entrez le Telephoner" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>

              <div className="mb-3">
                <label htmlFor="address" className="block text-sm font-medium required">
                  Adresse :
                </label>
                <textarea id="address" name="address" rows={2} className="mt-1 w-full border rounded-md px-3 py-2" placeholder="Adresse" required value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>

              <div className="mb-3">
                <label htmlFor="payment_method" className="block text-sm font-medium required">
                  Mode de paiement :
                </label>
                <select id="payment_method" name="payment_method" className="mt-1 w-full border rounded-md px-3 py-2" required value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                  <option value="">Mode de paiement</option>
                  <option value="1">Bande</option>
                  <option value="2">Pay Pal</option>
                  <option value="3">Manuellement</option>
                  <option value="4">PhonePay</option>
                </select>
              </div>

              {paymentMethod === "3" && (
                <div className="mb-3">
                  <label className="block text-sm font-medium">Guide de paiement manuel</label>
                  <textarea rows={3} className="mt-1 w-full border rounded-md px-3 py-2" placeholder="Entrez les instructions de paiement manuel" value={manualGuide} onChange={(e) => setManualGuide(e.target.value)} />
                </div>
              )}

              <div className="mt-3">
                <label className="text-sm font-medium">Prix:</label>
                <span className="ml-2 text-sm">{selectedProduct?.price ?? "-"}</span>
              </div>

              <input type="hidden" name="product_id" value={selectedProductId ?? ""} />

              <div className="flex items-center justify-end gap-3 mt-6">
                <button type="submit" className="btn bg-primary text-white px-4 py-2 rounded-md">
                  Submit
                </button>
                <button type="button" className="btn bg-gray-200 px-4 py-2 rounded-md" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </form> */}
          </div>
        </div>
      )}
    </>
  );
};

export default AllProduct;
