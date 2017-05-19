import React from 'react';

export default () => (
  <div
    style={{
      margin: '0 auto',
      textAlign: 'center'
    }}
  >
    <iframe
      src="https://player.twitch.tv/?channel=nayrulive"
      frameborder="0"
      allowfullscreen="true"
      scrolling="no"
      height="500"
      width="889"
    />
    <iframe
      src="https://www.twitch.tv/nayrulive/chat?popout="
      frameborder="0"
      scrolling="no"
      height="500"
      width="350"
    />
  </div>
);
