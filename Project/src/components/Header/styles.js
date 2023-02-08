import styled from "styled-components"

export const SmallLogo = styled.span `
    color: var(--primary);
    font-size: var(--h4);
`
export const HeaderStyle = styled.header`
    padding: 20px 120px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 768px){
        flex-direction: column;
    }
`


