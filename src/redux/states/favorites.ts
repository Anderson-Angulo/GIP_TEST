import { getLocalStorage, setLocalStorage } from "@/helpers";
import { LocalStorage, Person } from "@/models";
import { createSlice } from "@reduxjs/toolkit";


export const EmptyFavorites:Person[]=[]


const favoritesSlice=createSlice({
  name:"favorites",
  initialState:getLocalStorage(LocalStorage.FAVORITES) ? JSON.parse(getLocalStorage(LocalStorage.FAVORITES) as string) : EmptyFavorites,
  reducers:{
    addFavorite:(state,action)=>{
      setLocalStorage(LocalStorage.FAVORITES,action.payload)
      return action.payload
    },
    removeFavorite:(state,action)=>{
      const filteredState=state.filter((p:Person)=>p.id!==action.payload.id)
      setLocalStorage(LocalStorage.FAVORITES,filteredState)
      return filteredState
    }
  }
})


export default favoritesSlice

export const {addFavorite,removeFavorite} = favoritesSlice.actions