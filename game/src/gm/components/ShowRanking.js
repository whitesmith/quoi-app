import React, { Component } from 'react';

class ShowRanking extends Component {

  render() {
    const { onClick, game } = this.props;
    if(game == 'READY') {
      return(
        <li><a href="#" onClick={e => {e.preventDefault(); onClick(); }}> Show Ranking </a></li>
      )
    }
    else {
      return(
        <li> Show Ranking </li>
      )
    }
  }

}

export default ShowRanking;