import React, { useState } from 'react';
import { duplicateArray, numbers } from '../Components/DataTable/MainData';

const Home = () => {

    // const duplicateArray = [1, 2, 3, 4, 1, 2, 3]

    const [duplicateValues, setDupliacteValues] = useState(duplicateArray)

    const removeDuplicate = () => {
       const dup = duplicateValues.filter((a, el) => {
            return ( duplicateValues.indexOf(a) === el)
          });

          setDupliacteValues(dup)
        // alert('kdj')
    }

    const [arrayNumbers, setArrayNumbers] = useState(numbers)

    const clickMe = () => {
        arrayNumbers.splice(3, 0, '0')
        let x = JSON.parse(JSON.stringify(arrayNumbers));
        setArrayNumbers(x)
    }

    return (
        <div style={{marginTop: '90px'}}>
        <div>
        Home
        </div>
        <button onClick={removeDuplicate}>Remove Duplicate</button>
        {duplicateValues.map((value, index) => {
            return (
                <span key={index}>{value}</span>
            )
        })}
        <br/>
        <button onClick={clickMe}>Add new value</button>
                {arrayNumbers.map((nums, index) => (
                    <span key={index}>{nums}</span>
                ))}
        </div>
    )
}

export default Home;