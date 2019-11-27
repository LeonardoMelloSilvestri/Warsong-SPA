import React from 'react';
import { Link } from 'react-router-dom';
import { backToTop } from '../helpers';

const Home = () => {
  return (
    <div>
      <header>
        <div className="jumbotron container">
          <h1 className="text-center">Warsong World</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
        </div>
      </header>

      <main className="container">
        <section>
          <div className="row text-center">
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="card">
                <div className="card-header">
                  <h3>Lore</h3>
                </div>
                <div className="card-body">
                  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                </div>
                <div className="card-footer">
                  <Link to="/lore" onClick={() => backToTop()} className="btn btn-primary">More...</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch mt-3 mt-md-0">
              <div className="card">
                <div className="card-header">
                  <h3>Characters</h3>
                </div>
                <div className="card-body">
                  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                </div>
                <div className="card-footer">
                  <Link to="/characters" onClick={() => backToTop()} className="btn btn-primary">More...</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch mt-3 mt-md-0">
              <div className="card">
                <div className="card-header">
                  <h3>Items</h3>
                </div>
                <div className="card-body">
                  <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                </div>
                <div className="card-footer">
                  <Link to="/items" onClick={() => backToTop()} className="btn btn-primary">More...</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <article>
          <div className="mt-4">
            <h2>Donec id elit non mi porta</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum maxime natus sed maiores, nihil molestias nam quod id ullam dolorem! Reiciendis molestiae ad odio possimus quod dolorum sequi recusandae in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi a iure corrupti facere eum. Minima ex cum ad dicta? Molestias, quibusdam eius consequuntur autem laborum deleniti delectus. Dolores, magni! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit cupiditate perspiciatis blanditiis itaque, illo eius vero esse veritatis, eos tempora magnam corporis at id, temporibus dicta officiis assumenda ea labore!</p>
          </div>
        </article>

        <section>
          <div className="row my-4">
            <div className="col-sm-12 col-md-4 d-flex align-items-stretch">
              <img src={require('../img/game1.png')} className="img-fluid" />
            </div>
            <div className="col-sm-12 col-md-4 mt-3 d-flex align-items-stretch mt-md-0">
              <img src={require('../img/game3.png')} className="img-fluid" />
            </div>
            <div className="col-sm-12 col-md-4 mt-3 d-flex align-items-stretch mt-md-0">
              <img src={require('../img/game5.png')} className="img-fluid" />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <footer className="page-footer font-small text-light bg-dark">
          <div className="footer-copyright text-center py-2">© 2019 Warsong World</div>
        </footer>
      </footer>
    </div>
  )
}

export default Home;