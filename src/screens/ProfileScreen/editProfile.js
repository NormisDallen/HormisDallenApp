import React, { useState } from 'react'
import { View, Text, ScrollView, StatusBar } from 'react-native'
import { Avatar, FAB, Card } from 'react-native-paper'
import { TextInput } from 'react-native-paper';
import { theme } from '../../theme';
import ButtonComponent from '../../components/Button/Button'
import Circle from '../../components/circle';

export default function EditProfile({ navigation }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [address, setAddress] = useState('');


    return (
        <>
            <ScrollView style={{ backgroundColor: 'whitesmoke' }}>
                <StatusBar backgroundColor={theme.colors.primary} />

                <View style={{ marginTop: 0, marginBottom: 40, alignItems: 'center', marginLeft: 0, backgroundColor: `${theme.colors.accent}`, borderBottomLeftRadius: 120, borderBottomRightRadius: 120, height: '10%' }}>

                    <Card style={{ borderRadius: 150 / 2, width: 150, height: 150, elevation: 7, marginTop: 40 }}>
                        <Card.Actions>
                            <Avatar.Image style={{ marginLeft: 0, marginBottom: 40 }} size={140} source={{ uri: "https://t4.ftcdn.net/jpg/02/77/68/55/360_F_277685543_bZy10zzHIR8wjLRd5NUCgYMZQadEDGWe.webp" }}
                                color='white'

                            />
                        </Card.Actions>
                    </Card>


                </View>


                <Card style={{
                    backgroundColor: 'whitesmoke', width: '90%', height: '50%', marginLeft: 20, marginTop: 100, width: '80%',
                    backgroundColor: `${theme.colors.accent}`,
                    marginLeft: 30,
                    borderColor: `${theme.colors.accent}`,
                    borderWidth: 1,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: .1,
                    shadowRadius: 10,
                    borderRadius: 20
                }}>
                    <Card.Actions>
                        <View style={{ marginLeft: 10, marginTop: 20, width: '100%', padding: 10 }}>
                            <TextInput
                                label="User name"
                                onChangeText={(text) => setName(text)}
                                value={name}
                                style={{
                                    backgroundColor: `${theme.colors.text}`,
                                    color: 'red',
                                    width: '100%',
                                    alignSelf: 'center',
                                    borderBottomWidth: 0,
                                    height: 55,
                                    marginBottom: 30,
                                    textAlign: 'center',

                                    borderColor: theme.colors.disabled
                                }}

                                left={<TextInput.Icon name="account" color={theme.colors.primary} size={27} />}
                                theme={{ colors: { text: 'black', primary: theme.colors.primary }, borderWith: 2 }}
                                mode={'flat'}
                                autoCorrect={false}

                                placeholder="Enter username"
                                outlineColor={theme.colors.primary}
                                underlineColor={theme.colors.disabled}
                                selectionColor={theme.colors.primary}

                            />
                            <TextInput
                                label="Email"
                                onChangeText={(text) => setEmail(text)}
                                value={email}
                                style={{
                                    backgroundColor: `${theme.colors.text}`,
                                    color: 'red',
                                    width: '96%',
                                    alignSelf: 'center',
                                    borderBottomWidth: 0,
                                    height: 55,
                                    marginBottom: 30,
                                    borderColor: theme.colors.disabled
                                }}

                                left={<TextInput.Icon name="email-outline" color={theme.colors.primary} size={27} />}
                                theme={{ colors: { text: 'black', primary: theme.colors.primary }, borderWith: 2 }}
                                mode={'flat'}
                                autoCorrect={false}

                                placeholder="Enter user email"
                                outlineColor={theme.colors.primary}
                                underlineColor={theme.colors.disabled}
                                selectionColor={theme.colors.primary}
                                textContentType="emailAddress"
                            />
                            <TextInput
                                label="Phone Number"
                                onChangeText={(text) => setTel(text)}
                                value={tel}
                                style={{
                                    backgroundColor: `${theme.colors.text}`,
                                    color: 'red',
                                    width: '96%',
                                    alignSelf: 'center',
                                    borderBottomWidth: 0,
                                    height: 55,
                                    marginBottom: 20,
                                    borderColor: theme.colors.disabled
                                }}

                                left={<TextInput.Icon name="phone" color={theme.colors.primary} size={27} />}
                                theme={{ colors: { text: 'black', primary: theme.colors.primary }, borderWith: 2 }}
                                mode={'flat'}
                                autoCorrect={false}

                                placeholder="Enter phone number"
                                outlineColor={theme.colors.primary}
                                underlineColor={theme.colors.disabled}
                                selectionColor={theme.colors.primary}

                            />
                            <TextInput
                                label="Address"

                                onChangeText={(text) => setAddress(text)}
                                value={address}
                                style={{
                                    backgroundColor: `${theme.colors.text}`,
                                    color: 'red',
                                    width: '96%',
                                    alignSelf: 'center',
                                    borderBottomWidth: 0,
                                    height: 55,
                                    marginBottom: 3,
                                    marginTop: 10,
                                    borderColor: theme.colors.disabled
                                }}

                                left={<TextInput.Icon name="email-outline" color={theme.colors.primary} size={27} />}
                                theme={{ colors: { text: 'black', primary: theme.colors.primary }, borderWith: 2 }}
                                mode={'flat'}
                                autoCorrect={false}

                                placeholder="Enter your address"
                                outlineColor={theme.colors.primary}
                                underlineColor={theme.colors.disabled}
                                selectionColor={theme.colors.primary}
                                textContentType="emailAddress"
                            />

                        </View>
                    </Card.Actions>
                </Card>

                <View>
                    <View style={{ display: 'flex', alignItems: 'center', marginTop: 30, marginBottom: 20 }}>

                        <ButtonComponent   text="SAVE" color={`${theme.colors.text}`} style={{
                            marginTop: 5,

                            width: '70%',
                              height:'30%',
                            marginLeft: 4,
                            marginBottom: 30,
                            backgroundColor: `${theme.colors.primary}`,
                            marginTop: 20,
                        }}
                            contentStyle={{
                                fontSize: 19, height: 29
                            }}
                        />
                    </View>
                </View>




            </ScrollView>

        </>
    )
}
