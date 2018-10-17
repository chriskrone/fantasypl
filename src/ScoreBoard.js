import React, { Component } from 'react';
import sample_scores from "./json/sample_scores";
import ReactTable from 'react-table';

class ScoreBoard extends Component {
  render() {
    const scores = sample_scores.scores;
    const columns = [
      {
        Header: 'Rank',
        Cell: row => (
          row.index + 1
        )
      },
      {
        Header: 'Manager',
        accessor: 'managerName'
      },
      {
        Header: 'Total',
        accessor: 'total'
      },
      {
        Header: 'Last Gameweek',
        accessor: 'lastGameweek'
      }
    ]
    return (
      <div className="Score-table">
        <h2>Scores</h2>
        <div>
          <ReactTable
            data={scores}
            columns={columns}
            className="-striped -highlight"
            showPagination={false}
          />
        </div>
      </div>
    );
  }
}

export default ScoreBoard;
