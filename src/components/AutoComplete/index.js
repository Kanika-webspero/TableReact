import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

export default function MyAutoComplete(props) {
  return (
    <Autocomplete
      id="highlights-demo"
      sx={{ width: 300 }}
      options={props.options}
      onChange={props.changeDropDownValue}
      getOptionLabel={(option) => option.title}
      value={props.value}
      renderInput={(params) => (
        <TextField {...params} label={props.label} margin="normal" />
      )}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option.title, inputValue);
        const parts = parse(option.title, matches);

        return (
          <li {...props}>
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          </li>
        );
      }}
    />
  );
}
