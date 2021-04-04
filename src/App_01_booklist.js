import React, { Component } from 'react';
import BookList from './component/BookList';
import Books from './static_data/Books';

import {Container, Grid} from '@material-ui/core';
import SearchBar from './component/SearchBar';
import BookDetail from './component/BookDetail';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      books : Books,
      selectedBook : Books[2],
    }
  }

  onSearchTitle(title){
    let updateList = Books ;
    updateList = updateList.filter( book => {
      return book.title.toLowerCase().search(title.toLowerCase()) !== -1 ;
    });

    this.setState({
      books : updateList,
    })
  }

  onClickDetail(book){    
    this.setState({
      selectedBook : book,
    })
  }

  render(){    
    return (
      <Container>
        <SearchBar onSearchTitle={this.onSearchTitle.bind(this)} />
        <Grid container spacing={2}>
          <Grid item>
            <BookList onClickDetail={this.onClickDetail.bind(this)} books33={this.state.books} />
          </Grid>
          <Grid item>
            <BookDetail book={this.state.selectedBook} />
          </Grid>        
        </Grid>
      </Container>
  );
  }
}

export default App;
