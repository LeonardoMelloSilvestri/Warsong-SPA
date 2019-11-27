import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { backToTop } from '../helpers';

const Characters = ({ characters }) => {
  const characterList = characters.map(character => {
    return (
      <React.Fragment key={character.id} >
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mt-3">
          <div className="card h-100">
            <div className="card-header text-center">
              <h5 className="font-weight-bolder mb-0">{character.name}</h5>
            </div>
            <div className="card-body text-center">
              <img className="mb-2" src={require('../img/' + character.name + '.png')} alt="" width="90" />
              <p className="card-text">{character.summaryLore}</p>
            </div>
            <div className="card-footer text-center">
              <Link to={'character/' + character.name} onClick={() => backToTop()} className="btn btn-primary">More...</Link>
            </div>
          </div>
        </div>
      </ React.Fragment>
    )
  })
  return (
    <div id="characterList" className="container text-center mb-3">
      <h2 className="mt-3">Characters</h2>
      <div className="row">
        {characterList}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
}

export default connect(mapStateToProps)(Characters);
