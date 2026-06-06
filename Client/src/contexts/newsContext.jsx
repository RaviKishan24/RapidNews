import { createContext, useState } from "react";
import axiosInstance from "../Config/axiosConfig";

export const newsContext = createContext();

export const NewsContextProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);


    const fetchNews = async (url) => {
        setLoading(true);
        try {
            const response = await axiosInstance.get(`/api/news?url=${encodeURIComponent(url)}`);
            const newsWithImg = response.data.articles.filter( item => item.urlToImage );
            return newsWithImg;
        } catch (error) {
            console.log(error);
            return [];
        } finally {
            setLoading(false);
        }
    };

    const value = {
        news,
        setNews,
        fetchNews,
        loading,
        page,
        setPage,
    };

    return (
        <newsContext.Provider value={value}>
            {children}
        </newsContext.Provider>
    )
}