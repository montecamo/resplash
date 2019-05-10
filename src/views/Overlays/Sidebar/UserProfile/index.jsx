import React from 'react';
import c from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Avatar from '@/components/Avatar';
import style from './style.scss';

const UserProfile = ({ name, avatar, className }) => {
  return (
    <Link to="/u:er" className={c([style['user-profile'], className])}>
      <Avatar src={avatar} className={style['avatar-master']} />
      <div className={style['user-info']}>
        <span className={style.username}>{name}</span>
        <button className={style.logout}>log out</button>
      </div>
    </Link>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  className: PropTypes.string,
};

UserProfile.defaultProps = {
  name: 'Timur Buslov',
  avatar:
    'https://images.unsplash.com/photo-1557246519-f38ee04b918d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjcwMjYwfQ',
};

export default UserProfile;
