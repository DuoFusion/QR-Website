import { useEffect } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Queries } from "../../api";
import { Href, ROUTES, STORAGE_KEYS } from "../../constants";
import Inquiries from "./Inquiries";

const RadhikaJari = () => {
  const { data } = Queries.useGetUserSetting({ settingFilter: STORAGE_KEYS.USER_SETTING.RADHIKA_JARI });
  const { data: All_PRODUCT } = Queries.useGetProduct({ settingFilter: STORAGE_KEYS.USER_SETTING.RADHIKA_JARI });

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

  return (
    <div className="container">
      <div className="min-h-screen bg-container-body relative ">
        {/* Header Image with Language Selector */}
        {settings?.bannerImage && (
          <div className="relative">
            <img src={settings?.bannerImage ?? ""} alt="Cover" className="w-full h-[300px] object-cover" />
          </div>
        )}

        {/* Profile Section */}
        <div className="relative z-10">
          <div className="rounded-lg p-6">
            <div className="space-y-4 sm:space-y-0 sm:space-x-6">
              {settings?.logoImage && <img src={settings?.logoImage ?? ""} alt="Profile" className="w-36 h-36 m-auto rounded-full object-cover border-4 border-white shadow-lg" />}
              <div className="flex-1">
                {settings?.title && <h1 className="text-3xl font-bold text-primary my-2 text-center">{settings?.title}</h1>}
                {settings?.content && <p className="text-secondary text-md leading-relaxed text-center">{settings?.content}</p>}
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="px-4">
            <div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] place-items-center gap-4 mb-6 ">
              {settings?.socialLinks?.instagram && (
                <div className="flex flex-col text-center text-secondary">
                  <a href={settings?.socialLinks?.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 rounded-full transition-colors">
                    <i className="fab fa-instagram text-3xl" />
                  </a>
                  Instagram
                </div>
              )}
              {settings?.socialLinks?.whatsapp && (
                <div className="flex flex-col text-center text-secondary">
                  <a href={settings?.socialLinks?.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-500 rounded-full transition-colors">
                    <i className="fab fa-whatsapp text-3xl" />
                  </a>
                  Whatsapp
                </div>
              )}
              {settings?.socialLinks?.facebook && (
                <div className="flex flex-col text-center text-secondary">
                  <a href={settings?.socialLinks?.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 rounded-full transition-colors">
                    <i className="fab fa-facebook text-3xl" />
                  </a>
                  Facebook
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {settings?.email && (
                <div className="bg-white rounded-lg shadow-md p-6 gap-1 flex flex-row sm:flex-col items-center space-x-4">
                  {/* <img src="https://infytap.com/assets/img/aboutemail.png" alt="Email" className="m-0 mb-2" /> */}
                  <i className="fa fa-envelope text-3xl m-0 text-primary" />
                  <div>
                    <a href={Href} className="text-secondary font-medium text-sm ps-3 sm:ps-0">
                      {settings?.email}
                    </a>
                  </div>
                </div>
              )}
              {settings?.phoneNumber && (
                <div className="bg-white rounded-lg shadow-md p-6 gap-1 flex flex-row sm:flex-col items-center space-x-4">
                  {/* <img src="https://infytap.com/assets/img/aboutcall.png" alt="Phone" className=" m-0 mb-2" /> */}
                  <i className="fa fa-phone text-3xl m-0 text-primary" />
                  <div>
                    <a href={Href} className="text-secondary font-medium text-sm ps-3 sm:ps-0">
                      {settings?.phoneNumber}
                    </a>
                  </div>
                </div>
              )}

              {/* <div className="bg-white rounded-lg shadow-md p-6 flex flex-row sm:flex-col items-center space-x-4">
                <img src="https://infytap.com/img/vcard5-alter-phone.png" alt="Phone" className=" m-0 mb-2" />
                <div>
                  <a href="tel:+919574442244" className="text-primary font-medium text-sm ps-3 sm:ps-0">
                    +91 9574442244
                  </a>
                </div>
              </div> */}
              {settings?.address && settings?.socialLinks?.location && (
                <a href={settings?.socialLinks?.location} target="_blank" className="bg-white rounded-lg shadow-md p-5 gap-1 flex flex-row sm:flex-col items-center space-x-4 col-span-1 sm:col-span-2">
                  {/* <img src="https://infytap.com/assets/img/aboutlocation.png" alt="Location" className=" m-0 mb-2" /> */}
                  <i className="fa fa-location-dot text-3xl m-0 text-primary" />
                  <div className="text-secondary font-medium text-sm text-start sm:text-center ps-3 sm:ps-0">{settings?.address}</div>
                </a>
              )}
            </div>
          </div>

          {/* QR Code Section */}
          {settings?.qrCode && (
            <div className="bg-white shadow-lg p-8 text-center">
              <h2 className="text-3xl font-light text-primary mb-2 text-center">QR Code</h2>
              <div className="grid grid-cols-1  gap-8 items-center">
                <div className="flex justify-center">
                  <img src={settings?.qrCode} alt="QR Logo" className="w-32 h-32 object-cover shadow-container-body" />
                </div>
              </div>
            </div>
          )}

          {/* Products Section */}
          <div className="rounded-lg p-8">
            <h2 className="text-3xl font-light text-primary text-center">Products</h2>
            <div className="mt-8">
              <Swiper
                modules={[Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                pagination={{ clickable: true }}
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
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="text-center">
              <a href={ROUTES.RADHIKA_JARI.All_PRODUCT} rel="noopener noreferrer" className="text-md text-primary font-medium underline">
                View All Products
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Inquiries />
        </div>

        {/* Sticky Action Buttons */}
        <div className="fixed inset-x-0 bottom-0 transform -translate-y-1/2 z-50">
          <div className="flex flex-row space-y-3 justify-center">
            <a href="/radhika-jari.vcf" download="radhika-jari.vcf" target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-3 shadow-lg rounded-lg transition-colors text-center whitespace-nowrap w-50">
              <i className="fas fa-clipboard-user  mr-2"></i>
              Add to contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadhikaJari;
