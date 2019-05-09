import React from 'react';
import PropTypes from 'prop-types';

import style from './style';

import Avatar from '@/components/Avatar';
import NavBar from './NavBar';

const UserContent = ({ avatar, name, website }) => {
  return (
    <div className={style['user-header']}>
      <Avatar src={avatar} />
      <div className={style.description}>
        <h2 className={style.name}>{name}</h2>
        <h3 className={style.website}>{website}</h3>
      </div>
      <NavBar className={style['user-navbar-master']} />
    </div>
  );
};

UserContent.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  website: PropTypes.string,
};

UserContent.defaultProps = {
  name: 'Timur Buslov',
  website: 'https://montecamo.com',
  avatar:
    'https://images.unsplash.com/photo-1557246519-f38ee04b918d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjcwMjYwfQ',
};

export default UserContent;
