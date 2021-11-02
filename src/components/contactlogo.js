import React from 'react'
import { View, Text,Image } from 'react-native'
import {  Card } from 'react-native-paper'
import { theme } from '../theme'

export default function Contactlogo() {
    return (
        <View style={{ marginTop: 90, alignItems: 'flex-end' ,marginRight:-20}}>
                    <Card style={{
                        width: '30%', height: '90%', borderColor: `${theme.colors.accent}`, borderWidth: 8, elevation: 10, shadowColor: 'blue', borderRadius:150/2,
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: .1,
                        shadowRadius: 10,
                    }}>
                        <Card.Actions>
                            <View>
                                <Image resizeMode='cover' source={{ uri: 'https://cdn.vectorstock.com/i/thumb-large/40/31/businessman-with-contact-us-button-vector-37694031.webp' }}
                                 style={{ width: 100, height: 100, borderRadius:50 }} />
                            </View>
                        </Card.Actions>
                    </Card>

                </View>
    )
}
