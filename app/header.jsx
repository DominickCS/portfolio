import React from 'react';
import './styles/headerstyles.css';

function Header(props)  {
  return (
    <>
      <div className="intro">
      <h1>{props.title}</h1>
      <div id="pfp">
        <img src="https://avatars.githubusercontent.com/u/67260863?v=4" />
      </div>
      <h4>{props.subtitle}</h4>
      </div>
    </>);
}

export default Header;
