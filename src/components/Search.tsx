import React, { Component } from 'react';
import { Sinput } from '../styles';

interface SearchProps {
  onChange: (text: string) => void;
}

interface SearchState {
  text: string;
}

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);

    this.state = {
      text: ''
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;

    this.setState({ text });
    this.props.onChange(text);
  };

  render() {
    return (
      <Sinput
        type="text"
        value={this.state.text}
        onChange={this.handleChange}
        placeholder="Quick search..."
      />
    );
  }
}

export default Search;