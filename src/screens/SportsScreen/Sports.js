import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import AppBar from '../../components/AppBar/AppBar';
import ButtonComponent from '../../components/Button/Button';
import { AntDesignIcon, EntypoIcons, EvilIcon, MaterialIcon } from '../../components/ResuableComponents/Icons';
import { constantstyles } from '../../Constants/constanstStyles';
import { theme } from '../../theme';
import images from '../../exportedimages';

const Sports = ({route}) => {
    console.log(`The route is ${JSON.stringify(route)}`)
    const [places] = useState([
        {
            id: 1,
            image:require('../../../assets/images/img70.jpg') ,
            visited: "21/05/2021",
            name: "Main Pool",
            description: "The main pool is for the primary sector ",
            location: "Gayaza Main Branch",
            amentities: ['Thursday', "Friday"],
            statRating: 4,
            reviews: 99
        },
        {
            id: 2,
            image: require('../../../assets/images/img75.jpg'),
            visited: "21/05/2021",
            name: "Junior Pool",
            description: "This pool is for the nursery sector only ",
            location: "Gayaza branch 2",
            amentities: ['Tuesday', "Wednesday", ],
            statRating: 4,
            reviews: 99
        },
       
        

    ])

    return (

        <>

       
        <View style={[{ backgroundColor: theme.colors.text , marginTop:30}, constantstyles.container]}>
           


            {/*button */}
            <View style={[constantstyles.absoluteStyles, { marginHorizontal: 20, bottom: 20, left: theme.dimensions.width / 6.2 }]}>
                <View style={[constantstyles.flexStyles,{borderRadius:20, borderColor:theme.colors.primary, 
                     borderWidth:2,padding:0, backgroundColor:"black"
                     }]}>
                    
                    
                </View>




            </View>
            {/*buttons */}

            {/*flatlist */}
            <FlatList
                data={places}
                keyExtractor={item => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <Pressable key={item.id} styles={[styles.pressableStyles]}>
                        <Card style={styles.cardStyle} elevation={2}>

                            <View>
                                {/*heart */}
                                <View style={[constantstyles.absoluteStyles, { top: 10, right: 10, backgroundColor: theme.colors.text, borderRadius: 20, padding: 3 }]}>
                                    <EvilIcon name="heart" size={22} color={theme.colors.primary} />
                                </View>
                                {/*heart*/}
                                <View style={[constantstyles.absoluteStyles, { bottom: 10, left: 140 }]}>
                                    <EntypoIcons name="dots-three-horizontal" size={24} color={theme.colors.text} />
                                </View>
                                <Card.Cover source={item.image} style={{ borderRadius: 10 }} />

                            </View>

                            {/*cardcontent */}
                            <Card.Content>
                                <View style={[constantstyles.flexStyles, { justifyContent: "space-between", alignItems: "center" }]}>
                                    <Title>{item.name}</Title>
                                    {/*follow */}

                                   


                                    {/*follow */}

                                </View>
                                <Paragraph style={styles.paragraphStyle}>{item.location}</Paragraph>
                                <Paragraph style={styles.paragraphStyle}>{item.amentities.map((amt, index) =>
                                    <Paragraph key={index} style={[constantstyles.resideViews, { paddingHorizontal: 5 }]} style={styles.paragraphStyle}>
                                        <Text style={{ paddingHorizontal: 5 }}>{`${amt} | `}</Text>

                                    </Paragraph>

                                )}</Paragraph>

                                

                                {/*rating */}
                                <View style={[constantstyles.flexStyles, { alignItems: "center", justifyContent: "space-between" }]}>
                                    {/*rating */}
                                    <Paragraph style={[styles.paragraphStyle, { marginTop: 0 }]}>

                                        {Array(item.statRating)
                                            .fill()
                                            .map((_, index) => (
                                                <AntDesignIcon name="star" size={22} color={theme.colors.primary} />
                                            ))}
                                        {' '}
                                        {item.reviews}Reviews
                                    </Paragraph>
                                    {/*rating */}


                                    <View>
                                        <MaterialIcon name="email-outline" size={27} color={theme.colors.primary} />

                                    </View>


                                </View>
                                {/*rating */}


                            </Card.Content>
                            {/*card content */}


                        </Card>
                    </Pressable>)}
            />
            {/*flatlist */}

        </View>
        </>
    )
}

export default Sports

const styles = StyleSheet.create({
    cardStyle: {
        marginHorizontal: 10,
        marginVertical: 4,
        borderRadius: 10

    },
    pressableStyles: {
        marginVertical: 10
    },
    paragraphStyle: {
        color: theme.colors.placeholder,
        marginTop: -2
    },
    buttonStyle:{
        borderColor:StyleSheet.hairlineWidth,
        borderWidth:2,
        borderLeftWidth:0,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20
    },
    buttonStyle1:{
        
        borderLeftWidth:0,
        borderTopRightRadius:20,
        borderBottomRightRadius:20

    }
})
