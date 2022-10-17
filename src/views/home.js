import React from 'react'

import { Helmet } from 'react-helmet'

import StoreBanner from '../components/store-banner'
import PrimaryButton from '../components/primary-button'
import StatsCard from '../components/stats-card'
import LinkIconButton from '../components/link-icon-button'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>abyt</title>
        <meta property="og:title" content="abyt" />
      </Helmet>
      <div data-role="Header" className="home-header-container">
        <header className="home-header">
          <div className="home-logo">
            <img
              alt="image"
              src="https://soft-ui-pro-8p60fc.teleporthq.app/playground_assets/channels4_profile-1500h.jpg"
              className="home-image"
            />
          </div>
          <div className="home-menu">
            <span className="home-text">About</span>
            <span className="home-text01">Products</span>
            <span className="home-text02">Pricing</span>
            <span className="home-text03">Blog</span>
            <span className="home-text04">Jobs</span>
            <span className="home-text05">More</span>
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
            </svg>
          </div>
          <div className="home-container01">
            <StoreBanner></StoreBanner>
          </div>
          <div data-type="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-menu1">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
        </header>
        <div data-type="MobileMenu" className="home-mobile-menu">
          <div className="home-top">
            <div className="home-logo1">
              <img
                alt="image"
                src="/playground_assets/logotype-dark.svg"
                className="home-image01"
              />
            </div>
            <div data-type="CloseMobileMenu" className="home-close-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon05">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="home-mid">
            <span className="home-text06">About</span>
            <span className="home-text07">Products</span>
            <span className="home-text08">Pricing</span>
            <span className="home-text09">Blog</span>
            <span className="home-text10">Jobs</span>
            <span className="home-text11">More</span>
          </div>
          <div className="home-bot">
            <div className="home-container02">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <div className="home-container03">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon07"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <div className="home-container04">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon09"
                  >
                    <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                <div className="home-container05">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon11"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link3"
              >
                <div className="home-container06">
                  <svg viewBox="0 0 1024 1024" className="home-icon13">
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
        <div className="home-hero">
          <div className="home-container07">
            <h1 className="home-text12">
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
            <PrimaryButton button="Get Started"></PrimaryButton>
          </div>
          <img
            alt="image"
            src="/playground_assets/iphonex-1200w.png"
            className="home-image02"
          />
        </div>
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
      </div>
      <div className="home-clients">
        <div className="home-divider"></div>
        <a
          href="https://www.google.com/search?q=%22ab+blox%22&amp;biw=1470&amp;bih=750&amp;ei=dmBNY_3dIL_JptQPsbyCWA&amp;ved=0ahUKEwj98KLptuf6AhW_pIkEHTGeAAsQ4dUDCA4&amp;uact=5&amp;oq=%22ab+blox%22&amp;gs_lcp=Cgdnd3Mtd2l6EAMyBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBQgAEIYDMgUIABCGAzoKCAAQRxDWBBCwA0oECEEYAEoECEYYAFCOBViOBWCKCGgBcAF4AIAB3wGIAd8BkgEDMi0xmAEAoAEByAEIwAEB&amp;sclient=gws-wiz&amp;safe=active&amp;ssui=on"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link4"
        >
          <img
            alt="image"
            src="/playground_assets/logo-3.svg"
            className="home-image03"
          />
        </a>
        <a
          href="https://www.bing.com/search?q=ab+blox+yt&amp;form=QBLH&amp;sp=-1&amp;pq=ab+blox+yt&amp;sc=10-10&amp;qs=n&amp;sk=&amp;cvid=64AEBF6143F24A25AB33C4D86EC5EA84&amp;ghsh=0&amp;ghacc=0&amp;ghpl="
          target="_blank"
          rel="noreferrer noopener"
          className="home-link5"
        >
          <img
            alt="image"
            src="/playground_assets/logo-5.svg"
            className="home-image04"
          />
        </a>
        <div className="home-divider1"></div>
      </div>
      <div className="home-features">
        <h2 className="headline2">Games</h2>
        <span className="home-text17">
          here are some games of mine (credit to guzuv for the games!)
        </span>
        <div className="home-features1">
          <div className="home-container08">
            <img
              alt="image"
              src="/playground_assets/01.svg"
              className="home-image05"
            />
            <h5 className="home-text18 headline5">Robust workflow</h5>
            <span className="home-text19">
              I present amongus! Like among us? Then try this to all fans.
            </span>
          </div>
          <div className="home-container09">
            <img
              alt="image"
              src="/playground_assets/02.svg"
              className="home-image06"
            />
            <h5 className="home-text20 headline5">Among us</h5>
            <span className="home-text21">
              I present amongus! Like among us? Then try this to all fans.
            </span>
          </div>
          <div className="home-container10">
            <img
              alt="image"
              src="/playground_assets/03.svg"
              className="home-image07"
            />
            <h5 className="home-text22 headline5">User friendly</h5>
            <span className="home-text23">
              I present amongus! Like among us? Then try this to all fans.
            </span>
          </div>
          <div className="home-container11">
            <img
              alt="image"
              src="/playground_assets/04.svg"
              className="home-image08"
            />
            <h5 className="home-text24 headline5">Multiple layouts</h5>
            <span className="home-text25">
              I present amongus! Like among us? Then try this to all fans.
            </span>
          </div>
          <div className="home-container12">
            <img
              alt="image"
              src="/playground_assets/05.svg"
              className="home-image09"
            />
            <h5 className="home-text26 headline5">Better compoents</h5>
            <span className="home-text27">
              <span>Cant play minecrat then try this</span>
              <br></br>
              <br></br>
            </span>
          </div>
          <div className="home-container13">
            <img
              alt="image"
              src="/playground_assets/06.svg"
              className="home-image10"
            />
            <h5 className="home-text31 headline5">Well organized</h5>
            <span className="home-text32">
              I present amongus! Like among us? Then try this to all fans.
            </span>
          </div>
        </div>
      </div>
      <div className="home-testimonials">
        <div className="home-container14">
          <div className="home-container15">
            <img
              alt="image"
              src="/playground_assets/quote-mark.svg"
              className="home-image11"
            />
            <h1 className="home-text33 headline2">People&apos;s reviews</h1>
            <span>these peoples gave this rating!</span>
            <div className="home-container16">
              <div className="home-container17">
                <div className="home-container18">
                  <img
                    alt="image"
                    src="/playground_assets/quote-mark.svg"
                    className="home-image12"
                  />
                  <div className="home-container19">
                    <span className="home-text35 lead1">
                      comment on my videos to get a chance of a shoutout here!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-container20">
            <div className="home-container21">
              <div className="home-container22">
                <div className="home-container23">
                  <div className="home-container24">
                    <img
                      alt="image"
                      src="https://guzuv.ml/playground_assets/catpic.png"
                      className="home-image13"
                    />
                    <span className="home-text36 lead1">
                      &quot;it&apos;s a bit rough, but overall cool website!
                      3.5/5.&quot;
                    </span>
                    <span className="home-text37 subtitle1">Guzuv</span>
                    <a
                      href="https://gzuuv.ml/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link6"
                    >
                      website here
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-container25">
              <div className="home-container26">
                <img
                  alt="illya image"
                  src="https://yt3.ggpht.com/yGQFVDKehE6fikUhodoJhEA7wP-X63DH-8j9DkvXlecAUjeLXs2PQQ8uRTBL1nWUHNIxtRMLVQ=s88-c-k-c0x00ffffff-no-rj"
                  className="home-image14"
                />
                <div className="home-container27">
                  <img
                    alt="image"
                    src="/playground_assets/quote-mark.svg"
                    className="home-image15"
                  />
                  <div className="home-container28">
                    <span className="home-text38">
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
                      className="home-link7"
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
        <div className="home-container29">
          <h2>1 year of my Website.</h2>
          <span>With my teams super powers we have reached this</span>
        </div>
        <div className="home-container30">
          <div className="home-container31">
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
          <div className="home-container32"></div>
        </div>
      </div>
      <div className="home-feature1">
        <div className="home-container33">
          <img
            alt="image"
            src="/playground_assets/iphonex-1200w.png"
            image_src="/playground_assets/iphonex-1200w.png"
            className="home-image16"
          />
        </div>
        <div className="home-container34">
          <h3 className="headline3">Headline</h3>
          <span className="home-text47 lead1">
            <span className="home-text48">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.
            </span>
          </span>
          <LinkIconButton text="Get Started"></LinkIconButton>
        </div>
      </div>
      <div className="home-feature2">
        <div className="home-container35">
          <h2 className="headline2">
            <span className="home-text50">
              Enter the world of all fashion trends
            </span>
          </h2>
          <span className="home-text51 lead1">
            <span className="home-text52">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.
            </span>
          </span>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1535157412991-2ef801c1748b?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
          image_src="/playground_assets/iphonex-1200w.png"
          className="home-image17"
        />
      </div>
    </div>
  )
}

export default Home
