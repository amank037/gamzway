import "./CallBreakGame.css"
import LandingSection from "../../../components/LandingSection/LandingSection"
import AchievementsBanner from "../../../components/AchievementsBanner/AchievementsBanner"
import FeaturesHeader from "../../../components/FeaturesSection/FeaturesHeader/FeaturesHeader"
import ContactBanner from "../../../components/ContactBanner/ContactBanner"
import AccordionSection from "../../../components/AccordionSection/AccordionSection"

const landingItems = [
  {
    title: "CALL BREAK GAME DEVELOPMENT",
    description: "Call Break has become a hot item in the digital gaming market as millions of fans across South Asia and growing taste for skill-based real-money card games drive demand.  At Mobzway Technologies, we bring this venerable card game to life with engaging gaming, real-time multiplayer sync, sophisticated CRM tools, and monetising strategies maximising involvement and income.",
    description2: "Serving gaming startups, businesses, and entrepreneurs develop unique Call Break games across Android, iOS, and Web, we are a reputable Call Break Card Game Development Company.",
    button: "REQUEST A QUOTE",
  }
]

const breakservicesTitle = [
  {
    title: "Contact Development Services for Break Cards",
    description: "Our entire Real-money games, freemium apps, fantasy tournaments, or social card gaming—call Break Game Development Services are customised to fit many corporate models.  We have:"
  }
]

const regardingcallBreak = [
  {
    title: "ABOUT CALL BREAK GAME",

  }
]

const hireItems = [
  {
    featuresText:[
      {
        title:" Hire Developers of Call Break Cards Games"
      }
    ],
    description: "  Highly talented Call Break Card Game developers for hire from Mobzway specialise in multiplayer card game logic, real-time frameworks, and UI animation.",
    hrefText: "LET'S TALK"
  }
]

const whyHireTitle = [
  {
    title: "Why Hire Mobzway's Call Break Card Game Developers?",
    description: "We provide flexible engagement models whether your project calls for a full-time staff or developers on a contract basis."
  }
]

const callModesTitle = [
  {
    title: "Call modes for Break Cards",
    description: "Give your consumers a great range of experiences using several gameplay styles:"
  }
]

const featuresTitle = [
  {
    title: "Call Break Game Development Characteristics",
    description: "We incorporate a strong feature set to provide your Call Break game a competitive edge."
  }
]

const crmTitle =[
  { 
    title: "Back Office Features and CRM",
    description: "We provide you an intelligent CRM and Backoffice System to simplify user and game management, so enabling complete control over your game environment." 
  }
]

const waitItems = [
  {
    featuresText:[
      {
        title:"Why wait? Let's design your call break game right now."
      }
    ],
    description: "Leverage the always expanding card gaming market. We assist you regardless of your intended use—a fully monetised platform or a casual game.",
    hrefText: "LET'S TALK"
  }
]

const benefitsTitle = [
  {
    title: "Why is Mobzway the superior call break game development company?",
    description: "Our unique value in Call Break game production comes from combining technical competence, artistic vision, and market expertise."
  }
]

const faqTitle = [
  {
    title: "Call Break Game Development FAQ's",
    description: ""
  }
]

const faqAccordionData =[
  {
    title: "Can one start a Call Break game including real-money elements legally?",
    description: " Indeed, in most areas it is allowed as long as it is considered as a skill-based game.  We aid in regulatory compliance."
  },
  {
    title: "Can rules and branding help to customise the game?",
    description: " Totally.  Customising anything from colours to card backs and game logic is possible."
  },
  {
    title: "How would participants make deposits and withdrawals?",
    description: " Based on your region using integrated wallets and gateways including UPI, PayPal, Paytm, and Stripe."
  },
  {
    title: "Can a dashboard help me to control users and earnings?",
    description: "Indeed, our CRM and administrative panel let you entirely control over users, income, and game setups."
  },
  {
    title: "Building a completely working Call Break game takes what length of time?",
    description: "One can get ready in 4–6 weeks with a simple version.  An elaborate form including CRM and wallet might take ten to twelve weeks."
  },
]

const CallBreakGame = () => {
  return (
    <div className="callbreak-game">

      <div className="landing-callbreak-section">
      <LandingSection landingItems={landingItems}/>
      </div>

      <AchievementsBanner />
      
      <div className='break-services-section'>
            <FeaturesHeader featuresText={breakservicesTitle}/>
            <div className='break-models-grid'>
                <div className='break-model-card'>
                    <div className='break-model-icon'>
                        <i className="fas fa-laptop-code"></i>
                    </div>
                    <p>Development of Games across Platforms</p>
                </div>
                <div className='break-model-card'>
                    <div className='break-model-icon'>
                        <i className="fas fa-network-wired"></i>
                    </div>
                    <p>Multiplayer & socket programming in real time</p>
                </div>
                <div className='break-model-card'>
                    <div className='break-model-icon'>
                        <i className="fas fa-trophy"></i>
                    </div>
                    <p>Development of Fantasy tournaments</p>
                </div>
                <div className='break-model-card'>
                    <div className='break-model-icon'>
                        <i className="fas fa-paint-brush"></i>
                    </div>
                    <p>Customize UI/UX and game design.</p>
                </div>
                <div className='break-model-card'>
                    <div className='break-model-icon'>
                        <i className="fas fa-wallet"></i>
                    </div>
                    <p>Integration of In-game Wallet and Safe Payment Systems.</p>
                </div>
                <div className='break-model-card'>
                    <div className='break-model-icon'>
                        <i className="fas fa-cogs"></i>
                    </div>
                    <p>Integration of Backoffice Systems and CRM</p>
                </div>
                <div className='break-model-card'>
                    <div className='break-model-icon'>
                        <i className="fas fa-headset"></i>
                    </div>
                    <p>Post-launch assistance and feature expansion</p>
                </div>
                <div className='break-model-card'>
                    <div className='break-model-icon'>
                        <i className="fas fa-cube"></i>
                    </div>
                    <p>Using Mobzway gives you a complete business ecosystem rather than only a game.</p>
                </div>
            </div>
      </div>

      <div className="regarding-section">
        <FeaturesHeader featuresText={regardingcallBreak}/>
        <p>Played conventionally by four players from a normal 52-card deck, Call Break is a strategic trick-taking card game.  Every participant has to "call," or bid the total tricks they intend to win.  The basis of scoring is players' declared bid accuracy over several rounds.</p>
        <p> Highly interesting is the game because of its strategic depth, tense gameplay, and competitive character.  Digital callbreak-features like leaderboards, fantasy leagues, and wallet connection help to make a product monetizable.</p>
      </div>

      <ContactBanner contactItems={hireItems}/>

      <div className='hire-developers-section'>
        <FeaturesHeader featuresText={whyHireTitle}/>
        <div className='break-models-grid'>
          <div className='break-model-card'>
            <div className='break-model-icon'>
              <i className="fas fa-code"></i>
            </div>
            <p>Mastery of HTML 5, Cocos2d, and Unity</p>
          </div>
          <div className='break-model-card'>
            <div className='break-model-icon'>
              <i className="fas fa-server"></i>
            </div>
            <p>Live gameplay expertise in Node.js with Socket.IO</p>
          </div>
          <div className='break-model-card'>
            <div className='break-model-icon'>
              <i className="fas fa-cog"></i>
            </div>
            <p>Custom rules and bidding rational application</p>
          </div>
          <div className='break-model-card'>
            <div className='break-model-icon'>
              <i className="fas fa-shield-alt"></i>
            </div>
            <p>Real-money compliance (SSL, licensing, RNG)</p>
          </div>
          <div className='break-model-card'>
            <div className='break-model-icon'>
              <i className="fas fa-tasks"></i>
            </div>
            <p>Agile projects carried out using open reporting</p>
          </div>
          <div className='break-model-card'>
            <div className='break-model-icon'>
              <i className="fas fa-trophy"></i>
            </div>
            <p>Fantasy Games: Custom leagues and prize pools</p>
          </div>
          <div className='break-model-card'>
            <div className='break-model-icon'>
              <i className="fas fa-brain"></i>
            </div>
            <p>AI rationale and point-based scoring</p>
          </div>
          <div className='break-model-card'>
            <div className='break-model-icon'>
              <i className="fas fa-chart-line"></i>
            </div>
            <p>Leaderboards and dynamic scorebooks</p>
          </div>
        </div>
        <div className="hire-description">
          <p>Similar to fantasy cricket or rummy, Mobzway allows you to design and scale a Fantasy Call Break Card Game where participants may join leagues, form teams, and win rewards. Perfect for companies trying to use competitive card gaming, this strategy increases lifetime value and player retention.</p>
        </div>
      </div>
      
      <div className="call-modes-section">
        <FeaturesHeader featuresText={callModesTitle}/>
        <div className="modes-container">
          <div className="mode-card">
            <i className="fas fa-dice"></i>
            <h3>Classic Mode</h3>
            <p>Play the conventional Call Break style</p>
          </div>
          <div className="mode-card">
            <i className="fas fa-bolt"></i>
            <h3>Quick Mode</h3>
            <p>Shorter rounds for immediate enjoyment</p>
          </div>
          <div className="mode-card">
            <i className="fas fa-user-friends"></i>
            <h3>Private Table Mode</h3>
            <p>Invite only rooms for pals</p>
          </div>
          <div className="mode-card">
            <i className="fas fa-trophy"></i>
            <h3>Tournament Mode</h3>
            <p>Participate in bracket-style contests</p>
          </div>
          <div className="mode-card">
            <i className="fas fa-robot"></i>
            <h3>Practice Mode</h3>
            <p>Perfect talents versus artificial intelligence</p>
          </div>
        </div>
      </div>

      <div className="callbreak-features-section">
        <FeaturesHeader featuresText={featuresTitle}/>
        <div className="callbreak-features-container">
          <div className="callbreak-features-essential">
            <h3><i className="fas fa-star"></i> Essential Features</h3>
            <ul>
              <li><i className="fas fa-check"></i> Real-time multiplayer matching</li>
              <li><i className="fas fa-check"></i> Visually striking card animations</li>
              <li><i className="fas fa-check"></i> Sound FX and game event comments</li>
              <li><i className="fas fa-check"></i> Simple UI</li>
              <li><i className="fas fa-check"></i> Multi-language assistance</li>
              <li><i className="fas fa-check"></i> Safe login from OTP, social, or email</li>
            </ul>
          </div>
          <div className="callbreak-features-enhanced">
            <h3><i className="fas fa-gem"></i> Enhanced Features</h3>
            <ul>
              <li><i className="fas fa-check"></i> Consult and earn modules</li>
              <li><i className="fas fa-check"></i> Live chat with emoticons</li>
              <li><i className="fas fa-check"></i> Programs for daily and weekly rewards</li>
              <li><i className="fas fa-check"></i> Facebook Audience Network integration and AdMob</li>
              <li><i className="fas fa-check"></i> Real-money wallet, bonus, and withdraw management</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="callbreak-crm">
        <FeaturesHeader featuresText={crmTitle}/>
        <div className="crm-grid">
          <div className="crm-section">
            <h3><i className="fas fa-tools"></i> Important CRM Tools</h3>
            <div className="crm-features">
              <div className="crm-feature-item">
                <i className="fas fa-user-plus"></i>
                <p>Player onboarding and activity tracking</p>
              </div>
              <div className="crm-feature-item">
                <i className="fas fa-users-cog"></i>
                <p>Player segmentation to provide customised incentives</p>
              </div>
              <div className="crm-feature-item">
                <i className="fas fa-bell"></i>
                <p>Email and push notification systems</p>
              </div>
              <div className="crm-feature-item">
                <i className="fas fa-bullhorn"></i>
                <p>Campaign development and extra work assignment</p>
              </div>
              <div className="crm-feature-item">
                <i className="fas fa-chart-pie"></i>
                <p>Reports and behaviour analysis of users</p>
              </div>
            </div>
          </div>
          <div className="crm-section">
            <h3><i className="fas fa-cogs"></i> Backoffice Features</h3>
            <div className="crm-features">
              <div className="crm-feature-item">
                <i className="fas fa-gamepad"></i>
                <p>Match and tournament keeping under observation</p>
              </div>
              <div className="crm-feature-item">
                <i className="fas fa-file-invoice-dollar"></i>
                <p>Transcript of transactions and payment records</p>
              </div>
              <div className="crm-feature-item">
                <i className="fas fa-wallet"></i>
                <p>Recharging a wallet and handling withdrawals</p>
              </div>
              <div className="crm-feature-item">
                <i className="fas fa-user-shield"></i>
                <p>Audits and role-based worker access</p>
              </div>
              <div className="crm-feature-item">
                <i className="fas fa-headset"></i>
                <p>Support ticket system and complaint resolving process</p>
              </div>
            </div>
          </div>
        </div>
        <div className="crm-footer">
          <p>These instruments enable you to run the platform effectively and propel expansion using informed decisions based on data.</p>
        </div>
      </div>

      {/* <div className="why-wait-section">
        <div className="why-wait-content">
          <h2>Why wait? Let's design your call break game right now.</h2>
          <p>Leverage the always expanding card gaming market. We assist you regardless of your intended use—a fully monetised platform or a casual game:</p>
          <div className="why-wait-points">
            <div className="point-item">
              <i className="fas fa-rocket"></i>
              <span>Get in front of market sooner</span>
            </div>
            <div className="point-item">
              <i className="fas fa-shield-alt"></i>
              <span>Verify excellent security</span>
            </div>
            <div className="point-item">
              <i className="fas fa-star"></i>
              <span>Provide unparalleled game</span>
            </div>
            <div className="point-item">
              <i className="fas fa-expand-arrows-alt"></i>
              <span>Easy scale</span>
            </div>
          </div>
          <button className="cta-button">Get your own Call Break game started by talking to us now</button>
        </div>
      </div> */}

      <ContactBanner contactItems={waitItems}/>

      <div className="benefits-section">
        <FeaturesHeader featuresText={benefitsTitle}/>

        <div className="why-superior">
          <div className="superior-points">
            <div className="superior-item">
              <i className="fas fa-globe-americas"></i>
              <p>Trusted by worldwide clients from Asia, Europe, and the US</p>
            </div>
            <div className="superior-item">
              <i className="fas fa-users"></i>
              <p>Committed game designers, programmers, testers, and project managers</p>
            </div>
            <div className="superior-item">
              <i className="fas fa-gavel"></i>
              <p>Legal compliance for games using real money</p>
            </div>
            <div className="superior-item">
              <i className="fas fa-headset"></i>
              <p>Technical support available 24/7 following launch</p>
            </div>
            <div className="superior-item">
              <i className="fas fa-file-code"></i>
              <p>100% source code ownership combined with documentation</p>
            </div>
          </div>
          <p className="closing-text">Selecting Mobzway is selecting a partner that respects your company as it stands.</p>
        </div>
      </div>

      <div className='faq-section'>
        <FeaturesHeader featuresText={faqTitle} />

        <div className='call-break-faq-accordion-container'>
          <AccordionSection data={faqAccordionData} />
        </div>
        <a className="faq-btn" href="">
            <span className="btn-text">ASK A QUESTION</span>
            <span className="btn-border"></span>
        </a>
      </div>
      
    </div>
  )
}

export default CallBreakGame
