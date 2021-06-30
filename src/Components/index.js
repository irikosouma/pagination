import React, { useEffect, useState } from 'react'
//styled 
import {Wrap} from './index.styles'
//components
import Person from './Person'
import Pagination from './Pagination'
export default function MainPage() {
    const [loading, setLoading] = useState(false)
    const [list, setList] = useState([]);
    const [selected, setSelected] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);
    //get current page
    const indexOfLastPage = currentPage * postPerPage
    const indexOfFirstPage = indexOfLastPage - postPerPage
    const newPost = selected.slice(indexOfFirstPage, indexOfLastPage)

    useEffect(() => {
        fetch('https://api.github.com/users/john-smilga/followers?per_page=100')
        .then(response => response.json())
        .then(json => {
            setSelected(json)
            setList(json)
            setLoading(false)
        })
        .catch(err => console.log('Request failed', err))
    }, [])
    
    
    // change page
    

    return (
        <Wrap>
            <div className="wrap-title">
                <h1 className="title">Pagination</h1>
                <div className="border-line"></div>
            </div>
            <div className="bound">
                <div className="wrap-item">
                    <div className="bound-page">
                        {newPost.map((item, index) => (
                            <div key={index}>
                                <Person data={item} loading={loading} />
                            </div>
                        ))}
                    </div>
                <Pagination postPerPage={postPerPage} totalPosts={list.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>
            </div>
        </Wrap>
    )
}
