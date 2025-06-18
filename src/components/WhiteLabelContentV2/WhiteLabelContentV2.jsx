import './WhiteLabelContentV2.css'

const contentGrid =[
    {
        image:"/whitev2/start.png",
        title:"Your casino. Your way.",
        description:"Working together, we'll bring your ideas and vision to life by creating an eye-catching casino that your players will love. We also offer a range of managed services to make running your casino a breeze."
    },
    {
        image:"/whitev2/industry.png",
        title:"Thousands Online Casino Games & Counting",
        description:"Give your players access to a huge selection of games from the industry's most popular providers. With 100+ new games added monthly, including many exclusive releases, your casino lobby will always have fresh titles for players to choose from."
    },
    {
        image:"/whitev2/friendly.png",
        title:"Work Smarter, Not Harder with our User Friendly Backend",
        description:"We've designed a backend with YOU in mind. It's fully-equipped, fully-automated, and very easy to navigate. It's also incredibly powerful and the integration of third-party applications is always supported."
    },
    {
        image:"/whitev2/secure.png",
        title:"Supporting All Major Payment Providers.",
        description:"We'll help boost your conversions and retention by making it easy for your players to deposit funds safely and request withdrawals quickly using our single-wallet payment system. We support a variety of crypto solutions too such as bitcoin and other cryptocurrencies."
    },
    {
        image:"/whitev2/robust.png",
        title:"Delivering Speed, Flexibility, and Security.",
        description:"You'll be able to operate your casino with confidence knowing that it's running on our powerful proprietary platform that has been industry-tested to deliver maximum speed, ultimate flexibility, and complete security."
    },
    {
        image:"/whitev2/player.png",
        title:"Keep Your Players Coming Back for More. ",
        description:"We make it easy for you to attract and retain players by utilising our exclusive casino gamification tools including tournaments, missions, quests, cashback, bonuses, and many more."
    },
    {
        image:"/whitev2/sportsbook.png",
        title:"Compliment Your Casino Games with a Complete Sportsbook.",
        description:"We have teamed up with an industry leading sportsbook provider to ensure your players have the best of both worlds when it comes it casino and sportsbook entertainment on your casino brand.         "
    },
    {
        image:"/whitev2/licenses.png",
        title:"Instantly Build Trust with Your Players",
        description:"By operating your white label online casino under our existing licenses, you'll give your players peace of mind, while also ensuring that your brand is fully compliant."
    },
]

function WhiteLabelContentV2() {
    const wrapWordsInSpans = (text, disableAnimation) => {
        return text.split(' ').map((word, index) => (
            <span key={index} className={disableAnimation ? 'no-animation' : ''}>{word} </span>
        ))
    }
    return (
        <div className='whitev2-content'>
            <div className='whitev2-content-grid'>
                {contentGrid.map((item, index) => (
                    <div key={index} className="whitev2-content-grid-item">
                        <div className='whitev2-content-img'>
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className='whitev2-content-text'>
                            <h1 className='whitev2-content-title'>{wrapWordsInSpans(item.title, false) }</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhiteLabelContentV2