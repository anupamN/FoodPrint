import React from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import './style.css';

const Search = ({
  onChange = () => undefined
}) => {
  return (
    <section className="Search-wrapper">
      <TextField
        onChange={onChange}
        margin="normal"
        variant="outlined"
      />
      <IconButton>
        <SearchIcon/>
      </IconButton>
    </section>
  );
}

export default Search;  