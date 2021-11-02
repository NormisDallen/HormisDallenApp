import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactUs from './ContactsScreen/contactUs';
import About from './AboutScreen/About';
import Application from './Applications/Application';
import Faqs from './FaqsScreen/Faqs';
import Sports from './SportsScreen/Sports';
import TransportScreen from './TransportScreen/TransportScreen';
import EditProfile from './ProfileScreen/editProfile';
import MoreScreen from './MoreScreen/MoreScreen';
import { theme } from '../theme';
import ResetPasword from './AuthScreen/UpdatePassword';
import ProfileDetails from './ProfileScreen/ProfileDetails';
import SchoolImages from './SchoolImages';



const Stacks = createNativeStackNavigator();

export default function MainStack() {

  return (
    
<Stacks.Navigator
        initialRouteName="More"
        screenOptions={{
          headerStyle:{
            backgroundColor:`${theme.colors.primary}`
          },
          headerTitleStyle:{
            color:'white'
          },
        }}
      >


      <Stacks.Screen name="More" component={MoreScreen} />

      <Stacks.Screen name="About School" component={About} 
        />
        <Stacks.Screen name="Contact Us" component={ContactUs}
        />
        <Stacks.Screen name="Fequently Asked Questions" component={Faqs} 
        />

        <Stacks.Screen name="School Application Form" component={Application} 
        />

       <Stacks.Screen name="School Transport" component={TransportScreen} 
        />
       <Stacks.Screen name="Sports" component={Sports} 
        />
          <Stacks.Screen name="Edit Profile" component={EditProfile} />

          <Stacks.Screen name="Update Passward" component={ResetPasword} />

          <Stacks.Screen name="Your Profile" component={ProfileDetails} />

          <Stacks.Screen name="Gallery" component={SchoolImages} />
      </Stacks.Navigator>

    
   
      


  );
}
