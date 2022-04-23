
import React from 'react';
import PropTypes from 'prop-types';
import {Btn, BtnWrapper} from 'components/Button/Button.styled';

export const LoadMoreBtn = ({onMoreBtnClick}) => {


    return (
        <BtnWrapper>
            <Btn type="button" onClick={onMoreBtnClick}>Load More</Btn>
        </BtnWrapper>
    )
}

LoadMoreBtn.propTypes = {
    onMoreBtnClick: PropTypes.func.isRequired,
}