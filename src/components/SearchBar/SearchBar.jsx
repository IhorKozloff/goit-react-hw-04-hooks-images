import React from 'react';
import { Formik } from 'formik';
import {SearchBarHead, FormStyled, FieldStyled, SearchBtn, SearchBtnLabel} from 'components/SearchBar/SearchBar.styled';


export const SearchBar = ({setRequest}) => {

   
        return (
            
            <SearchBarHead className="searchbar">
                <Formik 
                    initialValues={{imageName:''}} 
                    onSubmit={({imageName}, actions) => {

                                                            if (imageName.trim() === '') {
                                                                return;
                                                            };
                                                            setRequest(imageName);
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
            
        )
    
}