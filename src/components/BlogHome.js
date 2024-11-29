import React from "react";
import { useState } from "react";
import Notiflix from "notiflix"; // Import Notiflix
import blogImage1 from "../images/Event11.png"; // Replace with your blog images
import blogImage2 from "../images/Blog21.png";
import blogImage3 from "../images/Blog3.png";
import blogImage4 from "../images/Blog4.png";
import blogImage5 from "../images/Blog5.png";
import "./BlogHome.css";

const BlogHome = () => {
  // Handle read more button click
  const blogs = [
    {
      id: 1,
      title: "We are in part of Deep Tech Pioneer!!",
      image: blogImage1,
      description:
        "Jol Energy has been selected as a Deep Tech Pioneer! Read more about this milestone.",
      fullContent: `
        Congratulations! 
           🌟 We’re honored to be named a Deep Tech Pioneer by @Hello Tomorrow! 🌟

Out of thousands of applications, our solution stood out to their experts, and we couldn’t be more excited. Join us at the 10th Hello Tomorrow Global Summit this March 2025—a powerhouse gathering for deep tech trailblazers, investors, and innovators pushing solutions from the lab to market.

This is where connections turn into collaborations. Don’t miss it! 🚀
👉https://hello-tomorrow.org/global-summit/?utm_source=dtps&utm_medium=community&utm_campaign=dtps


      `,
    },
    {
      id: 2,
      title: "India - EU Battery Recycling Technology Exchange Meet",
      image: blogImage2, // Add a relevant image
      description:
        "14 MSMEs participated in the Vendor Development Programme organised by the FaMeTN and Tamil Nadu EV Task Force.",
      fullContent: `
        14 MSMEs participated in the Vendor Development Programme organised by the FaMeTN and Tamil Nadu EV Task Force on 8 October 2024 at the SIDCO Corporate Office, Chennai. Startups from the European Union, Ecomet Refining S.p.A. (Italy), and ENERIS (Poland) presented their cutting-edge recycling and upcycling processes.
  
        The inaugural session began with Thiru Thiru Srinivasan, Lead of the #TNEVTask Force, sharing insights on Tamil Nadu's electric vehicle sector, followed by Tmt Shanmuga Priya from Guidance Tamil Nadu, who highlighted the state's robust industrial ecosystem. Thiru C N Prem Kumar, StartupTN Associate Vice President, discussed the initiatives driving Tamil Nadu's #EVRevolution.
  
        After the presentations, MSMEs engaged in one-on-one meetings with the European delegates. This event reflects the growing importance of sustainable practices in the EV and battery industries.
  
        Stay tuned to #FaMeTN for updates and more events that will continue shaping the future of electric mobility and sustainability in India.
      `,
    },
    {
      id: 3,
      title: "Jol Energy - Advanced Battery Recycling Technology",
      image: blogImage3,  // Use an appropriate image here
      description: "Jol Energy introduces cutting-edge battery recycling solutions. Learn more about our technology.",
      fullContent: `
         Power Reborn! - Urban Mining Company
      Supported by Select School - VIT
      Scan to know more about us!

      Advanced Sensors and Monitoring Technology: Optimized Parameter Monitoring System to increase metal recovery efficiency.
      Closed-Loop Metal Recovery: Efficient recovery from batteries and chemical waste.
      Hydro-metallurgy Solution: Enhances metal recovery rates and purity up to an average of 98.6%.
      Proprietary Selective Metal Capture Material: Enables targeted metal recovery in our closed-loop system.
      Innovative Discharging Method: Non-electrochemical discharge method.
      Portable Colorimetry Device: Metal concentration analysis, driven by AI-powered algorithm and data sets, replacing $150K ICP-MS machines.

      "At the core of our mission, JOL ENERGY PVT. LTD. is dedicated to battery recycling, focusing on the recovery of precursor cathode active materials (p CAMs) from used lithium-ion batteries. We aspire to introduce innovative solutions that redefine the industry's approach to sustainability."
    
      `,
    },
    {
      id: 4,
      title: "Collecting for a Cause!",
      image: blogImage4, // Replace with an appropriate image if needed
      description: "We’ve hit 1 TON of Li-ion battery scraps collected! Thanks to our team for their dedication.",
      fullContent: `We’re excited to announce that we've hit a major milestone – collecting 1 TON of Li-ion battery scraps! This is a big step forward for our mission to promote sustainability and effective recycling. 
  
  Thanks to our dedicated team for their hard work and effort in achieving this goal. We can't wait to see the impact this will have on our sustainability efforts!
  
  #JolEnergy #SustainabilitySquad `,
    },
    {
      id: 5,
      title: "Re-li-cycle: A Sustainable Solution",
      image: blogImage5, // Replace with an appropriate image if needed
      description: "Say goodbye to traditional, polluting methods! Re-li-cycle from Jol Energy adopts hydrometallurgy.",
      fullContent: `Ever wondered how traditional batteries are recycled? 
  Pyrometallurgy, a high-temperature process, has been the norm. But there's a cleaner way – "Re-li-cycle" from Jol Energy, our sustainable solution towards battery recycling.
  Pyrometallurgy isn't just about heat... It's about environmental impact too. High energy consumption and carbon emissions are its side effects. Re-li-cycle from Jol Energy opts for a greener approach, contributing to a healthier planet
  Jol Energy's Sustainable Approach: Say goodbye to traditional, polluting methods! Re-li-cycle from Jol Energy adopts hydrometallurgy for battery recycling. It's efficient, environmentally friendly, and part of our commitment to a sustainable future.
  Reducing Carbon Footprint: Choosing Re-li-cycle from Jol Energy means choosing a cleaner future. With a net-zero carbon footprint, our hydrometallurgical process is a giant leap towards reducing emissions in battery recycling.
  Zero Waste Emissions: Why generate waste when you can create a circular system? Re-li-cycle from Jol Energy says no to waste emissions, making our process not just eco-friendly but eco-smart. Join us on the journey to zero waste
  Material Innovation for Safety: Safety meets innovation! Re-li-cycle from Jol Energy's separation process uses materials that can withstand high acidic contents. It's a game-changer, ensuring both efficiency and safety.`,
    },
  ];
  

    // State for modal visibility and selected blog
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);
  
    const handleReadMore = (blog) => {
      setSelectedBlog(blog);
      setIsModalOpen(true);
    };
  
    // Close modal
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedBlog(null);
    };

  return (
    <>
      <div className="bg-[#0d141a] py-12" id="blogs">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white uppercase">
              OUR LASTEST ACHIEVEMENTS
            </h1>
            <div className="flex justify-center mt-2">
              <div className="w-32 border-b-4 border-[#fdcb0a]"></div>
            </div>
          </div>
          <div className="relative">
          <div className="flex overflow-x-auto space-x-6 pb-8 hide-scrollbar">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="min-w-[300px] bg-white rounded-lg shadow-lg flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <img
                  className="rounded-t-lg w-full h-48 object-cover"
                  src={blog.image}
                  alt={blog.title}
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold blog-title">{blog.title}</h2>
                  <p className="mt-2 text-gray-600">{blog.description}</p>
                  <button
                    onClick={() => handleReadMore(blog)}
                    className="mt-auto font-bold text-[#fdcb0a] hover:text-[#e4cc6b]"
                  >
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
                    
            </div>
          </div>
        </div>
       {/* Modal */}
        
       {isModalOpen && selectedBlog && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg w-3/4 max-w-3xl relative">
      {/* Close button with the "X" mark */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-gray-900"
      >
        &times;
      </button>
      
      {/* Blog content */}
      <h2 className="text-2xl font-bold mb-4">{selectedBlog.title}</h2>

      {/* Add a scrollable container for the content */}
      <div className="max-h-[70vh] overflow-y-auto mb-4">
        {selectedBlog.fullContent.split('\n').map((line, index) => (
          <p key={index} className="mb-4">
            {line}
          </p>
        ))}
      </div>

      <button
        onClick={closeModal}
        className="bg-[#fdcb0a] text-black px-4 py-2 rounded-lg hover:bg-white"
      >
        Close
      </button>
    </div>
  </div>
)}

    </>
  );
};

export default BlogHome;
