import styled from 'styled-components'

export const FormStyle = styled.form`
    border: 1px solid var(--gray-1);
    border-radius: 8px;

    padding: 4px;

    display: flex;
    align-items: center;
    gap: 5px;
`
export const InputStyle = styled.input`
    border: none;
`
export const ButtonStyle = styled.button`
    border: none;
    border-radius: 8px;

    background-color: var(--primary);
    color: white;

    padding: 7px;

    font-size: var(--h4);
    font-weight: 500;

    cursor: pointer;
    :hover{
        background-color: var(--primary-50);
    }
`