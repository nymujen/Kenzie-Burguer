import styled from 'styled-components'

export const UlStyle = styled.ul`
    width: 70%;

    list-style: none;

    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    @media(max-width: 768px){
        flex-wrap: nowrap;

        overflow: scroll;
    }
`
export const LiStyle = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    padding: 21px;

    border: 2px solid var(--gray-3);
    border-radius: 5px;

    :hover{
        border: 2px solid var(--gray-2);
    }
`
export const ImgStyle = styled.img`
    height: 150px;
    width: 150px;

    align-self: center;
`
export const CardTitle = styled.h2`
    font-size: var(--h3);
    font-weight: 700;
`
export const CardCategory = styled.h2`
    font-size: var(--caption);
    font-weight: 400;
`
export const CardPrice = styled.h2`
    font-size: var(--body);
    font-weight: 600;
    color: var(--primary);
`
export const CardTButton = styled.h2`
    width: 160px;

    padding: 11px 20px;

    background-color: var(--primary);
    color: white;

    border: none;
    border-radius: 8px;

    font-size: var(--h4);
    font-weight: 600;

    text-align: center;

    cursor: pointer;
    :hover{
        background-color: var(--primary-50);
    }
`