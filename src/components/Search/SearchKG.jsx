// import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { toast } from 'react-toastify';
// import { IconContext } from 'react-icons';
// import { MdSearch } from 'react-icons/md';
import { Input,Button} from '../Header/Header.styled';
import { ReactComponent as Magnifier } from "../../images/svg/magnifier.svg";

const Searchbar = () => {
    document.querySelector('#cards__ul').oninput = function() {
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
};

// Searchbar.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// };

export default Searchbar;