import React, { useEffect, useRef, useState } from "react";
import Table from "../components/DataTable/table";
import { columns, keys, numbers } from "../data/MainData";
import Header from "../components/DataTable/Header";
import axios from "axios";
import MainHeader from "../components/MainHeader";
import AddIcon from "@mui/icons-material/Add";

const DataTable = (props) => {
  const [arrayNumbers, setArrayNumbers] = useState(numbers);

  const clickMe = () => {
    arrayNumbers.splice(3, 0, "0");
    let x = JSON.parse(JSON.stringify(arrayNumbers));
    setArrayNumbers(x);
  };

  const [resData, setResData] = useState([]);
  const [showImage, setShowImage] = useState([]);

  const API = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    setResData(response.data);
  };

  const imagesTable = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
    setShowImage(res.data);
  };

  useEffect(() => {
    if (resData.length === 0) {
      API();
    }
  }, [resData]);

  useEffect(() => {
    if (showImage.length === 0) {
      imagesTable();
    }
  }, [showImage]);

  return (
    <>
      <div>
        <div className='tableMainContainer'>
          <div className='tableHeader'>
            <MainHeader setIsAuth={props.setIsAuth} />
          </div>

          <div>
            <Header />
          </div>
        </div>
        <div className='tableContainer'>
          <div className='tableContent'>
            <div className='infoContent'>Personal Info</div>
            <AddIcon className='addIcon'/>
          </div>
          <Table columns={columns} data={resData} keys={keys} />

          <button onClick={clickMe}>Click me</button>
          {arrayNumbers.map((nums, index) => (
            <div key={index}>{nums}</div>
          ))}
        </div>
      </div>

      <div></div>
    </>
  );
};

export default DataTable;
