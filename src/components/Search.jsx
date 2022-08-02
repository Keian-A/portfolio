import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import projectData from '../data/projectData.js';
import PaginatedItems from './PaginatedItems.jsx';

function Search() {

    const [data, setData] = useState(projectData);
    const [Query, setQuery] = React.useState('');

    const setQuerySearch = (queryStr) => {
        let result = projectData.map(project => {
            return project.techUsed.includes(queryStr) ? project : null;
        });
        setData(result);
    }

    const handleChange = (e) => {
        setQuery(e.target.value);
        setQuerySearch(Query);
    };

    const QueriedItem = [
        {
            value: '',
            label: 'No query',
        },
        {
            value: 'javascript',
            label: 'JavaScript',
        },
        {
            value: 'nodejs',
            label: 'Node.js',
        },
        {
            value: 'react',
            label: 'React',
        },
    ];

    return (
        <>
            <h4>Query projects</h4>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={Query}
                        onChange={handleChange}
                        helperText="Select a query to narrow search"
                    >
                        {QueriedItem.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </Box>
            <PaginatedItems itemsPerPage={3} itemList={data} />
        </>
    );
}

export default Search;
