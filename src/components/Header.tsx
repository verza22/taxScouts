import React, { Component } from 'react';
import { Sheader } from '../styles';

import Search from './Search';
import { RootState } from '../redux/store';
import { fetchBooks } from '../redux/booksSlice';
import { Book } from '../types';
import { connect } from 'react-redux';
import BookList from './BookList';


interface HeaderProps {
  books: Book[];
  loading: boolean;
  error: string | null;
  fetchBooks: (query: string) => void;
}

interface HeaderState {
  text: string
}

class Header extends Component<HeaderProps, HeaderState> {
  private tmQuery: number;

  constructor(props: HeaderProps){
    super(props);

    this.state = {
      text: ''
    }
  }

  handleSearch = (text: string) => {
    this.setState({text});
    if(this.tmQuery){
      clearTimeout(this.tmQuery);
    }

    this.tmQuery = setTimeout(()=>{
      this.props.fetchBooks(text);
    }, 250);
  };

  render() {
    return (
      <Sheader>
        <Search onChange={this.handleSearch} />
        {
          this.state.text !== "" &&
          <BookList
            books={this.props.books}
            loading={this.props.loading}
          />
        }
      </Sheader>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  books: state.books.results,
  loading: state.books.loading,
  error: state.books.error
});

const mapDispatchToProps = {
  fetchBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);