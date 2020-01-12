import React, {useState, useEffect } from 'react';
import './App.css';
import axios from'axios';
import Table from './components/table'
import Pagination from './components/pagination'


function App() {

  const [totalData,setTotalData]= useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [accountsPerPage] = useState(10);
  const [selectAllFlag,setSelectAllFlag] =useState(false);
  const [selectionCount,setSelectionCount] = useState(0);
  useEffect(()=>{
    const fetchData =()=>{
     axios.get("http://jsonplaceholder.typicode.com/comments").then((res)=>{

     res.data.forEach(element=> element.isSelected = false) 
      setTotalData(res.data);
  
    })}
    fetchData();
  
  },[])

  const handleCheck = index =>{
    let tempArr = [...totalData];
    index = ((currentPage-1)*10)+index;
 
     tempArr[index].isSelected = !tempArr[index].isSelected;
    
     setTotalData(tempArr);
}
const handleSelectAll = () =>{
  let tempArr = [...totalData];
  let indexRange = [((currentPage-1)*10),(((currentPage-1)*10)+accountsPerPage-1)]; 

  let tempFlag = setSelectAllFlag;
  tempFlag = !tempFlag;
  console.log(tempFlag);
  setSelectAllFlag(tempFlag);
  console.log(selectAllFlag)

  if(setSelectAllFlag===false){
  for(let i=indexRange[0];i<=indexRange[1];i++){

    tempArr[i].isSelected = true
  }

  setTotalData(tempArr);
}else if(setSelectAllFlag===true){

  for(let i=indexRange[0];i<=indexRange[1];i++){

    tempArr[i].isSelected = false
  }

  setTotalData(tempArr);
}
}

let tempCount =0;
for(let i = 0; i<totalData.length;i++)
{
  if(totalData[i].isSelected===true)
tempCount ++;
}
console.log(tempCount);
//setSelectionCount(tempCount);
  
//   setSelectAllFlag(function (){
//   for(let i = indexRange[0];i<=indexRange[1];i++){
//     if(totalData[i].isSelected!==true){
//       return false;
//       break;     
//     }else return true ;
//   }
// }())


  const indexOfLastAccount = currentPage * accountsPerPage;
  const indexOfFirstAccount = indexOfLastAccount - accountsPerPage;
  const currentAccounts = totalData.slice(indexOfFirstAccount, indexOfLastAccount)
  
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  return (
    <div className="App">
        <Table currentAccounts = {currentAccounts} handleCheck={handleCheck} handleSelectAll={handleSelectAll} selectAllFlag={selectAllFlag} selectionCount={tempCount} totalCount={totalData.length}/>
        <Pagination accountsPerPage={accountsPerPage} paginate={paginate} totalAccounts={totalData.length}/>
     </div>
  );
}
export default App;
