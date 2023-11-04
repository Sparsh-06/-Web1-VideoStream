import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <Stack direction={'row'} alignItems={'center'} p={2} sx={{position:'sticky', background:'#0F0F0F', top:'0', justifyContent:'space-around'}}>
      <Link to={'/'} style={{display:'flex', alignItems:'center'}}><img src="/logob.png" alt="logo" height={45}/><p style={{color:'white', marginLeft:'5px'}}>#1</p></Link>
      <SearchBar/>
    </Stack>
  )
}

export default Navbar
