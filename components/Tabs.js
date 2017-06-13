import React from 'react';
import Pane from '../components/Pane';

//             handleClick={this.handleClick}

export default class Tabs extends React.PureComponent {
  render() {
    return (
      <nav>
        <ul style={{ paddingLeft: 3, whiteSpace: 'nowrap' }}>
          <img
            src="../static/Nayru.png"
            style={{
              height: 35,
              verticalAlign: 'top',
              paddingRight: 20,
              paddingTop: 2
            }}
          />
          {this.props.tabList.map(tab => (
            <Pane
              key={tab.id}
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
