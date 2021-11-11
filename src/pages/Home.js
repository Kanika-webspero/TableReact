import { TextField } from '@mui/material';
import React, { useMemo, useState } from 'react';
import Model from '../components/3DModel';
import MainHeader from '../components/MainHeader';
import { duplicateArray, numbers } from '../data/MainData';
import TemporaryDrawer from './Drawer';

const Home = (props) => {

    const [duplicateValues, setDupliacteValues] = useState(duplicateArray);
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);
    const [sameItem, setSameItem] = useState(0)
    const [additionNum, setAdditionNum] = useState(0)
    const [updateAdditionNum, setUpdateAdditionNum] = useState(0)
    const [multipleInput, setMultipleInput] = useState(false)

    const inputBox = () => {
        setMultipleInput(true)
    }


    const multiCountMemo = useMemo(function multiCount() {
        console.log('multicount')
        return count * 5;
    }, [count])

    const removeDuplicate = () => {
        const dup = duplicateValues.filter((a, el) => {
            return (duplicateValues.indexOf(a) === el)
        });

        setDupliacteValues(dup)

    }

    const [arrayNumbers, setArrayNumbers] = useState(numbers)

    const clickMe = () => {
        arrayNumbers.splice(3, 0, '0')
        let x = JSON.parse(JSON.stringify(arrayNumbers));
        setArrayNumbers(x)
    }

    // const clickToAdd = () => {
    // }



    const addition = () => {
        console.log('addition')
        setAdditionNum(additionNum + 1)
    }

    const updateAddition = () => {
        console.log('update addition')
        setUpdateAdditionNum(additionNum);
    }

    return (
        // <div className='homeContainer'>
        // <div className='homeHeader'>
        // <MainHeader setIsAuth={props.setIsAuth}/>
        // </div>
        // <TemporaryDrawer />
        // <div>
        // Home
        // </div>
        // <button onClick={removeDuplicate}>Remove Duplicate</button>
        // {duplicateValues.map((value, index) => {
        //     return (
        //         <span key={index}>{value}</span>
        //     )
        // })}
        // <br/>
        // <button onClick={clickMe}>Add new value</button>
        //         {arrayNumbers.map((nums, index) => (
        //             <span key={index}>{nums}</span>
        //         ))}
        // </div>


        <div className='homeContainer'>
            <div className='homeHeader'>
                <MainHeader setIsAuth={props.setIsAuth} />
                <div>
                    <div>Count: {count}</div>
                    <div>Item: {item}</div>
                    <div>SameItem: {sameItem}</div>
                    <div>{multiCountMemo}</div>
                    <button onClick={() => setCount(count + 1)}>Update count</button>
                    <button onClick={() => setItem(item + 1)}>Update item</button>
                    <button onClick={() => setSameItem(item)}>Update same item</button>

                </div>
                <div>
                    <div>{additionNum}</div>
                    <div>{updateAdditionNum}</div>
                    <button onClick={addition}>Addition</button>
                    <button onClick={updateAddition}>Update Addition</button>

                </div>
                <TextField InputProps={{ disableUnderline: true }} id="standard-basic" label="Standard" variant="standard" />
                <div>

                    {multipleInput ? <div>
                        <input />
                        <input />

                    </div> : <input onClick={inputBox} placeholder='name' />}

                </div>
            </div>
            <Model />
        </div>
    )
}

export default Home;