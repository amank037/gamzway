import './ProductGrid.css'

function ProductGrid({productGrid}) {
  return (
        <div className='product-grid'>
          {productGrid.map((item, index) => (
            <div className='product-grid-item' key={index}>
              <div className='product-grid-image-wrap'>
                <a href=""><img src={item.image} alt="" /></a>
              </div>
            </div>
            ))}
        </div>
  )
}

export default ProductGrid