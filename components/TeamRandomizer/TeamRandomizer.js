import React from 'react';

class TeamRandomizer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlayers: [],
      redTeam: [],
      blueTeam: []
    };

    this.addPlayer = this.addPlayer.bind(this);
  }

  addPlayer(e) {
    e.preventDefault();
    const {
      selectedPlayers
    } = this.state;
    const newSelectedPlayersArray = selectedPlayers.push(e.target.value);

    this.setState({
      selectedPlayers: newSelectedPlayersArray
    });
  }

  onUserChange(e, key) {

  }
}

export default TeamRandomizer;