import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import { FavoriteTable } from "."
import CustomDialog, { dialogOpenSubject$ } from "../CustomDialog/CustomDialog"
import FavoriteIcon from '@mui/icons-material/Favorite';

export interface NavbarInterface{

}



const Navbar:React.FC<NavbarInterface>=()=>{

  const handleClick=()=>{
    dialogOpenSubject$.setSubject=true
  }

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
     <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <IconButton color="secondary" aria-label="favorites" onClick={handleClick} >
            <FavoriteIcon />
        </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar