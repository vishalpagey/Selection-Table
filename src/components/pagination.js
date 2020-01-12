
import React,{useState} from 'react';

const Pagination = ({ accountsPerPage, totalAccounts, paginate }) => {

  const [bucketSize,setBucketSize] = useState(4);
  const [pageBucket,setPageBucket] = useState([1,2,3,4]);

  const nextBucket = () =>{

  let pageBucketArray=pageBucket.map((value)=>{
      return  value + bucketSize;     
  })
    if(!pageBucketArray.find(element =>{
        if(element === Math.ceil(totalAccounts / accountsPerPage)){
           
        }
    })){
    setPageBucket(pageBucketArray);
    }  
  }
  const prevBucket = () =>{
    let pageBucketArray=pageBucket.map((value)=>{
        return value - bucketSize;
    })
    if(pageBucketArray[0]  >=1){
 
        setPageBucket(pageBucketArray);
      }    
  }
  return (
    <nav>
      <ul className='pagination'>
        <li className ='page-item' onClick={prevBucket}>
        <a onClick={() => prevBucket()} href='!#' className='page-link'>
             -
            </a>
        </li>
        {pageBucket.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
         <li className ='page-item' onClick={nextBucket}>
         <a onClick={()=>nextBucket()} href='!#' className='page-link'>
             +
            </a>
         </li>
      </ul>
    </nav>
  );
};

export default Pagination;
