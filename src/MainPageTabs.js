import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ClassNames from 'classnames';
import RosterPage from './RosterPage';
import ScoreBoard from './ScoreBoard';

class MainPageTabs extends Component {
  render() {
    const submitGameweekMode = false;
    return (
      <div>
        <Tabs>
          <TabList className={ClassNames(['Main-page-tablist', 'react-tabs__tab'])}>
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
    return <RosterPage submitGameweekMode={submitGameweekMode} />;
  }
  renderScoreboard() {
    return <ScoreBoard />
  }
}

export default MainPageTabs;
