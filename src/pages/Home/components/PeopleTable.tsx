import { Person } from "@/models"
import { addFavorite } from "@/redux/states/favorites"
import { AppStore } from "@/redux/store"
import { Checkbox } from "@mui/material"
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export interface PeopleTableInterface{
  
}

const PeopleTable:React.FC<PeopleTableInterface>=()=>{
  const [selectedPeople,setSelectedPeople]=useState<Person[]>([])
  const dispatcher=useDispatch()
  const statePeople=useSelector((store:AppStore)=>store.people)
  const stateFavorites=useSelector((store:AppStore)=>store.favorites)
  const pageSize=5;

  useEffect(()=>{
    setSelectedPeople(stateFavorites)
  },[stateFavorites])

  const findPerson=(person:Person)=>{
    return !!stateFavorites?.find(p=>p.id===person.id)
  }

  const filterPeople=(person:Person)=>{
    return stateFavorites?.filter(p=>p.id!==person.id)
  }

  const handlerChange=(person:Person)=>{
    const filteredPeople=findPerson(person) ? filterPeople(person) : [...selectedPeople,person]
    dispatcher(addFavorite(filteredPeople))
    setSelectedPeople(filteredPeople)
  }

  
  const columns=[
    {
      field:"actions",
      type:'actions',
      sortable:"false",
      headerName:"",
      width:50,
      renderCell:(params:GridRenderCellParams)=>(
        <>{<Checkbox size="small" checked={findPerson(params.row)} onChange={()=>handlerChange(params.row)} />}</>
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
    {
      field:"levelOfHappiness",
      headerName:"Level of happiness",
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
        rows={statePeople}
        columns= {columns}
        getRowId={(row:any)=>row.id}
        /> 
  )
}

export default PeopleTable