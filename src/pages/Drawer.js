import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import SearchIcon from '@mui/icons-material/Search';
import MyAutoComplete from '../components/AutoComplete';
import { useSelector } from 'react-redux';

const TemporaryDrawer = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

const allOptions = useSelector((state) => state.namesReducer)
    // const dispatch = useDispatch();

  const [names, setNames] = React.useState({
    title: ''
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleName = (event, selectedObject) => {
    setNames(event.target.value);
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
          <div className='searchIcon' onClick={toggleDrawer(anchor, true)}>
          <SearchIcon/>
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default TemporaryDrawer;
