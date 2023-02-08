import { TotalPrice, TotalSpan } from "./styles"

export function TotalValue ({ cart }){
    const initialValue = 0

    const prices = cart.map(element => {return element.price})
    const sum = prices.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

    return (
        <>
            <TotalSpan>Total</TotalSpan>
            <TotalPrice>R$ {sum.toFixed(2)}</TotalPrice>
        </>         
    )

}