import React, { Component } from 'react'
import { TaskEditor } from './TaskEditor.jsx'
import { TaskViewer } from './TaskViewer.jsx'
import { UserEditor } from './UserEditor.jsx'
import { UsersViewer } from './UsersViewer.jsx'
import { TaskListViewer } from './TaskListViewer.jsx'
import './Desktop.less'

class Desktop extends Component {
  render() {
    let desktop = ''
    switch (this.props.viewer) {
      case 'welcome': desktop
        = <center>
          <h2>Welcome to Aspire Task Manager</h2>
        </center>; break
      case 'TaskEditor': desktop
        = <TaskEditor setViewer={this.props.setViewer} />
        break
      case 'TaskViewer': desktop
        = <TaskViewer setViewer={this.props.setViewer} />
        break
      case 'UserEditor': desktop
        = <UserEditor setViewer={this.props.setViewer} />
        break
      case 'UsersViewer': desktop
        = <UsersViewer />
        break
      case 'TaskListViewer': desktop
        = <TaskListViewer setViewer={this.props.setViewer} />
        break
      default: desktop
        = <center>No desktop for {desktop}</center>
    }
    return (
      <div className="Desktop">
        {desktop}
      </div>
    )
  }
}

export { Desktop }
