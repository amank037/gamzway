import './TambolaGame.css'
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import FeaturesHeader from '../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader'
import FeaturesGrid from '../../../components/FeaturesSection/FeaturesGrid/FeaturesGrid'
import CustomGrid from '../../../components/CustomGrid/CustomGrid'
import ContactBanner from '../../../components/ContactBanner/ContactBanner'
import AccordionSection from '../../../components/AccordionSection/AccordionSection'
import PaymentSection from '../../../components/PaymentSection/PaymentSection'
import ProductSection from '../../../components/ProductSection/ProductSection'

const landingItems = [
  {
    title: "TAMBOLA GAME DEVELOPMENT",
    description: "Millions of people all around enjoy the classic number-based game Tambola, sometimes called Housie.  Played with tickets and a draw of random numbers, Tambola is an exciting, lucky game with great expectation.  Originally enjoyed at community events and meetings, it has become a well-liked online game with creative themes, customising, and real-time multiplayer support.",
    description2: " Our area of expertise at Gamzway is developing desktop, web, and mobile high-performance Tambola game applications.  Our staff guarantees that the gameplay experience is scalable, simple, and interesting—fit for both amateur gamers and big tournament planners.",
    button: "REQUEST A QUOTE",
  }
]

const variationTitle = [{
  title: "Tambola Game Variations"
}]

const variationGrid = [
  {
    title: "Classic Tambola",
    description: "Traditional 90-number ticket game with one-line, two-line, and full-house gains. Perfect for authentic Tambola experience."
  },
  {
    title: "Rapid Tambola",
    description: "A quicker variation for short sessions with less numbers, ideal for fast-paced gaming environments."
  },
  {
    title: "Picture Tambola",
    description: "Perfect for youngsters or theme-based games, this variant replaces numbers with images or symbols for a more engaging experience."
  },
  {
    title: "Alphabet Tambola",
    description: "Played with letters rather than numbers, ideal for themed or educational gatherings."
  },
  {
    title: "Custom Branded Games",
    description: "Businesses can order completely branded or custom-featured games for virtual events or marketing initiatives."
  },
  {
    title: "Flexible Game Modes",
    description: "Our system lets you be flexible in switching between modes or mix something original depending on your audience and goal."
  }
]

const featuresTitle = [{
  title: "Internet Tambola Game Solutions"
}]

const featuresContent = {
  sections: [{
    title: "COMPREHENSIVE SOLUTIONS",
    points: [
      "At Gamzway, we provide whole Tambola game development solutions with modern technology and safe backend support.",
      "Our solutions are catered to your particular objectives regardless of your business organisation, community platform, or gaming company."
    ]
  }, {
    title: "DEVELOPMENT FEATURES",
    points: [
      "Our Tambola Game Solutions consist in tailored game development.",
      "Android, iOS, Web cross-platform support",
      "System for Creating Tickets"
    ]
  }, {
    title: "GAMEPLAY FEATURES",
    points: [
      "Integration for Real-Time Multiple Player",
      "Option for Live Calls",
      "AI-Based Auto Caller"
    ]
  }, {
    title: "BUSINESS FEATURES",
    points: [
      "Programs for Referral & Loyalty",
      "Features of Monetising Ads, Coins, In-App Purchase Notes",
      "Multilingual & Thematic Alternatives"
    ]
  }]
}

const solutionsTitle = [{
  title: "Searching for the Perfect Tambola Game Solution for Your Business?"
}]

const solutionsContent = {
  sections: [{
    title: "EVENT ORGANIZERS",
    icon: "fa-calendar-check",
    points: ["Event Organisation Businesses", "Corporate Event planners"]
  }, {
    title: "GAMING PLATFORMS",
    icon: "fa-gamepad",
    points: ["Online Gaming Gateways", "Social Clubhouses"]
  }, {
    title: "COMMUNITY SERVICES",
    icon: "fa-hands-helping",
    points: ["Fundraisers and Non-Governmental Organisations", "Learning Centres"]
  }, {
    title: "CUSTOMIZATION",
    icon: "fa-sliders-h",
    points: ["Customisable game logic and white-label solutions help us to make sure your app speaks to your brand and goals."]
  }]
}

const hireTitle = [{
  title: "Why have your Tambola Game at Gamzway?"
}]

const crmItems = [
  {
    title: "Dashboard",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/dashboard.png"
  },
  {
    title: "Game Rooms",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/game-management.png"
  },
  {
    title: "Tournaments",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/tournament-management.png"
  },
  {
    title: "Hand History",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/game-history.png"
  },
  {
    title: "Player Management",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/player-management.png"
  },
  {
    title: "Users & Sub Admins",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/user-management.png"
  },
  {
    title: "Affiliates",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/affiliate-management.png"
  },
  {
    title: "Finance",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/finance-management.png"
  },
  {
    title: "Notifications",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/notificstion-management.png"
  },
  {
    title: "Promotions",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/promotion-management.png"
  },
  {
    title: "Analytics",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/analytics.png"
  },
  {
    title: "Reports",
    image: "https://www.mobzway.com/assets/images/backoffice-crm-icon/reports.png"
  }
]

const crmTitle =[
  { 
    title: "backoffice & CRM",
    description: "We offer the best BackOffice and CRM tools with our tambola software solutions, making game management easy. You can enjoy a user-friendly dashboard and all the essential & valuable features to manage the game rooms." 
  }
]

const startItems = [
  {
    featuresText: [
      {
        title: " Eager to start?",
        description: "Gamzway is ready to provide if you're ready to start a unique, entertaining, and profitably Tambola game.  From idea to implementation, our knowledgeable game developers, designers, and strategists work with you."
      }
    ],
    description: "Your company will profit from and your users will enjoy a Tambola app you co-created.  Contact to arrange a free consultation right now!.",
    hrefText: "CONTACT US"
  }
]

const faqTitle = [{
  title: "Frequently Asked Questions"
}]

const faqItems = [
  {
    title: "App development for a Tambola game takes what length of time?",
    description: "Depending on customising, full development and deployment can take two to six weeks."
  },
  {
    title: "Could I put game own colours and branding?",
    description: "Yes! Gamzway provides completely branded control white-label solutions."
  },
  {
    title: "Is real money gameplay something the game could support?",
    description: "Yes. Real-money Tambola apps where legally permitted can be developed using secure payment integration and compliance checks."
  },
  {
    title: "Exists an administrative panel?",
    description: "A strong administrative dashboard and CRM system are indeed incorporated for total control over game operations."
  },
  {
    title: "Are you always maintaining?",
    description: "We do post-launch maintenance programs, updates, and support."
  }
]

const productItems = [
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Poker.webp",
    title: "Poker Game",
    description: "Gamzway provides poker game development for all the popular poker games like Texas Hold’em, Omaha, Seven Stud, OFC Poker, and more. Our seasoned game developers utilize cutting-edge gaming technology to offer the player's best poker gaming experience.",
    href: "/skill-games/poker"
  },
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Casino.webp",
    title: "Casino Games",
    description: "For the online casino game entrepreneurs and businesses, Gamzway offers customized casino game solutions. All the popular casino games like Roulette, Blackjack, Slot, Baccarat, etc. are designed and developed at our gaming studio as per your business needs.",
    href: "/casino-games"
  },
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/Product_Teenpatti.webp",
    title: "Teen Patti Game",
    description: "Gamzway offers ready-to-use Teen Patti solutions for business ventures. We build customized solutions for all the variants like Fox,Vintage, and Teen Patti Plus. We provide solutions for all desktop & mobile devices, and web browsers at the best prices.",
    href: "/game-apis/teen-patti"
  },
  {
    image: "https://beta.mobzway.com/assets/images/rummy-game-development/product_ludo.webp",
    title: "LUDO Game",
    description: "If you are looking forward to acquiring online ludo game solutions, Gamzway Technologies is among the most famous ludo app development companies. We offer both ready-to-live and customized gaming solutions for Android, iOS, Web, and Desktop using HTML 5.",
    href: "/skill-games/ludo"
  },
]

const launchItems = [
  {
    featuresText: [
      {
        title: "Launch Your Business Trip with Gamzway.",
        description: " Tambola is a community experience not only a game.  Gamzway provides strong, scalable, and beautiful gaming apps that help you bring that experience to life whether your business is a startup, event agency, or entertainment brand."
      }
    ],
    description: "Starting your Tambola game creation process with Gamzway—where your vision aligns with creativity—today. To arrange a free demo or quotation, get in touch now.",
    hrefText: "TRY DEMO"
  }
]

const TambolaGame = () => {
  return (
    <div className="tambola-game">
      <div className="landing-tambola-section">
        <LandingSection landingItems={landingItems}/>
      </div>
      <AchievementsBanner />

      <div>
        <FeaturesHeader featuresText={variationTitle}/>
        <div className="variations-grid">
          {variationGrid.map((item, index) => (
            <div className="variation-item" key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <FeaturesGrid features={featuresContent} featuresTitle={featuresTitle} />

      <div>
        <FeaturesHeader featuresText={solutionsTitle}/>
        <p className="solutions-intro">Gamzway is your first-choice partner if you're looking for a Tambola gaming app combining fun, scalability, and return on investment. Our services for application development are meant to serve:</p>
        <div className="solutions-grid">
          {solutionsContent.sections.map((section, index) => (
            <div className="solution-item" key={index}>
              <div className="solution-icon">
                <i className={`fas ${section.icon}`}></i>
              </div>
              <h3>{section.title}</h3>
              <ul>
                {section.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='solutions-rummy-section'>
        <div className='solutions-rummy-top'>
          <FeaturesHeader featuresText={hireTitle}/>
        </div>

        <div className='solutions-rummy-bottom'>
          <div className='solutions-desc-container'>
            <div className='solutions-desc'>
            <br/><br/>
            <span className='text-yellow'>Gamzway offers under one roof technical knowledge and game creativity.  Here's the reasons customers choose us:</span>
            <br/><br/>
            <ul>
              <li>End-to-- End Game Creation</li>
              <br/>
              <li>Customisable UI/UX with 100%</li>
              <br/>
              <li>Verified Track Record in Projects for Games</li>
              <br/>
              <li> Turnkey solutions with white labels.</li>
              <br/>
              <li>Specially Designed Support and Maintenance for You</li>
              <br/>
              <li>Agile Methodological Fast Deployment</li>
              <br/>
              <li>  Safe Integrations of Codes and Payments</li>
              <br/>
              <li>  Scalable Architecture with Reasonably Cost</li>
              <br/>
            </ul>
            </div>
            <p>Every customer is seen by us as a collaborator, and every project as a shared vision.</p>
          </div>
          <div className='solutions-img'>
            <img src="https://beta.mobzway.com/assets/images/rummy-game-development/hire-rummy-game-developer.webp" alt="" />
          </div>
        </div>
      </div>

      <CustomGrid customTitle={crmTitle} customgridItems={crmItems}/>

      <ContactBanner contactItems={startItems}/>

      
      <div className='faq-section'>
        <FeaturesHeader featuresText={faqTitle} />

        <div className='faq-accordion-container'>
        <AccordionSection data={faqItems} />
        </div>
        <a className="faq-btn" href="">
            <span className="btn-text">ASK A QUESTION</span>
            <span className="btn-border"></span>
        </a>
      </div>

      <PaymentSection />

      <ProductSection productGrid={productItems}/>

      <ContactBanner contactItems={launchItems}/>

    </div>
  )
}

export default TambolaGame