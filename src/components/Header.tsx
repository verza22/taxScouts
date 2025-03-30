import React, { Component } from 'react';
import styled from 'styled-components';

import Search from './Search';

const Sheader = styled.header`
  background-color: #e5e7eb;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

class Header extends Component {
  handleSearch = (text: string) => {
    console.log(text);
  };

  render() {
    return (
      <Sheader>
        <Search onChange={this.handleSearch} />
      </Sheader>
    );
  }
}

export default Header;