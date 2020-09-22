import React, { Component } from 'react';
import '../styles/educationItem.scss';

const data = [
  {
    year: '1990',
    title: 'I was born in Katowice',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.',
  },
  {
    year: '2005',
    title: 'Secondary school specializing in artistic',
    content:
      'Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptaibus.',
  },
  {
    year: '2009',
    title: 'First level graduation in Graphic Design',
    content:
      'Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? lusto, quibusdam asperiores unde repllat.',
  },
  {
    year: '2012',
    title: 'Second level graduation in Graghic Design',
    content: 'Ducimus, aliquam tempore autem itaque et accusantium!',
  },
];

export default class EducationItem extends Component {
  render() {
    return (
      <div>
        {data.map((item) => (
          <div className="myItem" key={item.year}>
            <div className="year">{item.year}</div>
            <div className="content">
              <div className="title">{item.title}</div>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
