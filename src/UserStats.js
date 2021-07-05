import React from 'react';
import { withRouter } from 'react-router-dom';

import usersStatsFromServer from './api/users_statistic.json';

export const UserStats = withRouter(
  ({ user }) => {
    const userStats = usersStatsFromServer
      .filter(users => users.user_id === user.id)

    return (
      <div className="stats">
        <header className="user__header">
          <h1 className="user__header-title">AppCo</h1>
        </header>

        

        <footer className="user__footer">
          <h3 className="user__footer-title">AppCo</h3>
          <p className="user__footer-paragraph">All rights reserved by ThemeTags</p>
          <p className="user__footer-paragraph">Copyrights © 2019.</p>
        </footer>
      </div>
    );
  }
);
