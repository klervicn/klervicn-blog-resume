import React from 'react';
import ResumeTab from '../components/ResumeTab';
import StreamTab from '../components/StreamTab';
import BlogTab from '../components/BlogTab';

// Display management of the module

export default ({ currentTabId }) => (
  <div className="content">
    {currentTabId === 1
      ? <div>
          <StreamTab />
        </div>
      : <div>
          <StreamTab style={{ display: 'none' }} />
        </div>}

    {currentTabId === 2
      ? <div>
          <BlogTab />
        </div>
      : <div>
          <BlogTab style={{ display: 'none' }} />
        </div>}

    {currentTabId === 3
      ? <div>
          <ResumeTab />
        </div>
      : <div>
          <ResumeTab style={{ display: 'none' }} />
        </div>}

  </div>
);
