import {useState } from 'react';
import Pagination from "react-js-pagination";
import User from './User';

const UsersList = ({ users }) => {
    const items = users;
    const itemsPerPage = 2;
    const [activePage, setCurrentPage] = useState(1);

    const indexOfLastItem  = activePage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice( indexOfFirstItem, indexOfLastItem );

    const renderItems = currentItems.map( ( item, index ) => {
        return <User key={index} data={item} />
    });

    const handlePageChange = ( pageNumber ) => {
        console.log( `active page is ${ pageNumber }` );
        setCurrentPage( pageNumber );
    };

    return (
        <>
            {renderItems}

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
