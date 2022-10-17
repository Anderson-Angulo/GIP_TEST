import { SubjectManager } from '@/models/subjectmanager';
import { Dialog } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Subscription } from 'rxjs';



export interface Props{
  children:React.ReactNode
}

export const dialogOpenSubject$=new SubjectManager<boolean>();
export const dialogCloseSubject$=new SubjectManager<boolean>();

const CustomDialog = ({children}:Props) => {
  const [open,setOpen]=useState(false)  
  let openSubject$=new Subscription()
  let closeSubject$=new Subscription()

  useEffect(()=>{
    openSubject$=dialogOpenSubject$.getSubject.subscribe(()=>handleClickOpen())
    closeSubject$=dialogCloseSubject$.getSubject.subscribe(()=>handleClose())
    return ()=>{
      openSubject$.unsubscribe()
      closeSubject$.unsubscribe()
    }
  },[])

  const handleClickOpen=()=>{
    setOpen(true)
  }

  const handleClose=()=>{
    setOpen(false)
  }

  const handleExit=()=>{
    dialogCloseSubject$.setSubject=false
  }
  return (
    <div>
      <Dialog 
        open={open}
        onClose={()=>handleExit()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        {children}  
      </Dialog>  
    </div>
  )
}

export default CustomDialog