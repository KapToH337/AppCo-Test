import React, { useEffect, useState } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import usersFromServer from './api/users.json';
import usersStatsFromServer from './api/users_statistic.json';

import './StatsHeader.scss';
import './StatsMain.scss';
import './StatsFooter.scss';

export const Users = withRouter(
  ({ match, findUser }) => {
    const [users, setUsers] = useState([]);
  
    const maxPages = users.length / 50;
    const page = Number(match.params.page.slice(5));
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
          <div className="user">
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
                  className="user__main-stats"
                >
                  User statistics
                </Link>
              </div>
  
              <h2 className="user__main-title">Users statistics</h2>
  
              <table className="user__table">
                <thead className="user__table-head">
                  <tr>
                    <th className="user__table-first">Id</th>
                    <th className="user__table-headIt">First name</th>
                    <th className="user__table-headIt">Last name</th>
                    <th className="user__table-headIt">Email</th>
                    <th className="user__table-headIt">Gender</th>
                    <th className="user__table-headIt">IP address</th>
                    <th className="user__table-headIt">Total clicks</th>
                    <th className="user__table-last">Total page views</th>
                  </tr>
                </thead>
                <tbody className="user__table-body">
                  {(users.filter(user => pageStart < user.id && user.id <= pageEnd)).map(user => (
                    <tr
                      key={user.id}
                      onClick={() => {
                        findUser(user);
                      }}
                      className={user.id % 2 === 0 ?
                          "user__table-gray" :
                          "user__table-white"}
                    >
                      <th>
                        <Link
                          className="user__table-bodyIt"
                          to={`/users/page-${page}/${user.id}`}
                        >
                          {user.id}
                        </Link>
                      </th>
                      <th>
                        <Link
                          className="user__table-bodyIt"
                          to={`/users/page-${page}/${user.id}`}
                        >
                          {user.first_name}
                        </Link>
                      </th>
                      <th>
                        <Link
                          className="user__table-bodyIt"
                          to={`/users/page-${page}/${user.id}`}
                        >
                          {user.last_name}</Link>
                      </th>
                      <th>
                        <Link
                          className="user__table-bodyIt"
                          to={`/users/page-${page}/${user.id}`}
                        >
                          {user.email}
                        </Link>
                      </th>
                      <th>
                        <Link
                          className="user__table-bodyIt"
                          to={`/users/page-${page}/${user.id}`}
                        >
                          {user.gender}
                        </Link>
                      </th>
                      <th>
                        <Link
                          className="user__table-bodyIt"
                          to={`/users/page-${page}/${user.id}`}
                        >
                          {user.ip_address}
                        </Link>
                      </th>
                      <th>
                        <Link
                          className="user__table-bodyIt"
                          to={`/users/page-${page}/${user.id}`}
                        >
                          {findTotalClicks(user.id)}
                        </Link>
                      </th>
                      <th>
                        <Link
                          className="user__table-bodyIt"
                          to={`/users/page-${page}/${user.id}`}
                        >
                          {findTotalViews(user.id)}
                        </Link>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
  
              <div className="user__buttons">
                {page !== 1 ? (
                  <Link to={`/users/page-${page - 1}`} className="user__buttons-left"></Link>
                ) : <div className="disableL"></div>}
                <div className="user__buttons-nav">
                  {buttons.filter(button => buttonsStart <= button && button <= buttonsEnd).map(button => (
                    <NavLink
                      className="user__buttons-disable"
                      activeClassName="user__buttons-active"
                      to={`/users/page-${button}`}
                      key={button}
                    >
                      {button}
                    </NavLink>
                  ))}
                </div>
                {!(page === maxPages) ? (
                  <Link to={`/users/page-${page + 1}`} className="user__buttons-right"></Link>
                ) : <div className="disableR"></div>}
              </div>
            </main>
  
            <footer className="user__footer">
              <h3 className="user__footer-title">AppCo</h3>
              <p className="user__footer-paragraph">All rights reserved by ThemeTags</p>
              <p className="user__footer-paragraph">Copyrights © 2019.</p>
            </footer>
          </div>
        )}
      </>
    );
  }
);
