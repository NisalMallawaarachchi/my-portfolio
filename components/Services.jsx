import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-my-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I specialize in creating dynamic and responsive web applications using
        the latest technologies. I always prioritize quality over quantity,
        ensuring that every project meets the highest standards. Committed to
        timely delivery, I focus on executing projects with precision,
        creativity, and a clear impact on business goals. My services include:
      </p>
      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gray-200 hover:-translate-y-1 duration-500 hover:shadow-black"
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-gray-600 text-sm leading-5">{description}</p>
            <a href={link}>
              Read More{" "}
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
