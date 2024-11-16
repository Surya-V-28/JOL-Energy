import React, { useState, useEffect } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { useDocTitle } from "../components/CustomHook";
import Notiflix from "notiflix";

const CareerPage = () => {
  useDocTitle("LearnLift NGO | Career Opportunities");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [linkedin, setLinkedIn] = useState("");
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      Notiflix.Notify.failure("Please fix the errors in the form.", {
        timeout: 5000,
      });
    }
  }, [errors]);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!firstName) newErrors.firstName = "First Name is required";
    if (!lastName) newErrors.lastName = "Last Name is required";
    if (!location) newErrors.location = "Location is required";
    if (!linkedin) newErrors.linkedin = "LinkedIn profile link is required";
    if (!resume) newErrors.resume = "Resume is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFirstName("");
      setLastName("");
      setLocation("");
      setLinkedIn("");
      setResume("");
      e.target.files[0] = "";

      Notiflix.Notify.success(
        "Your application has been submitted. We will contact you soon.",
        {
          timeout: 5000,
        }
      );
    }
  };

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
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/SELiGZY-Dik?si=QuGKR4qJlvR6zvYR"
                title="Career Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-4 border-[#fdcb0a] rounded-lg opacity-1 transform scale-95 transition-all duration-1000 ease-out animate-fadeIn"
              ></iframe>
            </div>
          </div>

          <div className="w-full lg:w-9/12 bg-white p-8 my-8 lg:my-16 rounded-2xl shadow-2xl">
            <form onSubmit={sendForm} id="careerForm">
              <h2 className="font-bold text-center text-black uppercase text-4xl mb-8">
                Apply for a Career with JOL Energy
              </h2>
              <div className="flex flex-col lg:flex-row lg:space-x-4">
                <div className="flex-1 mb-4">
                  <input
                    name="first_name"
                    className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="First Name*"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {errors.firstName && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div className="flex-1 mb-4">
                  <input
                    name="last_name"
                    className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Last Name*"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {errors.lastName && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-4">
                <div className="flex-1 mb-4">
                  <input
                    name="location"
                    className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Location*"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  {errors.location && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.location}
                    </p>
                  )}
                </div>

                <div className="flex-1 mb-4">
                  <input
                    name="linkedin"
                    className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="url"
                    placeholder="LinkedIn Profile Link*"
                    value={linkedin}
                    onChange={(e) => setLinkedIn(e.target.value)}
                  />
                  {errors.linkedin && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.linkedin}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label className="text-gray-700">Upload Resume*</label>
                <input
                  type="file"
                  className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  onChange={(e) => setResume(e.target.files[0])}
                />
                {errors.resume && (
                  <p className="text-red-600 text-sm mt-1">{errors.resume}</p>
                )}
              </div>

              <div className="text-center">
                <button
                
                  type="submit"
                  id="submitBtn"
                  className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-green-900 text-gray-100 p-3 rounded-lg w-full lg:w-auto transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CareerPage;
