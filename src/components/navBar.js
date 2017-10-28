import React from 'react';
import { Link } from 'react-router-dom';

const Tab = ({ tab, path })=> {
  return (
    <li className={ path === tab.path ? 'active' : null }>
      <Link to={ tab.path }>
        { tab.title }
      </Link>
    </li>
  );
}

export default function Navbar(props) {
    const path = props.router.location.pathname;
    const tabs = [
      { title: 'Home', path: '/home' },
      { title: 'Indeed Example', path: '/indeed' }
    ];
    return (
      <ul className="nav nav-tabs mainnav fontS23H20" style={ { marginBottom: '10px' } }>
        {
          tabs.map( tab => <Tab key={ tab.path } tab={ tab } path={ path } />)
        }
      </ul>
    );
  }
