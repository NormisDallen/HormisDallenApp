import React from "react";
import { Appbar } from 'react-native-paper';
import { View, StyleSheet, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { theme } from "../../theme";
import AvatarComponent from "../ResuableComponents/Avatar";

const AppBar = ({ navigation, previous, title, subTitle, subStyles, titleStyles, showTitle, showAvatar }) => {


  return (
    <Appbar.Header
      dark={true}
      style={{
        backgroundColor: `${theme.colors.text}`,
        width: "100%",
        elevation: 0

      }} >
      <StatusBar style="dark" />
      {previous ?

        <Appbar.BackAction onPress={navigation.goBack} color={`${theme.colors.primary}`} />
        : null}

      <Appbar.Content
        title={showTitle ? title : null}
        titleStyle={showTitle ? titleStyles : null}
        subtitle={subTitle}
        subtitleStyle={subStyles}
      />
      {
        showAvatar &&
        <View style={styles.avatartStyles}>
          <AvatarComponent size={40}

            source="https://images.pexels.com/photos/1580226/pexels-photo-1580226.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </View>

      }

    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  avatartStyles: {
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    height: 40,
    borderRadius: 10,
    marginTop: 20
  }
})
export default AppBar