import { motion } from 'framer-motion';
import './LudoPlatformImg.css';

function PlatformImg({deviceImages}) {
    return (
        <div>
            {deviceImages.map((item, index) => (
                <div className='ludo-devices-container' key={index}>
                    <motion.div 
                        className='ludo-mob'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <img src={item.image1} alt="" className='ludo-mob-img'/>
                    </motion.div>
                    
                    <div className='ludo-lap'>
                        <img src={item.image2} alt="" className='ludo-lap-img'/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PlatformImg;