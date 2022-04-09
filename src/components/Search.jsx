import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function Search(props) {

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

    const [Query, setQuery] = React.useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
        props.setQuerySearch(event.target.value);
    };

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
        </>
    );
}

export default Search;
