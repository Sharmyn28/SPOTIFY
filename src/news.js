import React, { Component } from 'react';
import { connect } from 'redux-zero/react';
import { Redirect, NavLink } from 'react-router-dom';
import './App.css';


const News = ({ playNews }) => {
    return (
        <div className="bienvenida text-center color">
            <header>
                <ul className="main-nav">
                    <li><NavLink to={"/feautures"} exact path="/">Featured</NavLink></li>
                    <li><NavLink to={"/genres"}>Genres Music</NavLink></li>
                    <li><NavLink to={"/news"}>News</NavLink></li>
                    <li><NavLink to={"/filtro"}>Discover</NavLink></li>     
                </ul>
            </header>
            <section>
                <h1>Nuevos álbumes y sencillos</h1>
                {
                    playNews.map(playNews => {
                        return (
                            <div className="col-md-2 playlist">
                                <img src={playNews.image} width="150" height="150" />
                                <audio src={playNews.audio} controls ></audio>
                                <div>
                                    <h4>{playNews.title}</h4>
                                    <p>{playNews.artist}</p>
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