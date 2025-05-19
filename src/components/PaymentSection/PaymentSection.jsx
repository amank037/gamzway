import FeaturesHeader from "../FeaturesSection/FeaturesHeader/FeaturesHeader"
import './PaymentSection.css'

const paymentsTitle = [
    {
        title: "Our Payment gateway integration"
    }
]

function PaymentSection() {
  return (
    <div className="payments-section">
        <div className="payments-container">
            <FeaturesHeader featuresText={paymentsTitle} titleStyle={{color:"#000000",  fontSize: '48px', fontWeight: '400'}}/>
            <div className="payments-icons-1">
                <img src="https://beta.mobzway.com/assets/images/rummy-game-development/CashfreePayments.webp" alt="" />
                <img src="https://beta.mobzway.com/assets/images/rummy-game-development/Razorpay.webp" alt="" />
                <img src="https://beta.mobzway.com/assets/images/rummy-game-development/Payu.webp" alt="" />
                <img src="https://beta.mobzway.com/assets/images/rummy-game-development/Paytm.webp" alt="" />
                <img src="https://beta.mobzway.com/assets/images/rummy-game-development/Neteller.webp" alt="" />
                <img src="https://beta.mobzway.com/assets/images/rummy-game-development/PayPal.webp" alt="" />
            </div>
            <div className="payments-icons-2">
                <img src="https://beta.mobzway.com/assets/images/rummy-game-development/Bitcoin.webp" alt="" />
                <img src="https://beta.mobzway.com/assets/images/rummy-game-development/Stripe.webp" alt="" />
                <img src="https://beta.mobzway.com/assets/images/rummy-game-development/Skrill.webp" alt="" />
            </div>
        </div>
    </div>
  )
}

export default PaymentSection