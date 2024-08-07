import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

//const {width} = Dimensions.get('window');
//const ITEM_WIDTH = Math.round(width * 0.7);

export default function CarouselVertical(props) {

    const width = Dimensions.get('window').width;
    const {data} = props;

    return (
        <View style={{ flex: 1 }}>
        <Carousel
            loop
            width={width}
            height={width / 2}
            data={data}
            //onSnapToItem={(index) => console.log('current index:', index)}
            renderItem={( item ) => (
                <RenderItem data = {item}/>
            )}
        />
    </View>
    )
}

function RenderItem(props) {
    const {data} =  props;
    const {title} = data.item;
    console.log(title);


    return(
        <View>
            <Text>Pelicula</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

/*

const width = Dimensions.get('window').width;
return (
    <View style={{ flex: 1 }}>
        <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay={true}
            data={[...new Array(6).keys()]}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => console.log('current index:', index)}
            renderItem={({ index }) => (
                <View
                    style={{
                        flex: 1,
                        borderWidth: 1,
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{ textAlign: 'center', fontSize: 30 }}>
                        {index}
                    </Text>
                </View>
            )}
        />
    </View>
);

*/


        /*<Carousel
            layout = {'default'}
            data = {data}
            renderItem = {(item) => <RenderItem data = {item}/>}
            sliderWidth = {width}
            itemWidth = {ITEM_WIDTH}
        />*/