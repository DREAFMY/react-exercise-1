import React, { Component } from 'react';
import EducationItem from './educationItem';
import '../styles/userInfo.scss';

export default class UserInfo extends Component {
  render() {
    return (
      <div className="myInfo">
        <h2 className="title">ABOUT ME</h2>
        <p>
          Lorem ipsum dolor sit amet,consectetur adipisicing elit.
          Repellendus,non,dolorem,cumque distinctio magni quam expedita velit
          laborum sunt amet facere tempora ut fuga aliquam ad asperiores
          vouptatem dolorum! Quasi.
        </p>
        <h2 className="title">EDUCATION</h2>
        <EducationItem />
      </div>
    );
  }
}
