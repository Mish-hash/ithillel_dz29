import React from 'react';
import styles from './CardItem.module.scss';
import { CharacterI } from '../../../types/types';

interface CardItemI {
    item: CharacterI;
}

const CardItem: React.FC<CardItemI>  = (props) => {

    const {name, image} = props.item;

    return(
        <div className={styles.carContainer}>
            <p>{name}</p>
            <img src={image} alt={name} />
        </div>
    )
}

export default CardItem;