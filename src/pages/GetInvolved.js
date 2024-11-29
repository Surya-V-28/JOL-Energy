import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { useDocTitle } from "../components/CustomHook";

const CareerPage = () => {
  useDocTitle("Jol Energy | Career Opportunities");

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div
        id="career"
        className="flex flex-col items-center mt-8 w-full bg-white py-12 lg:py-24"
      >
        <div className="container mx-auto flex flex-col items-center px-4 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full lg:w-auto mb-8 lg:mb-16">
            <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
              <h1 className="font-bold text-[#fdcb0a] uppercase text-4xl mb-4">
                Join Our Team
              </h1>
              <p className="text-lg text-gray-700">
                We are always looking for talented individuals to join our team.
                If you're passionate about making a difference and have the
                skills to contribute, we'd love to hear from you. Fill out the
                form below to apply for open positions and become part of our
                mission to create a positive impact.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/SELiGZY-Dik?si=QuGKR4qJlvR6zvYR"
                  title="Career Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-4 border-[#fdcb0a] rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-9/12 bg-white p-8 my-8 lg:my-16 rounded-2xl shadow-2xl">
            <h2 className="font-bold text-center text-black uppercase text-4xl mb-8">
              Apply for a Career with JOL Energy
            </h2>
            <iframe
              src="https://forms.gle/AcSjKzkU8hbA2xBe6"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Google Form"
              className="border-4 border-gray-300 rounded-lg"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CareerPage;
