import React from 'react';
import {
  TooltipContainer,
  ListContainer,
  BookItem,
  CoverImage,
  BookInfo,
  Title,
  Author,
  Year,
  SkeletonItem,
  SkeletonImage,
  SkeletonText,
  SkeletonLine
} from './../styles';

interface Book {
  title: string;
  author: string;
  coverId?: number;
  year?: number;
}

interface Props {
  books: Book[];
  loading: boolean;
}

export default class BookList extends React.Component<Props> {
  handleClick = (title: string, author: string) => {
    const query = encodeURIComponent(`${title} ${author}`);
    const url = `https://www.amazon.es/s?k=${query}`;
    window.open(url, '_blank');
  };

  renderSkeleton() {
    return Array.from({ length: 5 }).map((_, index) => (
      <SkeletonItem key={index}>
        <SkeletonImage />
        <SkeletonText>
          <SkeletonLine width="80%" />
          <SkeletonLine width="60%" />
          <SkeletonLine width="40%" />
        </SkeletonText>
      </SkeletonItem>
    ));
  }

  render() {
    const { books, loading } = this.props;

    return (
      <TooltipContainer>
        <ListContainer>
          {loading ? (
            this.renderSkeleton()
          ) : (
            books.map((book, index) => (
              <BookItem
                key={index}
                onClick={() => this.handleClick(book.title, book.author)}
              >
                {book.coverId && (
                  <CoverImage
                    src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
                    alt={book.title}
                  />
                )}
                <BookInfo>
                  <Title>{book.title}</Title>
                  <Author>Autor: {book.author}</Author>
                  <Year>Año: {book.year}</Year>
                </BookInfo>
              </BookItem>
            ))
          )}
        </ListContainer>
      </TooltipContainer>
    );
  }
}