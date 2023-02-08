import styled from "styled-components"

export const CartContainer = styled.section`
    width: 30%;

    display: flex;
    flex-direction: column;

    border-radius: 5px;

    padding: 0 5px;

    @media(max-width: 768px){
        width: 100%;
    }
`
export const CartTitle = styled.h2`
    padding: 20px 22px ;

    font-size: var(--h3);
    font-weight: 700;

    background-color: var(--primary);
    color: white;
`
export const NoItemText = styled.span`
    text-align: center;

    font-size: var(--h3);
    font-weight: 700;
`

export const UlContainer = styled.ul`    
    display: flex;
    flex-direction: column;
    gap: 23px;
    align-items: center;
    justify-content: center;

    list-style: none;
`
export const CartLi = styled.li`
    height: 80px;
    width: 100%;

    display: flex;
    justify-content: space-between;

    position: relative;
`
export const ImgCart = styled.img`
    width: 70px;
    height: 70px;

    background-color: var(--gray-3);
`

export const ImgInfoContainer = styled.div`
    display: flex;
    gap: 15px;
`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const CartH4 = styled.span`
    font-size: var(--h4);
    font-weight: 700;
`
export const CartCaption = styled.span`
    font-size: var(--caption);
    font-weight: 400;
    color: #BDBDBD;
`
export const RemoveButton = styled.button`
    background-color: white;

    border: none;

    font-size: var(--caption);
    font-weight: 500;
    color: #BDBDBD;

    position: absolute;
    top: 2px;
    right: 2px;

    cursor: pointer;
    :hover{
        color: var(--gray-2);
    }
`
export const RemoveAllButton = styled.button`
    padding: 10px 110px;

    background-color: var(--gray-3);

    border: none;
    border-radius: 5px;

    text-align: center;
    font-size: var(--headline);
    font-weight: 600;
    color: var(--gray-2);

    margin-top: 22px;

    cursor: pointer;
    :hover{
        background-color: var(--gray-2);
        color: white;
    }
`

export const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`