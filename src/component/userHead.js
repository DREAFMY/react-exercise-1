import React, { Component } from 'react';
import '../styles/userHead.scss';
import imgUrl from '../assets/avatar.jpg';

export default class UserHead extends Component {
  render() {
    return (
      <div className="myHead">
        <img src={imgUrl} className="headImg" />
        <h1>HELLOE,</h1>
        <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
      </div>
    );
  }
}
