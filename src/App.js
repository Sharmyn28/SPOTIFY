import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'redux-zero/react';
import {Redirect, NavLink} from 'react-router-dom';
import './App.css';

const Feautures = ( {playList}) =>  {
  return (<div>
    <div className="bienvenida text-center">
    <header>
        <ul className="main-nav">
            <li><NavLink to={"/feautures"} exact path="/">Featured</NavLink></li>
            <li><NavLink to={"/genres"}>Genres Music</NavLink></li>
            <li><NavLink to={"/news"}>News</NavLink></li>  
            <li><NavLink to={"/filtro"}>Discover</NavLink></li>       
        </ul>
    </header>
    <h1>Musica para todo los gustos...</h1>
    {
      playList.map((playList, index)=>{
        return(
          <div key={index} className="playlist">
            <div>
              <img src={playList.image} width="150" height="150"/>
            {/* <div>
              <audio src={playList.audio} controls ></audio>
            </div> */}
            <div>
              <NavLink className="title" to={playList.ruta}>{playList.title}</NavLink >
            </div>
          </div>
          </div>
        );
      })
    }
     </div> 
  </div>)
  }

  const mapToProps = ({ playList}) => ({ playList});
  export default connect(mapToProps)(Feautures);
