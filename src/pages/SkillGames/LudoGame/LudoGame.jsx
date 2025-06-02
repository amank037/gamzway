import './LudoGame.css'
import FeaturesHeader from '../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'
import CarouselSection from '../../../components/CarouselSection/CarouselSection'
import AchievementsBanner from '../../../components/AchievementsBanner/AchievementsBanner'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'
import PlatformSection from '../../../components/PlatformSection/PlatformSection'
import AccordionSection from '../../../components/AccordionSection/AccordionSection'
import PaymentSection from '../../../components/PaymentSection/PaymentSection'
import ProductSection from '../../../components/ProductSection/ProductSection'
import LandingSection from '../../../components/LandingSection/LandingSection'

// const ludocarouselData = [
//   {
//     title: "Ludo Game Development Company",
//     description: "Looking for the right Ludo game solution for your business, don't hesitate to connect with Gamzway for professional Ludo game development company. Experience with engaging gameplay and vibrant graphics.",
//     image: "https://beta.mobzway.com/assets/images/ludo-game-development/banner_img.avif",
//     isMainTitle: true,
//   },
//   {
//     title: "Ludo King Clone",
//     description: "Looking for Ludo king game development like company to build your game similar to ludo king? Hire the professional game developers blends classic gameplay with engaging experience and modern features.",
//     image: "https://beta.mobzway.com/assets/images/ludo-game-development/ludo-king.webp"
//   },
//   {
//     title: "app similar to Zupee Ludo",
//     description: "Want to build the similar game app to Zupee ludo for your business? Over the years, Ludo's enduring popularity has transcended generations, even finding its home in the digital realm as an online game.",
//     image: "https://beta.mobzway.com/assets/images/ludo-game-development/zupee-ludo.webp"
//   },
//   {
//     title: "app similar to Ludo Sikandar",
//     description: "Want to build the game similar to Ludo Sikandar app? Contact us today for the ludo game app development services provided by us, with 9+ years of experience developers featuring customizable settings for diverse player preference.",
//     image: "https://beta.mobzway.com/assets/images/ludo-game-development/ludo-Sikandar.webp"
//   },
//   {
//     title: "Snake & Ladder",
//     description: "With our latest version of Snake & Ladder experience the modern aesthetics with nostalgic journey, providing interactive features and benefit the enjoyment to all the players of any age group.",
//     image: "https://beta.mobzway.com/assets/images/ludo-game-development/snake-ladder.webp"
//   }
// ]

const landingItems = [
  {
    title: "LUDO GAME",
    description: " Ludo is a sentimental event that brings friends and family together, not only a board game.  The game has easily evolved into mobile and web platforms in the digital age of today, allowing everyone to play anywhere, any time.  At Gamzway Technologies, we enable companies to use modern Ludo game development tools catered to Android, iOS, desktop, and web, so harnessing the everlasting appeal of Ludo.",
    description2:"Rich design, real-time multiplayer interaction, and monetising options combined in our Ludo game apps help companies increase user base and income.  We provide dependable, scalable, reasonably priced development tools whether your needs call for a pre-built solution ready to use or a bespoke Ludo program.",
    button: "GET STARTED"
  }
]

const regardingItems = [
  {
    title: "REGARDING LUDO GAME",
  }
]

const modesItems = [
  {
    title:"Modes Of Ludo Game",
    description: " We create flexible Ludo game apps featuring many game variants to fit various playing approaches:"
  }
]

const modesGrid = [
  {
    image:"https://beta.mobzway.com/assets/images/classic.png",
    title:"Classic Style",
    description: "Standard Ludo rules define this classic 2–4 player mode.  Before their opponent, players roll the dice hoping to advance all of their tokens to the home area."
  },
  {
    image:"https://beta.mobzway.com/assets/images/tournaments.png",
    title:"Easy Mode",
    description: "The Quick Mode shortens the gameplay by lowering token count or move requirements, so allowing users who enjoy faster games less time needed."
  },
  {
    image:"https://beta.mobzway.com/assets/images/timer.png",
    title:"Private Table States",
    description: " Using special codes, members of a private table can design secret chambers and play with friends or relatives."
  },
  {
    image:"https://beta.mobzway.com/assets/images/tournaments.png",
    title:"Tournament States",
    description: "This competitive mode consists of entrance-fee-based matches whereby participants may join contests and earn either virtual or actual prizes. These several gameplay styles improve involvement, keep users, and let companies create several income sources. "
  },
]

const servicesTitle = [
  {
    title: " Ludo Game App's salient features",
    description: "Strong emphasis on performance, player retention, and monetisation drives our Ludo games' construction.  Important characteristics include:"
  }
]

// const featuresTitle = [
//   {
//     title: "FEATURES Of Ludo Game App",
//     description: "We are well-aware of the current market trends, and we provide updated features in our ludo games. The principal components of the ludo games that we offer are:"
//   }
// ]

// const featuresGrid = [
//   {
//     image: "https://beta.mobzway.com/assets/images/playwithmoney.png",
//     title: "Play online with Real money",
//     description: "You can choose the ludo game from many options, play online ludo with us, and win real money by winning the ludo matches."
//   },
//   {
//     image: "https://beta.mobzway.com/assets/images/playwithfriends.png",
//     title: "Play with your friends",
//     description: "If you wish to avoid unknown players, our advanced gaming platform lets you invite your friends to play ludo with you."
//   },
//   {
//     image: "https://beta.mobzway.com/assets/images/quickdeposit.png",
//     title: "Quick Deposit and Withdraw Money",
//     description: "To simplify the overall experience of ludo gaming, our gaming platforms allow one to deposit their money and withdraw their winning quickly."
//   },
//   {
//     image: "https://beta.mobzway.com/assets/images/invitation.png",
//     title: "Invitation",
//     description: "You can now invite your friends or family members to join you on our gaming platforms and enjoy ludo games here."
//   },
//   {
//     image: "https://beta.mobzway.com/assets/images/livesupport.png",
//     title: "Live Support Feature",
//     description: "If you face any difficulty while playing ludo on our platform, our live support features are available for your assistance."
//   },
//   {
//     image: "https://beta.mobzway.com/assets/images/mobilesign.png",
//     title: "Mobile Sign up",
//     description: "Signing up on our gaming platforms has never been easier even if you lack a computer, just sign-up through your mobile!"
//   },
//   {
//     image: "https://beta.mobzway.com/assets/images/notifications.png",
//     title: "Smart Notifications",
//     description: "To ensure that you don't miss out on any opportunity, our gaming platforms keep you notified about the ongoing activities of the ludo games."
//   },
//   {
//     image: "https://beta.mobzway.com/assets/images/multiplepayment.png",
//     title: "Multiple Payment Options",
//     description: "We provide a plethora of paying options, and you can use the one you find most viable for you."
//   },
//   {
//     image: "https://beta.mobzway.com/assets/images/refer_earn.png",
//     title: "Refer & Earn Functionality",
//     description: "Apart from winning rewards by playing the games, you can also refer to our website to your friends and acquaintances to earn more money."
//   },
//   {
//     image: "https://beta.mobzway.com/assets/images/rng.png",
//     title: "RNG & Technology Certification",
//     description: "All our products and services are certified and safe, and this feature has immensely contributed to our growth in this sector."
//   },
//   {
//     image: "https://beta.mobzway.com/assets/images/in_app.png",
//     title: "In-App Purchase",
//     description: "You can always opt-out for in-app purchases to enhance the overall gaming experience and win more rewards in this process."
//   },
//   {
//     image: "https://beta.mobzway.com/assets/images/dailybonus.png",
//     title: "Daily Bonus",
//     description: "If you are a regular player of our ludo games, you are entitled to daily bonuses that you can use to play more ludo games."
//   },
//   {
//     image: "https://beta.mobzway.com/assets/images/chatwithplayers.png",
//     title: "Chat With The Players",
//     description: "To make the overall experience more enjoyable, we allow our players to chat with each other during any game."
//   },
//   {
//     image: "https://beta.mobzway.com/assets/images/playguest.png",
//     title: "Play As Guest/User Account",
//     description: "Even if you do not have a regular account, you can always play our range of ludo games as a guest and win rewards."
//   },
//   {
//     image: "https://beta.mobzway.com/assets/images/rewards.png",
//     title: "Rewards & Loyalty",
//     description: "The rewards and loyalty that we offer are the best in the market, and you can choose to play from the plethora of ludo games to win the same."
//   },
//   {
//     image: "https://beta.mobzway.com/assets/images/multi_language.png",
//     title: "Multi-Language",
//     description: "Keeping in mind the linguistic diversity of the players, our ludo gaming features multiple languages, which you can adjust according to your preference."
//   }
// ]

const readyItems = [
  {
    featuresText:[
      {
        title:"Ready to talk about your ludo game concept?"
      }
    ],
    description: " Designed a Ludo app or wish to start your own gaming platform?  Let us realise your idea.  Gamzway is ready to help your company, regardless of its size—established entertainment brand or game startup—with tailored, ready-to-launch Ludo solutions. \n  Our staff can help with end-to--end deployment, MVP development, prototype construction, and consulting.  We will assist you in selecting appropriate features, organising your monetising strategy, and producing a flawless game fit for your company objectives.",
    hrefText: "LET'S TALK"
  }
]

const adminfeaturesTitle = [
  {
    title: " Features of Administration Control",
    description: "Our Ludo game has a strong administrative panel with the following options to help you totally control over your gaming platform:"
  }
]

const adminfeaturesGrid = [
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/player-management.png",
    title: "",
    description: "View, block or unblock users in user management."
  },
  
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/dashboard.png",
    title: "",
    description: "Track games performed, player performance, and real-time statistics in gaming analytics."
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/finance-management.png",
    title: "",
    description: "Revenue Reports: Control commissions and obtain clear income results"
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/game-management.png",
    title: "",
    description: "Change rules, token colours, and dice features in your custom game."
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/affiliate-management.png",
    title: "",
    description: "Set up referral networks, welcome bonuses, and prizes in promotions and offers."
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/notificstion-management.png",
    title: "",
    description: "Push Notifications: Send gamers quick alerts or advertising messages."
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/user-management.png",
    title: "",
    description: "Multi-Admin Access: Assign roles with varying degrees of authorization (e.g., Moderator, Super Admin.)."
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/analytics.png",
    title: "",
    description: "Enable IP blocking, fraud detection, and suspicious activity alerts in security management."
  }
]

const platformItems = [
  {
    featuresText:[
      {
        title: "WE BUILD THE LUDO GAME FOR ALL PLATFORMS",
        description: "We create Ludo games for several platforms so that users of any device may enjoy the same experience:"
      }
    ],
    platformGrid:[
      {
        image: "https://beta.mobzway.com/assets/images/HTML_five-broweswer.webp",
        title: "HTML 5 BROWSER",
        description: ""
      },
      {
        image: "https://img.icons8.com/?size=480&id=17836&format=png",
        title: "Android Game App",
        description: ""
      },
      {
        image: "https://img.icons8.com/?size=240&id=bN2IQyaCUVk5&format=png",
        title: "IOS GAME APP",
        description: ""
      },
      {
        image: "https://beta.mobzway.com/assets/images/Mac_PC.webp",
        title: "DESKTOP VERSION",
        description: ""
      },
      {
        image: "https://img.icons8.com/?size=480&id=IPzemd2v4Ubj&format=png",
        title: "CROSS PLATFORM UNITY BUILDS",
        description: ""
      },
      {
        image: "https://img.icons8.com/?size=200&id=MKRHZpOBBZqD&format=png",
        title: "SMART TV COMPATIBILITY (ON-DEMAND)",
        description: ""
      }
    ]
  }
]

const chooseTitle = [
  {
    title: "Why Choose Gamzway As Your Ludo Game Development Company?",
    description: " Regarding gaming solutions, Gamzway is one of a reliable development partner.  Here is the reason companies all over choose us:"
  }
]

const faqTitle = [
  {
    title: " Ludo Game Programming Questions"
  }
]

const faqData1 = [
  {
    title: "Could I create my own branding on the Ludo game app?",
    description: " Indeed, our Ludo game can be tailored with your branding, colour schemes, and extra features and is entirely white-label."
  },
  {
    title: "When might a Ludo game be launched?",
    description: "We merely need a few days to introduce our ready-made fix.  Customised solutions could require three to six weeks depending on their intricacy."
  },
  {
    title: "Could one incorporate a real money gambling capability?",
    description: " Exactly!  We provide modules like wallets, payment gateways, and withdrawal systems for real money gambling."
  },
  {
    title: "Using a Ludo game app, how may I make money?",
    description: "Entry fees, adverts, subscriptions, in-app purchases, and tournament prizes all let you make money."
  },
  {
    title: " Do you support multilingualism?",
    description: " Indeed, we may combine several languages to enable you to target either a worldwide or a regional audience."
  }
]
// const faqData2 = [
//   {
//     title: "Do you provide continued maintenance support for Ludo mobile game development?",
//     description: "Yes, we are dedicated to providing our customers with the best maintenance support for ludo mobile game development. Our customers are pretty satiated with our maintenance services, which has enabled us to carve out a niche for ourselves."
//   },
//   {
//     title: "Which country has the most Ludo Game Players?",
//     description: "India has the highest number of ludo game players, both online and offline mode."
//   },
//   {
//     title: "Is your Ludo Game app accessible on all mobile devices?",
//     description: "Yes, irrespective of Android or iOS, our ludo game app is accessible on all mobile devices."
//   },
//   {
//     title: "Do you provide a ludo website as well as a ludo app?",
//     description: "Yes, we are one of India's best ludo websites and ludo app providers. We offer our customers the best services at an affordable rate."
//   },
//   {
//     title: "How much money can I earn from an online ludo game?",
//     description: "There can be no definite answer to this question, as it primarily depends on the number of players engaged in ludo games at a time and the nature of the game that you are indulging in. For instance, a ludo tournament has more participants and is bound to have more cash rewards than a live challenge ludo game."
//   },
//   {
//     title: "What essential features would you include in my ludo game development?",
//     description: "Our ludo gaming solutions allow the players to play online ludo to win real cash. They can do so by playing games and referring the game to their friends and family members. One can also earn from the daily bonuses or loyalty points. They can also play as a regular player or as a guest. Besides, the players can also choose to play with their friends and families by inviting them over to the online platform. Moreover, the process involved in signing up and financial transactions is straightforward. We provide multiple payment options, and the players can engage in in-app purchases to increase their chances of winning a game. Also, the players are sent smart notifications about the ongoing matches from time to time, and if they get stuck while playing any game, our live support feature rescues them. They can also chat with other players while playing. Furthermore, we are aware of the security aspect of the online gaming business. All of our products are RNG certified. We employ an anti-fraud system to keep the financial transactions of our customers safe. Last, to ensure that our customers do not face any linguistic disparity, we provide that our products are available in multiple languages. "
//   } 
// ]

const productItems = [
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Poker.webp",
    title: "Poker Game",
    description: "Gamzway provides poker game development for all the popular poker games like Texas Hold’em, Omaha, Seven Stud, OFC Poker, and more. Our seasoned game developers utilize cutting-edge gaming technology to offer the player's best poker gaming experience.",
    href: "/skill-games/poker"
  },
  {
    image: "https://beta.mobzway.com/assets/images/poker-game-development/Product_Rummy.webp",
    title: "Rummy Game",
    description: "The highly talented team of rummy software developers ensures that very engaging and customized solutions of this “game of skill” are offered to the gaming clients. All the popular versions of rummy are developed as per the client’s requirements.",
    href: "/skill-games/rummy"
  },
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Teenpatti.webp",
    title: "Teen Patti Game",
    description: "Gamzway offers ready-to-use Teen Patti solutions for business ventures. We build customized solutions for all the variants like Fox,Vintage, and Teen Patti Plus. We provide solutions for all desktop & mobile devices, and web browsers at the best prices.",
    href: "/game-apis/teen-patti"
  },
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Casino.webp",
    title: "Casino Software",
    description: "For the online casino game entrepreneurs and businesses, Gamzway offers customized casino game solutions. All the popular casino games like Roulette, Blackjack, Slot, Baccarat, etc. are designed and developed at our gaming studio as per your business needs.",
    href: "/casino-games"
  },
]

const demoItems = [
  {
    featuresText: [
      {
        title: " Demand a free demo"
      }
    ],
    description: "Interested to observe the operation of our Ludo app?  Click here to arrange your free demo and view our Ludo game from the viewpoints of the player and administrator.  View the interface, features, and performance live action.",
    hrefText: "TRY DEMO"
  }
]

const pathItems = [
  {
    title: "Start Your Entrepreneurial Path with Gamzway",
    description: "Your aspiration to start a gaming company starts here.  At Gamzway, we help companies produce amazing digital games by combining strong code, innovative storytelling, and immersive gameplay design.  Whether it's a big-scale gaming platform or a hobby turned enterprise, our staff delivers professionally and passionately. \n One dice rolls at a time, let us construct your success narrative!"
  }
]


const LudoGame = () => {
  return (
    <div className='ludo-game'>
      <div className='carousel-swiper'>
        {/* <CarouselSection carouselData={ludocarouselData}/> */}
        <LandingSection landingItems={landingItems}/>
        <img src="https://beta.mobzway.com/assets/images/ludo-game-development/banner_img.avif" alt="" className="landingImg"/>
      </div>

      <AchievementsBanner />

      <div className='regarding-section'>
        <FeaturesHeader featuresText={regardingItems} />
        <p>Four players of the multiplayer board game Ludo race their tokens from start to finish depending on dice rolls.  Originally from the Indian game "Pachisi," Ludo is still a household favourite in all age groups and has gained popularity all around.  For smartphone users, its simplicity, chance-based excitement, and social gaming fit.</p>
        <p>Particularly post-2020, online ludo games have witnessed a tremendous increase in participation as consumers search for simple but entertaining games to play with friends, family, or random opponent.  Live multiplayer, in-game chat, bonus awards, and customising choices abound in the digital form to keep consumers returning for more.</p>
        <p> At Gamzway, we bring to screens with interactive elements, seamless graphics, and easy controls the same thrills.</p>
      </div>

      <div className='modes-section'>
        <FeaturesHeader featuresText={modesItems} />
        <div className='modes-grid'>
        {modesGrid.map((item, index) => (
          <div className='modes-grid-item' key={index}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
          </div>
          ))}
        </div>
      </div>

      <div className='solutions-ludo-section'>
        <div className='solutions-ludo-top'>
          <FeaturesHeader featuresText={servicesTitle}/>
        </div>
        <div className='solutions-ludo-bottom'>
          <div className='solutions-img-1'>
            <div className='sol-ludo-board-container'>
              <img src="/ludoPage/solutions/1-01.png" alt="" className="image-stack"/>
            </div>
            <div className='sol-ludo-pieces-container sol-ludo-piece1'>
              <img src="/ludoPage/solutions/2-01.png" alt="" className="image-stack"/>
            </div>
            <div className='sol-ludo-pieces-container sol-ludo-piece2'>
              <img src="/ludoPage/solutions/3-01.png" alt="" className="image-stack"/>
            </div>
            <div className='sol-ludo-pieces-container sol-ludo-piece3'>
              <img src="/ludoPage/solutions/4-01.png" alt="" className="image-stack"/>
            </div>
            <div className='sol-ludo-pieces-container sol-ludo-piece4'>
              <img src="/ludoPage/solutions/5-01.png" alt="" className="image-stack"/>
            </div>
            <div className='sol-ludo-dice-container sol-ludo-dice1'>
              <img src="/ludoPage/solutions/6-01.png" alt="" className="image-stack"/>
            </div>
            <div className='sol-ludo-dice-container sol-ludo-dice2'>
              <img src="/ludoPage/solutions/7-01.png" alt="" className="image-stack"/>
            </div>
          </div>

          <div className='solutions-desc-container'>
            <p className='solutions-desc'>
                  <br/>
                  <ul>
                    <li>Real-time interaction with two to four players makes up multiplayer support</li>
                    <br/>
                    <li>Intelligent computer opponent when playing offline is smart AI bot</li>
                    <br/>
                    <li>In-game chat: players' text and voice messages</li>
                    <br/>
                    <li>Wallet System: Integrated virtual deposit and withdrawal wallet</li>
                    <br/>
                    <li>Daily Rewards — Increase player interaction with gifts, spins, and login bonuses.</li>
                    <br/>
                    <li> Leaderboards: Globally and locally ranked systems meant to inspire rivalry.</li>
                    <br/>
                    <li>Custom avatars let players upload or choose avatars to personalise their profiles.</li>
                    <br/>
                    <li>Anti-Fraud Algorithms: Guarantee of a level playing field and prevent cheating</li>
                    <br/>
                    <li>Cross-platform compatibility: flawless Android, iOS, web, desktop experience.</li>
                    <br/>
                    <li>Social Media Integration: Simple Facebook, Google, Apple ID, etc. login</li>
                    <br/>
                  </ul>
            </p>
          </div>
        </div>
        <p className='solutions-ludo-p'> These elements not only make gaming interesting but also inspire gamers to come back often, hence enhancing user retention.</p>
      </div>

      {/* <div className='features-section'>
        <FeaturesHeader featuresText={featuresTitle} />
        <div className='features-grid'>
        {featuresGrid.map((item, index) => (
          <div className='features-grid-item' key={index}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
          </div>
          ))}
        </div>
      </div> */}

      <ContactBanner contactItems={readyItems}/>

      <div className='admin-features-section'>
        <FeaturesHeader featuresText={adminfeaturesTitle} />
        <div className='admin-features-grid'>
        {adminfeaturesGrid.map((item, index) => (
          <div className='admin-features-grid-item' key={index}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
          </div>
          ))}
        </div>
      </div>

      <PlatformSection platformItems={platformItems}/>

      <div className='solutions-ludo2-section bg-1'>
        <div className='solutions-ludo2-top'>
          <FeaturesHeader featuresText={chooseTitle}/>
        </div>

        <div className='solutions-ludo2-bottom'>
          <div className='solutions-img'>
            <img src="https://beta.mobzway.com/assets/images/why-choose.png" alt="" style={{ width: '400px', paddingTop: '30px'}}/>
          </div>
          <div className='solutions-desc-container'>
            <br/>
            <br/>
            <ul >
                <li>Over eight years of gaming development expertise, industry experience.</li>
                <br/>
                <li>Customisable Solutions with branding and feature control: white-label choices Pre-built solutions lower time-to----market and help to speed deployment.</li>
                <br/>
                <li> Perfect team including project managers, QA experts, UI/UX designers, game developers.</li>
                <br/>
                <li>Perfect data security compliance with GDPR and encrypted with techniques.</li>
                <br/>
                <li>Competitive packages for businesses and startups offer reasonably priced costs.</li>
                <br/>
                <li>Dedicated Support: Constant updates, bug corrections, and help following launch.</li>
                <br/> <br/>
                <p>Our first priorities are creating things that entertain, interact, and convert.  Using Gamzway lets you create a profitable digital business rather than only a game.</p>  
            </ul>
          </div>
        </div>
      </div>

      <div className="ludo-faq-section">
        <FeaturesHeader featuresText={faqTitle}/>
        <div className="ludo-faq-container">
          <div className="ludo-faq-left">
            <AccordionSection data={faqData1}/>
          </div>
          {/* <div className="ludo-faq-right">
            <AccordionSection data={faqData2}/>
          </div> */}
        </div>
        <button className='faq-btn'><span>ASK A QUESTION</span></button>
      </div>


      <PaymentSection />

      <ProductSection productGrid={productItems}/>
      
      <div className='path-section'>
      <FeaturesHeader featuresText={pathItems}/>
      </div>

      <ContactBanner contactItems={demoItems}/>


    </div>
  )
}

export default LudoGame