import React, { Component } from 'react';
import images from './images.js';

export default class Character extends Component {
  showCharacter() {
    let name = this.props.match.params.character_name;
    const actualCharacter = this.props.characters.find(character => character.name === name);
    return (
      <div className="mt-3">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Lore</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Stats</a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div className="container text-center mt-3">
              <h2>{actualCharacter.name}</h2>
              <img className="my-2" src={require('../img/' + actualCharacter.name + '.png')} alt="" width="100" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus justo. Suspendisse ultrices augue metus, eget dictum velit maximus a. Curabitur vel elementum metus, nec fringilla elit. Aliquam eget urna et mi laoreet bibendum vel cursus mauris. Phasellus a finibus sapien, sed eleifend urna. Morbi pulvinar ac nunc sed pretium. Quisque eu luctus nunc. Phasellus sed eleifend augue. Quisque arcu mi, commodo vel nisl sit amet, venenatis blandit tortor. Donec pharetra nisl nulla, vitae scelerisque enim viverra nec. Integer vel rutrum odio. Morbi viverra fermentum porta. Donec tincidunt non metus ac luctus. Curabitur rutrum facilisis ante.</p>
            </div>
          </div>
          <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div className="container text-center mt-3">
              <h2>Classes</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  <h4>Initial class</h4>
                  {JSON.stringify(actualCharacter.initialClass)}
                </li>
                {actualCharacter.tier2Classes ?
                  <li className="list-group-item">
                    <h4>Second Classes</h4>
                    {Object.values(actualCharacter.tier2Classes).map((classes, index) =>
                      <span key={classes}>
                        {JSON.stringify(classes) + ' '}
                      </span>
                    )}
                  </li>
                  : null
                }
                {actualCharacter.tier3Classes ?
                  <li className="list-group-item">
                    <h4>Third Classes</h4>
                    {Object.values(actualCharacter.tier3Classes).map((classes, index) =>
                      <span key={classes}>
                        {JSON.stringify(classes) + ' '}
                      </span>
                    )}
                  </li>
                  : null
                }
                {actualCharacter.tier4Classes ?
                  <li className="list-group-item">
                    <h4>Fourth Classes</h4>
                    {Object.values(actualCharacter.tier4Classes).map((classes, index) =>
                      <span key={classes}>
                        {JSON.stringify(classes) + ' '}
                      </span>
                    )}
                  </li>
                  : null
                }
                {actualCharacter.secretClass ?
                  <li className="list-group-item">
                    <h4>Secret Class</h4>
                    {JSON.stringify(actualCharacter.secretClass.class)}
                  </li>
                  : null
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.showCharacter()}
      </div>
    )
  }
}
