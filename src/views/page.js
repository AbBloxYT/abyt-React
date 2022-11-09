import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - AbApps</title>
        <meta property="og:title" content="Page - AbApps" />
        <meta
          property="og:description"
          content="For the Greater good of gamers unblocked gaming site\n"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b10727de-b75e-4cfb-a5b5-405c88a56b92/f42d32af-1e49-4c65-9e60-f78a9823c042?org_if_sml=1"
        />
      </Helmet>
      <div id="games" className="page-features">
        <div className="page-container1"></div>
        <div className="page-container2">
          <span className="page-text">
            Here are some games of mine (credit to guzuv for the games!)Click
            the image above text to enter game
          </span>
          <h2>
            <br></br>
            <br></br>
          </h2>
        </div>
        <div className="page-features1">
          <div className="page-container3">
            <a
              href="https://28klotlucas2.github.io/Mario64webgl/"
              target="_blank"
              rel="noreferrer noopener"
              className="page-link"
            >
              <img
                alt="image"
                src="/playground_assets/01.svg"
                className="page-image"
              />
            </a>
            <h5 className="page-text04 Headline5">Mario 64</h5>
            <span className="page-text05">
              <span>Mario 64 really fun</span>
              <br></br>
              <br></br>
            </span>
          </div>
          <div className="page-container4">
            <a
              href="https://guzuv.github.io/guzEmu/"
              target="_blank"
              rel="noreferrer noopener"
              className="page-link1"
            >
              <img
                alt="image"
                src="/playground_assets/04.svg"
                className="page-image1"
              />
            </a>
            <h5 className="page-text09 Headline5">G.B.A.</h5>
            <span className="page-text10">
              <span>Game boy advanced</span>
              <br></br>
              <span>with games</span>
              <br></br>
            </span>
          </div>
          <div className="page-container5">
            <img
              alt="image"
              src="/playground_assets/03.svg"
              className="page-image2"
            />
            <h5 className="page-text15 Headline5">Coming soon</h5>
            <span className="page-text16">
              <span>Just wait this game still working</span>
              <br></br>
              <span>on it.</span>
            </span>
          </div>
          <div className="page-container6">
            <a
              href="https://among-us-online-fan-remake.1tim.repl.co/"
              target="_blank"
              rel="noreferrer noopener"
              className="page-link2"
            >
              <img
                alt="Among us"
                src="/playground_assets/02.svg"
                className="page-image3"
              />
            </a>
            <h5 className="page-text20 Headline5">Among us</h5>
            <span className="page-text21">
              I present amongus! Like among us? Then try this to all fans.
            </span>
          </div>
          <div className="page-container7">
            <a
              href="https://hyper-network.me/"
              target="_blank"
              rel="noreferrer noopener"
              className="page-link3"
            >
              <img
                alt="image"
                src="/playground_assets/05.svg"
                className="page-image4"
              />
            </a>
            <h5 className="page-text22 Headline5">Minecraft</h5>
            <span className="page-text23">
              <span>Cant play minecraft then try this</span>
              <br></br>
              <br></br>
            </span>
          </div>
          <div className="page-container8">
            <img
              alt="image"
              src="/playground_assets/06.svg"
              className="page-image5"
            />
            <h5 className="page-text27 Headline5">Coming soon</h5>
            <span className="page-text28">
              <span>is gonna be a good game</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
