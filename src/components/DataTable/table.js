import { Button } from "@mui/material";
import React, {useState } from "react";

import KeyboardEventHandler from 'react-keyboard-event-handler';

const TableOne = "TableOne";

const Table = (props) => {

  const [tableCells, setTableCells] = useState(null);
  // const [value, setValue] = useState({
  //   title: ''
  // });

  const handleChange = e => {
    // setValue(e.target.value);
    setTableCells({...tableCells, value: e.target.value})
    console.log(e.target.value, ']]]]]')

  };


  const getTableCell = (tableName, rowIndex, colIndex) => {
    return `${tableName}_${rowIndex}_${colIndex}`
  }

  const handelSelect = (cellId) => {
    var someElement = document.getElementById(cellId);
    someElement.className += "selected"
  }

  const handelRemove = (e) => {
    var elems = document.querySelectorAll(".selected");
    [].forEach.call(elems, function (el) {
      el.classList.remove("selected");
    });
  }

  const handleCells = (rowIndex, colIndex) => {
    // debugger
    const cellId = getTableCell(TableOne, rowIndex, colIndex);
    handelRemove();
    handelSelect(cellId);
    if(tableCells && !tableCells.editMode) {
     
      // handleChange(cellId)
      setTableCells({
        id: "id",
        selectedIndex: cellId,
        rowIndex,
        colIndex,
        type: "text",
        name: "age", //dynamic to be 
        value: "test",
        editMode: false
      }) 
    }
    
  }

  const keyMove = (e, e2, index) => {
    if(tableCells) {
      const { rowIndex, colIndex } = tableCells;
      switch (e2.keyCode) {
        /// right arrow
        case 39:
          // debugger
          let newIndex = colIndex + 1;
  
          if (newIndex === 3 && rowIndex === 99) {
  
            return;
          } else if (newIndex > 2) {
            let nextRow = rowIndex + 1;
            handleCells(nextRow, 0)
  
          }
          else {
            handleCells(rowIndex, newIndex);
          }
  
          break;
        /// left arrow
        case 37:
          // debugger
          let leftIndex = colIndex - 1;
          if (colIndex === 0 && rowIndex === 0) {
            return;
          } else if (leftIndex < 0) {
            let prevRow = rowIndex - 1
            handleCells(prevRow, 2)
          } else {
            handleCells(rowIndex, leftIndex);
  
          }
          break;
          //up arrow
        case 38:
          let upIndex = rowIndex - 1;
          if (upIndex < 0) {
            return;
          } else {
            handleCells(upIndex, colIndex);
  
          }
          break;
          //down arrow
        case 40:
          let downIndex = rowIndex + 1;
          if (downIndex > 99) {
            return;
          } else {
            handleCells(downIndex, colIndex);
  
          }
          break;
          //enter
          case 13:
            alert('djchj')
            setTableCells({...tableCells, editMode: !tableCells.editMode})
            return;
        default:
          return;
      }
    }
    
  }

  // console.log(props.data, '====data')
  //           console.log(props.keys, '====keys')
            console.log(tableCells, 'hdhtableCells')

  return (

    <div>

      <KeyboardEventHandler handleKeys={['all']} onKeyEvent={keyMove} />

      <table className="table">
        <thead>
          <tr>
            {props && props.columns && props.columns.map((ele, index) => {
              return (

                <th key={index} >{ele}</th>

              )
            })}
          </tr>
        </thead>

        <tbody>
          {props && props.data && props.data.map((ele, rowIndex) => {
            

            return (
              <tr key={rowIndex}>
                {props && props.keys && props.keys.map((val, colIndex) => {
                  const cellId = getTableCell(TableOne, rowIndex, colIndex);

                  return (
                    <td id={cellId} onClick={() => handleCells(rowIndex, colIndex)} key={colIndex}>
                      {val === 'thumbnailUrl' ? <img src={ele[val]} alt="random" /> : 
                      val === 'action' ? <div>
                      <Button onClick={() => props.handeledit(ele, rowIndex)}>Edit</Button>
                      <Button onClick={() => props.deletevalue(ele, rowIndex)}>Delete</Button>

                      </div> : tableCells && tableCells.selectedIndex === cellId && tableCells.editMode ? <input type="text"  onChange={handleChange} value={ele[val]} /> : `${ele[val]}` }
                    </td>
                  )
                })}
              </tr>
            )
          })}

        </tbody>

      </table>

    </div>

  )
}

export default Table;