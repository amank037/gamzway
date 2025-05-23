import './ProductGrid.css'
import { motion, useAnimation } from 'framer-motion'

function ProductGrid() {

  // const floatAnimation = (delay = 0) => ({
  //   y: [-30, 30, -30],
  //   transition: {
  //     delay,
  //     duration: 4,
  //     ease: "easeInOut",
  //     repeat: Infinity,
  //   }
  // })

  const card1Controls = useAnimation();
  const card2Controls = useAnimation();
  const card3Controls = useAnimation();
  const card4Controls = useAnimation();

  const handleHoverStart = () => {
    card1Controls.start({ scale: 1.1, top: '4%', left: '0%',transition: { delay: 0.6, duration: 0.3 } });
    card2Controls.start({ scale: 1.1, top: '-10%', left: '22%',transition: { delay: 0.4, duration: 0.3 } });
    card3Controls.start({ scale: 1.1, top: '-1%', left: '42%',transition: { delay: 0.2, duration: 0.3 } });
    card4Controls.start({ scale: 1.1, top: '0%', left: '55%', transition: { delay: 0.0, duration: 0.3 } });
  };

  const handleHoverEnd = () => {
    card1Controls.start({ scale: 1, top: '15%', left: '5%', transition: { delay: 0.6, duration: 0.3 } });
    card2Controls.start({ scale: 1, top: '0%', left: '25%', transition: { delay: 0.4, duration: 0.3 }  });
    card3Controls.start({ scale: 1, top: '10%', left: '38%', transition: { delay: 0.2, duration: 0.3 } });
    card4Controls.start({ scale: 1, top: '10%', left: '50%', transition: { delay: 0.0, duration: 0.3 }  });
  };

  const chipFloatAnimation = {
    y: [-16, 17, -19],
    rotate: [-15, 15, -15],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
    }
  }

  return (
    <div className='product-grid'>
      <div className='product-grid-item'>
        <a href="">
        <motion.div
          className="poker-image-stack"
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          style={{ position: "relative" }}
        >
            <img src="/ProductImages/poker/poker-bg.png" alt="Poker bg" className="poker-stack-img poker-stack-bg" />
            <img src="/ProductImages/poker/poker-glow.png" alt="Poker Glow" className="poker-stack-img poker-stack-glow" />
            <motion.img
              animate={card1Controls}
              initial={{ top: '15%', left: '5%' }}
              src="/ProductImages/poker/poker-card1.png"
              alt="Poker Cards"
              className="poker-stack-img"
              style={{ position: 'absolute', width: '40%', zIndex: 3 }}
            />
            <motion.img
              animate={card2Controls}
              initial={{ top: '0%', left: '25%' }}
              src="/ProductImages/poker/poker-card2.png"
              alt="Poker Cards"
              className="poker-stack-img"
              style={{ position: 'absolute', width: '35%', zIndex: 4 }}
            />
            <motion.img
              animate={card3Controls}
              initial={{ top: '10%', left: '38%' }}
              src="/ProductImages/poker/poker-card3.png"
              alt="Poker Cards"
              className="poker-stack-img"
              style={{ position: 'absolute', width: '40%', zIndex: 5 }}
            />
            <motion.img
              animate={card4Controls}
              initial={{ top: '10%', left: '50%' }}
              src="/ProductImages/poker/poker-card4.png"
              alt="Poker Cards"
              className="poker-stack-img"
              style={{ position: 'absolute', width: '45%', zIndex: 6 }}
            />
            <motion.img animate={chipFloatAnimation} src="/ProductImages/poker/poker-chip-left-top.png" alt="Poker Chips Left" className="poker-stack-img poker-chip-left-top" />
            <motion.img animate={chipFloatAnimation} transition={{ delay: 0.5 }} src="/ProductImages/poker/poker-chip-left-bottom.png" alt="Poker Chips Left" className="poker-stack-img poker-chip-left-bottom" />
            <motion.img animate={chipFloatAnimation} transition={{ delay: 1 }} src="/ProductImages/poker/poker-chip-right-top.png" alt="Poker Chips Right" className="poker-stack-img poker-chip-right-top" />
            <motion.img animate={chipFloatAnimation} transition={{ delay: 1.5 }} src="/ProductImages/poker/poker-chip-right-bottom.png" alt="Poker Chips Right" className="poker-stack-img poker-chip-right-bottom" />
            <img src="/ProductImages/poker/poker-text.png" alt="Poker Text" className="poker-stack-img poker-stack-text" />
          </motion.div>
        </a>
      </div>
     
    </div>
  )
}

export default ProductGrid