import React, { Component } from "react";
import { Card, CardImg, CardImgOverLay, CardBody, CardTitle, CardText } from "reactstrap";

class Dishdetail extends Component {
    constructor(props){
        super(props);
    }

    renderComments(comments) {
        if (comments != null) {
            const cmnts = comments.map((dish) => {
                const date = new Date(dish.date);
                return(
                    <div key={dish.id}>
                        <li>{dish.comment}</li>
                        <li>--{dish.author}, {date.toDateString()}</li>
                    </div>
                )
            });
            return(cmnts);
        }

        else {
            return(
                <div></div>
            )
        }
    }

    render() {
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1" key={(this.props.dishes.id+10)}>
                    <Card>
                        <CardImg src={this.props.dishes.image} alt={this.props.dishes.name} />
                        <CardBody>
                            <CardTitle>{this.props.dishes.name}</CardTitle>
                            <CardText>{this.props.dishes.description}</CardText>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-12 col-md-5 m-1" key={(this.props.dishes.id+20)}>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {this.renderComments(this.props.dishes.comments)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Dishdetail;