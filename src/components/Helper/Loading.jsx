import React from 'react';

//&
import styles from './Loading.module.scss';

const Loading = () => {
  return <div className={styles.box+' container'}>
    <div className={styles.load}></div>
  </div>;
};

export default Loading;
