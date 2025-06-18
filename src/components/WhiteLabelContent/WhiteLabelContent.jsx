import './WhiteLabelContent.css'
import FeaturesHeader from '../FeaturesSection/FeaturesHeader/FeaturesHeader'
import { Types } from 'mongoose'

function WhiteLabelContent() {

    const investGrid =[
        {
            text:"16% - Rise of US mobile-based casino game spending and reach over the $4.8 Billion mark. (Source: Sensor Tower)"
        },
        {
            text:"Monopoly Go was the top-grossing casino game in 2023 generating over 87 million U.S. dollars through in-app purchase revenues."
        },
        {
            text:"According to the reports from Statista, the global market volume of the online gambling market is projected to reach $131.90 billion by 2027 at a CAGR of 8.54%"
        },
        {
            text:"According to Statista, the total growth value of social casino gaming was $6.2 Billion in 2020. By 2026, this amount will reach over $7.5 Billion and above."
        },
        {
            text:"The total revenue of the European online gambling market was valued at 30.5 billion euros which are projected to reach 52 billion euros by 2026."
        },
        {
            text:"Udonis says that during the Pandemic, Social Casino games generated a revenue of over $1 Billion."
        }
    ]

    const whatGrid = [
        {
            image:"/casino-games.png",
            text:"Supports Unlimited Casino Games"
        },
        {
            image:"/administrator.png",
            text:"Multi-option User & Admin Dashboard"
        },
        {
            image:"/payment.png",
            text:"Secure Payment System Integration"
        },
        {
            image:"/palette.png",
            text:"Attractive User Interface Design"
        },
    ]

    const typesGrid =[
        {
            id:"1",
            title:"Online Casino Betting Solution",
            description:"It is one of the types of white-label casino solutions that permits the users of the platform to bet along with their exciting gaming experience."
        },
        {
            id:"2",
            title:"Fantasy Casino Platform",
            description:"We provide a brand-new gaming method in our white-label casino software called the Fantasy Casino Platform, which can be an attractive concept for gaming enthusiasts."
        },
        {
            id:"3",
            title:"Blockchain Casino Solutions",
            description:"Blockchain Casino is a highly transparent and high-end securable way for casino users in our platform to render gaming services."
        },
        {
            id:"4",
            title:"Crypto Casino Software",
            description:"With our Cryptocurrency Casino Software solutions, your users can pay or bet with cryptocurrencies more rapidly in a highly secure manner."
        },
        {
            id:"5",
            title:"Bitcoin Casino Platform",
            description:"With our Bitcoin Casino White label solutions, you can enable the most widely used and encrypted Bitcoin transactions, you can improve the customer's reliability and trustworthiness."
        },
        {
            id:"6",
            title:"TRON Casino DApp Solution",
            description:"Digital transactions may be managed conveniently and completely decentralized through smart contracts with the Casino Tron Decentralized Applications."
        },
    ]

  return (
    <div className='white-label-content'>
        <div className='white-what'>
            <FeaturesHeader featuresText={[{title: "What is White Label Casino?", description: ""}]} />
            <div className='white-what-container'>
                <div className='white-what-img'>
                    <img src="https://maticz.com/assets/images/whitelabelcasino/what-is-white-label-casino.webp" alt="" />
                </div>

                <div className='white-what-text'>
                    <div className='white-what-text-content'>
                        <p>White Label Casino is a customizable online casino software that gives access to a wide range of casino games and secure payment methods. It supports multiple casino games and undergoes rigorous technical testing to ensure an optimal experience for your customers. With White Label Casino, you can launch your own online casino business in no time with ease and confidence. The white-label solution delivers a hassle-free gaming experience, enhancing customer satisfaction and driving revenue growth at a feasible cost.</p>
                        <p>Being a leading White-label casino solution provider, Maticz offers a comprehensive white-label online casino solution that helps you launch casino games on time and within budget. Our white-label casino software is highly customizable and provides a complete range of online casino services. Our casino game developers focus on offering a realistic casino experience by integrating new-age technologies like virtual reality (VR), augmented reality (AR), artificial intelligence (AI), etc.</p>
                    </div>

                    <div className='white-what-text-grid'>
                        {whatGrid.map((item,index) => (
                            <div key={index} className="white-what-text-grid-item">
                                <div><img src={item.image} alt="" /></div>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className='white-invest'>
            <FeaturesHeader featuresText={[{title: "Why Invest in White Label Online Casino?", description: ""}]} />
            <div className='white-invest-container'>
                <div className='white-invest-text'>
                    <div className='white-invest-text-content'>
                        <p>The casino industry has undergone significant changes over time, with the emergence of online casinos as a promising business opportunity in the gambling sector. As a result, it is crucial for aspiring entrepreneurs to have a solid understanding of the key market statistics to succeed in the competitive casino market.</p>
                    </div>

                    <div className='white-invest-text-grid'>
                        {investGrid.map((item, index) => (
                            <div className='white-invest-text-grid-item' key={index}>
                                <span className="white-point-bullet"></span>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='white-invest-img'>
                    <img src="https://maticz.com/assets/images/whitelabelcasino/white-label-casino.webp" alt=""/>
                </div>
            </div>
        </div>

        <div className='white-types'>
            <FeaturesHeader featuresText={[{title: "Types of White Label Online Casino", description: "We offer a wide range of White Label Online Casino Solutions including slot machines, pokers, sports betting platforms, and next-gen blockchain-based casino platforms supporting cryptos, tokens, etc."}]} />
            <div className='white-types-container'>
                <div className='white-types-grid'>
                    {typesGrid.map((item, index) => (
                        <div className='white-types-grid-item' key={index}>
                            <h1>{item.id}</h1>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div></div>

        <div></div>

        <div></div>

        <div></div>
    </div>
  )
}

export default WhiteLabelContent