import React from "react"
import PropTypes from "prop-types"

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar'
import Typography from '@material-ui/core/Typography'

class NavBar extends React.Component {
  render () {
    return (
      <React.Fragment>
        <AppBar position="static" color="secondary">
          <ToolBar>
            <Typography variant="h6" style={{flex: 1}}>
              Export to Spotify
            </Typography>
          </ToolBar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default NavBar
