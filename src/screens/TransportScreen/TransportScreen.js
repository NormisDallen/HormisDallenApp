import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet, StatusBar } from 'react-native'
import { Card } from 'react-native-paper'
import { theme } from '../../theme'

export default function TransportScreen() {
    return (
        <>
            <View>
                <StatusBar color={theme.colors.primary} />
            </View>
            <ScrollView style={{ marginBottom: 40, marginLeft: 0, backgroundColor: 'whitesmoke' }}>

                <View style={{ marginTop: 0, marginLeft: 0 }} >
                    <Card style={{ width: '100%', marginLeft: 0, display: 'flex', flexDirection: 'row', backgroundColor: `${theme.colors.primary}`, height: '70%', justifyContent: 'space-between', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                        <Card.Actions >
                            <View style={styles.actions} >
                                <Image source={{ uri: "https://hormisdallenschoolsapp.com/hormisdallenwebapp/storage/app/public/images/events/1636776227_buss1.jpg" }} style={{ width: 150, height: 100, borderRadius: 20, alignItems: 'flex-end', marginTop: 40 }} />
                            </View>

                            <View style={styles.actions1}>
                                <Image source={{ uri: "https://hormisdallenschoolsapp.com/hormisdallenwebapp/storage/app/public/images/events/1636776247_bus2.jpg" }} style={{ width: 150, height: 100, borderRadius: 20, alignItems: 'flex-end', marginTop: 40 }} />
                            </View>
                        </Card.Actions>

                    </Card>

                </View>

            </ScrollView>


            <ScrollView style={{ marginTop: -180 }}>
                <View style={{ marginTop: -10, display: 'flex', backgroundColor: 'whitesmoke', flexDirection: 'row' }}>
                    <View style={{ marginLeft: 10 }}>
                        <Image source={{ uri: "https://hormisdallenschoolsapp.com/hormisdallenwebapp/storage/app/public/images/events/1636776269_bus3.jpg" }} style={{ width: 150, height: 120, borderRadius: 20, alignItems: 'flex-end', marginTop: 50 }} />
                    </View>
                    <View style={{ marginLeft: 5 }} >
                        <Image source={{ uri: "https://hormisdallenschoolsapp.com/hormisdallenwebapp/storage/app/public/images/events/1636776295_bus4.jpg" }} style={{ width: 150, height: 120, borderRadius: 20, alignItems: 'flex-end', marginTop: 50, marginLeft: 40 }} />
                    </View>
                </View>

            </ScrollView>

            <View style={{ marginTop: 0, backgroundColor: `${theme.colors.primary}`, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                <Text style={styles.text1}>
                    All school vehicles are for the day scholars and pick students at 7:00AM and drop them
                    at 4:00pm in the evening
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    left: {
        marginLeft: 20
    },
    right: {
        marginLeft: 20
    },
    actions: {
        marginLeft: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    actions1: {
        marginLeft: 30
    },
    actions2: {
        marginLeft: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        flex: 1,
        marginLeft: 30,
        fontWeight: 'bold',
        borderWidth: 1,
        borderRadius: 70,
        width: 100,
        marginTop: 40

    },

    text1: {
        width: '100%',
        height: 80,
        marginLeft: 8,
        fontWeight: 'bold',
        marginRight: 3,
        color: 'white',
        marginTop: 10,
        padding: 5,
        marginHorizontal: 10,
        fontSize: 15


    },
})

