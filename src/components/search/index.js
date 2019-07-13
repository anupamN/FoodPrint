import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.css';

const Search = () => {
  return (
    <section className="Search-wrapper">
      <TextField
        onChange={() => {}}
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary">
        Search
      </Button>
    </section>
  );
}

export default Search;