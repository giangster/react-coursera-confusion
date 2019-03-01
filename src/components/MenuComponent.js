import React from 'react';
import {
    Card, CardImg, CardImgOverlay, CardTitle
} from 'reactstrap';

function RenderMenuItem(props) {
    return (
        <Card onClick={() => props.onClick(props.dish.id)}>
            <CardImg width="200px" height="200px" src={props.dish.image} alt={props.dish.name} />
            <CardImgOverlay>
                <CardTitle>{props.dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}
const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
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

export default Menu;