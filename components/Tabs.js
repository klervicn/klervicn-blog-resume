import React from 'react';
import Pane from '../components/Pane';

//             handleClick={this.handleClick}

//Hold the tab navigation
// Demander à Elie l'explication de cette histoire de bind là

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
