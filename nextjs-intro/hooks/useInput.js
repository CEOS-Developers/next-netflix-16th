import {useState} from 'react';

export default function useInput (){
const [search,setSearchValue]= useState("");


const handleChange=(e)=>{
    setSearchValue(e.target.value);
}

const resetChat=()=>{
    setSearchValue('');

}

return {search, handleChange,resetChat}

};

