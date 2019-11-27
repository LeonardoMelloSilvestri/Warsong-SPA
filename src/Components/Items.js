import React from 'react';
import { connect } from 'react-redux';

const Items = ({ items }) => {
  const itemList = items.map(item => {
    return (
      <React.Fragment key={item.id}>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-3">
          <div className="card text-center">
            <div className="card-header pb-0">
              <h5 className="card-title">{item.name}</h5>
            </div>
            <div className="card-body">
              <img src={require('../img/' + item.src + '.png')} className="card-img-top mx-auto mb-2" />
              <p className="card-text">Attack: {item.attack}</p>
              <p className="card-text">Magic: {item.magic}</p>
              <p className="card-text">Defense: {item.defense}</p>
              <p className="card-text">Price: {item.price}$</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  })
  return (
    <div id="itemList" className="container text-center mb-3">
      <h2 className="mt-3">Items</h2>
      <div className="row ">
        {itemList}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(Items);