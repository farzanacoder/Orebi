import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Carts from './Carts';
import Data from '../data.js'



function Items({ currentItems }) {
  return (
    <>
      <div className='flex flex-wrap gap-x-10 mt-[60px]'>
        {currentItems &&
          currentItems.map((item) => (
            <Carts price={item.price} img={item.img} />
          ))}
      </div>
    </>
  );
}

function Pagination({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = Data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(Data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className='mt-[50px] flex justify-between'>
        <ReactPaginate
          breakLabel=""
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
          containerClassName='flex'
          pageLinkClassName='duration-300 hover:bg-[#262626] hover:text-white bg-transparent text-[#262626] border border-[#F0F0F0] py-2 px-4 mr-4  cursor-pointer'
        />
        <p className='font-dm text-sm font-normal text-primary'>Products from {itemOffset+1} to {endOffset<Data.length?endOffset:Data.length} of {Data.length}</p>
      </div>
    </>
  );
}

export default Pagination