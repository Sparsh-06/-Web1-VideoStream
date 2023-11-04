import React from 'react'
import {Paper} from '@mui/material'
import {Search} from '@mui/icons-material'

const SearchBar = () => {
  return (
    <Paper 
    elevation={2}
    sx={{background:'#fff', display:'flex', alignItems:'center', border:'2px solid #353535', borderRadius:'6px', overflow:'hidden'}}
    >
      <Search sx={{px:'6px'}}/>
      <input type="text" placeholder='Search' style={{padding:'10px', width:'16vw', border:'none'}}/>
    </Paper> 
  )
}

export default SearchBar
