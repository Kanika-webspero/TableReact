import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyAutoComplete from "../components/AutoComplete";
import MainHeader from '../components/MainHeader';
import { searchCity, searchState } from '../redux/actions/options'

const emptyAutoComplete = {
    id: '',
    title: ''
}

const About = (props) => {

    const allOptions = useSelector((state) => state.options)
    const dispatch = useDispatch();

    // States
    const [country, setCountry] = useState(emptyAutoComplete);
    const [st, setSt] = useState(emptyAutoComplete);
    const [city, setCity] = useState(emptyAutoComplete);

    const filterStates = (countryId) => {
        return (
            allOptions.listOfStates.filter((val) => val.countryId === countryId)
        )       
    }

    const filterCities = (citiesId) => {
        return (
            allOptions.listOfCities.filter((val) => val.citiesId === citiesId)
        )       
    }

    const handleCountry = (event, selectedObject) => {
        if(selectedObject.id !== country && country.id) setSt(emptyAutoComplete);
        setCountry(selectedObject);
        const filteredStates = filterStates(selectedObject.id)
        dispatch(searchState(filteredStates))    
    }

    const handleState = (event, selectedObject) => {
        if(selectedObject.id === city && city.id) return;
        setSt(selectedObject);
        const filteredCities = filterCities(selectedObject.id)
        dispatch(searchCity(filteredCities))
    }

    const handleCity = (event, selectedObject) => {
        setCity(selectedObject)
    }

    return (
        <div style={{ marginTop: '90px' }}>
        <div style={{backgroundColor: 'lightgray', height: '80px',position:'fixed', top: '0px', width: '100%'}}>
        <MainHeader setIsAuth={props.setIsAuth}/>
        </div>
            <div>About</div>
                <MyAutoComplete
                    label='Countries'
                    changeDropDownValue={handleCountry}
                    options={allOptions.list}
                    value={country}
                />
                
                {country.id &&
                    <MyAutoComplete
                        label='States'
                        changeDropDownValue={handleState}
                        options={allOptions.requiredStates}
                        value={st}
                    />
                }

                {st.id && 
                    <MyAutoComplete
                        label='Cities'
                        changeDropDownValue={handleCity}
                        options={allOptions.requiredCities}
                        value={city}
                    />
                }
        </div>
    )
}

export default About;