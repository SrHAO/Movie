import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Text, Title } from 'react-native-paper';
import { BASE_PATH_IMG } from '../utils/constants';
import { getGenreMovieApi } from '../api/movies';
import {map, size} from 'lodash';

export default function CarouselVertical(props) {

    const width = Dimensions.get('window').width;
    const {data, navigation} = props;

    return (
        <View style={{ flex: 1 }}>
        <Carousel
            loop
            width={width}
            height={width}
            data={data}
            renderItem={( item ) => (
                <RenderItem data = {item} navigation = {navigation}/>
            )}
        />
    </View>
    )
}

function RenderItem(props) {
    const {data, navigation} =  props;
    const { id, title, poster_path, genre_ids} = data.item;
    const [genres, setGenres] = useState(null);
    const imageUrl = `${BASE_PATH_IMG}/w500${poster_path}`;
    
    useEffect(() => {
        getGenreMovieApi(genre_ids).then((response) =>{
            setGenres(response);
        })
    }, []);

    const onNavigation = () => {
        navigation.navigate('movie', {id});
    }

    return(
        <TouchableWithoutFeedback onPress={onNavigation}>
            <View style={styles.card}>
                <Image source={{uri: imageUrl}} style={styles.image}/>
                <Title style={styles.title}>{title}</Title>
                <View style={styles.genres}>
                {genres && 
                map(genres, (genre,index) => (
                    <Text key={index} style={styles.genre}>
                        {genre}
                        {index !== size(genres) -1 && ', '}
                    </Text>
                ))}
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card:{
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    image:{
        width: '64%',
        height: '85%',
        borderRadius: 10,
    },
    title:{
        marginHorizontal: 15,
        marginTop: 1,
        fontSize:17,
    },
    genres:{
        flexDirection: 'row',
        marginHorizontal:10,
    },
    genre:{
        fontSize:12,
        color: '#8897a5',
    }
})