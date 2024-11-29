import React, { useState } from 'react';
import './Portfolio.css';  // Import the CSS file for custom scrollbar styles
import img1 from '../images/Events1.png'; // Update with appropriate images
import img2 from '../images/Event2.png';
import img3 from '../images/Event3.png';
import img4 from '../images/Event4.png';
import img5 from '../images/Event5.png';
import Notiflix from "notiflix";


const Portfolio = () => {
    // Sample projects data related to battery and e-waste
    const [projects] = useState([
        {
            id: 1,
            title: 'Battery Recycling Awareness',
            description: 'Raising awareness about the importance of recycling used batteries to reduce environmental impact.',
            status: 'Upcoming',
            registerDeadline: '2024-08-30',
            image: img1,
        },
        {
            id: 2,
            title: 'E-Waste Collection Drive',
            description: 'Organizing collection drives to gather old electronic devices and promote safe recycling practices.',
            status: 'Upcoming',
            registerDeadline: '2024-08-30',
            image: img2,
        },
        {
            id: 3,
            title: 'Social Awareness on E-Waste',
            description: 'Educating communities about the dangers of improper disposal of e-waste and how to recycle responsibly.',
            status: 'Upcoming',
            registerDeadline: '2024-08-30',
            image: img3
        },
        {
            id: 4,
            title: 'E-Waste Battery Recycling Program',
            description: 'Promoting safe disposal and recycling of old batteries to reduce toxic waste in landfills.',
            status: 'Upcoming',
            image: img4,
            registerDeadline: '2024-08-30',
        },
        {
            id: 5,
            title: 'Sustainable E-Waste Practices',
            description: 'Introducing sustainable practices for handling e-waste, ensuring responsible recycling and reuse of electronic components.',
            status: 'Upcoming',
            image: img5,
            registerDeadline: '2024-08-20',
        }
    ]);

    // State for selected category
    const [selectedCategory, setSelectedCategory] = useState('Upcoming');

    // Filter projects based on category
    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.status === selectedCategory);

    // Calculate time left to register
    const calculateTimeLeft = (deadline) => {
        const now = new Date();
        const eventDate = new Date(deadline);
        const timeLeft = eventDate - now;

        if (timeLeft < 0) return 'Registration closed';

        const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        return `${daysLeft} days left`;
    };

    // Handle register button click
    const handleRegister = () => {
        Notiflix.Notify.failure('Event registration is closed!');
    };

    return (
        <>
            <div className="my-4 py-4 bg-transparent" id='projects-all'>
                <h2 className="my-2 text-center text-3xl text-black uppercase font-bold">Our E-Waste and Recycling Initiatives</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-[#fdcb0a] mb-8'></div>
                </div>
                {/* Filters */}
                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="cards-container no-scrollbar">
                        {filteredProjects.map(project => (
                            <div key={project.id} className="card">
                                <img src={project.image} alt={project.title} className="card-image" />
                                <div className="card-content">
                                    <h4 className="card-title">{project.title}</h4>
                                    <p className="card-description">{project.description}</p>
                                    {project.status === 'Upcoming' ? (
                                        <div className="register-section">
                                            <span className="time-left">{calculateTimeLeft(project.registerDeadline)}</span>
                                            <button onClick={handleRegister} className="card-button register-button">
                                                Register
                                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            </button>
                                        </div>
                                    ) : (
                                        <button onClick={() => {
                                            console.log("View more details for project: ", project.title);
                                        }} className="card-button">
                                            View Details
                                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
