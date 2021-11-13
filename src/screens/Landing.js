import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import { theme } from "../theme";
import { Avatar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeCard from '../components/Cards/HomeCard';
import HomeSCrollView from '../components/ScrollView/HomeScrollView';
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
        image: "https://hormisdallenschoolsapp.com/hormisdallenwebapp/storage/app/public/images/events/1636775000_guides.jpg",
        words: "Scouts and guides "
    },
    {

        image: "https://hormisdallenschoolsapp.com/hormisdallenwebapp/storage/app/public/images/events/1636772995_childrenplaying.jpg",
        words: "kids "
    },
    {

        image: "https://hormisdallenschoolsapp.com/hormisdallenwebapp/storage/app/public/images/events/1636775099_ariaview.jpg",
        words: "Arial "
    },
    {

        image: "https://hormisdallenschoolsapp.com/hormisdallenwebapp/storage/app/public/images/events/1636775175_mainblock.jpg",
        words: "Main block"
    },

]
const Landing = () => {

    const [home, setHome] = useState(
        [
            { id: "1", images: Arrayimages?.image1, event: "School buildings" },
            { id: "2", images: Arrayimages?.image2, event: "swimming pools" },
            { id: "3", images: Arrayimages?.image3, event: "arial views" },
            { id: "4", images: Arrayimages?.image4, event: "Girls' dormitories" }



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
