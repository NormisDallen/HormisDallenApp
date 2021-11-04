import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import { Ionicons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from "../../theme";
import Landing from '../Landing';
import Menu from '../MenuScreen/Menu';
import { Badge, Avatar } from 'react-native-paper';
import Notifaction from '../Notifications/Notification'
import ProfileDetails from '../../screens/ProfileScreen/ProfileDetails';
import MoreScreen from '../MoreScreen/MoreScreen';
import MainStack from '../MainStack';

const Tab = createMaterialBottomTabNavigator()

const Home = ({ navigation }) => {
  return (
    <Tab.Navigator
      labeled={true}
      initialRouteName="Home"

      screenOptions={{
        tabBarColor: 'white',



        tabBarStyle: { position: 'absolute', BottomTabBarHeightContext: 10 },
        headerShown: false

      }}
      barStyle={{
        backgroundColor: theme.colors.text,
        borderRadius: 20

      }}
      activeColor={`${theme.colors.primary}`}
      inactiveColor={`${theme.colors.placeholder}`}

    >
      <Tab.Screen
        name="Landing"
        component={Landing}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />



      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: 'Notes',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='book' size={20} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"

        component={Notifaction}
        options={{
          tabBarLabel: 'notifications',

          tabBarIcon: ({ color }) => (
            <View>
              {/*show badge */}
              <Badge size={14} visible={true} style={{
                position: 'absolute',
                top: 1, right: 1,
                color: `${theme.colors.text}`,
                backgroundColor: `${theme.colors.primary}`,
                fontWeight: "300",
                fontSize: 10,
                zIndex: 20
              }}>
                1
              </Badge>
              {/*show badge */}
              <Ionicons name="notifications-outline" size={24} color={color} />

            </View>

          ),
        }}
      />




      <Tab.Screen
        name="More"
        component={MainStack}
        options={{

          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <TouchableOpacity activeOpacity={0.2}

            >
              <Ionicons name='apps' size={20} color={color} />
            </TouchableOpacity>

          ),

        }}
      />


    </Tab.Navigator>
  )
}

export default Home

{/**<Tab.Screen
        name="Profile"
        component={ProfileDetails}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <TouchableOpacity activeOpacity={0.2}
              
            >
              <Avatar.Image size={28} source={{ uri: "https://media.gettyimages.com/photos/hes-one-of-the-popular-guys-picture-id500721035?s=612x612" }}
                color={color}
                
              />
            </TouchableOpacity>

          ),

        }}
      /> */}
