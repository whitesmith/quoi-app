import React, { Component } from 'react';

class ShowRanking extends Component {

  render() {
    const { onClick, game } = this.props;
    if(game == 'START') {
      return(
        <li><a href="#" onClick={e => {e.preventDefault(); onClick(); }}> Show Ranking </a></li>
      )
    }
  }

}

export default ShowRanking;