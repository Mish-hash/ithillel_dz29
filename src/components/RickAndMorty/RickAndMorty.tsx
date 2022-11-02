import styles from './RickAndMorty.module.scss';
import axios from 'axios';
import React, {} from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import CardItem from './CardItem/CardItem';
import {CharacterI} from '../../types/types';

interface RickAndMortyStateI {
    firstLoad: boolean;
    isLoading: boolean;
    characters: Array<CharacterI >;
}

interface RickAndMortyPropsI {

}

class RickAndMorty extends React.Component< RickAndMortyPropsI, RickAndMortyStateI > {

        state: RickAndMortyStateI = {
            firstLoad: true,
            isLoading: true,
            characters: [],
        };

    constructor(props: RickAndMortyPropsI) {
        super(props);
    }

    componentWillMount() {
        if(this.state.isLoading === true) {
            setTimeout(()=>{
                axios.get('character')
                .then(data => {
                    this.setState({
                        characters: data.data.results,
                        isLoading: false,
                        firstLoad: false,
                    });
                });
            }, 500);
        }
    }

    render(): JSX.Element {
        return(
            <div className={styles.container}>
                <div className={styles.cardList}>
                    {(this.state.isLoading === true) ?
                    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                        <CircularProgress color="success" />
                        <CircularProgress color="success" />
                        <CircularProgress color="success" />
                    </Stack> :
                    <React.Fragment>
                        {this.state.characters.map((el: CharacterI) => <CardItem item={el} key={`cardItem_${el.id}`}/>)}
                    </React.Fragment>
                    }
                </div>
            </div>
        )
    }

}

export default RickAndMorty;