import React, {useState, useEffect} from "react"
import {SearchBar} from 'components/SearchBar/SearchBar';
import {searchByName} from 'components/API';
import {ImageGallery} from 'components/ImageGallery/ImageGallery'
import {LoadMoreBtn} from 'components/Button/Button';
import {Loader} from 'components/Loader/Loader';
import {NoResultError} from 'components/NoResultError/NoResultError'



export const App = () => {

const [userRequest, setUserRequest] = useState('');

const [dataToRender, setDataToRender] = useState([]);

const [loaderStatus, setLoaderStatus] = useState(false);

const [page, setPage] = useState(1);

const [searchingStatus, setSearchingStatus] = useState(undefined);


useEffect(() => {
  
  if (userRequest !== '') {

    setLoaderStatus(true);
    searchByName(userRequest, page)
    .then(data => {
       if (data.length === 0) {
          setSearchingStatus("noResult");
          throw new Error('Уупс, по вашему запросу ничего не найдено!'); 
        } else {
          setSearchingStatus("positiveResult");
        }
      setDataToRender(prevDataState => [...prevDataState, ...data]);
    })
    .finally(() => {
      setLoaderStatus(false);
    }); 
  }  
},[page, userRequest]);


function onMoreBtnClick () {
  setPage(prevPageState => prevPageState + 1);
};

  
  return (
    <>
      <Loader status={loaderStatus}/>
      <SearchBar setRequest={setUserRequest} setDataToRender={setDataToRender} setPage={setPage} setSearchingStatus={setSearchingStatus}/>
      {searchingStatus === "noResult" && <NoResultError>Уупс, по вашему запросу ничего не найдено!</NoResultError>}
      {searchingStatus === "positiveResult" && <ImageGallery data={dataToRender}/>}
      {dataToRender.length !== 0 && <LoadMoreBtn onMoreBtnClick={onMoreBtnClick}/>}
    </>
  );
};










