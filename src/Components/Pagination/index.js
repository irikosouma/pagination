import React, { useRef, useState , useEffect} from 'react'
import {Wrap} from './index.styles'
export default function Pagination({postPerPage, totalPosts, currentPage, setCurrentPage}) {
    // console.log('current', currentPage)
    const [pageNumber, setPageNumber] = useState([
        {num: 1, isActive: true }, 
        {num: 2, isActive: false },
        {num: 3, isActive: false },
        {num: 4, isActive: false },
        {num: 5, isActive: false },
        {num: 6, isActive: false },
        {num: 7, isActive: false },
        {num: 8, isActive: false }, 
        {num: 9, isActive: false },
        {num: 10, isActive: false }
    ]);
    const [idSelected, setIdSelected] = useState(1)
    const myInfoRef = useRef(null)
    const paginate = (pageIndex) => {
        setCurrentPage(pageIndex)
        setIdSelected(pageIndex)
        const newList = pageNumber.map((item, index) => {
            if(index === pageIndex -1) {
                // setIdSelected(pageIndex -1)
                return {
                    ...item, isActive: true
                }
                
            } else {
                // setIdSelected(index)
                return {
                    ...item, isActive: false
                }
            }
        })
        setPageNumber(newList)
    }
    const handleNext = (idSelect) => {

        let newVal = idSelect + 1
        if (newVal > pageNumber.length) {
            setIdSelected(1)
            paginate(1)
        }
        else if(newVal === 1 || idSelect === 0){
            setIdSelected(newVal + 1)
            paginate(newVal + 1) 
        } else if(1 < idSelect <= pageNumber.length) {
            setIdSelected(newVal)
            paginate(newVal)
        }
        
    }
    const handlePrev = (idSelect) => {

        let newVal = idSelect - 1
        if (newVal === 0 || newVal < 0 ) {
            setIdSelected(pageNumber.length)
            paginate(pageNumber.length)
        }
        else if(0 < newVal <= pageNumber.length ){
            setIdSelected(newVal)
            paginate(newVal) 
        }
        // } else if(newVal < 0 ) {
        //     setIdSelected(0)
        //     paginate(1)
        // }
        
    }
    
    return (
        <Wrap>
            <div className="pagination" id="page">
                <div className="btn-style" onClick={(e) => handlePrev(idSelected)}>Prev</div>
                {pageNumber.map((number, index) => (
                    index === idSelected ?
                    <div ref={myInfoRef} key={index} className="page-item" style={{backgroundColor: number.isActive === true ? "#063251" : "#8bcbf9", color: number.isActive === true ? "#fff" : "#063251"}} id={number.num} onClick={() => paginate(number.num)}>
                        <p className="page-link" >
                            {number.num} 
                        </p>
                    </div>
                    :
                    <>
                    <div key={index} className="page-item" style={{backgroundColor: number.isActive === true ? "#063251" : "#8bcbf9", color: number.isActive === true ? "#fff" : "#063251"}} id={number.num} onClick={() => paginate(number.num)}>
                        <p className="page-link" >
                            {number.num} 
                        </p>
                    </div>
                    </>
                    ))}
                <div className="btn-style" onClick={(e) => handleNext(idSelected)}>Next</div>
            </div>
        </Wrap>
    )
}
