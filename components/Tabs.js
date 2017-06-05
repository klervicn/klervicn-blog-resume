import React from 'react';
import Pane from '../components/Pane';

//             handleClick={this.handleClick}

export default class Tabs extends React.PureComponent {
  render() {
    return (
      <nav>
        <ul>
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
