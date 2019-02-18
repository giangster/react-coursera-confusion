import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class Dishdetail extends Component {

    render() {
        const comments = this.props.dish.comments.map((dish, index) =>
            <ul key={index} className="list-unstyled">
                <li>{this.props.dish.comments[index].comment}</li>
                <li>-- {this.props.dish.comments[index].author}, {this.props.dish.comments[index].date.substring(0, 10)}</li>
            </ul>
        )

        return (

            <div class="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" top src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-12 col-md-5 m-1">
                    <Card className="list-unstyled">
                        <CardBody>
                            <h4>Comments</h4>
                            {comments}
                        </CardBody>
                    </Card>
                </div>
            </div >
        )
    }
}

export default Dishdetail;