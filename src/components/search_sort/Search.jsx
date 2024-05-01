import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const Search = ({setSearchval , filteredData,setData}) => {


    return (
        <div className="row">
            <div className="col-lg-4">
                <TextField id="outlined-basic" label="Search" variant="outlined" onKeyUp={(e) => {
                    setSearchval(e.target.value)
                }} />

            </div>
            <div className="col-lg-4">
            <button className='btn btn-primary' onClick={()=>{
        setData([...filteredData.sort((x,y)=>x.name.localeCompare(y.name))]);
    }}>Sort by Name</button>

            </div>
        </div>
    )
}

export default Search