import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {  Text, View } from 'react-native'
import { Appbar, Badge } from 'react-native-paper';
import { theme } from "../../theme";
import SearchComponent from '../Search/Search';

const EmptyAppBar = ({ navigation, previous , placeholder}) => {
    return (
        <Appbar.Header
            style={{
                backgroundColor: `${theme.colors.text}`,
                width: "100%",
                color: `${theme.colors.primary}`,
                elevation: 0

            }}
        >
            <StatusBar style="dark" />
            {previous ?

                <Appbar.BackAction onPress={navigation.goBack} color={`${theme.colors.primary}`} />
                : null}
            <View
                style={[{ flex: 1 }]}>
                <SearchComponent
                    searchStyles={{
                        elevation: 4,
                        borderRadius: 10,
                        marginTop: 5,
                        marginBottom: 10,
                        marginLeft: -10,
                        marginRight:20,
                        backgroundColor: `${theme.colors.text}`,
                        height: 42,
                        borderRadius: 20,
                        color: `${theme.colors.primary}`,
                        width: theme.dimensions.width - 50
                    }}
                    placeholder={placeholder}
                />
            </View>
            <View style={{marginLeft:20}}>

            </View>

        </Appbar.Header>
    )
}

export default EmptyAppBar


