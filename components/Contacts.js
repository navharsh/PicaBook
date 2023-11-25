import React from "react";
import SingleContact from "./SingleContact";

const Contacts = () => {
  const Contactdata = [
    {
      img: "/dev.jpeg",
      alt: "Dev",
      name: "Dev Sharma",
    },
    {
      img: "/anjali.jpeg",
      alt: "Anjali",
      name: "Anjali Saini",
    },
    {
      img: "/harsh.jpeg",
      alt: "Harsh",
      name: "Harsh Balliyan",
    },
    { 
      img: "/sneha.jpeg",
      alt: "Sneha",
      name: "Sneha Suman",
    },
    { 
      img: "/priyam.jpeg",
      alt: "Priyam",
      name: "Priyamvada Diksha",
    },
    {
      img: "/aastha.jpeg",
      alt: "Aastha",
      name: "Aastha Kumari",
    },
  ];

  return (
    <>
      {Contactdata.map(({ img, alt, name }, index) => (
        <SingleContact key={index} alt={alt} img={img} name={name} />
      ))}
    </>
  );
};

export default Contacts;
