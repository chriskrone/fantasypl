import React, { Component } from 'react';
import TextRoster from './TextRoster';
import sample_roster from './json/sample_roster';

class RosterPage extends Component {
  render() {
    const currentRoster = sample_roster.players;
    const gameweekRoster = [];
    const submitGameweekMode = this.props.submitGameweekMode;
    const gameweekNumber = 3;
    return (
      <div>
        <h2>{submitGameweekMode}</h2>
        <button hidden={submitGameweekMode}>Submit Gameweek Roster</button>
        {this.renderTextRoster(currentRoster, { submitGameweekMode }, 'Current Roster')}
        {this.renderTextRoster(gameweekRoster, !{ submitGameweekMode }, ('Gameweek ' + gameweekNumber))}
      </div>
    );
  }

  renderTextRoster(playerList, submitGameweekMode, label) {
    return (<TextRoster playerList={playerList} showButtons={submitGameweekMode} rosterLabel={label} />);
  }
}

export default RosterPage;
