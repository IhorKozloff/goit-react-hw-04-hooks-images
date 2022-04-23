import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {SearchBarHead, FormStyled, FieldStyled, SearchBtn, SearchBtnLabel} from 'components/SearchBar/SearchBar.styled';


export const SearchBar = ({setRequest, setDataToRender, setPage, setSearchingStatus}) => {

   
        return (
            
            <SearchBarHead className="searchbar">
                <Formik 
                    initialValues={{imageName:''}} 
                    onSubmit={({imageName}, actions) => {

                                                            if (imageName.trim() === '') {
                                                                return;
                                                            };
                                                            setRequest(imageName);
                                                            setDataToRender([]);
                                                            setPage(1);
                                                            setSearchingStatus(undefined);
                                                            actions.resetForm();
                                                        }}>

                        <FormStyled className="form">
                            <SearchBtn type="submit" className="button">
                                <SearchBtnLabel className="button-label">Search</SearchBtnLabel>
                            </SearchBtn>
    
                            <FieldStyled
                                name="imageName"
                                className="input"
                                type="text"
                                autoComplete="off"
                                autoFocus
                                placeholder="Search images and photos"
                            />
                        </FormStyled>
                </Formik>
            </SearchBarHead>
            
        );
    
};

SearchBar.propTypes = {
    setRequest: PropTypes.func.isRequired,
    setDataToRender: PropTypes.func.isRequired, 
    setPage: PropTypes.func.isRequired, 
    setSearchingStatus: PropTypes.func,
}