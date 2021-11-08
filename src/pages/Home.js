import React, { useState } from 'react';
import MainHeader from '../components/MainHeader';
import { duplicateArray, numbers } from '../data/MainData';
import TemporaryDrawer from './Drawer';

const Home = (props) => {

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
        <div className='homeContainer'>
        <div className='homeHeader'>
        <MainHeader setIsAuth={props.setIsAuth}/>
        </div>
        <TemporaryDrawer />
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