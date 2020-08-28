import React, { Component } from 'react';

class RentalsTable extends Component {
    columns = [
        {label:"Movie", path:"movie",clicked:false},
        {label:"Customer", path:"customer",clicked:false},
        {label:"Date Out", path:"dateOut",clicked:false},
        {label:"Return Date", path:"dateReturn",clicked:false},
        {label:"Fee", path:"rentalFee",clicked:false}];
    
    
        render() { 
        return (  );
    }
}
 //movie, customer, dateout, datereturn, rentalfee
export default RentalsTable;