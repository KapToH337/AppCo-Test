import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import usersFromServer from './api/users.json';
import usersStatsFromServer from './api/users_statistic.json';

import './StatsHeader.scss';
import './StatsMain.scss';

export const Stats = ({ match }) => {
  const [users, setUsers] = useState([]);

  const maxPages = users.length / 50;
  const page = Number(match.params.page);
  let pageStart = 0;
  let pageEnd = 50;

  const buttons = [];
  let buttonsStart = 1;
  let buttonsEnd = 5;

  for (let i = 1; i <= users.length / 50; i++) {
    buttons.push(i);
  };

  if (page >= 4) {
    buttonsStart += (page - 3);
    buttonsEnd += (page - 3);
  }

  if (page) {
    pageStart = (50 * page) - 50;
    pageEnd = page * 50;
  };

  useEffect(() => {
    setUsers(usersFromServer);
  }, [])

  const findTotalClicks = (id) => {
    return usersStatsFromServer
      .filter(user => user.user_id === id)
      .map(user => user.clicks)
      .reduce((a, b) => a + b);
  };

  const findTotalViews = (id) => {
    return usersStatsFromServer
      .filter(user => user.user_id === id)
      .map(user => user.page_views)
      .reduce((a, b) => a + b);
  };

  return (
    <>
      {page > maxPages ? (
        <h1>Page not found</h1>
      ) : (
        <div className="stats">
          <header className="stats__header">
            <h1 className="stats__header-title">AppCo</h1>
          </header>

          <main className="stats__main">
            <div className="stats__main-nav">
              <Link
                to="/"
                className="stats__main-home"
              >
                Main page
              </Link>

              <div className="stats__main-line"></div>

              <Link
                to="/users/1"
                className="stats__main-stats"
              >
                User statistics
              </Link>
            </div>

            <h2 className="stats__main-title">Users statistics</h2>

            <table className="stats__table">
              <thead className="stats__table-head">
                <tr>
                  <th className="stats__table-first">Id</th>
                  <th className="stats__table-headIt">First name</th>
                  <th className="stats__table-headIt">Last name</th>
                  <th className="stats__table-headIt">Email</th>
                  <th className="stats__table-headIt">Gender</th>
                  <th className="stats__table-headIt">IP address</th>
                  <th className="stats__table-headIt">Total clicks</th>
                  <th className="stats__table-last">Total page views</th>
                </tr>
              </thead>
              <tbody className="stats__table-body">
                {(users.filter(user => pageStart < user.id && user.id <= pageEnd)).map(user => (
                  <tr
                    key={user.id}
                    className={user.id % 2 === 0 ?
                        "stats__table-gray" :
                        "stats__table-white"}
                  >
                    <th className="stats__table-bodyIt">
                      {user.id}
                    </th>
                    <th className="stats__table-bodyIt">
                      {user.first_name}
                    </th>
                    <th className="stats__table-bodyIt">
                      {user.last_name}
                    </th>
                    <th className="stats__table-bodyIt">
                      {user.email}
                    </th>
                    <th className="stats__table-bodyIt">
                      {user.gender}
                    </th>
                    <th className="stats__table-bodyIt">
                      {user.ip_address}
                    </th>
                    <th className="stats__table-bodyIt">
                      {findTotalClicks(user.id)}
                    </th>
                    <th className="stats__table-bodyIt">
                      {findTotalViews(user.id)}
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="stats__buttons">
              {page !== 1 ? (
                <Link to={`/users/${page - 1}`} className="stats__buttons-left"></Link>
              ) : <div className="disableL"></div>}
              <div className="stats__buttons-nav">
                {buttons.filter(button => buttonsStart <= button && button <= buttonsEnd).map(button => (
                  <NavLink
                    className="stats__buttons-disable"
                    activeClassName="stats__buttons-active"
                    to={`/users/${button}`}
                    key={button}
                  >
                    {button}
                  </NavLink>
                ))}
              </div>
              {!(page === maxPages) ? (
                <Link to={`/users/${page + 1}`} className="stats__buttons-right"></Link>
              ) : <div className="disableR"></div>}
            </div>
          </main>
        </div>
      )}
    </>
  );
};
