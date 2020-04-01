import React from 'react';
import { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import {connect} from 'react-redux';
import Contact from './ContactComponent';
import  Header  from './HeaderComponent';
import  Footer  from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutusComponent';
import {Switch ,Route,Redirect, withRouter} from 'react-router-dom'; 
import {addComment,fetchDishes} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
});




class Main extends Component {
  constructor(props) {
    super(props);
   
  }
  
  componentDidMount() {
    this.props.fetchDishes();
  }

  render(){

    const HomePage = () => (<Home dishes={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]} 
    dishesLoading={this.props.dishes.isLoading}
    dishesErrMess={this.props.dishes.errMess}
    promotions={this.props.promotions.filter((promo)=>promo.featured)[0]}
    leaders={this.props.leaders.filter((leader)=>leader.featured)[0]}/>)
    const Contactus=()=>(<Contact resetFeedbackForm={this.props.resetFeedbackForm}/>)
    const DishDetailId =({match})=>(<Dishdetail Dish={this.props.dishes.dishes.filter((dish)=>(dish.id===parseInt(match.params.dishId,10)))[0]} 
    isLoading={this.props.dishes.isLoading}
    errMess={this.props.dishes.errMess}
   Comments={this.props.comments.filter((comment)=>(comment.dishId===parseInt(match.params.dishId,10))) }  addComment={this.props.addComment}/>)
    const Aboutus=()=>(<About leaders= {this.props.leaders}/>)                 

    return(
      <div className="App">
         <Header />
         <Switch>
            <Route path ='/home' component={HomePage}/>
            <Route exact path='/menu' component = {()=> <Menu dishes={this.props.dishes}/>}/>
            <Route path ='/menu/:dishId' component={DishDetailId}/>
            <Route exact path ="/contactus" component = {Contactus}/>
            <Route exact path ="/aboutus" component ={Aboutus}/>
            <Redirect to ="/home" />
         </Switch>
         <Footer />

         
     </div>

     
    );
  }
 
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
