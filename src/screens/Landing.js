import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions, SafeAreaView, TextInput, Image, Pressable, TouchableOpacity, FlatList } from 'react-native'
import { theme } from "../theme";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeCard from '../components/Cards/HomeCard';
import HomeSCrollView from '../components/ScrollView/HomeSCrollView';
import { Arrayimages } from '../Constants/fakeimages';
import AppBar from '../components/AppBar/AppBar';

const LeftContent = props =>
    <View style={{ flex: 1 }}>
        <Avatar.Image {...props} source={{
            uri: "https://images.pexels.com/photos/2701660/pexels-photo-2701660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }} />


    </View>


const Icon = ({ name, color, myStyles, onPress }) => <TouchableOpacity activeOpacity={0.4} onPress={onPress}
    style={myStyles}
><MaterialCommunityIcons name={name} color={color} size={27} /></TouchableOpacity>




//get height
const { height, width } = Dimensions.get("screen")

const data = [
    {
        image: require('../../assets/images/img10.jpg'),
        words: "School pool "
    },
    {
        image: require('../../assets/images/img10.jpg'),
        words: "kids toons"
    },
    {
        image: require('../../assets/images/img6.jpg'),
        words: "Arial "
    },
    {
        image: require('../../assets/images/img5.jpg'),
        words: "Main block"
    },

]
const Landing = () => {
   
    const [home, setHome] = useState(
        [
            { id: "1", images: Arrayimages?.image1, event: "arial views" },
            { id: "2", images: Arrayimages?.image1, event: "general view" },
            { id: "3", images: Arrayimages?.image3, event: "school building" },
            { id: "4", images: Arrayimages?.image3, event: "school building" },
            { id: "5", images: Arrayimages?.image3, event: "school building" }



        ]
    )

    return (
        <>

            <SafeAreaView style={styles.container}>
                {/*stastus */}



                <AppBar title="Hormisdallen  Primary Schools" />




                <View style={[styles.sectionStyles]}>


                    <FlatList
                        ListHeaderComponent={
                            <View>
                                <HomeSCrollView showViews images={data} />
                                <View style={styles.viewStyle}>

                                </View>
                            </View>
                        }
                        data={home}
                        keyExtractor={item => String(item.id)}

                        renderItem={({ item, index }) => {
                            return <HomeCard images={item?.images} event={item?.event} />
                        }}
                    />


                </View>
                {/*posts */}





            </SafeAreaView>
        </>
    )
}

export default Landing

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `${theme.colors.text}`
    },
    sectionStyles: {
        flex: 1,

    },
    inputStyles: {
        height: 40,
        borderWidth: 0,
        marginTop: -5
    },
    viewStyle: {
        borderBottomColor: `${theme.colors.ligthgray}`,
        borderBottomWidth: 5
    }
})
