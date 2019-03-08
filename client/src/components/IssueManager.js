import React, { Component } from 'react'
import SideBar from './SideBar';
import ListManager from './ListManager';
import '../css/issuemanager.css';

export default class IssueManager extends Component {
  render() {
    let {showList, onItemClick, onItemDelete, issues, logIssue, 
      userData, setProjectInIssues, issueIdMap, project, versions, users} = this.props;
    return (
      <div className='issue-manager'>
        <SideBar userData={userData} setProjectInIssues={setProjectInIssues} project={project} versions={versions} users={users}/>
        <ListManager 
        showList= {showList}
        issueIdMap={issueIdMap}
        onItemClick= {onItemClick}
        onItemDelete={onItemDelete}
        logIssue = {logIssue}
        data={issues}
        project={project}
        />
      </div>
    )
  }
}
