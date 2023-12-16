import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: "Next Drive India",
        img: "/ND.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque earum facere aperiam, error fugiat nulla, eveniet porro molestias vero illum possimus, odit dolor accusamus impedit. Commodi doloremque omnis magni maiores.",
        link:"https://nextdriveindia.com/"
    },
    {
        id: 2,
        title: "Eat 24*7",
        img: "/Eat.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque earum facere aperiam, error fugiat nulla, eveniet porro molestias vero illum possimus, odit dolor accusamus impedit. Commodi doloremque omnis magni maiores.",
        link:"https://eat24-51914.web.app/"
    },
    {
        id: 3,
        title: "Personal Portfolio",
        img: "/portfolio.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque earum facere aperiam, error fugiat nulla, eveniet porro molestias vero illum possimus, odit dolor accusamus impedit. Commodi doloremque omnis magni maiores.",
        link:"#"
    },
    {
        id: 4,
        title: "Expense Tracker",
        img: "/Expense.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque earum facere aperiam, error fugiat nulla, eveniet porro molestias vero illum possimus, odit dolor accusamus impedit. Commodi doloremque omnis magni maiores.",
        link:"https://iamakash12.github.io/Expense_tracker/"
    },
];
const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className='textContainer'style={{ y }} >
                        <h2 >{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.link} target='_blank' rel='noreferrer'>
                        <button >See Demo</button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};
const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });
    return ( 
        <div className='portfolio' ref={ref}>
            <div className='progress'>
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className='progressBar'>

                </motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio