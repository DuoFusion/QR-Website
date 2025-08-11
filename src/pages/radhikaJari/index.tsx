import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ROUTES } from "../../constants";

const RadhikaJari = () => {
  const products = [
    {
      id: 1,
      name: "500.Gram.Jambo Bobbin",
      description: "All colors available in 500 grams, big bobbin only in 70 denier, use our product, you will experience good quality.",
      price: "₹305.00",
      image: "https://infytap.com/uploads/vcards/products/15836/Untitled-(2).jpg",
    },
    {
      id: 2,
      name: "P.kalu 70.Denier",
      description: "P.kalu perfect 70.Denier 100.gram bobbin. 7100 Length Enhance the look by using the silk saree of P.kalu - an attractive, space-efficient solution. Use on a Jacquard Rapier Power Loom for quality finishing",
      price: "₹305.00",
      image: "https://infytap.com/uploads/vcards/products/15835/Untitled-(4).jpg",
    },
    {
      id: 3,
      name: "500.Gram.Jambo Bobbin",
      description: "All colors available in 500 grams, big bobbin only in 70 denier, use our product, you will experience good quality.",
      price: "₹305.00",
      image: "https://infytap.com/uploads/vcards/products/15836/Untitled-(2).jpg",
    },
    {
      id: 4,
      name: "P.kalu 70.Denier",
      description: "P.kalu perfect 70.Denier 100.gram bobbin. 7100 Length Enhance the look by using the silk saree of P.kalu - an attractive, space-efficient solution. Use on a Jacquard Rapier Power Loom for quality finishing",
      price: "₹305.00",
      image: "https://infytap.com/uploads/vcards/products/15835/Untitled-(4).jpg",
    },
  ];

  return (
    <div className="container">
      <div className="min-h-screen bg-container-body relative ">
        {/* Header Image with Language Selector */}
        <div className="relative">
          <img src="https://infytap.com/uploads/vcards/covers/15834/WhatsApp-Image-2025-07-01-at-5.50.39-PM.jpeg" alt="Cover" className="w-full h-[300px] object-cover" />
        </div>

        {/* Profile Section */}
        <div className="relative z-10">
          <div className="rounded-lg p-6">
            <div className="space-y-4 sm:space-y-0 sm:space-x-6">
              <img src="https://infytap.com/uploads/vcards/profiles/15833/WhatsApp-Image-2025-07-01-at-5.50.39-PM.jpeg" alt="Profile" className="w-36 h-36 m-auto rounded-full object-cover border-4 border-white shadow-lg" />
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-primary my-2 text-center">RADHIKA JARI PVT.LTD</h1>
                <p className="text-gray-500 text-md leading-relaxed text-center">Radhika Jari Private Limited, a manufacturing business that creates quality Jari that defines luxury and functionality</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="px-4">
            <div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] place-items-center gap-4 mb-6 ">
              <div className="flex flex-col text-center">
                <a href="https://www.instagram.com/radhikajari" target="_blank" rel="noopener noreferrer" className="text-pink-600 rounded-full transition-colors">
                  <i className="fab fa-instagram text-3xl" />
                </a>
                Instagram
              </div>
              <div className="flex flex-col text-center">
                <a href="https://wa.me/+919574442244" target="_blank" rel="noopener noreferrer" className="text-green-500 rounded-full transition-colors">
                  <i className="fab fa-whatsapp text-3xl" />
                </a>
                Whatsapp
              </div>
              <div className="flex flex-col text-center">
                <a href="https://www.facebook.com/radhikajari" target="_blank" rel="noopener noreferrer" className="text-blue-600 rounded-full transition-colors">
                  <i className="fab fa-facebook text-3xl" />
                </a>
                Facebook
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-row sm:flex-col items-center space-x-4">
                <img src="https://infytap.com/assets/img/aboutemail.png" alt="Email" className="m-0 mb-2" />
                <div>
                  <a href="mailto:radhikajari44@gmail.com" className="text-primary font-medium text-sm ps-3 sm:ps-0">
                    radhikajari44@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex flex-row sm:flex-col items-center space-x-4">
                <img src="https://infytap.com/assets/img/aboutcall.png" alt="Phone" className=" m-0 mb-2" />
                <div>
                  <a href="tel:+919574442022" className="text-primary font-medium text-sm ps-3 sm:ps-0">
                    +91 9574442022
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex flex-row sm:flex-col items-center space-x-4">
                <img src="https://infytap.com/img/vcard5-alter-phone.png" alt="Phone" className=" m-0 mb-2" />
                <div>
                  <a href="tel:+919574442244" className="text-primary font-medium text-sm ps-3 sm:ps-0">
                    +91 9574442244
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-5 flex flex-row sm:flex-col items-center space-x-4">
                <img src="https://infytap.com/assets/img/aboutlocation.png" alt="Location" className=" m-0 mb-2" />
                <div className="text-primary font-medium text-sm text-start sm:text-center ps-3 sm:ps-0">53.54.55 shree krupa industrial kapodra varachha road surat-395006 Gujarat</div>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="bg-white shadow-lg p-8 text-center">
            <h2 className="text-3xl font-light text-primary mb-2 text-center">QR Code</h2>
            <div className="grid grid-cols-1  gap-8 items-center">
              <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130" className="border border-gray-300">
                  <rect x="0" y="0" width="130" height="130" fill="#ffffff" />
                  <g transform="scale(5.2)">
                    <g transform="translate(0,0)">
                      <path fillRule="evenodd" d="M8 0L8 2L9 2L9 4L8 4L8 9L9 9L9 10L5 10L5 9L7 9L7 8L5 8L5 9L4 9L4 10L3 10L3 8L0 8L0 9L1 9L1 10L0 10L0 13L1 13L1 14L0 14L0 15L2 15L2 16L0 16L0 17L2 17L2 16L3 16L3 17L8 17L8 18L9 18L9 17L10 17L10 15L11 15L11 16L12 16L12 17L11 17L11 19L10 19L10 20L9 20L9 19L8 19L8 20L9 20L9 22L8 22L8 25L10 25L10 24L11 24L11 23L14 23L14 22L13 22L13 20L12 20L12 21L11 21L11 19L12 19L12 18L13 18L13 19L14 19L14 20L15 20L15 21L17 21L17 22L16 22L16 23L15 23L15 24L16 24L16 25L17 25L17 22L18 22L18 21L20 21L20 22L19 22L19 23L18 23L18 25L19 25L19 24L21 24L21 25L22 25L22 24L21 24L21 23L22 23L22 22L23 22L23 23L25 23L25 20L23 20L23 21L22 21L22 22L21 22L21 16L22 16L22 15L23 15L23 14L24 14L24 15L25 15L25 12L24 12L24 13L23 13L23 14L21 14L21 15L19 15L19 14L20 14L20 12L22 12L22 11L23 11L23 10L24 10L24 11L25 11L25 8L23 8L23 10L22 10L22 9L21 9L21 8L17 8L17 6L16 6L16 7L15 7L15 3L14 3L14 2L15 2L15 0L14 0L14 1L13 1L13 2L12 2L12 3L10 3L10 2L9 2L9 1L11 1L11 0ZM16 1L16 3L17 3L17 1ZM12 3L12 4L10 4L10 6L9 6L9 9L10 9L10 10L12 10L12 11L11 11L11 12L13 12L13 14L12 14L12 16L13 16L13 18L15 18L15 19L16 19L16 17L15 17L15 16L18 16L18 11L19 11L19 12L20 12L20 10L21 10L21 9L20 9L20 10L18 10L18 9L16 9L16 8L15 8L15 9L14 9L14 4L13 4L13 3ZM12 5L12 7L11 7L11 6L10 6L10 7L11 7L11 8L13 8L13 5ZM12 9L12 10L14 10L14 9ZM15 9L15 11L14 11L14 12L15 12L15 13L14 13L14 15L16 15L16 14L17 14L17 13L16 13L16 12L15 12L15 11L17 11L17 10L16 10L16 9ZM4 10L4 13L5 13L5 14L4 14L4 15L5 15L5 16L7 16L7 15L5 15L5 14L9 14L9 15L10 15L10 14L11 14L11 13L8 13L8 11L5 11L5 10ZM2 11L2 12L1 12L1 13L2 13L2 14L3 14L3 13L2 13L2 12L3 12L3 11ZM9 11L9 12L10 12L10 11ZM6 12L6 13L7 13L7 12ZM23 16L23 17L24 17L24 19L25 19L25 17L24 17L24 16ZM17 17L17 20L20 20L20 17ZM18 18L18 19L19 19L19 18ZM23 21L23 22L24 22L24 21ZM9 22L9 23L11 23L11 22ZM12 24L12 25L13 25L13 24ZM24 24L24 25L25 25L25 24ZM0 0L0 7L7 7L7 0ZM1 1L1 6L6 6L6 1ZM2 2L2 5L5 5L5 2ZM18 0L18 7L25 7L25 0ZM19 1L19 6L24 6L24 1ZM20 2L20 5L23 5L23 2ZM0 18L0 25L7 25L7 18ZM1 19L1 24L6 24L6 19ZM2 20L2 23L5 23L5 20Z" fill="#000000" />
                    </g>
                  </g>
                </svg>
              </div>
              {/* <div className="flex justify-center">
                <img src="https://infytap.com/uploads/vcards/profiles/15833/WhatsApp-Image-2025-07-01-at-5.50.39-PM.jpeg" alt="QR Logo" className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg" />
              </div> */}
            </div>
          </div>

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
                {products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="bg-white border border-gray-200 p-3 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-52 overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
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
          <div className="px-4 pb-24">
            <h2 className="text-3xl font-light text-primary mb-4 text-center">Inquiries</h2>
            <form className="space-y-6 bg-white rounded-lg shadow-lg p-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                        <i className="far fa-user"></i>
                      </span>
                      <input type="text" name="name" className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Your Name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                        <i className="far fa-envelope"></i>
                      </span>
                      <input type="email" name="email" className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Email Address" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                        <i className="fas fa-phone"></i>
                      </span>
                      <input type="tel" name="phone" className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter Phone Number" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea name="message" rows={8} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Type a message here..."></textarea>
                </div>
              </div>

              <div className="text-center">
                <button type="submit" className="bg-primary text-white px-8 py-3 rounded-lg transition-colors font-medium">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Sticky Action Buttons */}
        <div className="fixed inset-x-0 bottom-0 transform -translate-y-1/2 z-50">
          <div className="flex flex-row space-y-3 justify-center">
            <a href="" target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-3 shadow-lg rounded-lg transition-colors text-center whitespace-nowrap w-50">
              <i className="fas fa-download fa-address-book mr-2"></i>
              Add to contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadhikaJari;
