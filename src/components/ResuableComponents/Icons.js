import React from "react";

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';

export const MaterialIcon = ({ name, size, color }) => <MaterialCommunityIcons name={name} size={size} color={color} />
export const IonIcon = ({ name, size, color }) => <Ionicons name={name} size={size} color={color} />
export const EvilIcon = ({ name, size, color }) => <EvilIcons name={name} size={size} color={color} />
export const FontAwesomeIcon = ({ name, size, color }) => <FontAwesome5 name={name} size={size} color={color} />
//hotel //cc-diner-club
export const Material = ({ name, size, color }) => <MaterialIcons name={name} color={color} size={size} />
//apartment //house //restaurant
export const EntypoIcons = ({ name, size, color }) => <Entypo name={name} color={color} size={size} />
//network

export const AntDesignIcon = ({ name, size, color }) => <AntDesign name={name} color={color} size={size} />
export const OctIcon = ({ name, size, color }) => <Octicons name={name} color={color} size={size} />