import React from 'react';
import {Card,CardBody,CardTitle,CardSubtitle,CardText, CardImg,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import {Loading} from '../redux/loading';


function Rcard({item,isLoading,errMess}) {

      
    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }
    else
    return (         
            <Card>
                <CardImg src={item.image} alt ={item.name}/>
                <CardBody>
                    <CardTitle>
                        {item.name}
                    </CardTitle>
                    {item.designation?<CardSubtitle>{item.designation}</CardSubtitle>:null}
                    <CardText>
                       {item.description}
                    </CardText>
                </CardBody>
            </Card>
    
    );
}


 function Home(props) {
    return (
        <div className="container">
            <div className="row">
               <Breadcrumb>
                    <BreadcrumbItem>
                    <Link to={'/menu'}>menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                    <Link to={'/contactus'}>contactus</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                    <Link to ={'/aboutus'}>aboutus</Link>
                    </BreadcrumbItem>
               </Breadcrumb>
            </div>
          <div className="row align-items-start">
              <div className="col-12 col-md m-2">
                  <Rcard item={props.dishes}  isLoading={props.dishesLoading} errMess={props.dishesErrMess}/>
              </div>
              <div className="col-12 col-md m-2">
                   <Rcard item={props.promotions}/>
              </div>
              <div className="col-12 col-md m-2">
                    <Rcard item={props.leaders}/>
              </div>
          </div>

        </div>
    );
}
export default Home;