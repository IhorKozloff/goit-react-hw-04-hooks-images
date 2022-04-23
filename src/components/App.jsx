import React, {useState, useEffect} from "react"
import {SearchBar} from 'components/SearchBar/SearchBar';
import {searchByName} from 'components/API';
import {ImageGallery} from 'components/ImageGallery/ImageGallery'
import {LoadMoreBtn} from 'components/Button/Button';
// import {ModalWindow} from 'components/Modal/Modal';
import {Loader} from 'components/Loader/Loader';



export const App = () => {

const [userRequest, setUserRequest] = useState('');

function handleSetUserRequest (dataToSet) {
  setUserRequest(dataToSet);
};

const [dataToRender, setDataToRender] = useState([]);

const [loaderStatus, setLoaderStatus] = useState(false);

const [page, setPage] = useState();

const [modalWindowContent, setModalWindowContent] = useState();



useEffect(() => {
  if (userRequest !== '') {

    setLoaderStatus(true);
    setPage(1)

    searchByName(userRequest, 1)
    .then(data => {
      setDataToRender(prevDataState => [...prevDataState, ...data]);
    })
    .finally(() => {
      setLoaderStatus(false);
    }); 
  }
  
},[userRequest]);






function onMoreBtnClick () {
  setPage(prevPageState => prevPageState + 1);
  setLoaderStatus(true);

  searchByName(userRequest, page)
  .then(data => {
    setDataToRender(prevDataState => [...prevDataState, ...data]);
  })
  .finally(() => {
    setLoaderStatus(false);
  }); 
};
  // state = {
  //   userRequest:'', +
  //   dataToRender:[], +
  //   modalWindowContent:'',
  //   loaderStatus:false, +
  // }

  


 
  // setModalContent = (content) => {
  //   this.setState({modalWindowContent: content});
  // };
  


  

  function onImageClick (event) {
    // const {dataToRender} = this.state;
    // const clickedImage = dataToRender.filter(item => `${item.id}` === event.target.id);
    // this.setModalContent(clickedImage[0].largeImageURL);
    console.log('Clicked on Image')
  }




 

  return (
    <>
      <Loader status={loaderStatus}/>
      <SearchBar setRequest={handleSetUserRequest}/>
      {/* {dataToRender.length !== 0 && <ImageGallery data={dataToRender} onImageClick={onImageClick}/>} */}
      {dataToRender.length !== 0 && <LoadMoreBtn onMoreBtnClick={onMoreBtnClick}/>}
      {/* {modalWindowContent !== '' && <ModalWindow onClose={this.setModalContent}><img src={modalWindowContent} width="650" height="450" alt="pictures"></img></ModalWindow>} */}
    </>
  )

};
