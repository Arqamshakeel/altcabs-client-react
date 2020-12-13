import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

export default class AutoCompleteMui extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    };
    this.onTagsChange = this.onTagsChange.bind(this);
  }

  onTagsChange = (event, values) => {
    this.setState({
      tags: values
    }, () => {
      // This will output an array of objects
      // given by Autocompelte options property.
      console.log(this.state.tags);
    });
  }

  render() {
    return (
      <div style={{ width: 500 }}>
        <Autocomplete
          multiple
          options={top100Films}
          getOptionLabel={option => option.title}
          defaultValue={[top100Films[13]]}
          onChange={this.onTagsChange}
          renderInput={params => (
            <TextField
              {...params}
              variant="standard"
              label="Multiple values"
              placeholder="Favorites"
              margin="normal"
              fullWidth
            />
          )}
        />
      </div>
    );
  }
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
];