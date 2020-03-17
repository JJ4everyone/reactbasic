import React from 'react';
import { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { DISHES } from '../shared/Dishes';
import { COMMENTS } from '../shared/Comments';
import { LEADERS } from '../shared/Leader';
import { PROMOTIONS } from '../shared/Promotion';
import Contact from './ContactComponent';
import  Header  from './HeaderComponent';
import  Footer  from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutusComponent';
import {Switch ,Route,Redirect} from 'react-router-dom'; 

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions : PROMOTIONS,
      leaders : LEADERS
    };
  }
  
  

  render(){

    const HomePage = () => (<Home dishes={this.state.dishes.filter((dish)=>dish.featured)[0]} promotions={this.state.promotions.filter((promo)=>promo.featured)[0]} leaders={this.state.leaders.filter((leader)=>leader.featured)[0]}/>)
    const Contactus=()=>(<Contact/>)
    const DishDetailId =({match})=>(<Dishdetail Dish={this.state.dishes.filter((dish)=>(dish.id===parseInt(match.params.dishId,10)))[0]}  Comments={this.state.comments.filter((comment)=>(comment.dishId===parseInt(match.params.dishId,10)))} />)
    const Aboutus=()=>(<About leaders= {this.state.leaders}/>)                 

    return(
      <div className="App">
         <Header />
         <Switch>
            <Route path ='/home' component={HomePage}/>
            <Route exact path='/menu' component = {()=> <Menu dishes={this.state.dishes}/>}/>
            <Route path ='/menu/:dishId' component={DishDetailId}/>
            <Route exact path ="/contactus" component ={Contactus}/>
            <Route exact path ="/aboutus" component ={Aboutus}/>
            <Redirect to ="/home" />
         </Switch>
         <Footer />

         
     </div>

     
    );
  }
 
}

export default Main;
