import { CardCategory, CardPrice, CardTButton, CardTitle, ImgStyle, LiStyle, UlStyle } from "./styles"
import { toast } from "react-toastify"

export function ProductCard({ products, setCart, filter, cart }){
    function addToCart(event){
        event.preventDefault()

        if(cart.length === 0){
            const selectedItem = products.filter(element => {return element.id == event.target.id})
            setCart((oldValues) => [...oldValues, selectedItem[0]])

            toast('Item adicionado ao carrinho', {
                position: "bottom-right",
                autoClose: 2000,
                type: "success",
            })
        }else{
            cart.map(element => {
                if(event.target.id == element.id){    
                    toast('O item já está no carrinho', {
                        position: "bottom-right",
                        autoClose: 2000,
                        type: "error",
                    })
                    const findElement = cart.indexOf(element)
                    cart.splice(findElement, 1)
                    setCart([...cart])

                    const selectedItem = products.filter(element => {return element.id == event.target.id})
                    setCart([...cart, selectedItem[0]])
                }else{
                    const selectedItem = products.filter(element => {return element.id == event.target.id})
                    setCart([...cart, selectedItem[0]])

                    toast('Item adicionado ao carrinho', {
                        position: "bottom-right",
                        autoClose: 2000,
                        type: "success",
                    })
                }
            })
        }          
    }

    return(
        <UlStyle>
            {
                filter.length === 0 ? (
                    products.map(element => 
                        <LiStyle key={element.id}>
                            <ImgStyle src={element.img} alt="" />
                            <CardTitle>{element.name}</CardTitle>
                            <CardCategory>{element.category}</CardCategory>
                            <CardPrice>R${element.price}</CardPrice>
                            <CardTButton id={element.id} onClick={addToCart}>Adicionar</CardTButton>
                        </LiStyle>
                    ) 
                ) : (
                    filter.map(element => 
                        <LiStyle key={element.id}>
                            <ImgStyle src={element.img} alt="" />
                            <CardTitle>{element.name}</CardTitle>
                            <CardCategory>{element.category}</CardCategory>
                            <CardPrice>R${element.price}</CardPrice>
                            <CardTButton id={element.id} onClick={addToCart}>Adicionar</CardTButton>
                        </LiStyle>
                    )
                )
            }
        </UlStyle>
    )
}