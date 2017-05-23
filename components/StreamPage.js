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

    <div style={{ padding: '10px' }}>

      <a href="https://www.facebook.com/MlleNayru/">
        <img src="../static/facebookNayru.jpg" alt="fb" />
      </a>
      <a href="https://twitter.com/Nayruuu">
        <img src="../static/twitterNayru.jpg" alt="twitter" />
      </a>
      <a href="https://www.youtube.com/c/Nayru">
        <img src="../static/youtubeNayru.jpg" alt="yt" />
      </a>
    </div>
  </div>
);
