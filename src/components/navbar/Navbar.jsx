import Sidebar from '../sidebar/Sidebar';
import './navbar.scss';
import { motion } from 'framer-motion';


const socialIcons = [
    { src: '/facebook.png', alt: 'Facebook' },
    { src: '/instagram.png', alt: 'Instagram' },
    { src: '/youtube.png', alt: 'YouTube' },
    { src: '/dribbble.png', alt: 'Dribbble' },
];


const Navbar = () => {
    return (
        <div className='navbar'>
            {/* Sidebar */}
            <Sidebar />
            <div className='wrapper'>
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    Let's Explore
                </motion.span>
                <div className='social'>
                    {socialIcons.map((icon, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{scale:2.1}} whileTap={{scale:0.95}}
                        >
                            <a href='#' >
                                <img src={icon.src} alt={icon.alt}  />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Navbar;