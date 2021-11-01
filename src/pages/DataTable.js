import React, { useEffect, useRef, useState } from "react";
import Table from '../components/DataTable/table'
import { columns, keys, numbers } from "../data/MainData";
import Header from "../components/DataTable/Header";
import axios from "axios";
import MainHeader from "../components/MainHeader";

const DataTable = () => {

    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // debugger
            if (currentScrollY > 0) {
             document.getElementById('header').style.height = '30px'
            }
            if (currentScrollY === 0) {
                document.getElementById('header').style.height = '100px'
            }

            prevScrollY.current = currentScrollY;
        }

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const [arrayNumbers, setArrayNumbers] = useState(numbers)

    const clickMe = () => {
        arrayNumbers.splice(3, 0, '0')
        let x = JSON.parse(JSON.stringify(arrayNumbers));
        setArrayNumbers(x)
    }

    const [resData, setResData] = useState([]);
    const [showImage, setShowImage] = useState([])

    const API = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        setResData(response.data)
    }

    const imagesTable = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
        setShowImage(res.data)
    }


    useEffect(() => {
        if (resData.length === 0) {
            API();

        }

    }, [resData])

    useEffect(() => {
        if (showImage.length === 0) {
            imagesTable();

        }

    }, [showImage])

    return (
        <div style={{marginTop:'80px'}}>
        <div style={{backgroundColor: 'lightgray', height: '80px',position:'fixed', top: '0px', width: '100%'}}>
        <MainHeader />
        </div>
        
            <div style={{ backgroundColor: 'red', height: '100px', width: '100%', fontSize: '50px', top: '0px' }} id='header'>
                <Header />
            </div>
            <div>
                <Table columns={columns} data={resData} keys={keys} />
                <br />

                <br />
                <button onClick={clickMe}>Click me</button>
                {arrayNumbers.map((nums, index) => (
                    <div key={index}>{nums}</div>
                ))}

            </div>
        </div>
    )
}

export default DataTable;