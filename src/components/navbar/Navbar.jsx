import Sidebar from '../sidebar/Sidebar';
import './navbar.scss';
import { motion } from 'framer-motion';


const socialIcons = [
    { src: '/linkedIn.png', alt: 'LinkedIn',link: 'https://www.linkedin.com/in/akash-khurana-486322200/' },
    { src: '/github.png', alt: 'GitHub',link:'https://github.com/IamAkash12' },
    { src: '/behance.png', alt: 'Behance',link:'https://www.behance.net/akashkhurana12' },
    { src: '/pinterest.png', alt: 'Pinterest',link:'https://in.pinterest.com/akashkhurana28/'},
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
                            <a href={icon.link} >
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