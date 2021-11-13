import {useState } from 'react';
import Pagination from "react-js-pagination";
import User from './User';

const UsersList = ({ users }) => {
    const [searchValue, setSearchValue] = useState('');

    const items = users;
    const itemsPerPage = 2;
    const [activePage, setCurrentPage] = useState(1);

    const indexOfLastItem  = activePage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice( indexOfFirstItem, indexOfLastItem );

    const renderUsers = currentItems.filter( item => {
        if (!searchValue) return true;

        if(item.name.toLowerCase().includes(searchValue.toLowerCase())) {
            return true;
        }

        return false;
    }).map((item, index) => {
        return <User key={index} data={item} />
    });

    const handlePageChange = ( pageNumber ) => {
        console.log( `active page is ${ pageNumber }` );
        setCurrentPage( pageNumber );
    };

    return (
        <>
            <form className="search-form">
                <input
                    type="text" 
                    placeholder="Type a name to search..." 
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                />
            </form>

            {renderUsers}

            <div className="pagination-wrapper">
                <Pagination
                    activePage={ activePage }
                    itemsCountPerPage={ 3 }
                    totalItemsCount={ items.length }
                    pageRangeDisplayed={ 3 }
                    onChange={ handlePageChange }
                />
         </div>
        </>
    )
}

export default UsersList
