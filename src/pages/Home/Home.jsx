import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home-div'>
        <div className='hero-div'>
            <div className='hero-nested-div'>

                <h1 className='hero-title'>ADVANCED POKER SOFTWARE TO RUN YOUR CASINO BUSINESS</h1>
                <p className='hero-title-dec'>Your own poker system is here</p>

                <div className='hero-btns'>
                    <a className='hero-btn-red' href="">Buy</a>
                    <a className='' href="">Try demos</a>
                </div>

                <div className='hero-video-div'>
                    <video autoPlay muted loop>
                        <source src="https://enterra-poker.com/wp-content/themes/enterra-poker-2024/video/Enterra_Poker_website_Desktop_Horizont_EN_1140x640_2.mp4" type="video/mp4"/>
                    </video>
                    
                    <img src="https://enterra-poker.com/wp-content/themes/enterra-poker-2024/img/EGR-enterra.png" alt="" />
                </div>

                <p className='hero-desc'> Mobzway offers its innovative and world-class version of an extremely popular casino card game played throughout the world — Internet Poker. Poker is one of the most intellectual games among skill-based games. Mobzway Poker is a platform for launching your branded online poker room.      </p>
            </div>
        </div>

        <div className='demo-div'>
            <div className='demo-nested-div'>
                <h1 className='demo-title'>TRY DEMO NOW</h1>
                <div className='demo-grid'>
                    <div className='demo-card'>
                        <p>Desktop</p>
                        <div className='demo-card-btns'>
                            <a href="">
                                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20' fill='none'%3E%3Cpath d='M18.9898 4.16336V9.4694H11.5613V3.2348L18.9898 4.16336Z' fill='%23FFD700'/%3E%3Cpath d='M10.5 3.10216V9.46942H2.01033V2.04095L10.5 3.10216Z' fill='%23FFD700'/%3E%3Cpath d='M10.5 10.5305V16.8978L2.01033 17.959V10.5305H10.5Z' fill='%23FFD700'/%3E%3Cpath d='M18.9898 10.5305V15.8366L11.5613 16.7651V10.5305H18.9898Z' fill='%23FFD700'/%3E%3C/svg%3E" alt="" />
                                Windows
                            </a>
                            <a href="">
                                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M7.23664 19.9999C4.26004 19.9828 1.79785 13.9065 1.79785 10.812C1.79785 5.7572 5.58984 4.65056 7.05125 4.65056C7.70984 4.65056 8.41309 4.90919 9.03336 5.13806C9.46711 5.2977 9.9157 5.46251 10.1652 5.46251C10.3145 5.46251 10.6664 5.32231 10.9771 5.19931C11.6398 4.93552 12.4643 4.60767 13.4245 4.60767C13.4262 4.60767 13.4285 4.60767 13.4302 4.60767C14.1471 4.60767 16.3209 4.76501 17.6279 6.72767L17.934 7.18771L17.4934 7.52017C16.864 7.99509 15.7155 8.86142 15.7155 10.5775C15.7155 12.6099 17.0162 13.3916 17.641 13.7675C17.9168 13.9334 18.2023 14.1045 18.2023 14.4788C18.2023 14.7231 16.2523 19.9696 13.4204 19.9696C12.7275 19.9696 12.2377 19.7613 11.8057 19.5777C11.3685 19.3917 10.9914 19.2315 10.3683 19.2315C10.0524 19.2315 9.65301 19.3808 9.23016 19.5393C8.65231 19.755 7.99824 19.9999 7.25609 19.9999H7.23664Z' fill='%23FFD700'/%3E%3Cpath d='M13.7244 0C13.7982 2.65922 11.8964 4.50406 9.99687 4.38836C9.68386 2.26621 11.8962 0 13.7244 0Z' fill='%23FFD700'/%3E%3C/svg%3E" alt="" />
                                MacOS
                            </a>
                        </div>
                        <img className='demo-card-img' src="https://enterra-poker.com/wp-content/themes/enterra-poker-2024/img/demoblock/demo-desktop.png" alt="" />
                    </div>

                    <div className='demo-card'>
                        <p>Mobile</p>
                        <div className='demo-card-btns'>
                            <a href="">
                                <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20' fill='none'%3e%3cpath d='M12.8557 2.74596C12.7666 2.41325 12.5532 2.13511 12.2549 1.96293C11.6392 1.60742 10.8489 1.81906 10.4933 2.43497L10.2948 2.77872L10.0963 2.43492C9.74078 1.81916 8.95058 1.60742 8.33478 1.96288H8.33472C7.71892 2.31844 7.50722 3.10865 7.86274 3.7245L8.80573 5.35783L5.32623 11.3846H2.78946C2.07839 11.3846 1.49988 11.9631 1.49988 12.6742C1.49988 13.3852 2.07839 13.9637 2.78946 13.9637H12.5831L11.094 11.3846H8.30439L12.7269 3.72455C12.8991 3.42624 12.9449 3.07868 12.8557 2.74596Z' fill='%23FFD700'/%3e%3cpath d='M17.801 11.3844H15.2642L12.3803 6.3894L10.8913 8.96857L15.3689 16.724C15.5411 17.0224 15.8192 17.2358 16.152 17.325C16.2631 17.3547 16.3758 17.3695 16.4879 17.3695C16.7113 17.3695 16.9319 17.3109 17.1306 17.1961C17.7464 16.8405 17.9581 16.0503 17.6026 15.4345L16.7533 13.9636H17.801C18.512 13.9636 19.0905 13.3851 19.0905 12.674C19.0905 11.9629 18.512 11.3844 17.801 11.3844Z' fill='%23FFD700'/%3e%3cpath d='M3.24138 14.9951L2.98775 15.4344C2.63223 16.0502 2.84398 16.8405 3.45979 17.196C3.66235 17.3129 3.88375 17.3685 4.10241 17.3685C4.5484 17.3685 4.98278 17.1372 5.22141 16.7239L6.21955 14.9951H3.24138Z' fill='%23FFD700'/%3e%3c/svg%3e" alt="" />
                                iOS
                            </a>
                            <a href="">
                                <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3e%3cpath d='M2.83885 1.68945L11.3878 9.64051L13.7316 7.44472L3.3693 1.83969C3.1966 1.74579 3.01156 1.69379 2.83885 1.68945ZM2.12336 2.05927C2.04626 2.18784 2 2.33952 2 2.50998V17.9614C2 18.0856 2.02776 18.1968 2.07402 18.2965L10.8203 10.1606L2.12336 2.05927ZM14.4471 7.8261L11.9429 10.1606L14.4471 12.4835L17.5064 10.8424C17.9413 10.6069 18.003 10.3079 17.9999 10.149C17.9953 9.88609 17.8179 9.64051 17.5188 9.49027C17.2582 9.35881 15.323 8.30281 14.4471 7.8261ZM11.3878 10.6806L2.76484 18.6895C2.90824 18.6822 3.06399 18.6533 3.20894 18.5739C3.54664 18.3904 10.3762 14.6908 10.3762 14.6908L13.7439 12.8764L11.3878 10.6806Z' fill='%23FFD700'/%3e%3c/svg%3e" alt="" />
                                Android
                            </a>
                        </div>
                        <img className='demo-card-img' src="https://enterra-poker.com/wp-content/themes/enterra-poker-2024/img/demoblock/demo-mob.png" alt="" />
                    </div>

                    <div className='demo-card'>
                        <p>Web</p>
                        <div className='demo-card-btns'>
                            <a href="">
                                <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3e%3cg clip-path='url(%23clip0)'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.9942 2C16.2783 2 16.5509 2.11288 16.7518 2.31381C16.9527 2.51475 17.0656 2.78727 17.0656 3.07143C17.0656 3.35559 16.9527 3.62811 16.7518 3.82904C16.5509 4.02997 16.2783 4.14286 15.9942 4.14286H5.2856C5.19088 4.14286 5.10004 4.18048 5.03306 4.24746C4.96609 4.31444 4.92846 4.40528 4.92846 4.5V10.1543H15.0642V5.79714C15.0642 5.51298 15.1771 5.24046 15.378 5.03953C15.5789 4.8386 15.8514 4.72571 16.1356 4.72571C16.4198 4.72571 16.6923 4.8386 16.8932 5.03953C17.0941 5.24046 17.207 5.51298 17.207 5.79714V11.0743L19.5699 14.2257C20.6285 15.64 19.6199 17.6543 17.8556 17.6543H2.1456C0.381315 17.6543 -0.627257 15.64 0.431314 14.2257L2.7856 11.0886V4.5C2.7856 3.12 3.9056 2 5.2856 2H15.9942Z' fill='%23FFD700'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0'%3e%3crect width='20' height='20' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="" />
                                Online
                            </a>
                        </div>
                        <img className='demo-card-img' src="https://enterra-poker.com/wp-content/themes/enterra-poker-2024/img/demoblock/demo-web.png" alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className='supports-div'>
            <div className='supports-text'>
                <h2>IT SUPPORTS</h2>
                <h1>38+</h1>
                <h2>DIFFERENT GAME TYPES</h2>
                <p>Besides, it has a stable backend <span>(Poker Server Software)</span> and an excellent poker management tool <span>(Poker Administration Panel)</span>.</p>
            </div>

            <ul>
                <li>Texas Hold’em</li>
                <li>Pineapple Hold’em</li>
                <li>6-card Hold’em</li>
                <li>Omaha</li>
                <li>Omaha H/L</li>
                <li>5 Card Omaha</li>
                <li>7 Card Stud</li>
                <li>7 Card Stud H/L</li>
                <li>Badugi</li>
                </ul>

            <ul>
                <li>Badeucy</li>
                <li>Badacey</li>
                <li>Razz</li>
                <li>Mixed games</li>
                <li>Chinese Poker</li>
                <li>Open Face Chinese Poker</li>
                <li>Open Face Chinese Turbo</li>
                <li>Open Face Chinese Pineapple</li>
                <li>Open Face Chinese 2-7 Pineapple</li>
            </ul>
        </div>

        <div className='packed-div'>
            <div className='packed-nested-div'>
                <h2>IT IS PACKED WITH A LARGE NUMBER OF FEATURES AND TOOLS</h2>
                <ul>
                    <li>Rabbit Hunting</li>
                    <li>Insurance</li>
                    <li>Anonymous tables</li>
                    <li>VPIP Limited</li>
                    <li>FastFold/Zoom/Rush</li>
                    <li>All-in or Fold</li>
                    <li>Straddle &amp; Re-Straddle</li>
                    <li>With additional Ante (6 types)</li>
                    <li>Call Time table</li>
                    <li>Run it Twice</li>
                    <li>Opponent’s statistics</li>
                    <li>Throwing objects at opponents</li>
                    <li>Bomb Pot</li>
                    <li>Animated emojis and more</li>
                </ul>   
            </div>
        </div>

        <div className='utps-div'>
            <div className='utps-nested-div'>
                <div className='utps-block'>
                    <img src="https://enterra-poker.com/wp-content/themes/enterra-poker-2024/img/home/phones-block.png" alt="" />
                </div>

                <div className='utps-block'>
                    <h3>LOW START-UP EXPENSES</h3>
                    <p>You can <span>cut down your start-up expenses</span>. Online venues, by contrast to conventional poker rooms, are dramatically cheaper because they have much smaller overhead costs. Thus you save more money buying our poker game software. In addition, as we sell <span>turnkey poker software</span>, you may launch a full-functional, quality online poker room in days, not weeks and months.</p>
                </div>

                <div className='utps-block'>
                    <h3>MOST ATTRACTIVE OFFER FOR YOUR PLAYERS</h3>
                    <p>As poker software developers, we help you create the most attractive offer for your players. You buy online poker software that meets current and future market demands and the needs of your poker players, no matter how experienced they are. With our turnkey poker, you can start a room for anyone — from poker newbies to real gurus. You get more benefits with our <span>white-label poker licence</span>, as our white-label poker solution has been created for you.</p>
                </div>

                <div className='utps-block'>
                    <h3>CUSTOMIZATION</h3>
                    <p>As a poker development company, we can <span>customize</span> your online poker room the way you desire. You can get an incredible player’s avatar, skin or any other desired feature. With us, you can also get a unique website for your Internet Poker. We have almost 20 years of experience in poker software development. Our internet poker software meets the demands of each Customer. At Mobzway Poker, you can play for real or <span>play money</span>. Challenge yourself! Now with Mobzway Poker software, it becomes much easier to run your own Poker Business and to create your own Poker Imperia — the one you have always dreamt about!</p>
                </div>

                <div className='utps-block'>
                    <h3>PRICE</h3>
                    <p>You purchase Mobzway Poker software without any royalties or post-sale fees. As game producers, we are open to discussing different <span>purchase schemes</span> with you. Once you buy a licence for one server installation, you will be able to independently run the software on your own server.</p>
                </div>

                <div className='utps-block'>
                    <img src="https://enterra-poker.com/wp-content/themes/enterra-poker-2024/img/home/laptop-block.png" alt="" />
                </div>
            </div>
        </div>

        <div className='news-div'>
            <div className='news-nested-div'>
                <h2>NEWS</h2>

                <div className='news-cards-section'>
                    <div className='news-card'>
                        <h5>04.04.2025</h5>
                        <h4>Introducing Dealer Tips: Elevate Player Experience and Drive Revenue Growth</h4>
                        <p>We’re pleased to introduce Dealer Tips — a new feature crafted to deliver a more immersive and authentic online poker...</p>
                        <a href="">Read more</a>
                    </div>

                    <div className='news-card'>
                        <h5>26.12.2024</h5>
                        <h4>Enterra Launches In-Store Feature to Enhance Online Poker Experience</h4>
                        <p>Enterra has rolled out In-Store, a groundbreaking platform update that offers players instant access to exclusive in-game poker perks and...</p>
                        <a href="">Read more</a>
                    </div>

                    <div className='news-card'>
                        <h5>31.10.2024</h5>
                        <h4>Enterra Unveils New Clubs Feature to Revolutionize Online Poker</h4>
                        <p>We have launched Clubs, an innovative feature aimed at transforming the online poker industry for both operators and players. This...</p>
                        <a href="">Read more</a>
                    </div>
                </div>

                <a className='news-btn' href="">More news</a>
            </div>
        </div>

        <div className='contact-div'>
            <div className='contact-nested-div'>
                <div className='contact-text'>
                    <h3>CONTACT US</h3>
                    <h4>Please fill in the form to contact us</h4>
                    <p>Feel free to call us at <span>+91 – 7878044044</span> <span>+91 – 9116005587 (HR)</span>. Feel free to write us an email message <span>sales@mobzway.com</span></p>
                </div>

                <form action="" className='contact-form'>
                    <label className='contact-form-name'>
                        <input type="text" name="f-name" placeholder="Name*" required/>
                    </label>
                    
                    <label className='contact-form-mail'>
                        <input type="email" name="email" placeholder="E-mail*" required/>
                    </label>
                    
                    <label className='contact-form-message'>
                        <textarea name="question" rows="6" placeholder="Message"></textarea>
                    </label>

                    <label className='contact-form-agree'>
                        <input type="checkbox" name="personal-data" required/>
                        By providing my contact details, I agree with the 
                        <a href="" target="_blank">privacy policy</a>*
                    </label>

                    <div className='contact-form-submit'>
                        <input type="submit" value="Send"/>
                        <p>*You have to agree with the privacy policy to proceed</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Home