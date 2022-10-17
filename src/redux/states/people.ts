import { getLocalStorage, setLocalStorage } from "@/helpers";
import { LocalStorage, Person } from "@/models";
import { createSlice } from "@reduxjs/toolkit";


export const EmptyPeople:Person[]=[]





const peopleSlice=createSlice({
  name:"people",
  initialState:getLocalStorage(LocalStorage.PEOPLE) ? JSON.parse(getLocalStorage(LocalStorage.PEOPLE) as string) : EmptyPeople,
  reducers:{
    addPeople:(state,action)=>{
      setLocalStorage(LocalStorage.PEOPLE,action.payload)
      return action.payload 
    },
  }
})


export default peopleSlice

export const {addPeople} = peopleSlice.actions