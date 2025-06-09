import FeaturesHeader from "../FeaturesSection/FeaturesHeader/FeaturesHeader"
import './ProductSection.css'

const productTitle = [
    {
        title: "PRODUCTS YOU MAY LIKE"
    }
]

function ProductSection({ productGrid }) {
  return (
    <div className="product-section">
        <FeaturesHeader featuresText={productTitle}/>
        <div className="product-section-grid">
            {productGrid.map((item, index) => (
                <a href={item.href} className="product-section-grid-item" key={index}>
                    <img src={item.image} alt='' />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </a>
            ))}
        </div>
    </div>
  )
}

export default ProductSection