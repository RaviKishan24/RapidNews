import React, { useContext, useEffect, useState } from 'react';
import Wrapper from './Wrapper';
import { newsContext } from '../contexts/newsContext';
import Loader from './Loader';

function News({ className = "" }) {
    const { news, setNews, fetchNews, loading, page, setPage} = useContext(newsContext);

    useEffect(() => {
        (async () => {
            const data = await fetchNews(`/everything?q=india`);
            if (data) {
                setNews(data);
            }
        })();
    }, []);
    const newsPerPage = 15;

    const startIndex = (page - 1) * newsPerPage;
    const endIndex = startIndex + newsPerPage;
    const currentNews = news.slice(startIndex, endIndex);
    const totalPages = Math.ceil(news.length / 15);

    if (loading) return <Loader />
    return (
        <div className="py-6">
            <Wrapper>
                <div className={`${className} grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`}  >
                    {currentNews.map((item, index) => (
                        <NewsCard
                            key={item.url || index}
                            news={item}
                        />
                    ))}
                </div>
                <div className="join mt-10 flex flex-center justify-center ">
                    <button className="join-item btn" disabled={page === 1} onClick={() => setPage(page - 1)}>«</button>
                    <button className="join-item btn">Page {page}</button>
                    <button className="join-item btn" disabled={page === totalPages} onClick={() => { setPage(page + 1); window.scrollTo({ top: 0, behavior: "smooth" }) }}>»</button>
                </div>
            </Wrapper>
        </div>
    );
}

const NewsCard = ({ news}) => {
    return (
        <div className="card bg-base-100 shadow-xl w-full">
            <figure>
                <img
                    src={news.urlToImage}
                    alt={news.title}
                    className="h-46 w-full object-cover"
                />
            </figure>

            <div className="card-body">
                <h2 className="card-title line-clamp-2">
                    {news.title}
                </h2>

                <p className='line-clamp-3'>
                    {news.description}
                </p>

                <div className="card-actions justify-end">
                    <button
                        className="btn btn-primary mt-3"
                        onClick={() => window.open(news.url, "_blank")}
                    >
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default News;