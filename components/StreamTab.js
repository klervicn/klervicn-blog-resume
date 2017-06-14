import React from 'react';

export default class StreamTab extends React.PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={Object.assign({ textAlign: 'center' }, this.props.style)}>
        <div
          style={{
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            paddingBottom: '500px',
            paddingTop: '25px',
            height: 0
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          >
            <iframe
              src="https://player.twitch.tv/?channel=nayrulive"
              frameborder="0"
              allowfullscreen="true"
              scrolling="no"
              height="500"
              width="55%"
            />
            <iframe
              src="https://www.twitch.tv/nayrulive/chat?popout="
              frameborder="0"
              scrolling="no"
              height="500"
              width="20%"
            />
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            whiteSpace: 'nowrap',
            paddingTop: 2,
            textAlign: 'center'
          }}
        >

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
  }
}
