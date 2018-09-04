import React from 'react';
import LoadCharacter from './LoadCharacter';

export default class MountrackerTab extends React.PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={Object.assign({ textAlign: 'left' }, this.props.style)}>
        World Of Warcraft Mountracker
        <LoadCharacter />
      </div>
    );
  }
}
