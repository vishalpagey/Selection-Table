import React, { useState } from 'react';
import './table.css'

const Table = props => {
    const { currentAccounts,handleCheck,handleSelectAll,selectAllFlag,selectionCount,totalCount} = props;
   

    return (

        <div className="grid-container">
            <div className="selection-count">
               <span>{selectionCount}/{totalCount} accounts selected</span> 
            </div>
            <div className="header">
                <div>
                    <span>
                        <label className="container">
                            <input type="checkbox" onChange={()=>handleSelectAll()} checked = {selectAllFlag}></input>
                            <span className="checkmark"></span>
                        </label>
                    </span>
                </div>
                <div><span><strong>Id</strong></span></div>
                <div><span><strong>Name</strong></span></div>
                <div><span><strong>Email</strong></span></div>
            </div>
            <div className="grey" >
                {currentAccounts.map((value, index) => {
                    console.log(value.isSelected)
                    return (
                        <div className="tabledata">
                            <div>
                                <span>
                                    <label className="container">
                                        <input type="checkbox" onChange={()=>handleCheck(index)} checked={value.isSelected}></input>
                                        <span className="checkmark"></span>
                                    </label>
                                </span></div>
                            <div><span>{value.id}</span></div>
                            <div><span>{value.name}</span></div>
                            <div><span>{value.email}</span></div>
                        </div>
                    )
                })}
            </div>




        </div>

    )
}
export default Table;