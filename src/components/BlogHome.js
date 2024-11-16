import React from "react";
import { useState } from "react";
import Notiflix from "notiflix"; // Import Notiflix
import blogImage1 from "../images/b1.jpg"; // Replace with your blog images
import blogImage2 from "../images/b2.jpg";
import blogImage3 from "../images/b3.jpg";
import blogImage4 from "../images/b4.jpg";
import blogImage5 from "../images/b5.jpg";
import "./BlogHome.css";

const BlogHome = () => {
  // Handle read more button click

  const blogs = [
    {
      id: 1,
      title: "Blog Title 1",
      image: blogImage1,
      description:
        "Short description of the blog. This provides a brief overview of the content.",
        fullContent:"Short description of the blog. This provides a brief overview of the content.",
    },
    {
      id: 2,
      title: "Blog Title 2",
      image: blogImage2,
      description:
        "Short description of the blog. This provides a brief overview of the content.",
      
    },
    {
      id: 3,
      title: "Blog Title 3",
      image: blogImage3,
      description:
        "Short description of the blog. This provides a brief overview of the content.",
    },
    {
      id: 4,
      title: "Blog Title 4",
      image: blogImage4,
      description:
        "Short description of the blog. This provides a brief overview of the content.",
    },
    {
      id: 5,
      title: "Blog Title 5",
      image: blogImage5,
      description:
        "Short description of the blog. This provides a brief overview of the content.",
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
              OUR LASTEST BLOGS
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
      <p className="mb-4">{selectedBlog.fullContent}</p>
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
