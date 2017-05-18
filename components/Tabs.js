import React from 'react';
import Pane from '../components/Pane';

//             handleClick={this.handleClick}

//Hold the tab navigation
// Demander à Elie l'explication de cette histoire de bind là

export default class Tabs extends React.PureComponent {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(tab) {
    this.props.changeTab(tab);
  }

  render() {
    return (
      <nav>
        <ul>
          {this.props.tabList.map(
            function(tab) {
              return (
                <Pane
                  key={tab.id}
                  url={tab.url}
                  name={tab.name}
                  handleClick={this.handleClick.bind(this, tab)}
                  isCurrent={this.props.currentTab === tab.id}
                />
              );
            }.bind(this)
          )}
        </ul>
      </nav>
    );
  }
}
