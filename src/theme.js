import { DefaultTheme } from 'react-native-paper';
import {Dimensions} from "react-native"
//get height #90CAF9
const { height, width } = Dimensions.get("screen")
export const theme = {
  ...DefaultTheme,
  roundness: 27,
  
  colors: {
    ...DefaultTheme.colors,
    primary: '#012D6B',
    secondary:"#fff",
    accent: '#fefeff',
    background: '#ffffff',
    surface: '#F1F7ED',
    text: 'white',
    error: 'red',
    disabled: '#d3d3d3',
    placeholder: 'grey',
    backdrop: '#005500',
    ligthgray:"#d3d3d3",
    black:"#000000"
  },
  font: {
    regular: 20,
    medium: 15,
  },
  spacing: {
    padding: 2,
  },
  dimensions:{
    width,
    height,
  }
};
