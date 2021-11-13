import React from 'react'
import { View, Text, StatusBar, StyleSheet, Image, Pressable, FlatList } from 'react-native'
import { theme } from '../theme'

import { Card, Divider } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SchoolImages({ navigation }) {

    const Images = [
        {
            id: "1",
            idn: "https://hormisdallenschoolsapp.com/hormisdallenwebapp/storage/app/public/images/events/1636776269_bus3.jpg",
        },
        {
            id: "2",
            idn: "https://hormisdallenschoolsapp.com/hormisdallenwebapp/storage/app/public/images/events/1636775099_ariaview.jpg",
        },
        {
            id: "3",
            idn: "https://hormisdallenschoolsapp.com/hormisdallenwebapp/storage/app/public/images/events/1636775175_mainblock.jpg",
        },
        {
            id: "4",
            idn: "https://hormisdallenschoolsapp.com/hormisdallenwebapp/storage/app/public/images/events/1636775000_guides.jpg",
        },
        {
            id: "99",
            idn: "https://hormisdallenschoolsapp.com/hormisdallenwebapp/storage/app/public/images/events/1636778021_classes.jpg"
        },
        {
            id: "15",
            idn: "https://hormisdallenschoolsapp.com/hormisdallenwebapp/storage/app/public/images/events/1636775417_dom.jpg",
        },
        {
            id: "100",
            idn: "https://hormisdallenschoolsapp.com/hormisdallenwebapp/storage/app/public/images/events/1636772995_childrenplaying.jpg",
        },
        {
            id: "35",
            idn: "https://hormisdallenschoolsapp.com/hormisdallenwebapp/storage/app/public/images/events/1636777419_swimmingpool.jpg",
        },
        {
            id: "18",
            idn: "https://hormisdallenschoolsapp.com/hormisdallenwebapp/storage/app/public/images/events/1636777552_swimmingpool.jpg",
        },
        {
            id: "19",
            idn: "https://hormisdallenschoolsapp.com/hormisdallenwebapp/storage/app/public/images/events/1636778021_classes.jpg",
        },
        {
            id: "21",
            idn: "https://hormisdallenschoolsapp.com/hormisdallenwebapp/storage/app/public/images/events/1636775417_dom.jpg",
        },
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Ionicons name='help-circle' size={25} color={theme.colors.primary} />
                <Text style={styles.Text} onPress={() => { navigation.navigate('Fequently Asked Questions') }}>School Inquiries</Text>

            </View>

            <Divider />
        </View>

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
                            source={{ uri: item.idn }}
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
