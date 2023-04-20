import React,{useEffect,useState} from 'react'

import axios from 'axios'

//create a function
function App(){
  let[data,setdata]=useState([])
  useEffect(()=>{
    // let link = 'https://newsapi.org/v2/everything?q=tesla&from=2023-03-19&sortBy=publishedAt&apiKey=1daf07f41981406f803e0b1440eb40cd'
    // axios(link).then((result)=>{
      
    let res = axios('https://newsapi.org/v2/everything?q=tesla&from=2023-03-19&sortBy=publishedAt&apiKey=1daf07f41981406f803e0b1440eb40cd')
      
      res.then((result) =>{
      // console.log(result.data.articles);
      setdata(result.data.articles)
  })
    })
  return (
    <>
    <h2>App component</h2>
    {data?<div>
      {
        data.map((item)=>{
          return(
            <div>
              <h2>{item.title}</h2>
              <img src={item.urlToImage} height="400px" width="60%" alt="...."/>
              <h2>{item.author}</h2>

            </div>
          )
          })
      }
    </div>:<p>No data</p>}
    </>
  )
}

export default App