import React, { Component } from 'react';
import styled from 'styled-components';

interface SearchProps {
  onChange: (text: string) => void;
}

interface SearchState {
  text: string;
}

const Sinput = styled.input`
  margin-left: auto;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #f1f5f9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  outline: none;
  transition: box-shadow 0.2s, background-color 0.2s;
`;

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