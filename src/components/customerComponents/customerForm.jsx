import React from 'react';
import Form from '../common/form';
import Joi from "joi-browser";
class CustomerForm extends Form {
    state = { 
        id : "",
        name: "",
        phone: "",
        isGold: "",
     }

    schema ={
        id: Joi.number().required(),
        name: Joi.string().required().label("Name"),
        phone: Joi.string().trim().regex(/^[0-9]{7,10}$/).required().label("Phone")
    }
    render() { 
        return (  

        );
    }
}
 
export default CustomerForm;