import React, {Component} from 'react';
import horizontal_logo from './images/Premier_League_Logo.svg';
import sample_roster from "./json/sample_roster";
import sample_scores from "./json/sample_scores";
import './App.css';
import ReactTable from 'react-table';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import 'react-table/react-table.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={horizontal_logo} className="Horizontal-logo" alt="logo"/>
                    <h2 className="Header-text">Fantasy Football</h2>
                </header>
                <MainPageTabs/>
            </div>
        );
    }
}

class MainPageTabs extends Component {
    render() {
        const submitGameweekMode = false;
        return (
            <div>
                <Tabs>
                    <TabList classNames={['Main-page-tablist', 'react-tabs__tab']}>
                        <Tab>Scoreboard</Tab>
                        <Tab>Roster</Tab>
                        <Tab>Waivers</Tab>
                    </TabList>
                    <TabPanel>{this.renderScoreboard()}</TabPanel>
                    <TabPanel>{this.renderTextRoster(submitGameweekMode)}</TabPanel>
                    <TabPanel>Hey</TabPanel>
                </Tabs>
            </div>
        );
    }

    renderTextRoster(submitGameweekMode) {
        return <RosterPage submitGameweekMode={submitGameweekMode}/>;
    }
    renderScoreboard(){
        return <ScoreBoard/>
    }
}

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
                {this.renderTextRoster(currentRoster, {submitGameweekMode}, 'Current Roster')}
                {this.renderTextRoster(gameweekRoster, !{submitGameweekMode}, ('Gameweek ' + gameweekNumber))}
            </div>
        );
    }

    renderTextRoster(playerList, submitGameweekMode, label) {
        return (<TextRoster playerList={playerList} showButtons={submitGameweekMode} rosterLabel={label}/>);
    }
}

class ScoreBoard extends Component {
    render () {
        const scores = sample_scores.scores;
        const columns = [
            {
                Header: 'Rank',
                Cell: row => (
                    row.index+1
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
                show: {submitGameweekMode}
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

export default App;


