import React,{Component} from 'react';
import { Card, CardImg, Breadcrumb,BreadcrumbItem, CardText, CardBody,
  CardTitle, Button,Modal,ModalBody,ModalHeader,Label,Row,Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import{LocalForm,Errors,Control} from 'react-redux-form';
import {Loading} from '../redux/loading';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const required = (val) => val && val.length;
 class CommentForm extends Component{
     constructor(props){
         super(props);
         this.state={
             thisModelOpen:false,
            
         }


     }
     
     toggleModal=()=>{
        this.setState({
            isModalOpen: !this.state.isModalOpen
          });
     }
     
     handleSubmit=(values)=>{
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.name, values.comment);
    }

   

     render(){
         return(
             <div>
                 <Button size="lg" onClick={this.toggleModal}>
                 submit form
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Form</ModalHeader>
                <ModalBody>
              
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>rating</Label>
                                <Col md={10}>
                                    <Control.select model=".rating" id="rating" name="rating"
                                        className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={2}> Name</Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                         />
                                </Col>
                            </Row>
                            
                           
                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                </ModalBody>
            </Modal>
             </div>
            
         );
     }
 }

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
   function RenderComments({dishComments,addComment,dishId})
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
                  <div>
                      <CommentForm dishId={dishId} addComment={addComment}/>
                  </div>
            </div>
            );
        }
        else
        return(<div>

        </div>);
       
    }

     const Dishdetail=(props)=>{
        
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if(props.Dish!=null)
            {
                return( <div className="container">

                <div className="row">
                  <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.Dish.name}</BreadcrumbItem>
                 </Breadcrumb>
                      </div>  
                  <div className="row">
                    <RenderDish dish={props.Dish} />
                    
                    <RenderComments dishComments={props.Comments}
                    addComment={props.addComment}
                    dishId={props.Dish.id}/>
                    
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