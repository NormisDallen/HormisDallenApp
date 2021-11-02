import React from "react";
import { Appbar, Badge } from 'react-native-paper';
import { theme } from "../../theme";
import { View, StyleSheet, Platform } from "react-native";


const AppBar = ({ navigation, previous, title, titleStyle, showBadge, elevate }) => {

  return (
    <Appbar.Header

      style={{
        backgroundColor: `${theme.colors.text}`,
        width: "100%",
        marginBottom: 0,
        alignItems: 'center',
        marginLeft: 30,
        color: `${theme.colors.primary}`,
        elevation: 3

      }}
    >

      {previous ?

        <Appbar.BackAction onPress={navigation.goBack} color={`${theme.colors.primary}`} />
        : null}

      <Appbar.Content
        title={title}
        titleStyle={titleStyle}
      />




    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  appHeaderStyle: {
    backgroundColor: `${theme.colors.primary}`,
    width: "100%",
  },
  badgeStyle: {
    position: 'absolute',
    top: 5, right: 5,
    color: `${theme.colors.primary}`,
    backgroundColor: "#ffffff",
    fontWeight: "700",
    fontSize: 10,
    zIndex: 20

  },
  titleStyle: {
    marginTop: -10,
    color: `${theme.colors.primary}`
  },
})
export default AppBar