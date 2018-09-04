import React from 'react';

export default class LoadCharacter extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      realm: '',
      character: '',
      data: null,
    };

    this.loadChar = this.loadChar.bind(this);
    this.updateRealmValue = this.updateRealmValue.bind(this);
    this.updateCharacterValue = this.updateCharacterValue.bind(this);
  }

  loadChar(evt) {
    evt.preventDefault();
    fetch(
      'https://eu.api.battle.net/wow/character/hyjal/Naÿru?locale=fr_FR&apikey=hvwan8rjptx9rmru3d4uk4z9kzug5nfr'
    )
      .then(response => response.json)
      .then(data => this.setState({ data: data }));
  }

  updateRealmValue(evt) {
    evt.preventDefault();
    this.setState({
      realm: evt.target.value,
    });
    console.log(evt.target.value);
  }

  updateCharacterValue(evt) {
    evt.preventDefault();
    this.setState({
      character: evt.target.value,
    });
    console.log(evt.target.value);
  }
  /**
   * Replace realm input with the list of realms
   */

  render() {
    return (
      <div>
        <form onSubmit={this.loadChar}>
          <input
            type="text"
            onChange={this.updateRealmValue}
            value={this.state.realm}
            placeholder="Realm"
          />
          <input
            type="text"
            onChange={this.updateCharacterValue}
            value={this.state.character}
            placeholder="Pseudo"
          />
          <button type="submit">Load</button>
        </form>
        {this.state.character}
      </div>
    );
  }
}
