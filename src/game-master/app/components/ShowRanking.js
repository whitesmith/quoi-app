import React, { Component } from 'react';

class ShowRanking extends Component {

  render() {
    const { onClickShowRanking, game } = this.props;
    if(game == 'START') {
      return(
        <li><a href="#" onClick={e => {e.preventDefault(); onClickShowRanking(); }}> Show Ranking </a></li>
      )
    }
  }

}

export default ShowRanking;