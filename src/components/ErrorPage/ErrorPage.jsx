import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError?.() || { status: 404, message: "Not found" };
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Unexpected Application Error!</h1>
        <p className="mb-4 text-gray-700">{error.status ?? ""} {error.message ?? "Something went wrong."}</p>
        <Link to="/layout/products" className="inline-block bg-[#f34263] text-white px-4 py-2 rounded">
          Back to products
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;