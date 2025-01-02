import React from "react";
import MainButton from "../../../components/MainButton/MainButton";
import { Link } from "react-router-dom";

const Service = ({ serviceData }) => {
  const { name, description, img } = serviceData;
  return (
    <div className="card shadow-xl p-6 text-center bg-gradient-to-r from-primary to-secondary">
      <figure>
        <img className="h-[200px] " src={img} alt="" />
      </figure>
      <div className="card-body py-2">
        <h2 className="text-xl font-semibold text-center">{name}</h2>
        <p>{description}</p>

        <MainButton>
          {" "}
          <Link to="/visa"> See Details</Link>
        </MainButton>
      </div>
    </div>
  );
};

export default Service;
