import React from "react";
import {ErrorText} from 'components/NoResultError/NoResultError.styled'

export const NoResultError = ({children}) => {
    return <ErrorText>{children}</ErrorText>
};