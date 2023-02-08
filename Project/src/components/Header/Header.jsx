import { InputSearch } from "../InputSearch/InputSearch"
import { HeaderStyle, SmallLogo } from "./styles.js"

export function Header({ products, setFilter, filter }){
    return (
        <HeaderStyle>
            <h1>Burguer <SmallLogo>Kenzie</SmallLogo></h1>
            <InputSearch products={products} setFilter={setFilter} filter={filter} />
        </HeaderStyle>
    )
}