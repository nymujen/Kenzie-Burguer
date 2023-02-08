import { useState, } from "react"
import { ButtonStyle, FormStyle, InputStyle } from "./styles"

export function InputSearch({ setFilter, filter, products }){
    const [ value, setValue ] = useState("")

    function handleSearch(event){
        event.preventDefault()   
        

        const filterProducts = products.filter(element => {return element.name === value || element.category === value})
        setFilter(filterProducts)
    }

    return(
        <FormStyle onSubmit={handleSearch}>
            <InputStyle type="text" placeholder="Digite aqui..." onChange={(event) => setValue(event.target.value)} />
            <ButtonStyle type="submit">Pesquisar</ButtonStyle>
        </FormStyle>
    )
}