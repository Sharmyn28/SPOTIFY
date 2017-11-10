import React, {Component} from 'react';
import logo from './logo.svg';
import {Redirect, NavLink} from 'react-router-dom';
import {connect} from 'redux-zero/react'
import './App.css';

const Info = () => { 
    return(
        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
        <div
            className="media-object"
            style={{maxWidth: 450}}>
          <div className="media-object-hoverable">
            <div className="react-contextmenu-wrapper">
              <a
                className="cover-art shadow light"
                aria-hidden="true"
                href="/view/latin-page">
                <div>
                  <div className="icon">
                    <svg
                        width={80}
                        height={81}
                        viewBox="0 0 80 81"
                        xmlns="http://www.w3.org/2000/svg">
                      <title>
                        Playlist Icon
                        </title>
                      <path
                        d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z"
                        fill="currentColor"
                        fill-rule="evenodd" />
                    </svg>
                  </div>
                  <div
                    className="cover-art-image cover-art-image-loaded"
                    style={{backgroundImage: 'url("https://t.scdn.co/media/derived/latin-274x274_befbbd1fbb8e045491576e317cb16cdf_0_0_274_274.jpg")'}} />
                </div>
              </a>
            </div>
            <div className="mo-info">
              <div className="react-contextmenu-wrapper">
                <a  className="mo-info-name"
                    title="Latin"
                    href="/view/latin-page">Latin</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

const Genres = ( {genresList}) =>  {
    return (<div>
      <div className="bienvenida text-center">
      <header>
          <ul className="main-nav">
              <li><NavLink to={"/feautures"} exact path="/">Feautures</NavLink></li>
              <li><NavLink to={"/genres"}>Genres Musica</NavLink></li> 
              <li><NavLink to={"/filtro"}>Filtro</NavLink></li>       
          </ul>
      </header>
      {
        genresList.map(genresList=>{
          return(
              <div className="col-md-3">
                <img src={genresList.image} width="150" height="150"/>
              <div>
                <h3>{genresList.title}</h3>
              </div>
            </div>
          );
        })
      }
      <Info/>
       </div> 
    </div>)
    }
  
    const mapToProps = ({genresList}) => ({genresList});
    export default connect(mapToProps)(Genres);