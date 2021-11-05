import React, { useState } from 'react'
import { StyleSheet, Text, View, Pressable, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import { Badge } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { theme } from '../../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { EvilIcon, MaterialIcon } from '../ResuableComponents/Icons';
const LeftContent = props =>
    <View style={{ flex: 1 }}>
        <Avatar.Image {...props} source={{
            uri: "data:image/jpeg;base64,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"
        }} />
    </View>


//action icons





const HomeCard = ({ images, event }) => {
    //seticon color
    const [iconHeartColor, setIconHeartColor] = useState("black")
    //caption
    const [caption, setCaption] = useState(' Add  a comment or  a caption here ! ....................')

    return (
        <Card>
            <Card.Title title={`HormisDallen`} subtitle={`2 hours ago`}
                left={LeftContent}
                right={() => <View style={{ marginRight: 15 }}>
                    <MaterialIcon size={21} name="dots-vertical" color={theme.colors.primary} /></View>} />

            {
                /* <Card.Cover source={{uri:"https://picsum.photos/700"}} />*/
            }
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    images?.map((item, index) => {
                        console.log(`The item is ${JSON.stringify(item)}`)
                        return <View key={index}>
                            <Pressable style={{
                                borderWidth: StyleSheet.hairlineWidth,
                                borderColor: theme.colors.text
                            }}>
                                {/*show badge */}
                                <Badge size={17} visible={true} style={{
                                    position: 'absolute',
                                    top: 4, right: 5,
                                    color: `${theme.colors.text}`,
                                    backgroundColor: `${theme.colors.primary}`,
                                    fontWeight: "700",
                                    fontSize: 10,
                                    zIndex: 20
                                }}>
                                    {`${index + 1}/${images?.length}`}
                                </Badge>
                                {/*show badge */}

                                {/*site location only on first image */}
                                {index == 0 &&
                                    <Badge size={40} visible={true} style={{
                                        position: 'absolute',
                                        bottom: theme.dimensions.width / 6, right: 40,
                                        color: `${theme.colors.primary}`,
                                        backgroundColor: "#F0F8FF",
                                        opacity: 0.8,
                                        fontWeight: "900",
                                        fontSize: 17,
                                        zIndex: 20,

                                    }}>
                                        {event}

                                    </Badge>
                                }


                                {/*site location */}

                                <Image
                                    style={{
                                        width: images?.length == 1 ? theme.dimensions.width : theme.dimensions.width / 1.2,
                                        height: 300
                                    }}
                                    source={item.imagepath}
                                />

                            </Pressable>

                        </View>
                    }
                    )
                }
            </ScrollView>

            <Card.Content>
                <View style={
                    {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }
                }>
                    <Card.Actions >
                        <View>
                            <Badge size={17} visible={true} style={{
                                position: 'absolute',
                                bottom: 1, right: 0,
                                color: `${theme.colors.text}`,
                                backgroundColor: `${theme.colors.primary}`,
                                fontWeight: "700",
                                fontSize: 10,
                                zIndex: 20
                            }}>
                                {4}
                            </Badge>

                            <TouchableOpacity activeOpacity={0.4} onPress={() => setIconHeartColor("red")}>
                                <EvilIcon name="heart" size={33} color={theme.colors.primary} />
                            </TouchableOpacity>

                        </View>
                        {/*commet icon */}
                        <View>
                            <Badge size={17} visible={true} style={{
                                position: 'absolute',
                                bottom: 1, right: 0,
                                color: `${theme.colors.text}`,
                                backgroundColor: `${theme.colors.primary}`,
                                fontWeight: "700",
                                fontSize: 10,
                                zIndex: 20
                            }}>
                                {10}
                            </Badge>
                            <TouchableOpacity activeOpacity={0.4} style={{ marginLeft: 10 }} >
                                <MaterialIcon size={26} color={theme.colors.primary} name="comment-outline" />
                            </TouchableOpacity>


                        </View>

                        {/*comment icon */}
                        {/*send icon */}
                        <View style={{ marginLeft: 10 }}>
                            <MaterialIcon size={26} color={theme.colors.primary} name="send" />



                        </View>

                        {/*send icon */}

                    </Card.Actions>
                    <View style={{ justifyContent: "flex-end" }}>


                        {/*bookmark */}
                        {/*bookmark */}
                        <View >
                            <TouchableOpacity activeOpacity={0.4} style={{ marginLeft: 10 }}>
                                <Ionicons name="bookmark-outline" size={24} color={theme.colors.primary} />
                            </TouchableOpacity>



                        </View>

                    </View>

                </View>

            </Card.Content>
            {/*caption */}
            <Card.Content>
                <Paragraph>
                    {
                        caption.length > 50 ? ((caption).substring(0, 60) + ' ... more') : null
                    }

                </Paragraph>
            </Card.Content>
            {/*caption */}
            <Card.Content>
                <View>
                    <TextInput
                        placeholder="Add a comment"
                        style={[styles.inputStyles]}
                    />
                </View>
            </Card.Content>

        </Card>
    )
}

export default HomeCard

const styles = StyleSheet.create({
    inputStyles: {
        height: 40,
        borderWidth: 0,
        marginTop: -5
    }
})
