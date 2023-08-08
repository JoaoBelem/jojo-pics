import React from 'react';
import { PHOTO_GET } from '../api';
import styles from './Feed.module.scss';
import Loading from './Helper/Loading';

const Feed = () => {
  const [pics, setPics] = React.useState(null);

  const [load, setLoad] = React.useState(false);

  React.useEffect(() => {
    async function doFetch() {
      try {
        setLoad(true);
        const { url } = PHOTO_GET();

        const response = await fetch(url);
        const json = await response.json();
        setLoad(false);
        setPics(json);

        // fetch(url)
        //   .then((res) => res.json())
        //   .then((txt) => setPics(txt));
      } catch (err) {
        console.log(err.message);
        setLoad(false);
        setPics(err.message);
      }
    }

    doFetch();
  }, []);

  if(load) return <Loading/>;

  if (pics == null) return null;

  return (
    <div className={styles.feed}>
      <div className={styles.container}>
        {pics.map((item, index) => {
          return (
            <div key={index} className={styles.post}>
              <img src={item.img} />
              <div className={styles.details}>
              {item.author && <p>Por {item.author}</p>}
              <button className={styles.deletar}>Deletar</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
