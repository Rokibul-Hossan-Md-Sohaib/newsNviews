import axios from "axios";

import React, { useState, useEffect, createContext } from 'react'
import { getNewsAPI } from "./api";

export const NewsContext = createContext();

const Context = ({ children }) => {
    const [news, setNews] = useState([])
    const [category, setCategory] = useState('general')
    const [index, setIndex] = useState(1)

    const fetchNews = async () => {
        const { data } = await axios.get(getNewsAPI(category))
        console.log(data)
        setNews(data)
        setIndex(1)
    }

    useEffect(() => {
        fetchNews
    }, [category]);
    return (<NewsContext.Provider value={{ news, index, setIndex, fetchNews }}>
        {children}
    </NewsContext.Provider>)
}

export default Context