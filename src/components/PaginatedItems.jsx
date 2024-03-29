import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Items from './Items.jsx';
import '../css/PaginatedItems.css';
import '../css/Projects.css';

function PaginatedItems({ itemsPerPage, itemList }) {


    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        let items = itemList;
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, itemList]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        let items = itemList;
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items data={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageClassName="liItem"
            />
        </>
    );
}

export default PaginatedItems;
