import React from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './ImgUpload.module.scss';
import { PHOTO_POST } from '../api';

const ImgUpload = () => {
  const [img, setImg] = React.useState(null);
  const [author, setAuthor] = React.useState('');

  const [load, setLoad] = React.useState(false);

  const navigate = useNavigate();

  function convertToBase64(e) {
    console.log(e);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImg(reader.result);
    };
    reader.onerror = (err) => {
      console.error(err);
    };
  }

  function upload(e) {
    e.preventDefault();
    setLoad(true);

    const { url, options } = PHOTO_POST({
      img,
      author,
    });

    async function doPost() {
      try {
        fetch(url, options)
        .then(res => {
          console.log(res);
          if(res.ok)
            navigate('/');
          return res;
        })
      } catch (err) {
        console.error(err.message);
      } finally{
        setLoad(false);
      }
    }

    doPost();
  }

  function change({ target }) {
    setAuthor(target.value);
  }

  return (
    <div className={styles.container + ' container'}>
      <form onSubmit={upload} className={styles.form}>
        <label htmlFor="image">Imagem: </label>
        <input
          type="file"
          accept="image/*"
          id="image"
          onChange={convertToBase64}
        />

        <label htmlFor="author">Autor</label>
        <input
          type="text"
          onChange={change}
          placeholder="Seu nome"
          id="author"
        />
        {!load ? <button type="submit">Enviar Imagem</button> : <button disabled>Enviando Imagem</button>}
        
      </form>
      {img && <img src={img} />}
    </div>
  );
};

export default ImgUpload;
