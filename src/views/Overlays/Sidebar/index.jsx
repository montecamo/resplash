import React from 'react';

import UserProfile from './UserProfile';
import Navigation from './Navigation';

import style from './style.scss';

const browseLinks = [
  { title: 'Featured', link: '/featured' },
  { title: 'New', link: '/', exact: true },
  { title: 'Collections', link: '/collections' },
];

const exploreLinks = [
  { title: 'Made With Unsplash', link: 'https://madewith.unsplash.com/' },
  { title: 'Developers', link: 'https://unsplash.com/developers' },
];

const Sidebar = () => {
  return (
    <div className={style['sidebar-container']}>
      <div className={style.overlay} />
      <div className={style.sidebar}>
        <button className={style.close}>X</button>
        <UserProfile className={style['profile-master']} />
        <Navigation
          className={style['navigation-master']}
          items={browseLinks}
          title="Browse"
        />
        <Navigation
          className={style['navigation-master']}
          items={exploreLinks}
          title="Explore"
        />
      </div>
    </div>
  );
};

export default Sidebar;
