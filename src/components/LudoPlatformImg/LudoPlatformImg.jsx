import { motion } from 'framer-motion';
import './LudoPlatformImg.css';

function PlatformImg() {
    return (
        <div className='ludo-devices-container'>
        <motion.div 
            className='ludo-mob'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <img src="/ludoPage/devices/ludo-mob.png" alt="" className='ludo-mob-img'/>
        </motion.div>
        
        <div className='ludo-lap'>
            <img src="/ludoPage/devices/ludo-lap2.png" alt="" className='ludo-lap-img'/>
        </div>
        </div>
    )
}

export default PlatformImg;