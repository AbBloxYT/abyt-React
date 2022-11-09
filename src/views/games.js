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
        <div className="games-container1"></div>
        <div className="games-container2">
          <span className="games-text">
            Here are some games of mine (credit to guzuv for the games!)Click
            the image above text to enter game
          </span>
          <h2>
            <br></br>
            <br></br>
          </h2>
        </div>
        <div className="games-features1">
          <div className="games-container3">
            <a
              href="https://28klotlucas2.github.io/Mario64webgl/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link"
            >
              <img
                alt="image"
                src="/playground_assets/01.svg"
                className="games-image"
              />
            </a>
            <h5 className="games-text04 Headline5">Mario 64</h5>
            <span className="games-text05">
              <span>Mario 64 really fun</span>
              <br></br>
              <br></br>
            </span>
          </div>
          <div className="games-container4">
            <a
              href="https://guzuv.github.io/guzEmu/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link1"
            >
              <img
                alt="image"
                src="/playground_assets/04.svg"
                className="games-image1"
              />
            </a>
            <h5 className="games-text09 Headline5">G.B.A.</h5>
            <span className="games-text10">
              <span>Game boy advanced</span>
              <br></br>
              <span>with games</span>
              <br></br>
            </span>
          </div>
          <div className="games-container5">
            <img
              alt="image"
              src="/playground_assets/03.svg"
              className="games-image2"
            />
            <h5 className="games-text15 Headline5">Coming soon</h5>
            <span className="games-text16">
              <span>Just wait this game still working</span>
              <br></br>
              <span>on it.</span>
            </span>
          </div>
          <div className="games-container6">
            <a
              href="https://among-us-online-fan-remake.1tim.repl.co/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link2"
            >
              <img
                alt="Among us"
                src="/playground_assets/02.svg"
                className="games-image3"
              />
            </a>
            <h5 className="games-text20 Headline5">Among us</h5>
            <span className="games-text21">
              I present amongus! Like among us? Then try this to all fans.
            </span>
          </div>
          <div className="games-container7">
            <a
              href="https://hyper-network.me/"
              target="_blank"
              rel="noreferrer noopener"
              className="games-link3"
            >
              <img
                alt="image"
                src="/playground_assets/05.svg"
                className="games-image4"
              />
            </a>
            <h5 className="games-text22 Headline5">Minecraft</h5>
            <span className="games-text23">
              <span>Cant play minecraft then try this</span>
              <br></br>
              <br></br>
            </span>
          </div>
          <div className="games-container8">
            <img
              alt="image"
              src="/playground_assets/06.svg"
              className="games-image5"
            />
            <h5 className="games-text27 Headline5">Coming soon</h5>
            <span className="games-text28">
              <span>is gonna be a good game</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Games
