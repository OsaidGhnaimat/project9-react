import React from "react";
import faker from '@faker-js/faker';
import './NewComment.css'
function NewComment({name, text, currentDate}) {

  return (
      <div className="ui comments newcomment">
        <div className="comment">
          <a className="avatar" href="/">
            <img src={faker.image.avatar()} alt='user'/>
          </a>
          <div className="content">
            <a className="author" href="/">{name}</a>
            <div className="metadata">
              <span className="date">{currentDate}</span>
            </div>
            <div className="text">{text}</div>
          </div>
        </div>
      </div>
  );
}

export default NewComment;
