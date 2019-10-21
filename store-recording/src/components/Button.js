import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    background: transparent;
    border: 2px solid var(--lightBlue);
    box-shadow: none;
    border-radius: 3px;
    color: white;
    &:hover{
        background: var(--lightBlue);
    }
`