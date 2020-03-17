import React from 'react';
import { Card, CardImg, CardImgOverlay,
  CardTitle } from 'reactstrap';
  import {Link} from 'react-router-dom';

  function RenderItem({dish,onclick}) {
    return(
      <Card>
        <Link to = {`/menu/${dish.id}`}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Link>
        
     </Card>
    );
    
  }
  const Menu = (props)=>{
        const menu = props.dishes.map((dish)=>
        {
          return(
            <div className="col-12 col-md-5 m-1" key={dish.id}>
              <RenderItem dish={dish} onclick={props.onclick} />
            </div>
              );
        })
        return(
            <div className="container">
              <div className="row">
                {menu}
              </div>
            </div>
        );
  }
/*class Menu extends Component {

  constructor(props) {
      super(props);

  }

 */

 /*
 renderDish(dish) {
      if (dish != null)
          return(
              <Card>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
          );
      else
          return(
              <div></div>
          );
  }
*/
 /* render() {
      const menu = this.props.dishes.map((dish) => {
          return (
            <div  className="col-12 col-md-5 m-1">
              <Card key={dish.id}
                onClick={()=>this.props.onclick(dish)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
          );
      });

      return (
          <div className="container">
              <div className="row">
                  {menu}
              </div>
           
          </div>
      );
  }
}
*/

export default Menu;