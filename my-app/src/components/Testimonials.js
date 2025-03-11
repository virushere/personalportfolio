import React from 'react';
import './Testimonials.css';
import { motion } from 'framer-motion';
import nikitaSawantDp from './../images/Others/NikitaSawant.png';
import mayurVeerDp from './../images/Others/MayurVeerNew.jpeg';
import trusharthPawarDP from './../images/Others/TrusharthPawar.jpeg';
import dineshJainDp from './../images/Others/DineshJain.jpeg';

const Testimonials = () => {
    const url = "https://www.linkedin.com/in/vyas-yash/details/recommendations/";
    const testimonialsData = [
        {
            id: 1,
            quote: "Yash is one of the best team players I've had the pleasure of working with. He's dedicated and focused on getting things done. I was really impressed by how he took charge of his tasks and communicated effectively. He's respectful, professional, and doesn't need to be micromanaged, which is every manager's dream. Plus, he's constantly improving both technically and in his people skills. Working with Yash was smooth sailing thanks to his reliability and capability. I hope we get to work together again.",
            name: "Dinesh Jain",
            company: "Adapty - An Apexon Company",
            image: dineshJainDp,
            location: { x: 600, y: 250 }
        },
        {
            id: 2,
            quote: "I had the pleasure of working with Yash Vyas in Apexon. His ability to adapt to new challenges and learn rapidly was truly impressive. Yash consistently demonstrated a strong work ethic and a commitment to excellence. He tackled every task with enthusiasm and intelligence, often finding innovative solutions to complex problems. His capacity for smart work, combined with his relentless drive, made him an invaluable asset to our team. Throughout his time with us, Yash showed remarkable growth and adaptability. He not only met but often exceeded expectations, taking on new responsibilities with confidence and delivering outstanding results. He is technically strong in .Net, c# and optimizely b2b commerece development. I highly recommend Yash Vyas for any position he pursues. His determination, quick learning ability, and smart working approach will undoubtedly make him a great addition to any team.",
            name: "Nikita Sawant",
            company: "Adapty - An Apexon Company",
            image: nikitaSawantDp,
            location: { x: 600, y: 200 }
        },
        {
            id: 3,
            quote: "I had the opportunity to work closely with Yash on several projects, and I can confidently say he's a true problem solver. Yash consistently went above and beyond, tackling significant challenges head-on and providing effective solutions to critical issues across multiple projects. Even without prior experience in the industry, he worked hard to adapt, learned rapidly, and motivated others to perform at their best. His commitment to quality and his positive impact on our projects have been invaluable, and I highly recommend him for any role that demands dedication, adaptability, and innovative thinking.",
            name: "Trusharth Pawar",
            company: "Adapty - An Apexon Company",
            image: trusharthPawarDP,
            location: { x: 650, y: 250 }
        },
        {
            id: 4,
            quote: "I am pleased to recommend Yash Vyas for software engineer positions. We had the opportunity to work together on the 'Eventify' project, where we utilized the MERN stack to develop a comprehensive application. Yash's dedication and technical expertise significantly contributed to the success of our project. Yash demonstrated excellent team-player qualities, consistently coordinating with team members to ensure seamless integration of frontend and backend components. His proactive approach in keeping both frontend and backend codes up to date was commendable. Additionally, his ability to swiftly resolve ad-hoc bugs and efficiently handle merge conflicts played a crucial role in maintaining the project's overall stability and progress. I have no doubt that Yash would be a valuable asset to any software engineering team. I highly recommend him for software engineer positions and believe he will continue to excel in any technical environment.",
            name: "Mayur Veer",
            company: "Eventify Application",
            image: mayurVeerDp,
            location: { x: 100, y: 150 }
        },
    ];

    const handleClick = () => {
        window.open(url, '_blank');
    };

    const mapVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.2
            }
        }
    };

    const testimonialVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="recommendations" className="testimonials">
            <h2>What People Say</h2>
            <div className="testimonials-container">
                <div className="map-container">
                    <motion.div
                        className="world-map"
                        variants={mapVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {testimonialsData.map((testimonial) => (
                            <motion.div
                                key={testimonial.id}
                                className="testimonial-marker"
                                style={{ left: testimonial.location.x, top: testimonial.location.y }}
                                variants={testimonialVariants}
                                whileHover={{ scale: 1.2 }}
                                onClick={handleClick}
                            >
                                <img src={testimonial.image} alt={testimonial.name} />
                                <div className="speech-bubble">
                                    <p className="testimonial-quote">{testimonial.quote}</p>
                                    <p className="testimonial-name">{testimonial.name}</p>
                                    <p className="testimonial-company">{testimonial.company}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <div className="booking-section">
                    <h3>Let's connect, Book a meeting with me</h3>
                    <p>Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus.</p>
                    <button className="book-me-button">BOOK ME</button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;