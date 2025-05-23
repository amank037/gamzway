import './ProductGrid.css'

function ProductGrid() {
  return (
    <div className='product-grid'>
      <div className='product-grid-item'>
        <a href="">
          <div className="poker-image-stack">
            <img src="/ProductImages/poker/poker-bg.png" alt="Poker bg" className="poker-stack-img poker-stack-bg" />
            <img src="/ProductImages/poker/poker-glow.png" alt="Poker Glow" className="poker-stack-img poker-stack-glow" />
            <div className="card-container card1">
              <img src="/ProductImages/poker/poker-card1.png" alt="Poker Cards" className="poker-stack-img" />
            </div>
            <div className="card-container card2">
              <img src="/ProductImages/poker/poker-card2.png" alt="Poker Cards" className="poker-stack-img" />
            </div>
            <div className="card-container card3">
              <img src="/ProductImages/poker/poker-card3.png" alt="Poker Cards" className="poker-stack-img" />
            </div>
            <div className="card-container card4">
              <img src="/ProductImages/poker/poker-card4.png" alt="Poker Cards" className="poker-stack-img" />
            </div>
            <div className="chip-container chip-left-top">
              <img src="/ProductImages/poker/poker-chip-left-top.png" alt="Poker Chips Left" className="poker-stack-img" />
            </div>
            <div className="chip-container chip-left-bottom">
              <img src="/ProductImages/poker/poker-chip-left-bottom.png" alt="Poker Chips Left" className="poker-stack-img" />
            </div>
            <div className="chip-container chip-right-top">
              <img src="/ProductImages/poker/poker-chip-right-top.png" alt="Poker Chips Right" className="poker-stack-img" />
            </div>
            <div className="chip-container chip-right-bottom">
              <img src="/ProductImages/poker/poker-chip-right-bottom.png" alt="Poker Chips Right" className="poker-stack-img" />
            </div>
            <img src="/ProductImages/poker/poker-text.png" alt="Poker Text" className="poker-stack-img poker-stack-text" />
          </div>
        </a>
      </div>
    </div>
  )
}

export default ProductGrid