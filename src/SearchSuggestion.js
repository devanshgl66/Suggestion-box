import React, { useState } from 'react'
import data from './Data/data.json'
function dataRefine(){
    const result=data.map(d=>d.country);
    return result;
}

const SearchSuggestion = () => {
    const [Data, setData] = useState(dataRefine())
    const [value, setvalue] = useState(null)
    const [suggestions, setsuggestions] = useState([])
    function onChange(e){
        let newValue=e.target.value;
        setvalue(newValue)
        let validOption=Data.filter(d=>d.startsWith(newValue));
        setsuggestions(validOption)
    }
    function onKeyDown(e){
        let key=e.keyCode || e.charCode;
        if(key===39)    //on press of right arrow key add suggestion
            if(suggestions.length>0)
                setvalue(suggestions[0])
    }
    return (
        <div>
            <input type='text' value={value} onChange={onChange} 
            onKeyDown={onKeyDown}
            />
            <br/>
            <ul>
                {suggestions.map(s=><li key={s}>{s}</li>)}
            </ul>
            
        </div>
    )
}

export default SearchSuggestion
