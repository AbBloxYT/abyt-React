import React from 'react'

import { Helmet } from 'react-helmet'

import './games.css'

const Games = (props) => {
  return (
    <div className="games-container">
      <Helmet>
        <title>games - AbApps</title>
        <meta property="og:title" content="games - AbApps" />
        <meta
          property="og:description"
          content="For the Greater good of gamers unblocked gaming site\n"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b10727de-b75e-4cfb-a5b5-405c88a56b92/f42d32af-1e49-4c65-9e60-f78a9823c042?org_if_sml=1"
        />
      </Helmet>
      <div id="games" className="games-features">
        <div className="games-container01"></div>
        <div className="games-container02">
          <h2>
            <br></br>
            <br></br>
          </h2>
        </div>
        <span className="games-text03">
          Yo Peeps I just updated with new Games and more HAVE FUN PEEPS!
        </span>
        <img
          src="/playground_assets/02.svg"
          alt="image"
          className="games-image"
        />
        <div className="games-container03">
          <h5 className="games-text04 Headline5">Mario 64</h5>
          <span className="games-text05">
            <span>Mario 64 really fun</span>
            <br></br>
            <br></br>
          </span>
        </div>
        <div className="games-features1">
          <div className="games-container04">
            <div className="games-container05">
              <h5 className="games-text09 Headline5">Coming soon</h5>
              <span className="games-text10">
                <span>Just wait this game still working</span>
                <br></br>
                <span>on it.</span>
              </span>
            </div>
            <div className="games-container06">
              <img
                src="/playground_assets/01.svg"
                alt="image"
                className="games-image1"
              />
              <h5 className="games-text14 Headline5">Among us</h5>
              <span className="games-text15">
                I present amongus! Like among us? Then try this to all fans.
              </span>
            </div>
          </div>
          <div className="games-container07">
            <h5 className="games-text16 Headline5">G.B.A.</h5>
            <span className="games-text17">
              <span>Game boy advanced</span>
              <br></br>
              <span>with games</span>
              <br></br>
            </span>
          </div>
          <div className="games-container08">
            <h5 className="games-text22 Headline5">Coming soon</h5>
            <span className="games-text23">
              <span>is gonna be a good game</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="games-container09">
          <h5 className="games-text26 Headline5">Minecraft</h5>
          <span className="games-text27">
            <span>Cant play minecraft then try this</span>
            <br></br>
            <br></br>
          </span>
        </div>
        <img
          src="/playground_assets/03.svg"
          alt="image"
          className="games-image2"
        />
      </div>
    </div>
  )
}

export default Games
