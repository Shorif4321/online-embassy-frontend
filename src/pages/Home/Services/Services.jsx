import React from "react";
import visa from "../../../assets/image/visa.jpg";
import f1visa from "../../../assets/image/education.jpg";
import tourist from "../../../assets/image/tourist.jpeg";
import immigration from "../../../assets/image/immigrant.jpeg";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Visa Process",
      img: visa,
      description:
        "Collect your online visa established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 2,
      name: "F1 Visa Details",
      img: f1visa,
      description:
        "F1 Visa It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 3,
      name: "Tourist Visa process",
      img: tourist,
      description:
        "Tourist It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 4,
      name: "Immigration",
      img: immigration,
      description:
        "Immigration is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];

  return (
    <div className="mt-20 px-5 mx-auto">
      <div className="text-center font-semibold mb-3 md:mb-10">
        <h2 className="text-primary ">Our Services</h2>
        <h3 className="text-2xl md:text-3xl">
          The online embassy Service we provide
        </h3>
      </div>
      <div className=" grid md:grid-cols-3 gap-4">
        {services.slice(0, 3).map((serviceData) => (
          <Service key={serviceData._id} serviceData={serviceData}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
