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

    useEffect( () => {
        getNewsMoviesApi().then((response) => {
            setNewMovies(response.results);
        })
     }, []);

     useEffect(() => {
        getAllGenresApi().then((response) =>{
            setGenreList(response.genres);
        })
     }, []);
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {newMovies && (
            <View style = {styles.news}>
                <Title style={styles.newsTitle}>Nuevas Peliculas</Title>
                <CarouselVertical data={newMovies} navigation = {navigation}/>
            </View>
            )}
            
            <View style = {styles.genres}>
                <Title style={styles.genresTitle}>Peliculas Por Genero</Title>
                    <ScrollView>
                    
                    </ScrollView>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    news:{
        marginVertical:10,
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
});