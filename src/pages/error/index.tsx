import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import { Error404 } from "../../data";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-xl w-full p-6">
        <div className="mx-auto w-100">
          <Error404 />
        </div>
        <h3 className="mt-6 text-2xl font-semibold text-primary">Internal Server Error</h3>
        <p className="mt-3 text-secondary text-base leading-relaxed">The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.</p>
        <Link to={ROUTES.HOME} className="mt-6 inline-block px-6 py-3 rounded-2xl bg-primary text-white font-medium shadow-md hover:bg-indigo-800 transition">
          BACK TO HOME PAGE
        </Link>
      </div>
    </div>
  );
};

export default Error;
