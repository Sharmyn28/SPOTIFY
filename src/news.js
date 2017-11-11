import React, { Component } from 'react';
import { connect } from 'redux-zero/react';
import { Redirect, NavLink } from 'react-router-dom';
import './App.css';
import './scss/news.css'


const News = ({ playNews }) => {
    return (
        <div className="init text-center">
            <header>
                <ul className="main-nav link">
                    <li ><NavLink to={"/feautures"} exact path="/">Feautures</NavLink></li>
                    <li><NavLink to={"/genres"}>Genres music</NavLink></li>
                    <li><NavLink to={"/news"}>News</NavLink></li>
                    <li><NavLink to={"/filtro"}>Filtro</NavLink></li>
                </ul>
            </header>
            <section > 
                <h1 className="news">Nuevos álbumes y sencillos</h1>
                {
                    playNews.map((playNews, index) => {
                        return (
                            <div key={index} className="playlist play">
                                <div>
                                    <img className="opacity"src={playNews.image}width="150" height="150" /> 
                                    <div>
                                        <audio src={playNews.audio} controls className="audio" ></audio> 
                                    </div>
                                    
                                <div className="title">
                                    <h4>{playNews.title}</h4>
                                    <p>{playNews.artist}</p>
                                </div>
                                
                                </div>                 
                                
                            </div>
                        );
                    })
                }
            </section>
        </div>
    );
}

const mapToProps = ({ playNews }) => ({ playNews })

export default connect(mapToProps)(News);