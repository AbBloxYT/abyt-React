import React from 'react'

import { Helmet } from 'react-helmet'

import StoreBanner from '../components/store-banner'
import StatsCard from '../components/stats-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>AbApps</title>
        <meta property="og:title" content="AbApps" />
        <meta
          property="og:description"
          content="For the Greater good of gamers unblocked gaming site\n"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b10727de-b75e-4cfb-a5b5-405c88a56b92/f42d32af-1e49-4c65-9e60-f78a9823c042?org_if_sml=1"
        />
      </Helmet>
      <div data-role="Header" className="home-header-container">
        <header className="home-header">
          <div className="home-logo"></div>
          <img
            alt="image"
            src="/playground_assets/sdfghj-200w.png"
            className="home-image"
          />
          <a href="#games" className="home-link">
            Games
          </a>
          <div className="home-container01">
            <a
              href="https://discord.gg/A2ya5Sk2ap"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link01"
            >
              Discord
            </a>
          </div>
          <a
            href="https://www.youtube.com/channel/UChTBftFlCQLReSg57pMOOFg"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link02"
          >
            Youtube
          </a>
          <a
            href="https://guzuv.ml"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link03"
          >
            Guzuv
          </a>
          <div className="home-container02">
            <div className="home-container03">
              <div className="home-container04">
                <a
                  href="https://r.mtdv.me/watch?v=ablocks"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link04"
                >
                  <StoreBanner className="home-component"></StoreBanner>
                </a>
              </div>
            </div>
          </div>
          <div className="home-container05"></div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-menu">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
        </header>
        <div data-role="MobileMenu" className="home-mobile-menu">
          <div className="home-top">
            <div className="home-logo1">
              <img
                alt="image"
                src="/playground_assets/logotype-dark.svg"
                className="home-image01"
              />
            </div>
            <div data-role="CloseMobileMenu" className="home-close-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon03">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="home-mid">
            <span className="home-text">About</span>
            <span className="home-text01">Products</span>
            <span className="home-text02">Pricing</span>
            <span className="home-text03">Blog</span>
            <span className="home-text04">Jobs</span>
            <span className="home-text05">More</span>
          </div>
          <div className="home-bot">
            <div className="home-container06">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link05"
              >
                <div className="home-container07">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link06"
              >
                <div className="home-container08">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon07"
                  >
                    <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link07"
              >
                <div className="home-container09">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link08"
              >
                <div className="home-container10">
                  <svg viewBox="0 0 1024 1024" className="home-icon11">
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-main">
        <div className="home-blur-background"></div>
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="home-turquoise-cirble"
        />
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="home-purple-circle"
        />
        <img
          alt="image"
          src="/playground_assets/left.svg"
          className="home-left"
        />
        <img
          alt="image"
          src="/playground_assets/right.svg"
          className="home-right"
        />
        <div className="home-hero">
          <div className="home-container11">
            <div className="home-container12">
              <h1 className="home-text06">
                <span>
                  Epic Gaming
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Montage!</span>
              </h1>
            </div>
            <a href="#games" className="home-link09 button">
              <span>
                <span>PLAY GAMES PEEPS</span>
                <br></br>
              </span>
            </a>
          </div>
          <div className="home-container13">
            <div className="home-container14">
              <div className="home-container15"></div>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/minecraft-png-transparent-minecraft-images-pluspng-21-700h.png"
            className="home-image02"
          />
        </div>
      </div>
      <div className="home-container16">
        <div className="home-container17"></div>
      </div>
      <div id="games" className="home-features">
        <div className="home-container18"></div>
        <div className="home-container19">
          <div className="home-container20">
            <span className="home-text13">
              Here are some games of mine (credit to guzuv for the games!)Click
              the image above text to enter game
            </span>
            <a
              href="https://www.google.com/search?q=%22ab+blox%22&amp;biw=1470&amp;bih=750&amp;ei=dmBNY_3dIL_JptQPsbyCWA&amp;ved=0ahUKEwj98KLptuf6AhW_pIkEHTGeAAsQ4dUDCA4&amp;uact=5&amp;oq=%22ab+blox%22&amp;gs_lcp=Cgdnd3Mtd2l6EAMyBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBQgAEIYDMgUIABCGAzoKCAAQRxDWBBCwA0oECEEYAEoECEYYAFCOBViOBWCKCGgBcAF4AIAB3wGIAd8BkgEDMi0xmAEAoAEByAEIwAEB&amp;sclient=gws-wiz&amp;safe=active&amp;ssui=on"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link10"
            >
              <img
                alt="image"
                src="/playground_assets/logo-3.svg"
                className="home-image03"
              />
            </a>
            <h2>
              <br></br>
              <br></br>
            </h2>
          </div>
        </div>
        <div className="home-features1">
          <div className="home-container21">
            <a
              href="https://28klotlucas2.github.io/Mario64webgl/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link11"
            >
              <img
                alt="image"
                src="/playground_assets/01.svg"
                className="home-image04"
              />
            </a>
            <h5 className="home-text17 headline5">Mario 64</h5>
            <span className="home-text18">
              <span>Mario 64 really fun</span>
              <br></br>
              <br></br>
            </span>
          </div>
          <div className="home-container22">
            <a
              href="https://guzuv.github.io/guzEmu/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link12"
            >
              <img
                alt="image"
                src="/playground_assets/04.svg"
                className="home-image05"
              />
            </a>
            <h5 className="home-text22 headline5">G.B.A.</h5>
            <span className="home-text23">
              <span>Game boy advanced</span>
              <br></br>
              <span>with games</span>
              <br></br>
            </span>
          </div>
          <div className="home-container23">
            <a
              href="https://smashkarts.bziu.repl.co/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link13"
            >
              <img
                alt="image"
                src="/playground_assets/03.svg"
                className="home-image06"
              />
            </a>
            <h5 className="home-text28">Smash Karts</h5>
            <span className="home-text29">
              <span>Smash kart unblocked is finally</span>
              <br></br>
              <span>HERE PEEPS &lt;ENJOY&gt;</span>
              <br></br>
            </span>
          </div>
          <div className="home-container24">
            <a
              href="https://among-us-online-fan-remake.1tim.repl.co/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link14"
            >
              <img
                alt="Among us"
                src="/playground_assets/02.svg"
                className="home-image07"
              />
            </a>
            <h5 className="home-text34 headline5">Among us</h5>
            <span className="home-text35">
              I present amongus! Like among us? Then try this to all fans.
            </span>
          </div>
          <div className="home-container25">
            <a
              href="https://hyper-network.me/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link15"
            >
              <img
                alt="image"
                src="/playground_assets/05.svg"
                className="home-image08"
              />
            </a>
            <h5 className="home-text36 headline5">Minecraft</h5>
            <span className="home-text37">
              <span>Cant play minecraft then try this</span>
              <br></br>
              <br></br>
            </span>
          </div>
          <div className="home-container26">
            <img
              alt="image"
              src="/playground_assets/06.svg"
              className="home-image09"
            />
            <h5 className="home-text41 headline5">Coming soon</h5>
            <span className="home-text42">
              <span>is gonna be a good game</span>
              <br></br>
            </span>
          </div>
        </div>
        <a
          href="https://www.bing.com/search?q=ab+blox+yt&amp;form=QBLH&amp;sp=-1&amp;pq=ab+blox+yt&amp;sc=10-10&amp;qs=n&amp;sk=&amp;cvid=64AEBF6143F24A25AB33C4D86EC5EA84&amp;ghsh=0&amp;ghacc=0&amp;ghpl="
          target="_blank"
          rel="noreferrer noopener"
          className="home-link16"
        >
          <img
            alt="image"
            src="/playground_assets/logo-5.svg"
            className="home-image10"
          />
        </a>
      </div>
      <div className="home-testimonials">
        <div className="home-container27">
          <div className="home-container28">
            <img
              alt="image"
              src="/playground_assets/quote-mark.svg"
              className="home-image11"
            />
            <h1 className="home-text45 headline2">People&apos;s reviews</h1>
            <span>these peoples gave this rating!</span>
            <div className="home-container29">
              <div className="home-container30">
                <div className="home-container31">
                  <img
                    alt="image"
                    src="/playground_assets/quote-mark.svg"
                    className="home-image12"
                  />
                  <div className="home-container32">
                    <span className="home-text47">
                      <span className="lead1">
                        comment on my videos to get a chance of a shoutout here!
                      </span>
                      <br></br>
                      <br></br>
                      <span>ItzBannon</span>
                      <br></br>
                      <span>BumbleRumble</span>
                      <br></br>
                      <span>Tweety2741</span>
                      <br></br>
                      <span>Willcool2000</span>
                      <br></br>
                      <span>FearlessCrown</span>
                      <br></br>
                      <span>Dragonmaster19</span>
                      <br></br>
                      <span>legendgamer_cc</span>
                      <br></br>
                      <span>Caio</span>
                      <br></br>
                      <span>EthanRodrigo</span>
                      <br></br>
                      <span>Ilyathegamer</span>
                      <br></br>
                      <span>Legendgamer6780</span>
                      <br></br>
                      <span>guzuv</span>
                      <br></br>
                      <span>Cheese</span>
                      <br></br>
                      <span>pablogamer</span>
                      <br></br>
                      <span>ccman29</span>
                      <br></br>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-container33">
            <div className="home-container34">
              <div className="home-container35">
                <div className="home-container36">
                  <div className="home-container37">
                    <img
                      alt="image"
                      src="https://guzuv.ml/playground_assets/catpic.png"
                      className="home-image13"
                    />
                    <span className="home-text82 lead1">
                      &quot;it&apos;s a bit rough, but overall cool website!
                      7/12.&quot;
                    </span>
                    <span className="home-text83 subtitle1">Guzuv</span>
                    <a
                      href="https://guzuv.ml/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link17"
                    >
                      website here
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-container38">
              <div className="home-container39">
                <img
                  alt="illya image"
                  src="https://yt3.ggpht.com/yGQFVDKehE6fikUhodoJhEA7wP-X63DH-8j9DkvXlecAUjeLXs2PQQ8uRTBL1nWUHNIxtRMLVQ=s88-c-k-c0x00ffffff-no-rj"
                  className="home-image14"
                />
                <div className="home-container40">
                  <img
                    alt="image"
                    src="/playground_assets/quote-mark.svg"
                    className="home-image15"
                  />
                  <div className="home-container41">
                    <span className="home-text84">
                      <span className="lead1">is very ok, is epic!</span>
                      <br></br>
                      <span>4.5/5</span>
                      <br></br>
                    </span>
                    <span className="subtitle1">IllyaTheGamer</span>
                    <a
                      href="https://www.youtube.com/channel/UCs1Qb2-lTeFUi-rqV6c1lVg/videos?view=0&amp;sort=p&amp;flow=grid"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link18"
                    >
                      youtube channel here
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-achievements">
        <div className="home-container42">
          <h2>1 year of my Website.</h2>
          <span>With my teams super powers we have reached this</span>
        </div>
        <div className="home-container43">
          <div className="home-container44">
            <StatsCard
              number="10,000+"
              image_src="/playground_assets/01.svg"
              description="People play daily"
            ></StatsCard>
            <StatsCard
              number="2 Milion"
              image_src="/playground_assets/04.svg"
              description="Users"
            ></StatsCard>
          </div>
          <div className="home-container45"></div>
        </div>
      </div>
      <div className="home-feature1">
        <div className="home-container46">
          <span className="home-text92">
            Follow me on Roblox and Support me by Subscribeing to my my Channell
            it will help a ton and its Free Thats all have fun!
          </span>
          <img
            alt="image"
            src="/playground_assets/sdfghjfdsdfgh-200h.png"
            className="home-image16"
          />
        </div>
      </div>
      <div className="home-feature2">
        <div className="home-container47">
          <h2>
            <span className="headline2">
              Enter the world of Gamers and HAVE FUN!
            </span>
            <br></br>
          </h2>
          <span className="home-text96">
            <br></br>
            <br></br>
          </span>
        </div>
        <img
          alt="image"
          src="/playground_assets/wqfhihcgashuvs%20dcvugisfuvvufvbhvbyuhu8ft-1100w.jpeg"
          image_src="/playground_assets/iphonex-1100w.png"
          className="home-image17"
        />
      </div>
      <img
        alt="image"
        src="/playground_assets/wqfhihcgashuvs%20dcvugisfuvvufvbhvbyuhu8ft-1100w.jpeg"
        className="home-image18"
      />
    </div>
  )
}

export default Home
