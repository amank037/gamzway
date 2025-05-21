import './PaymentSection.css'


function PaymentSection() {
  return (
    <div className="payments-section">
        <div className="payments-container">
            <h1 className="payments-title">Our Payment gateway integration</h1>
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