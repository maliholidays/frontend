import React,{useState} from 'react'

function Search() {
    const[packages,setPackages] = useState([])
    let token = JSON.parse(localStorage.getItem("token"))
    const fetchApi = ()=>{
        fetch(process.env.REACT_APP_PACKAGEURL,{
            method:'GET',
            headers:{
                "content-type":"json-applycation",
                "auth-token":token
            }
        }).then(response => response.json()).then((data)=>{
            setPackages(data)
        })
    }
  return (
    <div>Search</div>
  )
}

export default Search