import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './HomeHeader.scss';
import './HomeMain.scss';
import './HomeFooter.scss';

export const Home = () => {
  const [subscribe, setSubscribe] = useState(false);

  return (
    <div className="home">
      <header className="home__header">
        <div className="home__header-blocks">
          <div className="home__header-content">
            <h1 className="home__header-title">AppCo</h1>
            <h2 className="home__header-title2">
              <span className="home__header-bold">
                Brainstorming
              </span> for desired perfect Usability
            </h2>
            <p className="home__header-paragraph">
              Our design projects are fresh and simple and will benefit your business greatly.
              Learn more about our work!
            </p>
            <div className="home__header-button">
              <Link
                to="/users/1"
                className="home__header-button-link"
              >
                Views Stats
              </Link>
            </div>
          </div>

          <a className="home__header-link" href="#a">
            <div className="home__header-img"></div>
          </a>
        </div>
      </header>

      <main className="home__main">
        <div className="home__main-titles">
          <h2 className="home__main-title">
            Why
            {' '}
            <span className="home__main-bold">
              small business owners love
            </span>
            {' '}
            AppCo?
          </h2>
          <p className="home__main-paragraph">
            Our design projects are fresh and simple and will benefit your business greatly.
            Learn more about our work!
          </p>
        </div>

        <div className="home__main-content">
          <div className="home__main-block">
            <div className="home__main-img img1"></div>
            <h3 className="home__main-block-title">
              Clean Design
            </h3>
            <p className="home__main-block-paragraph">
              Increase sales by showing true dynamics of your website.
            </p>
          </div>

          <div className="home__main-block">
            <div className="home__main-img img2"></div>
            <h3 className="home__main-block-title">
              Secure Data
            </h3>
            <p className="home__main-block-paragraph">
              Build your online store’s trust using Social Proof & Urgency.
            </p>
          </div>

          <div className="home__main-block">
            <div className="home__main-img img3"></div>
            <h3 className="home__main-block-title">
              Retina Ready
            </h3>
            <p className="home__main-block-paragraph">
              Realize importance of social proof in customer’s purchase decision.
            </p>
          </div>
        </div>
      </main>

      <footer className="home__footer">
        {subscribe ? (
          <div className="home__footer-active">You subscribe now!</div>
        ) : (
          <form
            className="home__footer-disable"
            onSubmit={(event) => {
              event.preventDefault();
              setSubscribe(true);
            }}>
              <input
                className="home__footer-field"
                type="email"
                placeholder="Enter your email"
                required
              ></input>
              <input className="home__footer-button" type="submit" value="Subscribe"></input>
            </form>
        )}
        <div className="home__footer-content">
          <h3 className="home__footer-title">AppCo</h3>
          <p className="home__footer-paragraph">All rights reserved by ThemeTags</p>
          <p className="home__footer-paragraph">Copyrights © 2019.</p>
        </div>
      </footer>
    </div>
  );
};
