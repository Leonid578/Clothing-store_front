import{
    Button,
    Input,
    Search,
} from "../Header/Header.styled"
import { ReactComponent as Magnifier } from "../../images/svg/magnifier.svg";

document.querySelector('#searchInput').oninput = function() {
    let val = this.ariaValueMax.trim();
    let items = document.querySelectorAll('.card');
    if (val != '') {
        items.forEach(function(elem) {
            if(elem.innerText.search(val) == -1 ) {
                elem.classList.add('//style hide');
            }
            else{
                elem.classList.remove('//style hide')
            }
        });
    }
}

const Search = () => {
<form>
    <Search>
        <Input type="text" placeholder="Поиск..." id="searchInput" />
        <Button type="submit">
        <Magnifier />
        </Button>
    </Search>
</form>  
}
