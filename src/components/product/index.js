import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import './style.css';
import meat from '../../images/icon-meat.png';
import processed from '../../images/icon-processed.png';
import freezer from '../../images/icon-freezer.png';
import ausMade from '../../images/icon-AusMade.png';
import plastic from '../../images/icon-containsPlastics.png';
import star from '../../images/star.svg';

const Product = ({ name = '', rating, isMeat, isProcessed, isFrozen, isPlasticPackaged, isLocal }) => {
    const calculateRating = (isMeat, isProcessed, isFrozen, isPlasticPackaged, isLocal) => {
      let rating = 5;
      rating = isMeat ? rating-1 : rating;
      rating = isProcessed ? rating-1 : rating;
      rating = isFrozen ? rating-1 : rating;
      rating = isPlasticPackaged ? rating-1 : rating;
      rating = !isLocal ? rating-1 : rating;
      console.log(rating);
      return rating;
    }
    return (
        <Card className="Product-wrapper">
            <CardContent>
                <div className="Product-content">
                    <div className="Image-Content">
                        <div className="Product-image">
                            <img className="product-image" alt="placeholder" src="http://placekitten.com/g/100/100" />
                        </div>
                    </div>
                    <div className="Product-Details">
                        <h1>{name}</h1>
                        <div className="product-rating">
                          {Array.from(new Array(calculateRating(isMeat, isProcessed, isFrozen, isLocal, isPlasticPackaged))).map((each, i) => (<img key={name + i} src={star}></img>))}
                        </div>
                        <List className="Product-list">
                            <ListItem hidden={!isMeat}>
                                {isMeat ? (<img className="food-icon" alt="meat icon" src={meat}></img>) : <span></span>}
                            </ListItem>
                            <ListItem hidden={!isProcessed}>
                            {isProcessed ? (<img className="food-icon" alt="processed icon" src={processed}></img>) : <span></span>}
                            </ListItem>
                            <ListItem hidden={!isFrozen}>
                            {isFrozen ? (<img className="food-icon" alt="meat icon" src={freezer}></img>) : <span></span>}
                            </ListItem>
                            <ListItem hidden={!isPlasticPackaged}>
                            {isPlasticPackaged ? (<img className="food-icon" alt="plastic icon" src={plastic}></img>) : <span></span>}
                            </ListItem>
                            <ListItem hidden={!isLocal}>
                            {isLocal ? (<img className="food-icon" alt="local icon" src={ausMade}></img>) : <span></span>}
                            </ListItem>
                        </List>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default Product;
