import React from 'react';
import Resume from '../pages/resume';
import StreamPage from '../components/StreamPage';

export default ({ currentTab }) => (
  <div className="content">
    {currentTab === 1
      ? <div>
          <StreamPage />
        </div>
      : null}

    {currentTab === 2
      ? <div>
          <p>Blog</p>
        </div>
      : null}

    {currentTab === 3
      ? <div>
          <Resume />
        </div>
      : null}

    {currentTab === 4
      ? <div>
          <p>Infos</p>
        </div>
      : null}

  </div>
);
