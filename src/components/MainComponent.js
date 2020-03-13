import React from 'react';
import { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import  Header  from './HeaderComponent';
import  Footer  from './FooterComponent';
import Home from './HomeComponent';
import {Switch ,Route,Redirect} from 'react-router-dom'; 

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }
  onDishSelect(dish) {
    this.setState({ selectedDish: dish});
  }

  render(){

    const HomePage = () => (<Home />)

    return(
     

      <div className="App">
         <Header />
         <Switch>
            <Route path ='/home' component={HomePage}/>
            <Route exact path='/menu' component = {()=> <Menu dishes={this.state.dishes}/>}/>
            <Redirect to ="/home" />
         </Switch>
         <Footer />

         
     </div>

     
    );
  }
 
}

export default Main;
