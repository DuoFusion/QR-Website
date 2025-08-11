import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
};

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

const AllProduct = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [errors, setErrors] = useState<string>("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [manualGuide, setManualGuide] = useState<string>("");

  const selectedProduct = useMemo(() => products.find((p) => p.id === selectedProductId) || null, [selectedProductId]);

  const resetForm = () => {
    setErrors("");
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setPaymentMethod("");
    setManualGuide("");
  };

  const openModal = (productId: number) => {
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
    resetForm();
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !address || !paymentMethod) {
      setErrors("Veuillez remplir les champs obligatoires.");
      return;
    }

    // For demo: show a simple confirmation and close
    alert("Commande passée! Nous vous contacterons bientôt.");
    closeModal();
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
                        <div className="mt-5 flex justify-center">
                          <button className="btn bg-primary text-white px-4 py-2 rounded-md" onClick={() => openModal(product.id)}>
                            Acheter maintenant
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            {/* <div className="my-6">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="flex justify-center">
                <div className="bg-white backdrop-blur-md rounded-lg p-4 w-11/12 sm:w-3/4">
                  <div className="flex flex-col items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-1/2 h-auto object-contain"
                    />
                    <div className="mt-3 text-center">
                      <h4 className="text-black text-xl">{product.name}</h4>
                      <p className="text-black/80 text-sm mt-2">{product.description}</p>
                      <span className="block text-black font-semibold mt-2">{product.price}</span>
                    </div>
                    <div className="my-5">
                      <button
                        className="btn bg-primary text-white px-4 py-2 rounded-md"
                        onClick={() => openModal(product.id)}
                      >
                        Acheter maintenant
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
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

            <form onSubmit={onSubmit} className="p-4">
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
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AllProduct;
