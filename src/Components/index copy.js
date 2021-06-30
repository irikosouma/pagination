import React, { useEffect, useState } from 'react'
//styled 
import {Wrap} from './index.styles'
//components
import Person from './Person'
import Pagination from './Pagination'
export default function MainPage() {
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [list, setList] = useState([]);
    const [numberPerPage] = useState(10)
    
    useEffect(() => {
        fetch('https://api.github.com/users/john-smilga/followers?per_page=100')
        .then(response => response.json())
        .then(json => {
            setList(json)
        })
        .catch( err => console.log('Error ', err))
    }, [])
    //find index
    const lastIndexPage = currentPage * numberPerPage
    const firstIndexPage = lastIndexPage - numberPerPage;
    const newPage = list.slice(firstIndexPage, lastIndexPage);
    //change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    return (
        <Wrap>
            <div className="wrap-title">
                <h1 className="title">
                    Pagination
                </h1>
                <div className="border-line"></div>
            </div>
            <div className="bound">
                <div className="wrap-item">
                    <div className="bound-page">
                        {newPage.map((item, index) => (
                            <div key={index}>
                                <Person data={item} loading={loading}/>
                            </div>
                        ))}
                    </div>
                    <Pagination totalPosts={list.length} postPerPage={numberPerPage} paginate={paginate}/>
                </div>
            </div>
        </Wrap>
    )
}
