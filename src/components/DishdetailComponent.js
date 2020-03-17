import React from 'react';
import { Card, CardImg, Breadcrumb,BreadcrumbItem, CardText, CardBody,
  CardTitle } from 'reactstrap';
import {Link} from 'react-router-dom';


   function RenderDish({dish}) {
       return(
       <div className = "col-12 col-md-5 m-1">
        <Card>
         <CardImg top src={dish.image} alt={dish.name} />
         <CardBody>
           <CardTitle>{dish.name}</CardTitle>
           <CardText>{dish.description}</CardText>
         </CardBody>
        </Card>
       </div>
       );
   }
   function RenderComments({dishComments})
    {
        if(dishComments!=null)
        {
            return(
                <div className = "col-12 col-md-5 m-1">
                <h4>Comments</h4>
                  <ul className ="list-unstyled">
                       {dishComments.map((dish)=>{
                               return(
                              <li key={dish.id}>
                                  <p>
                                      {dish.comment}
                                  </p>
                                  <p>
                                      {dish.author}, {dish.date}
                                  </p>
                              </li>
                               )
                           })
                          }
                  </ul>
            </div>
            );
        }
        else
        return(<div>

        </div>);
       
    }

     const Dishdetail=(props)=>{
        
            if(props.Dish!=null)
            {
                return( <div className="container">

                <div className="row">
                  <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.Dish.name}</BreadcrumbItem>
                 </Breadcrumb>
                      </div>  
                  <div className="row">
                    <RenderDish dish={props.Dish}/>
                    
                    <RenderComments dishComments={props.Comments}/>
                    
                </div>
                </div>);
                  
            }
            else
            return(
                <div>

                </div>
            );
            
    
    }

 /* class Dishdetail extends Component {

    constructor(props)
    {
         super(props);
        
    }

    renderDish(dish) {
        if (dish != null)
            return(
                
                <div className = "col-12 col-md-5 m-1">
                      <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                     </Card>
                </div>
            
            );
        else
            return(
                <div></div>
            );
    }
      renderComments(dishComments){
          if(dishComments!=null)
          { return(
              <div className = "col-12 col-md-5 m-1">
                  <h4>Comments</h4>
                    <ul className ="list-unstyled">
                         {dishComments.map((dish)=>{
                                 return(
                                <li key={dish.id}>
                                    <p>
                                        {dish.comment}
                                    </p>
                                    <p>
                                        {dish.author}, {dish.date}
                                    </p>
                                </li>
                                 )
                             })
                            }
                    </ul>
              </div>
          );
          }
          else
              return(
                <div><p>
                    yo
                    yo</p></div>
              );
            
      }
       
    

    render() {
        
        if(this.props.selectedDish!=null)
        {
            return (
                <div className="container">

                <div className="row">
                    
                    {this.renderDish(this.props.selectedDish)}
                    
                    {this.renderComments(this.props.selectedDish.comments)}
                    
                </div>
                </div>   
                
                );
        }
        else
        return(<div> </div>);
       
    }

  }
  */

  export default Dishdetail;