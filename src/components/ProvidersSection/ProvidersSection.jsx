import './ProvidersSection.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import "swiper/css/free-mode"

const providersImages = [
    {
    src:"/logo-black.png",
    alt:"Gamzway",
    title:"Gamzway"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fboldplay.webp",
    alt: "Boldplay Games",
    title: "Boldplay Games"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fwinfinity1.webp",
    alt: "Winfinity",
    title: "Winfinity"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fpragmatic-play-provider.png",
    alt: "Pragmatic Play Games",
    title: "Pragmatic Play Games"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fevolution-gaming-provider.png",
    alt: "Evolution Gaming Casinos",
    title: "Evolution Gaming Casinos"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fhacksaw.webp",
    alt: "HackSaw Gaming",
    title: "HackSaw Gaming"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fprovider%2FNetEnt.png",
    alt: "NetEnt Slot Games",
    title: "NetEnt Slot Games"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fprovider%2FNolimit-City.png",
    alt: "Nolimit City Gaming Studio",
    title: "Nolimit City Gaming Studio"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Frubyplay.webp",
    alt: "RubyPlay",
    title: "RubyPlay"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fprovider%2Frelax-gaming-provider.png",
    alt: "Relax Gaming",
    title: "Relax Gaming"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fprovider%2FRed-Tiger-Gaming.png",
    alt: "Red Tiger Casino Games",
    title: "Red Tiger Casino Games"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fpg_pocket_games.webp",
    alt: "Pocket Games Soft",
    title: "Pocket Games Soft"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fplayson-provider.png",
    alt: "Playson",
    title: "Playson"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fskywind_group.webp",
    alt: "Skywind",
    title: "Skywind"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fpush-gaming-provider.png",
    alt: "Push Gaming",
    title: "Push Gaming"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fspribe.webp",
    alt: "Spribe",
    title: "Spribe"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fprovider%2Ffelix-gaming-provider.png",
    alt: "Felix Gaming",
    title: "Felix Gaming"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fka_gaming.webp",
    alt: "KA Gaming",
    title: "KA Gaming"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fall_waysspin.webp",
    alt: "AllWaySpin Gaming",
    title: "AllWaySpin Gaming"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fegtv_2.webp",
    alt: "EGT Gaming",
    title: "EGT Gaming"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fgreentube-gaming-provider.png",
    alt: "Greentube Gaming",
    title: "Greentube Gaming"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fmr_slotty.webp",
    alt: "Mr. Slotty Game Provider",
    title: "Mr. Slotty Game Provider"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fmascot_gaming.webp",
    alt: "Mascot Gaming",
    title: "Mascot Gaming"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fagt_software.webp",
    alt: "AGT Software",
    title: "AGT Software"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Famigo_gaming.webp",
    alt: "Amigo Gaming",
    title: "Amigo Gaming"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Felbet.webp",
    alt: "Elbet",
    title: "Elbet"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Feven_bet_gaming.webp",
    alt: "Evenbet Gaming",
    title: "Evenbet Gaming"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fprovider%2FJILI.png",
    alt: "Jili Games",
    title: "Jili Games"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fbgaming-gaming-provider.png",
    alt: "BGaming",
    title: "BGaming"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fcharismatic-gaming-provider.png",
    alt: "Charismatic Games",
    title: "Charismatic Games"
    },
    {
    src: "https://nuxgame.com/glide/%40public%2Fv8pocker.webp",
    alt: "V8 Poker",
    title: "V8 Poker"
    },


]
const providersImages2 = [
    {
        src: "https://nuxgame.com/glide/%40public%2Fgameart.webp",
        alt: "GameArt",
        title: "GameArt"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fdragonsoft.webp",
        alt: "Dragoon Soft",
        title: "Dragoon Soft"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2FThunderkick.png",
        alt: "Thunderkick",
        title: "Thunderkick"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fbetgames.webp",
        alt: "BetGames",
        title: "BetGames"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2FWoohoo-Games.png",
        alt: "Woohoo Games",
        title: "Woohoo Games"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fbetindustries.webp",
        alt: "Bet Industries",
        title: "Bet Industries"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Ftriple-cherry-provider.png",
        alt: "Triple Cherry",
        title: "Triple Cherry"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2FSimplePlay.png",
        alt: "SimplePlay",
        title: "SimplePlay"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fbb_games.webp",
        alt: "BB Games",
        title: "BB Games"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fevoplay-entertainment-provider.png",
        alt: "Evoplay Entertainment",
        title: "Evoplay Entertainment"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fcaleta-gaming-provider.png",
        alt: "Caleta Gaming",
        title: "Caleta Gaming"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2FBlueprint-Gaming.png",
        alt: "Blueprint Slot Games",
        title: "Blueprint Slot Games"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Frevolver_games.webp",
        alt: "Revolver Gaming",
        title: "Revolver Gaming"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fkiron-interactive-provider.png",
        alt: "Kiron Interactive",
        title: "Kiron Interactive"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Frtg-slots-provider.png",
        alt: "RTG Slots",
        title: "RTG Slots"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fjackpot_software.webp",
        alt: "Jackpot Software",
        title: "Jackpot Software"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Faugust-gaming-provider.png",
        alt: "August Gaming",
        title: "August Gaming"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fone-touch-provider.png",
        alt: "OneTouch",
        title: "OneTouch"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fkalamba-games-provider.png",
        alt: "Kalamba Games",
        title: "Kalamba Games"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fomi-gaming-provider.png",
        alt: "OMI Gaming",
        title: "OMI Gaming"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fslotmill.webp",
        alt: "Slotmill",
        title: "Slotmill"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fplaypearls-provider.png",
        alt: "PlayPearls",
        title: "PlayPearls"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Ffantasma-games-provider.png",
        alt: "Fantasma Games",
        title: "Fantasma Games"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fspearhead.webp",
        alt: "Spearhead Studios",
        title: "Spearhead Studios"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fmobilots-providers.png",
        alt: "Mobilots",
        title: "Mobilots"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2FGamefish-global.png",
        alt: "Gamefish Global",
        title: "Gamefish Global"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fyggdrasil-gaming-provider.png",
        alt: "Yggdrasil Gaming",
        title: "Yggdrasil Gaming"
        },
        {
            src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fbetsolutions-gaming-provider.png",
            alt: "BetSolutions",
            title: "BetSolutions"
            },
            {
            src: "https://nuxgame.com/glide/%40public%2Fcogg_studios.webp",
            alt: "Cogg Studios",
            title: "Cogg Studios"
            },
            {
            src: "https://nuxgame.com/glide/%40public%2Fprovider%2Ffazi-software-removebg-preview.png",
            alt: "Fazi",
            title: "Fazi"
            },
            {
            src: "https://nuxgame.com/glide/%40public%2Fprovider%2Ffugaso-logo152222476-removebg-preview.png",
            alt: "Fugaso",
            title: "Fugaso"
            },
            {
            src: "https://nuxgame.com/glide/%40public%2Ffunky_games.webp",
            alt: "Funky Games",
            title: "Funky Games"
            },
            {
            src: "https://nuxgame.com/glide/%40public%2Ffuntagaming.webp",
            alt: "FunTa Gaming",
            title: "FunTa Gaming"
            },
            {
            src: "https://nuxgame.com/glide/%40public%2Fgames_inc.webp",
            alt: "Games Inc",
            title: "Games Inc"
            },
            {
            src: "https://nuxgame.com/glide/%40public%2Fhollywood_tv.webp",
            alt: "Hollywood TV",
            title: "Hollywood TV"
            },
            {
            src: "https://nuxgame.com/glide/%40public%2Fmancala_gaming.webp",
            alt: "Mancala Gaming",
            title: "Mancala Gaming"
            },
            {
            src: "https://nuxgame.com/glide/%40public%2Fspinton.webp",
            alt: "Spinthon",
            title: "Spinthon"
            },
            {
            src: "https://nuxgame.com/glide/%40public%2Fprovider%2Ftruelab-gaming-provider.png",
            alt: "TrueLab Game Studios",
            title: "TrueLab Game Studios"
            },
            {
            src: "https://nuxgame.com/glide/%40public%2Fvirtual_generation.webp",
            alt: "Virtual Generation",
            title: "Virtual Generation"
            },
]
const providersImages3 =[
    {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2FTurbo-removebg-preview.png",
        alt: "Turbo Games",
        title: "Turbo Games"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Flucky_streak.webp",
        alt: "Lucky Streak",
        title: "Lucky Streak"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2FAmatic.png",
        alt: "Amatic Industries",
        title: "Amatic Industries"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fwazdan.webp",
        alt: "Wazdan",
        title: "Wazdan"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Ftpg-gaming-provider.png",
        alt: "Triple Profits Games",
        title: "Triple Profits Games"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fsplitrock.webp",
        alt: "Splitrock Gaming",
        title: "Splitrock Gaming"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fgamzix.webp",
        alt: "Gamzix",
        title: "Gamzix"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Felk_studios.webp",
        alt: "Elk Studios",
        title: "Elk Studios"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fcq9gaming.webp",
        alt: "CQ9 Gaming",
        title: "CQ9 Gaming"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fbigtime_gaming.webp",
        alt: "Big Time Gaming",
        title: "Big Time Gaming"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fwizard.webp",
        alt: "Wizard Games",
        title: "Wizard Games"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2FSpin.png",
        alt: "Spinberry",
        title: "Spinberry"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fonlyplay.webp",
        alt: "Onlyplay",
        title: "Onlyplay"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fnetgaming.webp",
        alt: "NetGaming",
        title: "NetGaming"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fnetgame.webp",
        alt: "NetGame Entertainment",
        title: "NetGame Entertainment"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fmicrogaming.webp",
        alt: "Microgaming",
        title: "Microgaming"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Felysium.webp",
        alt: "Elysium Studios",
        title: "Elysium Studios"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Feagaming.webp",
        alt: "Eurasian Gaming",
        title: "Eurasian Gaming"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fct_gaming.webp",
        alt: "CT Gaming",
        title: "CT Gaming"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fct_gaming_interactive.webp",
        alt: "CT Interactive",
        title: "CT Interactive"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fgalaxsys.webp",
        alt: "Galaxsys",
        title: "Galaxsys"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fimaginelive.webp",
        alt: "Imagine Live",
        title: "Imagine Live"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2F7mojos.webp",
        alt: "7Mojos",
        title: "7Mojos"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fapollo_games.webp",
        alt: "Apollo Games",
        title: "Apollo Games"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fxpg.webp",
        alt: "XProGaming",
        title: "XProGaming"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fzeusplay.webp",
        alt: "Zeusplay",
        title: "Zeusplay"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fpascal.webp",
        alt: "Pascal Gaming",
        title: "Pascal Gaming"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2FeBet.png",
        alt: "eBet",
        title: "eBet"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2FLady-Luck-Games.png",
        alt: "Lady Luck Games",
        title: "Lady Luck Games"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprintstudios.webp",
        alt: "Print Studios",
        title: "Print Studios"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fquickspin.webp",
        alt: "Quickspin",
        title: "Quickspin"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2FRealtime-Gaming.png",
        alt: "Realtime Gaming",
        title: "Realtime Gaming"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fpariplay-provider.png",
        alt: "Pariplay",
        title: "Pariplay"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fezugi-provider.png",
        alt: "Ezugi",
        title: "Ezugi"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fsmartsoft-gaming-provider.png",
        alt: "SmartSoft Gaming",
        title: "SmartSoft Gaming"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fgolden_race.webp",
        alt: "GoldenRace",
        title: "GoldenRace"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Ftvbet-provider.png",
        alt: "TVBet",
        title: "TVBet"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Ftom-horn-gaming-provider.png",
        alt: "Tom Horn Gaming",
        title: "Tom Horn Gaming"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fhabanero-systems-provider.png",
        alt: "Habanero Slot Games",
        title: "Habanero Slot Games"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fendorphina-provider.png",
        alt: "Endorphina",
        title: "Endorphina"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fspinmatic.webp",
        alt: "Spinmatic",
        title: "Spinmatic"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fvivo-gaming-provider.png",
        alt: "Vivo Gaming",
        title: "Vivo Gaming"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fhighlight.webp",
        alt: "Highlight Games",
        title: "Highlight Games"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fespresso-games-provider.png",
        alt: "Espresso Games",
        title: "Espresso Games"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fredrake.webp",
        alt: "Red Rake Gaming",
        title: "Red Rake Gaming"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2FBooongo.png",
        alt: "Booongo",
        title: "Booongo"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2F1x2-network-provider.png",
        alt: "1X2 Network",
        title: "1X2 Network"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2FLeap-Gaming.png",
        alt: "Leap Gaming",
        title: "Leap Gaming"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Firondog.webp",
        alt: "Iron Dog Studio",
        title: "Iron Dog Studio"
        },
        {
        src: "https://nuxgame.com/glide/%40public%2Fprovider%2Fplatipus-gaming-provider.png",
        alt: "Platipus Gaming",
        title: "Platipus Gaming"
        },
]

function ProvidersSection() {
    return (
        <div className="provider-section">
        <div className="provider-container">
            <h1 className="provider-title"> <span>GAME</span> <span>PROVIDERS</span> </h1>
            <Swiper
            spaceBetween={30}
            slidesPerView={5}
            freeMode={true}
            breakpoints={{
                1200: {
                slidesPerView: 5,
                spaceBetween: 30,
                },
                993: {
                slidesPerView: 4,
                spaceBetween: 30,
                },
                768: {
                slidesPerView: 3,
                spaceBetween: 20,
                },
                0: {
                slidesPerView:2,
                spaceBetween: 20,
                },
            }}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            speed={2000}
            loop={true}
            modules={[Autoplay]}
            className="providers-slider"
            >
                {providersImages.map((item, index) => (
                <SwiperSlide>
                    <div className='providers-item'><img key={index} src={item.src} alt="" /></div>
                </SwiperSlide>
                ))}
            </Swiper>
            
            <Swiper
            spaceBetween={30}
            slidesPerView={5}
            freeMode={true}
            breakpoints={{
                1200: {
                slidesPerView: 5,
                spaceBetween: 30,
                },
                993: {
                slidesPerView: 4,
                spaceBetween: 30,
                },
                768: {
                slidesPerView: 3,
                spaceBetween: 20,
                },
                0: {
                slidesPerView:2,
                spaceBetween: 20,
                },
            }}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            speed={2000}
            loop={true}
            modules={[Autoplay]}
            className="providers-slider"
            >
                {providersImages2.map((item, index) => (
                <SwiperSlide>
                    <div className='providers-item'><img key={index} src={item.src} alt="" /></div>
                </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
            spaceBetween={30}
            slidesPerView={5}
            freeMode={true}
            breakpoints={{
                1200: {
                slidesPerView: 5,
                spaceBetween: 30,
                },
                993: {
                slidesPerView: 4,
                spaceBetween: 30,
                },
                768: {
                slidesPerView: 3,
                spaceBetween: 20,
                },
                0: {
                slidesPerView:2,
                spaceBetween: 20,
                },
            }}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            speed={2000}
            loop={true}
            modules={[Autoplay]}
            className="providers-slider"
            >
                {providersImages3.map((item, index) => (
                <SwiperSlide>
                    <div className='providers-item'><img key={index} src={item.src} alt="" /></div>
                </SwiperSlide>
                ))}
            </Swiper>


        </div>
        </div>
    )
}

export default ProvidersSection