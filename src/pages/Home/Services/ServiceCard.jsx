import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price, description } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl border mt-10">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-[200px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <span className="flex justify-between items-center">
          <p className="text-orange-600 font-bold">Price: ${price}</p>
          <Link to={`/book/${_id}`}>
            <FaArrowRight className="text-orange-600 text-lg" />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
