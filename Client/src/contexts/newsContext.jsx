import { createContext, useState } from "react";
import axiosInstance from "../Config/axiosConfig";

export const newsContext = createContext();

export const NewsContextProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);


    const fetchNews = async (url) => {

        setLoading(true); // after function call loading true ( loding is true untill data is not fetched or fails);
        try {
            const Resonse = await axiosInstance.get(`${url}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
            const newsWithImg = Resonse.data.articles.filter(item => item.urlToImage);
            return newsWithImg;
        } catch (error) {

            console.log(error);
            return [];
        } finally {
            setLoading(false); //finally runs whether the request succeeds or fails.
        }


    }
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