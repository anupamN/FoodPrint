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

const Product = ({ name = '', rating, isMeat, isProcessed, isFrozen, isPlasticPackaged }) => {
    return (
        <Card className="Product-wrapper">
            <CardContent>
                <div className="Product-content">
                    <div className="Image-Content">
                        <div className="Product-image">
                            <img alt="placeholder" src="http://placekitten.com/g/100/100" />
                        </div>
                    </div>
                    <div className="Product-Details">
                        <h1>{name}</h1>
                        <List className="Product-list">
                            <ListItem>
                                <ListItemText primary="Meat" />
                                <ListItemIcon>{isMeat ? <Check /> : <Close />}</ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Processed" />
                                <ListItemIcon>{isProcessed ? <Check /> : <Close />}</ListItemIcon>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Frozen" />
                                <ListItemIcon>{isFrozen ? <Check /> : <Close />}</ListItemIcon>
                            </ListItem>
                        </List>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default Product;
