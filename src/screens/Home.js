import React, {useState, useEffect}from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native'; 
import { getNewsMoviesApi, getAllGenresApi } from '../api/movies';
import { Title } from 'react-native-paper';
import CarouselVertical from '../components/CarouselVertical';
import { map } from 'lodash';

export default function Home(props) {
    const { navigation } = props;
    const [newMovies, setNewMovies] = useState(null);
    const [genreList, setGenreList] = useState([]);
    const [genreSelected, setGenreSelected] = useState();

    useEffect( () => {
        getNewsMoviesApi().then((response) => {
            setNewMovies(response.results);
        });
     }, []);

     useEffect(() => {
        getAllGenresApi().then((response) => {
            setGenreList(response.genres);
        });
     }, []);

     const onChangeGenre = (newGenreId) => {
        setGenreSelected(newGenreId);
     }
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {newMovies && (
            <View style = {styles.news}>
                <Title style={styles.newsTitle}>Nuevas Peliculas</Title>
                <CarouselVertical data={newMovies} navigation = {navigation}/>
            </View>
            )}
            
            <View style = {styles.genres}>
                <Title style = {styles.genresTitle}>Peliculas Por Genero</Title>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.genreList}>
                    {map(genreList, (genre) => (
                    <Text key={genre.id} style={[styles.genre, {color: genre.id !== genreSelected ? '#8697a5' : '#ffff'}]} onPress={() => onChangeGenre(genre.id)}>
                        {genre.name}
                    </Text>
                    ))}
                </ScrollView>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    news:{
        marginVertical:5,
    },
    newsTitle:{
        marginBottom: 5,
        marginHorizontal: 15,
        fontWeight: 'bold',
        fontSize: 20,
    },
    genres:{
        marginTop: 10,
        marginBottom: 50,
    },
    genresTitle:{
        marginHorizontal:15,
        fontWeight: 'bold',
        fontSize: 20,
    },
    genreList:{
        marginTop: 5,
        marginBottom: 15,
        paddingHorizontal: 20,
        padding: 10,
    },
    genre:{
        marginRight:10,
        fontSize: 15,
    },
});