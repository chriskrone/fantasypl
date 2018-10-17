import React, { Component } from 'react';
import ReactTable from 'react-table';

class TextRoster extends Component {

  render() {
    const playerList = this.props.playerList;
    const submitGameweekMode = this.props.submitGameweekMode;
    const gameweekNumber = this.props.gameweekNumber;
    const label = this.props.rosterLabel;

    const columns = [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Position',
        accessor: 'position'
      },
      {
        Header: 'Team',
        accessor: 'team'
      },
      {
        Header: 'Points',
        accessor: 'points'
      },
      {
        Cell: row => (
          <div>
            <button onClick={() => alert(row.original.name)}>Add Starter</button>
            <button onClick={() => alert(row.original.position)}>Add Sub</button>
          </div>
        ),
        show: { submitGameweekMode }
      }

    ];

    return (
      <div className="Roster-table">
        <h2>{label}</h2>
        <div className="Roster-table">
          <ReactTable
            data={playerList}
            columns={columns}
            className="-striped -highlight"
            showPagination={false}
          />
        </div>
      </div>
    )
  }
}

export default TextRoster;
