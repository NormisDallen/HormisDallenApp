import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { Badge, Paragraph } from 'react-native-paper';
import { constantstyles } from '../../Constants/styles';
import { theme } from "../../theme"
import { MaterialIcon } from '../ResuableComponents/Icons';

const HomeSCrollView = ({ images, showViews, menuStyle, imageStyles, noHeight, noWidth, screenDetails }) => {
    // const Images = [
    //     'https://traveltourism.news/wp-content/uploads/2017/07/Travel-tourism-1.jpg',
    //     'https://cdn01.buxtonco.com/news/2661/istock-665028882__large.jpg',
    //     'https://static.toiimg.com/thumb/76006166/Spain-tourists.jpg?width=1200&height=900',
    // ]
    const [status, setCompanyStatus] = useState("we are live in lira everythin is ok")

    //navigation
    const navigation = useNavigation()


    return (
        <ScrollView horizontal
            style={styles.containerStyles}
            showsHorizontalScrollIndicator={false}
        >
            {
                images.map((item, index) => <View key={index}>
                    <Pressable
                        style={{
                            borderWidth: 1,
                            borderColor: theme.colors.ligthgray,
                            borderRadius: 10,
                            marginHorizontal: 3,
                            marginVertical: 5,
                            height: noHeight ? null : 172,
                            backgroundColor: `${theme.colors.text}`,
                            width: noWidth ? null : images.length == 1 ? theme.dimensions.width : images.length == 2 ?
                                theme.dimensions.width / 2 : theme.dimensions.width / 3,
                            backgroundColor: `${theme.colors.black}`
                        }}
                        onPress={() => screenDetails && navigation?.navigate("MenuListItems", {
                            screen: item?.screenDetails?.name
                        })}

                    >
                        {/*dots */}
                        <View style={[constantstyles.absoluteStyles, { top: 8, right: 8 }]}>
                            <MaterialIcon name="dots-vertical" size={20} color={theme.colors.text} />

                        </View>
                        {/*dots */}
                        {/*status text */}
                        <View style={[styles.absoluteStyle, { bottom: 2 }]}>
                            <View
                                style={{
                                    alignItems: "center", flexDirection: "row", margin: 2,
                                    width: "100%", justifyContent: menuStyle ? "center" : null

                                }}
                            >
                                <Text style={{ color: `${theme.colors.text}`, fontWeight: "500", fontSize: 13 }}>
                                    {
                                        item.words
                                    }
                                </Text>



                            </View>
                            {
                                showViews && <View
                                    style={{
                                        alignItems: "center", flexDirection: "row", margin: 2,
                                        width: "100%"
                                    }}
                                >
                                    <Text style={{ color: `${theme.colors.text}`, fontWeight: "500", fontSize: 13 }}>
                                        {
                                            10
                                        } views
                                    </Text>



                                </View>
                            }

                        </View>


                        {/*status text */}
                        {/*views */}

                        {/*views */}
                        <Image
                            style={[{
                                width: "99.9%",
                                height: 170,
                                borderRadius: 8,
                                opacity: 0.5,
                                backgroundColor: `${theme.colors.black}`
                            }, imageStyles]}
                            source={
                                item.image
                            }
                            resizeMode="cover"
                        />


                    </Pressable>

                </View>)
            }

        </ScrollView>
    )
}

export default HomeSCrollView

const styles = StyleSheet.create({
    containerStyles: {
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 10,
        borderWidth: 0,
        flex: 1,
    },
    absoluteStyle: {
        position: "absolute",
        zIndex: 20
    },
    menuWordsStyle: {
        justifyContent: "center"
    }
})
