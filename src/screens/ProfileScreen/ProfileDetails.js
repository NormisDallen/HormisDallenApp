

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
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: `${theme.colors.secondary}`, height: "50%" }}>

                <StatusBar backgroundColor={theme.colors.primary} />
                {/**profile avator */}
                <View style={{
                    backgroundColor: `${theme.colors.secondary}`, width: '100%', height: '5%', borderColor: `${theme.colors.accent}`, borderWidth: 8, elevation: 5, shadowColor: '#000', marginBottom: 30,
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: .1,
                    shadowRadius: 10,
                }}>
                    <Avatar.Image style={{ marginLeft: 120, marginTop: 30, marginBottom: 60 }} size={150}
                        source={{ uri: "https://t4.ftcdn.net/jpg/02/77/68/55/360_F_277685543_bZy10zzHIR8wjLRd5NUCgYMZQadEDGWe.webp" }}
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
                                                <Text style={{ marginLeft: 10, fontSize: 20 }}>kikonyogosadic</Text>

                                            </View>

                                            <View style={{ display: 'flex', flexDirection: 'row' }}>

                                                <TouchableOpacity activeOpacity={0.4} style={{ marginLeft: 10 }} >
                                                    <MaterialIcon size={26} color={theme.colors.primary} name="email" />
                                                </TouchableOpacity>
                                                <Text style={{ marginLeft: 10, fontSize: 20, marginBottom: 5 }}>kikonyogosadic@gmail.com</Text>

                                            </View>



                                            <View style={{ marginLeft: 10, display: 'flex', flexDirection: "row" }}>
                                                <MaterialIcon size={26} color={theme.colors.primary} name="phone" />
                                                <Text style={{ marginLeft: 10, fontSize: 20, marginBottom: 4 }}>0753299742</Text>


                                            </View>

                                            <View style={{ marginLeft: 10, display: 'flex', flexDirection: "row" }}>
                                                <MaterialIcon size={26} color={theme.colors.primary} name="home" />
                                                <Text style={{ marginLeft: 10, fontSize: 20, marginTop: 4 }}>Gayaza</Text>


                                            </View>

                                        </Card.Actions>

                                    </View>

                                </Card.Content>
                            </Card>
                        </View>
                    </View>
                </View>

                <View style={{ marginBottom: 0, marginLeft: 40 }}>
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

                            <View style={{ display: 'flex', alignItems: 'center', marginTop: 30, marginBottom: 30 }}>

                                <ButtonComponent onPress={() => navigation.navigate('Edit Profile')} style={{ width: 200, backgroundColor: `${theme.colors.primary}`, }} color={`${theme.colors.text}`} mode="outlined" text="Edit Profile" />
                            </View>

                            <View style={{ display: 'flex', alignItems: 'center', marginTop: 10, marginBottom: 30 }}>

                                <ButtonComponent onPress={() => navigation.goBack()} style={{ width: 200, backgroundColor: `${theme.colors.primary}` }} color={`${theme.colors.text}`} mode="outlined" text="Back " />
                            </View>

                        </Card.Actions>
                    </Card>
                </View>


                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                    <Circle />
                    <View style={{ marginRight: -0 }}>
                        <Image source={{ uri: 'https://cdn3.vectorstock.com/i/thumb-large/21/07/young-smiling-female-character-is-holding-id-card-vector-38122107.jpg' }} style={{ width: 200, height: 250, }} />
                    </View>
                </View>

                <Divider />
            </ScrollView>



        </>
    )
}
