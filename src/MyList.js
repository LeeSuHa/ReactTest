import React from 'react';


class MyList extends React.Component{
    
    render(){
        let dataSample =[
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
          ];
        let numbers = [1, 2, 3, 4, 5];
        let result = numbers.map((num) => num *2);
        let sProp1 = this.props;
        let strTest = dataSample.map((str) => (<a href='#'>{str}</a>));
        return( 
            <div>{typeof sProp1.test}//{sProp1.test} === {strTest}<span>{dataSample}</span></div>
        );
    }
}


 
export default MyList;