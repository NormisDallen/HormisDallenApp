import React from 'react'
import { View, Text, StatusBar, ScrollView, StyleSheet, Image, SafeAreaView, Pressable, FlatList } from 'react-native'
import { theme } from '../theme'
import HomeCard from '../components/Cards/HomeCard'
import CardsTop from '../components/Cards/CardsTop'
import { Card } from 'react-native-paper'


export default function SchoolImages({ navigation }) {

    const Images = [
        {
            id: "1",
            idn: require('../../assets/images/img6.jpg'),
        },
        {
            id: "2",
            idn: require('../../assets/images/img6.jpg'),
        },
        {
            id: "3",
            idn: require('../../assets/images/img5.jpg'),
        },
        {
            id: "4",
            idn: require('../../assets/images/img6.jpg'),
        },
        {
            id: "99",
            idn: require('../../assets/images/img6.jpg'),
        },
        {
            id: "15",
            idn: require('../../assets/images/img6.jpg'),
        },
        {
            id: "100",
            idn: require('../../assets/images/img6.jpg'),
        },
        {
            id: "35",
            idn: require('../../assets/images/img70.jpg'),
        },
        {
            id: "18",
            idn: require('../../assets/images/img37.jpg'),
        },
        {
            id: "19",
            idn: require('../../assets/images/img75.jpg'),
        },
        {
            id: "20",
            idn: require('../../assets/images/img7.jpg'),
        }
    ]
    return (
        <>
            <StatusBar backgroundColor={theme.colors.primary} />


            <FlatList data={Images}
                keyExtractor={item => item.id}
                numColumns={3}
                renderItem={({ item }) => (
                    <Pressable
                        style={{
                            marginHorizontal: 5,
                            marginVertical: 5
                        }}
                    >
                        <Image
                            source={item.idn}
                            resizeMode="cover"
                            style={{
                                width: theme.dimensions.width / 3.5,
                                height: 200,
                                borderRadius: 5
                            }}
                        />
                    </Pressable>
                )}
            />



        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    imageStyles: {

        display: 'flex',

        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginLeft: 20,
        elevation: 3,
        borderRadius: 10

    },
    image: {
        width: 310,
        resizeMode: 'cover',
        height: 250,
        margin: 0
    },
    card: {
        width: 340,
        height: 260,



    }


})
