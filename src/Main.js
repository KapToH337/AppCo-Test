import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Main = () => {
  const [subscribe, setSubscribe] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__blocks">
          <div className="header__content">
            <h1 className="header__title">AppCo</h1>
            <h2 className="header__title2">
              <span className="header__bold">
                Brainstorming
              </span> for desired perfect Usability
            </h2>
            <p className="header__paragraph">
              Our design projects are fresh and simple and will benefit your business greatly.
              Learn more about our work!
            </p>
            <div className="header__button">
              <Link
                to="/users"
                className="header__button-link"
              >
                Views Stats
              </Link>
            </div>
          </div>

          <a className="header__link" href="#a">
            <div className="header__img"></div>
          </a>
        </div>
      </header>

      <main className="main">
        <div className="main__titles">
          <h2 className="main__title">
            Why
            {' '}
            <span className="main__bold">
              small business owners love
            </span>
            {' '}
            AppCo?
          </h2>
          <p className="main__paragraph">
            Our design projects are fresh and simple and will benefit your business greatly.
            Learn more about our work!
          </p>
        </div>

        <div className="main__content">
          <div className="main__block">
            <div className="main__img img1"></div>
            <h3 className="main__block-title">
              Clean Design
            </h3>
            <p className="main__block-paragraph">
              Increase sales by showing true dynamics of your website.
            </p>
          </div>

          <div className="main__block">
            <div className="main__img img2"></div>
            <h3 className="main__block-title">
              Secure Data
            </h3>
            <p className="main__block-paragraph">
              Build your online store’s trust using Social Proof & Urgency.
            </p>
          </div>

          <div className="main__block">
            <div className="main__img img3"></div>
            <h3 className="main__block-title">
              Retina Ready
            </h3>
            <p className="main__block-paragraph">
              Realize importance of social proof in customer’s purchase decision.
            </p>
          </div>
        </div>
      </main>
      <footer className="footer">
        {subscribe ? (
          <div className="footer__active">You subscribe now!</div>
        ) : (
          <form
            className="footer__disable"
            onSubmit={(event) => {
              event.preventDefault();
              setSubscribe(true);
            }}>
              <input
                className="footer__field"
                type="email"
                placeholder="Enter your email"
                required
              ></input>
              <input className="footer__button" type="submit" value="Subscribe"></input>
            </form>
        )}
        <div className="footer__content">
          <h3 className="footer__title">AppCo</h3>
          <p className="footer__paragraph">All rights reserved by ThemeTags</p>
          <p className="footer__paragraph">Copyrights © 2019.</p>
        </div>
      </footer>
    </>
  );
};
