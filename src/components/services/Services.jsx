import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from 'framer-motion'

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}
const Services = () => {

    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });
    return (
        <motion.div className="services" variants={variants} initial='initial' ref={ref} animate={isInView && "animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>
                    I bring a unique blend of technical expertise
                    <br /> and creative vision to seamlessly elevate your brand.
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants} >
                <div className="title">
                    <img src="./people.webp" alt="" />
                    <h1><motion.b whileHover={{ color: "orange" }}> Unique Ideas</motion.b></h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>Buissness
                    </h1>
                    <button>WHAT I DO?</button>
                </div>
            </motion.div>

            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>UI/UX Designing</h2>
                    <p>
                    A creative professional who specializes in crafting user interfaces (UI) and optimizing user experiences (UX) for digital products responsible for creating visually appealing and intuitive interfaces that prioritize user satisfaction and streamline interactions. 
                    </p>
                        <button >Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Web Developer</h2>
                    <p>
                    Specialized web developer proficient in using the React.js library to build user interfaces for web applications.Working on the front end development, collaborating with designers and other team members to bring responsive and engaging user experiences to life.                     </p>
                    <button>Go</button>
                </motion.div>
                {/* <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto id provident repellat, placeat est eos? Repellat suscipit nemo eius hic, veritatis alias id adipisci perspiciatis eaque ab reprehenderit dolores.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto id provident repellat, placeat est eos? Repellat suscipit nemo eius hic, veritatis alias id adipisci perspiciatis eaque ab reprehenderit dolores.
                    </p>
                    <button>Go</button>
                </motion.div> */}
            </motion.div>
        </motion.div>
    )
}

export default Services