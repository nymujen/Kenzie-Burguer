import { TotalValue } from "../TotalValue/TotalValue"
import { CartCaption, CartContainer, CartH4, CartLi, CartTitle, ImgCart, ImgInfoContainer, InfoContainer, NoItemText, RemoveAllButton, RemoveButton, TotalContainer, UlContainer } from "./styles"
import { toast } from "react-toastify"

export function CartCard({ cart, setCart }){
    function removeItem(event){
        const findItem = cart.findIndex(element => element.id === event.target.id)
        cart.splice(findItem, 1)
        setCart([...cart])

        toast('Item removido com sucesso', {
            position: "bottom-right",
            autoClose: 2000,
            type: "success",
        })
    }
    function removeAll(){
        setCart([])

        toast('Itens removidos com sucesso', {
            position: "bottom-right",
            autoClose: 2000,
            type: "success",
            closeOnClick: true,
        })
    }

    return(
        <CartContainer>
            <CartTitle>Carrinho de itens</CartTitle>
            {
                cart.length === 0 ? (
                    <>
                        <NoItemText>Sua sacola está vazia</NoItemText>
                        <NoItemText>Adicione itens</NoItemText>
                    </>
                ) : (
                    <>
                        <UlContainer>
                            {
                                cart.map(element => 
                                    <CartLi key={element.id}>
                                        <ImgInfoContainer>
                                            <ImgCart src={element.img} alt="" />
                                            <InfoContainer>
                                                <CartH4>{element.name}</CartH4>
                                                <CartCaption>{element.category}</CartCaption>
                                            </InfoContainer>
                                        </ImgInfoContainer>
                                        <RemoveButton id={element.id} onClick={removeItem}>Remover</RemoveButton>
                                    </CartLi>
                                )
                            }
                        </UlContainer>
                        <TotalContainer>
                            <TotalValue cart={cart} />
                        </TotalContainer>
                        <RemoveAllButton onClick={removeAll}>Remover todos</RemoveAllButton>
                    </>
                    
                )
            }

        </CartContainer>
        
    )
}