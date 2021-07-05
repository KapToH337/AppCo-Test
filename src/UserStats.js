import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import usersFromServer from './api/users.json';
import usersStatsFromServer from './api/users_statistic.json';

export const UserStats = ({ match }) => {
  const user = usersFromServer.find(user => user.id === +match.params.userId);
  const userStats = usersStatsFromServer
    .filter(users => users.user_id === user.id)

  const min = userStats[0].date;
  const max = userStats[userStats.length - 1].date;

  const [dataMin, setDataMin] = useState(min);
  const [dataMax, setDataMax] = useState(userStats[6].date);

  const clicks = userStats
    .filter(stats => dataMin <= stats.date && stats.date <= dataMax)
    .map(stats => (
      {name: stats.date, clicks: stats.clicks, pv: 2400, amt: 2400}
    ));

  const views = userStats
    .filter(stats => dataMin <= stats.date && stats.date <= dataMax)
    .map(stats => (
      {name: stats.date, views: stats.page_views, pv: 2400, amt: 2400}
    ));

  return (
    <>
      <header className="user__header">
        <h1 className="user__header-title">AppCo</h1>
      </header>

      <main className="user__main">
      <div className="user__main-nav">
          <Link
            to="/"
            className="user__main-home"
          >
            Main page
          </Link>

          <div className="user__main-line"></div>
          <Link
            to="/users/page-1"
            className="user__main-home"
          >
            User statistics
          </Link>

          <div className="user__main-line"></div>
          <Link
            to={`/users/${match.params.page}/${match.params.userId}`}
            className="user__main-stats"
          >
            {user.first_name} {user.last_name}
          </Link>
        </div>

        <div className="user__main-block">
          <h2 className="user__main-title">
            {user.first_name}
            {' '}
            {user.last_name}
          </h2>

          <div className="user__main-select">
            <p className="user__main-selectP">Select date range</p>
            <input
              className="user__main-selectI"
              type="date"
              min={min}
              max={dataMax}
              value={dataMin}
              onChange={(event) => {
                setDataMin(event.target.value);
              }}
            ></input>
            <input
              className="user__main-selectI"
              type="date"
              min={dataMin}
              max={max}
              value={dataMax}
              onChange={(event) => {
                setDataMax(event.target.value);
              }}
            ></input>
          </div>
        </div>

        <h3 className="user__main-title2">Clicks</h3>
        <LineChart width={1200} height={300} data={clicks} margin={{ top: 24, right: 10, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="clicks" stroke="#3a80ba" />
          <CartesianGrid stroke="#f1f1f1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>

        <h3 className="user__main-title2">Views</h3>
        <LineChart width={1200} height={300} data={views} margin={{ top: 24, right: 10, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="views" stroke="#3a80ba" />
          <CartesianGrid stroke="#f1f1f1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </main>

      <footer className="user__footer">
        <h3 className="user__footer-title">AppCo</h3>
        <p className="user__footer-paragraph">All rights reserved by ThemeTags</p>
        <p className="user__footer-paragraph">Copyrights © 2019.</p>
      </footer>
    </>
  );
};
