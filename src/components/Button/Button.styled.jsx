import styled from '@emotion/styled'


export const BtnWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    padding-top: 10px;
`;

export const Btn = styled.button`
    width: 300px;
    padding: 10px 0;
    color: #fff;
    background-color: #3f51b5;
    cursor: pointer;
    opacity: 0.7;
    &:hover {
        opacity: 1;
    }
    &:active {
        transform: scale(0.9)
    }
`;