import { get } from "immer/dist/internal"
import { useState, useEffect } from "react"
import { ReactComponent as Magnifier } from "../../images/svg/magnifier.svg";
import {
  Button,
  Input,
  Searchh,
  Dddiv,
} from "../Header/Header.styled";
import products from "../Products/ItemProducts.json";

const [products, setProducts] = useState([])
const getProducts = () => {
  get('products.title')
  .then ((response) => {
    setProducts(response.json)
  })
}

useEffect(() => {
  getProducts()
}, [])

const [value,setValue] = useState('')

const filteredProducts = products.filter(product => {
  return product.name.toLowerCase().includes(value.toLocaleLowerCase())
})

return (
  <form>
  <Searchh>
    <Input  
      type="text" 
      placeholder="Поиск..." 
      id="searchInput" 
      className="search__img" 
      onChange={(event) => setValue(event.target.value)}/>
      <Dddiv>
        {
          filteredProducts.map((product,index) => {
            return(
              <CuntryItem product={product} key={index} />
            )
          })
        }
      </Dddiv>
    <Button type="submit">
      <Magnifier />
    </Button>
  </Searchh>
</form>
)