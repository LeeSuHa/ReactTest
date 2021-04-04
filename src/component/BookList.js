import React, {Component} from  'react';

import {List, ListItem, Container} from '@material-ui/core';
import BookListItem from './BookListItem';

class BookList extends Component{
    render(){
        const {books33} = this.props;

        const bookItems = books33.map( book55 => {
            return (                
                    <BookListItem 
                        book={book55} 
                        key={book55.ISBN} 
                        onClickDetail={this.props.onClickDetail} />
                
            )
        });

        return(
            <Container maxWidth='sm'>
                <List>
                    {bookItems}               
                </List>

            </Container>
        )
    }
}

export default BookList;