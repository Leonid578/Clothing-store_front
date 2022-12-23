import { get } from "immer/dist/internal"
import { useState } from "react"
import { useEffect } from "react"
import {
  Button,
  Input,
  Searchh,
  Dddiv,
} from "../Header/Header.styled";
import { ReactComponent as Magnifier } from "../../images/svg/magnifier.svg";
import products from "../Products/ItemProducts.json";

const [countries, setCountries] = useState([])
const getCountries = () => {
  get('products.title')
  .then ((response) => {
    setCountries(response.json)
  })
}

useEffect(() => {
  getCountries()
}, [])

// const [value,setValue] = useState('')

// const filteredCountries = countries.filter(country => {
//   return country.name.toLowerCase().includes(value.toLocaleLowerCase())
// })

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
          products.map((country,index) => {
            return(
              <CuntryItem country={country} key={index} />
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