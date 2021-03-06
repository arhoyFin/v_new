import React from 'react';
import _ from 'lodash';

const Pagination = ({pageSize,items,onPageChange,currentPage}) => {
    const numberOfPages = Math.ceil(items/pageSize);
    if(numberOfPages <2){
        return null;
    }
    const pageArr = _.range(1,numberOfPages + 1);
    console.log(currentPage);
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pageArr.map(page=>(
                  <li
                     key ={page} 
                     className= {page===currentPage? "page-item active" : "page-item" }
                     onClick = {()=>{onPageChange(page)} }
                   >   
                            <a 
                               className= "page-link"  
                               href="#">{page}
                             </a>
                  </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;