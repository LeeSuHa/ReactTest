import React, {Component} from  'react';
import { withStyles } from '@material-ui/core/styles';

import {Grid,Paper, Typography, ListItem} from '@material-ui/core';

const styles = {
    image : {
        width:80,
        height:100,
    },
    textArea : {
        width:360,
    }
}

class BookListItem extends Component{
    render(){
        const {book, classes} = this.props;
        return(
            <ListItem  onClick={()=> this.props.onClickDetail(book)}>
                
            <Paper>
                <Grid container spacing={2}>
                    <Grid item>
                        <img className={classes.image} src={book.imgUrl}/>
                    </Grid>
                    <Grid item className={classes.textArea}>
                        <Typography component='h5' variant='h5'>
                            {book.title}
                        </Typography>
                        <Typography gutterBottom>
                            {book.author}
                        </Typography>
                        <Typography color='textSecondary'>
                            {book.introduce}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
            </ListItem>
        )
    }
}

export default withStyles(styles)(BookListItem);