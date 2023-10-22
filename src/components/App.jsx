import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { SearchBar } from './SearchBar/SearchBar';
import { fetchImageGallery } from './Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { BtnLoadMore } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Error } from './Layout';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [imageGallery, setImageGallery] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [error, setError] = useState(false);
  const [toastMessage, setToastMessage] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    queryImgGallery(query, page);
  }, [query, page]);

  const handlerSearchImg = newImg => {
    setQuery(newImg);
    setPage(1);
    setImageGallery([]);
    setToastMessage(false);
  };

  const handlerLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const queryImgGallery = async (query, page) => {
    try {
      setLoading(true);
      setError(false);

      const queryImgData = await fetchImageGallery(query, page);
      const queryImg = queryImgData.hits;

      setTotalPage(Math.ceil(queryImgData.totalHits / 12));

      if (queryImg.length === 0) {
        toast.error('No images found, please change your search query', {
          style: { width: '1000px', height: '80px' },
        });
      }
      if (!toastMessage && queryImg.length > 0) {
        toast.success('We found images');
        setToastMessage(true);
      }

      setImageGallery(prevState => [...prevState, ...queryImg]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handlerSearchImg} />

      {loading && <Loader />}

      {error && <Error>Whoops! Error! Please reload this page!</Error>}

      {imageGallery.length > 0 && <ImageGallery apiImage={imageGallery} />}

      {imageGallery.length > 0 && (
        <BtnLoadMore
          onClick={handlerLoadMore}
          page={page}
          totalPage={totalPage}
        />
      )}

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            width: '500px',
            borderRadius: '10px',
            background: '#363b54',
            color: '#fff',
            height: '80px',
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '20px',
          },
        }}
      />
    </div>
  );
};
