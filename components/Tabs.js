import React from 'react';
import Pane from '../components/Pane';

export default class Tabs extends React.PureComponent {
  render() {
    return (
      <nav>

        <ul style={{ paddingLeft: 3, whiteSpace: 'nowrap' }}>
          <a href="/stream">
            <img
              src="../static/Nayru.png"
              style={{
                height: 35,
                verticalAlign: 'top',
                paddingRight: 20,
                paddingTop: 2
              }}
            />
          </a>
          {this.props.tabList.map(tab => (
            <Pane
              key={tab.key}
              id={tab.id}
              url={tab.url}
              name={tab.name}
              isCurrent={this.props.currentTabId === tab.id}
            />
          ))}
        </ul>
      </nav>
    );
  }
}
