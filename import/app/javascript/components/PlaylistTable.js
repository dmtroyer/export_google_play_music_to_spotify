import React from "react"
import PropTypes from "prop-types"

import Container from '@material-ui/core/Container'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

class PlaylistTable extends React.Component {
  timestampToDateString (timestamp) {
    let date = new Date(parseInt(timestamp / 1000));
    return date.toLocaleDateString();
  }

  render () {
    return (
      <React.Fragment>
        <Container className="playlists">
          <Typography variant="h2">Playlists</Typography>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Tracks</TableCell>
                  <TableCell align="right">Created</TableCell>
                  <TableCell align="right">Last Modified</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.playlists.map((playlist) => (
                  <TableRow key={playlist.name}>
                    <TableCell component="th" scope="row">
                      {playlist.name}
                    </TableCell>
                    <TableCell align="right">
                      {playlist.tracks.length}
                    </TableCell>
                    <TableCell align="right">
                      {this.timestampToDateString(playlist.creationTimestamp)}
                    </TableCell>
                    <TableCell align="right">
                      {this.timestampToDateString(playlist.lastModifiedTimestamp)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </React.Fragment>
    );
  }
}

export default PlaylistTable
