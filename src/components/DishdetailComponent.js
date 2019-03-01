import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class Dishdetail extends Component {
    render() {
        console.log(this.props.dish)
        const dateFormat = { year: 'numeric', month: 'short', day: '2-digit' };
        const comments = this.props.dish.comments.map((comment, index) =>
            <ul key={index} className="list-unstyled">
                <li>{comment.comment}</li>
                <li>-- {comment.author}, {new Date(comment.date).toLocaleString('en-US', dateFormat)}</li>
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
                    <h4>Comments</h4>
                    {comments}

                </div>
            </div >
        )
    }
}

export default Dishdetail;