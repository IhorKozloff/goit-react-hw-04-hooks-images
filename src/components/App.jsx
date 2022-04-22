import React, {Component} from "react"
import {SearchBar} from 'components/SearchBar/SearchBar';
import {searchByName, searchMore} from 'components/API';
import {ImageGallery} from 'components/ImageGallery/ImageGallery'
import {LoadMoreBtn} from 'components/Button/Button';
import {ModalWindow} from 'components/Modal/Modal';
import {Loader} from 'components/Loader/Loader';



export class App extends Component {
  state = {
    userRequest:'',
    dataToRender:[],
    modalWindowContent:'',
    loaderStatus:false,
  }

  componentDidUpdate(prevProps, prevState) {
    const {userRequest} = this.state;

    if(prevState.userRequest !== userRequest) {
      this.setState({loaderStatus: true});



      searchByName(userRequest).then(data => {
        this.setState({dataToRender: data})
      }).finally(() => {
        this.setState({loaderStatus: false});
      }); 
    }



  }


  setRequest = (dataToSet) => {
    this.setState({userRequest: dataToSet});
  };
  setModalContent = (content) => {
    this.setState({modalWindowContent: content});
  };
  


  onMoreBtnClick = () => {

    this.setState({loaderStatus: true});
    
    setTimeout(() => {
      searchMore(this.state.userRequest).then(data => {
        this.setState((prevState) => {
          return (
            {dataToRender: [...prevState.dataToRender, ...data]}
          )
        })
      }).finally(() => {
        this.setState({loaderStatus: false});
      })
    },1000)
  }

  onImageClick = (event) => {
    const {dataToRender} = this.state;
    const clickedImage = dataToRender.filter(item => `${item.id}` === event.target.id);
    this.setModalContent(clickedImage[0].largeImageURL);
  }




  render () {
    const {dataToRender, modalWindowContent, loaderStatus} = this.state;

    return (
      <>
        <Loader status={loaderStatus}/>
        <SearchBar setRequest={this.setRequest}/>
        {dataToRender.length !== 0 && <ImageGallery data={dataToRender} onImageClick={this.onImageClick}/>}
        {dataToRender.length !== 0 && <LoadMoreBtn onMoreBtnClick={this.onMoreBtnClick}/>}
        {modalWindowContent !== '' && <ModalWindow onClose={this.setModalContent}><img src={modalWindowContent} width="650" height="450" alt="pictures"></img></ModalWindow>}
      </>
    )
  };
};
