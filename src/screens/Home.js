import React, {useState, useEffect}from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native'; 
import { getNewsMoviesApi } from '../api/movies';
import { Title } from 'react-native-paper';
import CarouselVertical from '../components/CarouselVertical';

export default function Home() {
    const [newMovies, setNewMovies] = useState(null)

   // este es el modo 1 metodo asincrono
   /*useEffect( async () => {
       const data = await getNewsMoviesApi();
       console.log(data);
    }, []);*/

    useEffect( () => {
        getNewsMoviesApi().then((response) => {
            setNewMovies(response.results);
        })
        
     }, []);
    
    return (
        <ScrollView>
            {newMovies && (
            <View style = {styles.news}>
                <Title style={styles.newsTitle}>Nuevas Peliculas</Title>
                <CarouselVertical data={newMovies}/>
            </View>
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    news:{
        marginVertical:10,
    },
    newsTitle:{
        marginBottom: 15,
        marginHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 22,
    }
})