import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import SearchIcon from '@mui/icons-material/Search';
import MyAutoComplete from '../components/AutoComplete';
import { searchName } from '../redux/actions/names';
import { useSelector, useDispatch } from 'react-redux';

const TemporaryDrawer = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

//   const emptyAutoComplete = {
//     id:'',
//     title: '',
// }

const allOptions = useSelector((state) => state.namesReducer)
    const dispatch = useDispatch();

  const [names, setNames] = React.useState({
    title: ''
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

//   const filterNames = (nameId) => {
//     return (
//         allOptions.listOfNames.filter((val) => val.nameId === nameId)
//     )       
// }

console.log(allOptions)

  const handleName = (event, selectedObject) => {
    // if(selectedObject.id !== country && country.id) setSt(emptyAutoComplete);
    // event.preventDefault();
    console.log(event.target, 'kf')
    setNames(event.target.value);
    // const filteredNames = filterNames(selectedObject)
    // dispatch(searchName(filteredNames))    
}

  const list = (anchor) => (
       <MyAutoComplete
            label='Names'
            changeDropDownValue={handleName}
            options={allOptions.listOfNames}
            value={names}
        />
  );

  return (
    <div>
      {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div  onClick={toggleDrawer(anchor, true)}>
          <SearchIcon/>
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            // onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default TemporaryDrawer;
