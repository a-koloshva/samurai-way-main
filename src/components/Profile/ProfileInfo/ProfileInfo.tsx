import React from 'react';
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
  return (
    <>
      <div>
        <img src="/" alt="backgroung" />
      </div>
      <div className={s.descriptionBlock}>ava + info</div>
    </>
  );
};
