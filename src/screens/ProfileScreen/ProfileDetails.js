

import React from 'react'
import { StyleSheet, Text, View, ScrollView, Pressable, Image, TouchableOpacity, StatusBar } from 'react-native'
import { Avatar, Card, Divider } from 'react-native-paper'
import ButtonComponent from '../../components/Button/Button'
import { AntDesignIcon, EvilIcon, FontAwesomeIcon, MaterialIcon, Material, OctIcon } from '../../components/ResuableComponents/Icons'
import { theme } from '../../theme'
//import profile from '../../../assets/images/profile.jpeg'
import Circle from '../../components/circle'


export default function ProfileDetails({ navigation }) {


    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: `${theme.colors.secondary}` }}>

                <StatusBar backgroundColor={theme.colors.primary} />
                {/**profile avator */}
                <View style={{
                    backgroundColor: `${theme.colors.secondary}`, width: '100%', height: '5%', borderColor: `${theme.colors.accent}`, borderWidth: 8, elevation: 5, shadowColor: '#000', marginBottom: 30,
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: .1,
                    shadowRadius: 10,
                }}>
                    <Avatar.Image style={{ marginLeft: 100, marginTop: 20, marginBottom: 60 }} size={150}
                        source={{ uri: "data:image/jpeg;base64,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" }}
                        color='white'

                    />

                </View>


                <View style={{ marginLeft: 5, marginTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>



                    <View style={{ marginTop: 30, marginRight: 16, marginBottom: 10, alignContent: 'center', }}>




                        <View>
                            <Card style={{
                                width: '90%', height: 200, marginTop: 70, backgroundColor: `${theme.colors.background}`, elevation: 5, borderTopWidth: 1, borderTopColor: `${theme.colors.accent}`, shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: .1,
                                shadowRadius: 10,
                                marginLeft: 9
                            }}>
                                <Card.Content>
                                    <View style={
                                        {

                                            alignItems: "center",
                                            justifyContent: "space-between",

                                        }
                                    }>
                                        <Card.Actions style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', }}>
                                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                                <TouchableOpacity style={{ marginRight: 5 }} activeOpacity={0.4} >
                                                    <MaterialIcon name="account" size={33} color={theme.colors.primary} />
                                                </TouchableOpacity>
                                                <Text style={{ marginLeft: 10, fontSize: 15,color:'black' }}>kikonyogosadic</Text>

                                            </View>

                                            <View style={{ display: 'flex', flexDirection: 'row' }}>

                                                <TouchableOpacity activeOpacity={0.4} style={{ marginLeft: 10 }} >
                                                    <MaterialIcon size={26} color={theme.colors.primary} name="email" />
                                                </TouchableOpacity>
                                                <Text style={{ marginLeft: 10, fontSize: 15, marginBottom: 5,color:'black' }}>kikonyogosadic@gmail.com</Text>

                                            </View>



                                            <View style={{ marginLeft: 10, display: 'flex', flexDirection: "row" }}>
                                                <MaterialIcon size={26} color={theme.colors.primary} name="phone" />
                                                <Text style={{ marginLeft: 10, fontSize: 15, marginBottom: 4,color:'black' }}>0753299742</Text>


                                            </View>

                                            <View style={{ marginLeft: 10, display: 'flex', flexDirection: "row" }}>
                                                <MaterialIcon size={26} color={theme.colors.primary} name="home" />
                                                <Text style={{ marginLeft: 10, fontSize: 15, marginTop: 4,color:'black' }}>Gayaza</Text>


                                            </View>

                                        </Card.Actions>

                                    </View>

                                </Card.Content>
                            </Card>
                        </View>
                    </View>
                </View>

                <View style={{ marginBottom: 0, marginLeft: 40,marginTop:50 }}>
                    <Card style={{
                        width: '80%', height: '50%', marginTop: 40, backgroundColor: `${theme.colors.background}`, marginBottom: 30, borderColor: `${theme.colors.accent}`, borderWidth: 8, elevation: 5, shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: .1,
                        shadowRadius: 10,
                    }}>
                        <Card.Actions style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                            <View style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>

                                <ButtonComponent style={{ width: 200, backgroundColor: `${theme.colors.primary}` }} color={`${theme.colors.secondary}`} mode="outlined" text="Update Passward" />
                            </View>

                            <View style={{ display: 'flex', alignItems: 'center', marginTop:35, marginBottom: 30 }}>

                                <ButtonComponent onPress={() => navigation.navigate('Edit Profile')} style={{ width: 200, backgroundColor: `${theme.colors.primary}`, }} color={`${theme.colors.text}`} mode="outlined" text="Edit Profile" />
                            </View>

                            <View style={{ display: 'flex', alignItems: 'center', marginTop: 10, marginBottom: 20 }}>

                                <ButtonComponent onPress={() => navigation.goBack()} style={{ width: 200, backgroundColor: `${theme.colors.primary}` }} color={`${theme.colors.text}`} mode="outlined" text="Back " />
                            </View>

                        </Card.Actions>
                    </Card>
                    
                </View>
                <Circle />

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                    <Circle />
                    {/* <View style={{ marginRight: -0 }}>
                        <Image source={{ uri: 'https://cdn3.vectorstock.com/i/thumb-large/21/07/young-smiling-female-character-is-holding-id-card-vector-38122107.jpg' }} style={{ width: 200, height: 250, }} />
                    </View> */}
                </View>

           
            </ScrollView>



        </>
    )
}
