import React, { useContext, useEffect, useState } from 'react'
import Wrapper from './Wrapper'
import { newsContext } from '../contexts/newsContext';

function Category({ className }) {
    const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
    const { setNews, fetchNews, setPage } = useContext(newsContext);



    const getCategory = async (category) => {
        console.log("catagroy comes after click :", category)
        const data = await fetchNews(`/everything?q=${category}`);
        setPage(1);
        console.log("catagrroy daata is :", data)
        setNews(data)
    }
    return (
        <div className='sticky top-16 z-100 bg-base-200 py-2'>
            <Wrapper extraCss={`px-6`}>
                <div className={`w-fit  m-auto flex  max-w-full  whitespace-nowrap overflow-x-auto scrollbar-hide ${className}`}>
                    {categories.map((item) => {
                        return <button key={item} className="btn btn-primary mx-auto my-auto" onClick={() => getCategory(item)}>{item}</button>

                    })
                    }
                </div>
            </Wrapper>
        </div>
    )
}

export default Category
