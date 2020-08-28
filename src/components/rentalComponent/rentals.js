import React,{Component} from "react";
import rentalsService from "./services/rentalsService";

class Rentals extends Component {
  state = { 
    rentals: []
   }

  async componentDidMount() {
    const {data: rentals} = await rentalsService.getAllRentals();
    this.setState({rentals})
  }

  render() { 
    return (  );
  }
}
 
export default Rentals;
