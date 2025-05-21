import './LudoGame.css'
import FeaturesHeader from '../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'
import CarouselSection from '../../../components/CarouselSection/CarouselSection'
import AchievementsBanner from '../../../components/AchievementsBanner/AchievementsBanner'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'
import PlatformSection from '../../../components/PlatformSection/PlatformSection'
import AccordionSection from '../../../components/AccordionSection/AccordionSection'
import ClientSection from '../../../components/ClientSection/ClientSection'
import PaymentSection from '../../../components/PaymentSection/PaymentSection'
import ProductSection from '../../../components/ProductSection/ProductSection'

const ludocarouselData = [
  {
    title: "Ludo Game Development Company",
    description: "Looking for the right Ludo game solution for your business, don't hesitate to connect with Gamzway for professional Ludo game development company. Experience with engaging gameplay and vibrant graphics.",
    image: "https://beta.mobzway.com/assets/images/ludo-game-development/banner_img.avif",
    isMainTitle: true,
  },
  {
    title: "Ludo King Clone",
    description: "Looking for Ludo king game development like company to build your game similar to ludo king? Hire the professional game developers blends classic gameplay with engaging experience and modern features.",
    image: "https://beta.mobzway.com/assets/images/ludo-game-development/ludo-king.webp"
  },
  {
    title: "app similar to Zupee Ludo",
    description: "Want to build the similar game app to Zupee ludo for your business? Over the years, Ludo's enduring popularity has transcended generations, even finding its home in the digital realm as an online game.",
    image: "https://beta.mobzway.com/assets/images/ludo-game-development/zupee-ludo.webp"
  },
  {
    title: "app similar to Ludo Sikandar",
    description: "Want to build the game similar to Ludo Sikandar app? Contact us today for the ludo game app development services provided by us, with 9+ years of experience developers featuring customizable settings for diverse player preference.",
    image: "https://beta.mobzway.com/assets/images/ludo-game-development/ludo-Sikandar.webp"
  },
  {
    title: "Snake & Ladder",
    description: "With our latest version of Snake & Ladder experience the modern aesthetics with nostalgic journey, providing interactive features and benefit the enjoyment to all the players of any age group.",
    image: "https://beta.mobzway.com/assets/images/ludo-game-development/snake-ladder.webp"
  }
]

const modesItems = [
  {
    title:"Modes Of Ludo Game",
    description: "There are different modes of ludo gaming options that Gamzway Technologies offer for your players to choose from. Let's have a quick look at them."
  }
]

const modesGrid = [
  {
    image:"https://beta.mobzway.com/assets/images/livechallenges.png",
    title:"Live Challenges",
    description: "In live challenges, ludo enthusiasts can play ludo in online mode by the current challenge of the game."
  },
  {
    image:"https://beta.mobzway.com/assets/images/tournaments.png",
    title:"Tournaments",
    description: "You can also choose to play the tournaments where multiple players compete against one another at a time to win big rewards."
  },
  {
    image:"https://beta.mobzway.com/assets/images/timer.png",
    title:"Timer",
    description: "This enables one to play within a fixed time limit, and you shall have to make quick decisions regarding your moves."
  },
  {
    image:"https://beta.mobzway.com/assets/images/classic.png",
    title:"Classic",
    description: "The standard variant is just like traditional ludo, which you can play in online mode to win handsome cash prizes. "
  },
]

const servicesTitle = [
  {
    title: "ONLINE LUDO GAME DEVELOPMENT SERVICES"
  }
]

const featuresTitle = [
  {
    title: "FEATURES Of Ludo Game App",
    description: "We are well-aware of the current market trends, and we provide updated features in our ludo games. The principal components of the ludo games that we offer are:"
  }
]

const featuresGrid = [
  {
    image: "https://beta.mobzway.com/assets/images/playwithmoney.png",
    title: "Play online with Real money",
    description: "You can choose the ludo game from many options, play online ludo with us, and win real money by winning the ludo matches."
  },
  {
    image: "https://beta.mobzway.com/assets/images/playwithfriends.png",
    title: "Play with your friends",
    description: "If you wish to avoid unknown players, our advanced gaming platform lets you invite your friends to play ludo with you."
  },
  {
    image: "https://beta.mobzway.com/assets/images/quickdeposit.png",
    title: "Quick Deposit and Withdraw Money",
    description: "To simplify the overall experience of ludo gaming, our gaming platforms allow one to deposit their money and withdraw their winning quickly."
  },
  {
    image: "https://beta.mobzway.com/assets/images/invitation.png",
    title: "Invitation",
    description: "You can now invite your friends or family members to join you on our gaming platforms and enjoy ludo games here."
  },
  {
    image: "https://beta.mobzway.com/assets/images/livesupport.png",
    title: "Live Support Feature",
    description: "If you face any difficulty while playing ludo on our platform, our live support features are available for your assistance."
  },
  {
    image: "https://beta.mobzway.com/assets/images/mobilesign.png",
    title: "Mobile Sign up",
    description: "Signing up on our gaming platforms has never been easier even if you lack a computer, just sign-up through your mobile!"
  },
  {
    image: "https://beta.mobzway.com/assets/images/notifications.png",
    title: "Smart Notifications",
    description: "To ensure that you don't miss out on any opportunity, our gaming platforms keep you notified about the ongoing activities of the ludo games."
  },
  {
    image: "https://beta.mobzway.com/assets/images/multiplepayment.png",
    title: "Multiple Payment Options",
    description: "We provide a plethora of paying options, and you can use the one you find most viable for you."
  },
  {
    image: "https://beta.mobzway.com/assets/images/refer_earn.png",
    title: "Refer & Earn Functionality",
    description: "Apart from winning rewards by playing the games, you can also refer to our website to your friends and acquaintances to earn more money."
  },
  {
    image: "https://beta.mobzway.com/assets/images/rng.png",
    title: "RNG & Technology Certification",
    description: "All our products and services are certified and safe, and this feature has immensely contributed to our growth in this sector."
  },
  {
    image: "https://beta.mobzway.com/assets/images/in_app.png",
    title: "In-App Purchase",
    description: "You can always opt-out for in-app purchases to enhance the overall gaming experience and win more rewards in this process."
  },
  {
    image: "https://beta.mobzway.com/assets/images/dailybonus.png",
    title: "Daily Bonus",
    description: "If you are a regular player of our ludo games, you are entitled to daily bonuses that you can use to play more ludo games."
  },
  {
    image: "https://beta.mobzway.com/assets/images/chatwithplayers.png",
    title: "Chat With The Players",
    description: "To make the overall experience more enjoyable, we allow our players to chat with each other during any game."
  },
  {
    image: "https://beta.mobzway.com/assets/images/playguest.png",
    title: "Play As Guest/User Account",
    description: "Even if you do not have a regular account, you can always play our range of ludo games as a guest and win rewards."
  },
  {
    image: "https://beta.mobzway.com/assets/images/rewards.png",
    title: "Rewards & Loyalty",
    description: "The rewards and loyalty that we offer are the best in the market, and you can choose to play from the plethora of ludo games to win the same."
  },
  {
    image: "https://beta.mobzway.com/assets/images/multi_language.png",
    title: "Multi-Language",
    description: "Keeping in mind the linguistic diversity of the players, our ludo gaming features multiple languages, which you can adjust according to your preference."
  }
]

const readyItems = [
  {
    featuresText:[
      {
        title:"Ready to discuss your project?"
      }
    ],
    description: "Need expert advice on ludo game development? Get in touch with us now and let our seasoned ludo game developers answer all your questions.",
    hrefText: "LET'S TALK"
  }
]

const adminfeaturesTitle = [
  {
    title: "Admin Control Features",
    description: "With our best Ludo software solutions, we offer the best BackOffice and CRM tools which make game management easy. You can enjoy a user-friendly dashboard along with all the essential & valuable features to manage the game rooms in real-time. It is essential to imbibe some control features for the admin, and Gamzway Technologies has ensured that. So, let's have a quick look at them."
  }
]

const adminfeaturesGrid = [
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/dashboard.png",
    title: "Dashboard",
    description: "Our dashboard makes it simple to go through the game analysis. Our feature dashboard allows you to track your progress and performance."
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/game-management.png",
    title: "Game Rooms",
    description: "Gamzway's online gaming solutions include an immaculate game room with thorough options for gaming solutions from which your gamers may pick."
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/tournament-management.png",
    title: "Tournaments",
    description: "We provide a variety of tournament choices that will allow your players to interact with your online ludo gaming platform and increase traffic to your ludo gaming."
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/game-history.png",
    title: "Game History",
    description: "Our ludo gaming solutions come with the feature of game history, and this allows the players to review their overall participation in the ludo games and assess their position better."
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/player-management.png",
    title: "Player Management",
    description: "The ludo gaming solutions we offer will allow you to monitor the statistics of your gamers and assess the progress and scope of your game."
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/user-management.png",
    title: "Users & Sub Admins",
    description: "You shall be in charge of the game and shall be able to select and customize both users and sub-admins to improve the overall ludo gaming experience."
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/affiliate-management.png",
    title: "Affiliates",
    description: "Our affiliate networks will help you advertise the ludo games-related deals and enhance website interaction, expanding your business's reach."
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/finance-management.png",
    title: "Finance",
    description: "The finance component of our gaming solutions keeps track of all of the transactions made by players on the gaming platform, making it easy for them to monitor their deposits and withdrawals."
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/notificstion-management.png",
    title: "Notifications",
    description: "All users get notifications from our online ludo gaming software. These alerts ensure that our users do not miss any opportunity to play and earn."
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/promotion-management.png",
    title: "Promotions",
    description: "Our online gaming software solutions enable you to promote the websites, thus increasing the chance of increasing engagement with your potential customers."
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/analytics.png",
    title: "Analytics",
    description: "Our gaming solutions are loaded with intelligent analytics, allowing you to discover potential clients, their requirements, and preferences, boosting your business's performance."
  },
  {
    image: "https://beta.mobzway.com/assets/images/backoffice-crm-icon/reports.png",
    title: "Reports",
    description: "Our ludo game comes with a report feature. This will allow you to evaluate all the relevant statistical data, providing you with an insight into the performance and growth of your business."
  }
]

const platformItems = [
  {
    featuresText:[
      {
        title: "WE BUILD THE POKER GAME FOR ALL PLATFORMS"
      }
    ],
    platformGrid:[
      {
        image: "https://beta.mobzway.com/assets/images/HTML_five-broweswer.webp",
        title: "HTML 5 BROWSER",
        description: "We advise HTML 5 based online ludo software for your ludo gaming business, which can adapt to multiple screen widths and be played in various browsers. So, regardless of your customers' device or web browser, they will enjoy the experience."
      },
      {
        image: "https://beta.mobzway.com/assets/images/Native_Mobile.webp",
        title: "NATIVE MOBILE",
        description: "Our apps are compatible with Android and iOS platforms and will keep your casino players interested in their mobile devices. Our app's fascinating features involve social logins, multi-player gaming, and secure payment gateways to ensure uninterrupted gameplay."
      },
      {
        image: "https://beta.mobzway.com/assets/images/Mac_PC.webp",
        title: "MAC/WINDOWS",
        description: "Our online ludo software is available for Mac and Windows. They are laced with spectacular graphic effects, high-quality sound effects, various payment choices, and various other unique features."
      },
    ]
  }
]

const chooseTitle = [
  {
    title: "Why Choose Gamzway As Your Ludo Game Development Company?",
    description: "Gamzway brings to you the best gaming artwork, technology, platform compatibility, security, and post-sales so that your ludo gaming business always stays on top."
  }
]

const faqTitle = [
  {
    title: "Ludo Game Software FAQS"
  }
]

const faqData1 = [
  {
    title: "What is an Online Ludo Game?",
    description: "Ludo is one of the most popular board games of all time. This game is played over the internet in the contemporary scenario, which has been popularized as an online ludo game. Online ludo gaming has many advantages over traditional ludo board games and is increasing in popularity."
  },
  {
    title: "Is Ludo an Indian Game?",
    description: "Some studies indicate that the ludo game originated in India sometime around the sixth century A.D. It is also believed that the game was referred to as pachisi back then, and the contemporary variant of ludo is a derivative of the same."
  },
  {
    title: "What is your expertise in Ludo game app development?",
    description: "We have more than six years of relevant experience in the niche of ludo game app development. Our extensive experience in this field has enabled us to be one of the best companies from whom you can procure your ludo gaming solution."
  },
  {
    title: "How Many do Gamzway provide Ludo Game variations?",
    description: "Our ludo gaming has four variants: Live Challenges, Tournaments, Timer, and Classic."
  },
  {
    title: "How much time does it take to develop a mobile Ludo game?",
    description: "It takes us 7 days or 1 week to develop a mobile ludo game."
  },
  {
    title: "How much does it cost to develop a ludo game?",
    description: "The cost of developing an online ludo game varies according to the client's demand. To begin with, it shall cost between 1 Lakh to 3.5 lakh for a game with simple and basic features, which can function on a single platform like Android or iOS. Rest, all of our products are customizable, and the cost of the same depends on the specific demand of our customers. For advanced and updated features, you shall have to pay more."
  }
]

const faqData2 = [
  {
    title: "Do you provide continued maintenance support for Ludo mobile game development?",
    description: "Yes, we are dedicated to providing our customers with the best maintenance support for ludo mobile game development. Our customers are pretty satiated with our maintenance services, which has enabled us to carve out a niche for ourselves."
  },
  {
    title: "Which country has the most Ludo Game Players?",
    description: "India has the highest number of ludo game players, both online and offline mode."
  },
  {
    title: "Is your Ludo Game app accessible on all mobile devices?",
    description: "Yes, irrespective of Android or iOS, our ludo game app is accessible on all mobile devices."
  },
  {
    title: "Do you provide a ludo website as well as a ludo app?",
    description: "Yes, we are one of India's best ludo websites and ludo app providers. We offer our customers the best services at an affordable rate."
  },
  {
    title: "How much money can I earn from an online ludo game?",
    description: "There can be no definite answer to this question, as it primarily depends on the number of players engaged in ludo games at a time and the nature of the game that you are indulging in. For instance, a ludo tournament has more participants and is bound to have more cash rewards than a live challenge ludo game."
  },
  {
    title: "What essential features would you include in my ludo game development?",
    description: "Our ludo gaming solutions allow the players to play online ludo to win real cash. They can do so by playing games and referring the game to their friends and family members. One can also earn from the daily bonuses or loyalty points. They can also play as a regular player or as a guest. Besides, the players can also choose to play with their friends and families by inviting them over to the online platform. Moreover, the process involved in signing up and financial transactions is straightforward. We provide multiple payment options, and the players can engage in in-app purchases to increase their chances of winning a game. Also, the players are sent smart notifications about the ongoing matches from time to time, and if they get stuck while playing any game, our live support feature rescues them. They can also chat with other players while playing. Furthermore, we are aware of the security aspect of the online gaming business. All of our products are RNG certified. We employ an anti-fraud system to keep the financial transactions of our customers safe. Last, to ensure that our customers do not face any linguistic disparity, we provide that our products are available in multiple languages. "
  } 
]

const productItems = [
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Poker.webp",
    title: "Poker Game Development",
    description: "Gamzway provides poker game development for all the popular poker games like Texas Hold’em, Omaha, Seven Stud, OFC Poker, and more. Our seasoned game developers utilize cutting-edge gaming technology to offer the player's best poker gaming experience.",
    href: "/skill-games/poker"
  },
  {
    image: "https://beta.mobzway.com/assets/images/poker-game-development/Product_Rummy.webp",
    title: "Rummy Game Development",
    description: "The highly talented team of rummy software developers ensures that very engaging and customized solutions of this “game of skill” are offered to the gaming clients. All the popular versions of rummy are developed as per the client’s requirements.",
    href: "/skill-games/rummy"
  },
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Teenpatti.webp",
    title: "Teen Patti Game Development",
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
        title: "Start your business journey with Gamzway"
      }
    ],
    description: "Try Our Games, and explore all the features and solutions you need to start, run, and grow your business.",
    hrefText: "TRY DEMO"
  }
]


const LudoGame = () => {
  return (
    <div className='ludo-game'>
      <div className='carousel-swiper'>
        <CarouselSection carouselData={ludocarouselData}/>
      </div>

      <AchievementsBanner />

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
          <div className='solutions-img'>
              <img src="https://beta.mobzway.com/assets/images/poker-game-development/poker-game-developer.webp" alt="" />
          </div>

          <div className='solutions-desc-container'>
            <p className='solutions-desc'>
            <br/><br/>
            Gamzway Technologies is the leading Ludo game app development company serving the clients in India, the USA, the UK, and Australia. We specialize in delivering next-generation Ludo game development services to both established gaming businesses and ambitious entrepreneurs. Our expert developers craft Ludo games that strike the perfect balance between simplicity and engagement, capturing the essence of traditional Ludo games with a modern twist.
            <br/> <br/> Our Ludo game creators offer tailored solutions for iOS, Android, Web, and Desktop platforms. As a dedicated Ludo game development company, we are committed to creating exceptional games that captivate players for extended periods. Leveraging contemporary graphics, animations, immersive sound effects, and cutting-edge technology, we bring forth the finest Ludo gaming experiences on virtual platforms. Moreover, we prioritize robust security measures to safeguard player data privacy and payment security.
            <br/> <br/> Our customizable Ludo game development company are designed to meet each client's specific needs. The globally recognized game design expertise of Gamzway combines stunning visuals with the latest technology.
            <br/> <br/>Our professional iOS and Android game development team meticulously assess client requirements, creating a comprehensive development plan open to client feedback. We value our customers' input and integrate it into our services to ensure all their needs are met. In addition, our Ludo game developer services come with a 24-hour technical support system, ensuring you're never left on your own.
            <br/> <br/>Why wait to jumpstart your Ludo game business? Connect with us today! We are your trusted Ludo game development company, offering top-notch services for Ludo app development, competitive Ludo game app development cost, and unparalleled expertise in the field.
            </p>
          </div>
        </div>
      </div>

      <div className='features-section'>
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
      </div>

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
            <img src="https://beta.mobzway.com/assets/images/why-choose.png" alt="" style={{ width: '500px', paddingTop: '30px'}}/>
          </div>
          <div className='solutions-desc-container'>
            <br/>
            <br/>
            <ul >
                <li>Expert Assistance</li>
                <br/>
                <li>On-time Accomplishment of Projects</li>
                <br/>
                <li>Highly-advanced technology.</li>
                <br/>
                <li>Hassle-free and timely maintenance.</li>
                <br/>
                <li>High-performance gaming experience.</li>
                <br/>
                <li>Support most of the payment gateways integration.</li>
                <br/>
                <li>Free business consultation to help ludo game operators.</li>
                <br/>
                <li>Satisfied customer base in America, Europe, Africa, and Asia.</li>
                <br/>
                <li>24x7 monitoring & support team to ensure 99.99% game uptime.</li>
                <br/>
                <li>Online ludo solutions are available on all Web, Mobile, PC & Mac platforms.</li>
            </ul>
            <button>REQUEST A QUOTE</button>
          </div>
        </div>
      </div>

      <div className="ludo-faq-section">
        <FeaturesHeader featuresText={faqTitle}/>
        <div className="ludo-faq-container">
          <div className="ludo-faq-left">
            <AccordionSection data={faqData1}/>
          </div>
          <div className="ludo-faq-right">
            <AccordionSection data={faqData2}/>
          </div>
        </div>
        <button className='faq-btn'><span>ASK A QUESTION</span></button>
      </div>

      <ClientSection />

      <PaymentSection />

      <ProductSection productGrid={productItems}/>

      <ContactBanner contactItems={demoItems}/>


    </div>
  )
}

export default LudoGame