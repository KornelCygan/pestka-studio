import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
    border: 0;
    background-color: green;
    padding: 15px 40px;
    color: #fff;

    &:active,
    &:focus {
        border: 0;
        outline: 0;
    }
`;