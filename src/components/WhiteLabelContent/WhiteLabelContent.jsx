import './WhiteLabelContent.css'
import FeaturesHeader from '../FeaturesSection/FeaturesHeader/FeaturesHeader'
import FeaturesGridV3 from '../FeaturesGridV3/FeaturesGridV3'

function WhiteLabelContent({casinoGrid, casinoTitle}) {

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

    // const casinoTitle = [
    // {
    //     title: "White Label Casino Software For Various Games",
    //     description:"Our white-label casino software comprises an expansive range of games that cater to player’s preferences offering thrilling game experiences."
    // }
    // ]

    // const casinoGrid =[
    //     {
    //         image:"/poker.png",
    //         title:"Poker",
    //         description:"Poker is a popular casino card game played between two to ten players where they bet to hold the best possible hand of cards. The person with the best cards in hand has a high probability of winning."
    //     },
    //     {
    //         image:"/baccarat.png",
    //         title:"Baccarat",
    //         description:"Baccarat is one of the staple card games with simple gameplay where up to fourteen players can play. The players don't have control of the cards they win or tie by placing bets based on the outcome."
    //     },
    //     {
    //         image:"/slots.png",
    //         title:"Slot",
    //         description:"Slot machines are a popular casino game often referred to as a one-armed bandit. The players place bets by spinning the reels to align with the specified combination to win rewards and bonus rounds."
    //     },
    //     {
    //         image:"/roulette.png",
    //         title:"Roulette",
    //         description:"Roulette is a famous casino game with a spinning wheel and ball the players bet based on the outcomes where the ball lands on the wheel. The game includes several various French, American, European, etc."
    //     },
    //     {
    //         image:"/bingo.png",
    //         title:"Bingo",
    //         description:"Bingo is a social game where numbers are called out randomly to achieve a pre-determined pattern for winning. The bingo game has several variations such as U-pick’Em bingo, Shotgun bingo, Quick shot bingo, etc."
    //     },
    //     {
    //         image:"/blackjack.png",
    //         title:"Blackjack",
    //         description:"Blackjack is a popular strategic casino card game that is often referred to as “twenty-one”. The game is played using a deck of cards against the dealer. The player with hands of cards close to twenty-one wins the match."
    //     },
    // ]

    const featuresTitle = [
        {
            title: "Features of Our White Label Online Casino",
            description: "Being the pro player in casino game development, We craft white-label casino solutions that are integrated with top-notch features aiming to deliver an immersive gaming experience to the users.            "
        }
    ]


  return (
    <div className='white-label-content'>
        {/* <div className='white-what'>
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
        </div> */}

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

        {/* <div className='white-types'>
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
        </div> */}

        {/* <div className='white-benefits'>
            <FeaturesHeader featuresText={[{title: "Benefits of White Label Casino", description: "Availing of white-label online casinos provides countless benefits for anyone who wishes to enter the igaming industry. Explore the key benefits of white-label casino software."}]} />
            <div className='white-benefits-container'>
                <div className='white-benefits-grid'>
                    {benefitsGrid.map((item, index) => (
                        <div className='white-benefits-grid-item' key={index}>
                            <h1>{item.id}</h1>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div> */}

        <div className='white-benefits'>
            <FeaturesHeader featuresText={[{title: "Benefits of White Label Casino", description: "Availing of white-label online casinos provides countless benefits for anyone who wishes to enter the igaming industry. Explore the key benefits of white-label casino software."}]} />
            <div className='white-benefits-container'>
                <div className='white-benefits-grid poker-white-benefits-grid'>
                    <div className='white-benefits-card'>
                        <div className='card-icon'>
                        <i className="fas fa-rocket"></i>
                        </div>
                        <h3>Ready-to-go Product</h3>
                        <p>The white-label online casino is a pre-fabricated solution that helps to launch your casino platform rapidly in the market and helps businesses to swiftly enter the casino market.</p>
                    </div>

                    <div className='white-benefits-card'>
                        <div className='card-icon'>
                        <i className="fas fa-laptop-code"></i>
                        </div>
                        <h3>Cross-platform Compatibility</h3>
                        <p>The white-label casino solutions improve player engagement as they are implemented with cross-platform compatibility support on various devices and platforms.</p>
                    </div>

                    <div className='white-benefits-card'>
                        <div className='card-icon'>
                        <i className="fas fa-gavel"></i>
                        </div>
                        <h3>Regulatory Compliance</h3>
                        <p>Business owners need not worry about legal issues as the white-label casino solution comes with built-in regulatory features and it aligns with the legal requirements.</p>
                    </div>

                    <div className='white-benefits-card'>
                        <div className='card-icon'>
                        <i className="fas fa-coins"></i>
                        </div>
                        <h3>Multi-Currency Support</h3>
                        <p>The players can gain access to multiple currencies which helps facilitate transactions seamlessly and captivates a wide range of players.</p>
                    </div>

                    <div className='white-benefits-card'>
                        <div className='card-icon'>
                        <i className="fas fa-cart-shopping"></i>
                        </div>
                        <h3>Secure Payment System</h3>
                        <p>Secure payment gateways are integrated with the white-label casino allowing users to make transactions using a wide range of payment methods combined with high-security protocols.</p>
                    </div>

                    <div className='white-benefits-card'>
                        <div className='card-icon'>
                        <i className="fa-solid fa-envelope"></i>
                        </div>
                        <h3>Automated Mailing System</h3>
                        <p>The automated mailing system helps the players and operators make informed decisions, provides updates, promotes new games, and keeps the players connected.</p>
                    </div>
                </div>
            </div>
        </div>
        
        {/* <div>
            <FeaturesGridV3 featuresGridV3={casinoGrid} featuresTitleV3={casinoTitle} />
        </div> */}

        <div className='white-casino-section'>
            <FeaturesHeader featuresText={casinoTitle} />
            <div className='white-casino'>
            {casinoGrid.map((item, index) => (
                <div className='white-casino-item' key={index}>
                    <div className='white-casino-img'>
                        <img src={item.image} alt="" />
                    </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                </div>
                ))}
            </div>
        </div>

        <div className='choose-section2'>
            <FeaturesHeader featuresText={featuresTitle}/>
            <div className='choose-container'>
                <div className='choosev2-grid'>
                    <div className='choose-card'>
                        <div className='card-icon'>
                        <i className="fas fa-user"></i>
                        </div>
                        <h3>PAM System</h3>
                        <p>The Player Account Management (PAM) system in our white-label crypto casino solution makes it convenient to maintain multiple casino player accounts.</p>
                    </div>

                    <div className='choose-card'>
                        <div className='card-icon'>
                        <i className="fas fa-file-shield"></i>
                        </div>
                        <h3>Seamless Payment Method</h3>
                        <p>Our White Label Casino System includes effortless payment methods that accept both fiat money and cryptocurrencies.</p>
                    </div>

                    <div className='choose-card'>
                        <div className='card-icon'>
                        <i className="fas fa-award"></i>
                        </div>
                        <h3>Bonus & Reward System</h3>
                        <p>This system represented in our White-label crypto casino solution assists in improving the retention rate of your users by engaging them with lucrative rewards.</p>
                    </div>

                    <div className='choose-card'>
                        <div className='card-icon'>
                        <i className="fas fa-list-check"></i>
                        </div>
                        <h3>Control Management</h3>
                        <p>Robust Management and the scrutinizing system are represented in our white-label casino game solution for permitting admin to keep a centralized track and control of various activities on the platform.</p>
                    </div>

                    <div className='choose-card'>
                        <div className='card-icon'>
                        <i className="fas fa-shuffle"></i>
                        </div>
                        <h3>RNG Based System</h3>
                        <p>Because our White-label casino solution is an RNG-based system, you can be confident in the fairness and flexibility of the gameplay.</p>
                    </div>

                    <div className='choose-card'>
                        <div className='card-icon'>
                        <i className="fas fa-dice"></i>
                        </div>
                        <h3>Games Control Module</h3>
                        <p>On our White label Casino game software, we provide you the ability to manage multiple casino games conveniently.</p>
                    </div>

                    <div className='choose-card'>
                        <div className='card-icon'>
                        <i className="fas fa-users-line"></i>
                        </div>
                        <h3>Player Lobby</h3>
                        <p>White-label crypto casino solution offered by Maticz that supports a user-friendly player lobby or game lobby.</p>
                    </div>

                    <div className='choose-card'>
                        <div className='card-icon'>
                        <i className="fas fa-brush"></i>
                        </div>
                        <h3>On-demand Customizations</h3>
                        <p>We simplify you to get seamless customization possibilities in our white-label crypto casino as we can customize everything in the software per your business needs.</p>
                    </div>

                    <div className='choose-card'>
                        <div className='card-icon'>
                        <i className="fas fa-people-arrows"></i>
                        </div>
                        <h3>UI Engagement</h3>
                        <p>Our White-label casino game solution has a user interface that is appealing and easy to use and can be customized that meet the client's necessities.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhiteLabelContent