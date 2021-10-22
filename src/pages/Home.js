import React, { useState } from 'react';
import { duplicateArray, numbers } from '../components/DataTable/MainData';

const Home = () => {

    const [duplicateValues, setDupliacteValues] = useState(duplicateArray)

    const removeDuplicate = () => {
       const dup = duplicateValues.filter((a, el) => {
            return ( duplicateValues.indexOf(a) === el)
          });

          setDupliacteValues(dup)
        
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