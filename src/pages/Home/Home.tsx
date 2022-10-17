import { People } from '@/data/people';
import { addPeople } from '@/redux/states/people';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PeopleTable } from '.';

export interface HomeInterface{}



const Home:React.FC<HomeInterface>=()=>{

  const dispatcher=useDispatch()

  useEffect(()=>{
    dispatcher(addPeople(People))
  },[])

  return (
     <PeopleTable /> 
  )
}
export default Home;

