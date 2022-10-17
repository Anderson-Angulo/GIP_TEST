import { Person } from "@/models"
import { removeFavorite } from "@/redux/states/favorites"
import { AppStore } from "@/redux/store"
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton } from "@mui/material"
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid"
import React from "react"
import { useDispatch, useSelector } from "react-redux"

export interface PeopleTableInterface{
  
}

const FavoriteTable:React.FC<PeopleTableInterface>=()=>{
  const dispatcher=useDispatch()
  const stateFavorites=useSelector((store:AppStore)=>store.favorites)
  const pageSize=5;

  

  const handleClick=(person:Person)=>{
    dispatcher(removeFavorite(person))
  }

  
  const columns=[
    {
      field:"actions",
      type:'actions',
      sortable:"false",
      headerName:"",
      width:50,
      renderCell:(params:GridRenderCellParams)=>(
        <>
          <IconButton onClick={()=>handleClick(params.row)}>
            <DeleteIcon />
          </IconButton>
        </>
      )
    },
    {
      field:"name",
      headerName:"Name",
      flex:1,
      minWidth:150,
      renderCell:(params:GridRenderCellParams)=><>{params.value}</>
    },
    {
      field:"category",
      headerName:"Category",
      flex:1,
      minWidth:150,
      renderCell:(params:GridRenderCellParams)=><>{params.value}</>
    },
    {
      field:"company",
      headerName:"Company",
      flex:1,
      minWidth:150,
      renderCell:(params:GridRenderCellParams)=><>{params.value}</>
    },
  ]
  return (
     <DataGrid 
        disableColumnSelector
        disableSelectionOnClick
        autoHeight
        pageSize={pageSize}
        rowsPerPageOptions={[pageSize]}
        rows={stateFavorites}
        columns= {columns}
        getRowId={(row:any)=>row.id}
        /> 
  )
}

export default FavoriteTable