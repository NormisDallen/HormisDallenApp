{/**import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Register from './Register'
import SendForgotPasswordEmail from './SendEmail';
import ForgotOtpPassword from './ForgotPassswordOtp';
import Otp from './Otp';
import ResetPasword from './UpdatePassword';
import Resend from './Resend';

const Stack = createNativeStackNavigator();

export default function AuthStack() {

  return (
    
      <Stack.Navigator
        initialRouteName="Login"
      >

     
        <Stack.Screen name="register" component={Register} 
         options={{
        
          headerShown:false
        }}
         />
         <Stack.Screen name="reset" component={ResetPasword} 
         options={{
        
          headerShown:false
        }}
         />
       
        <Stack.Screen name="resend" component={Resend} 
         options={{
        
          headerShown:false
        }}
         />
         <Stack.Screen name="emailPassward" component={SendForgotPasswordEmail} 
         options={{
        
          headerShown:false
        }}
         />
         <Stack.Screen name="otp" component={Otp} 
         options={{
        
          headerShown:false
        }}
         />
       
       <Stack.Screen name="forgotOtp" component={ForgotOtpPassword} options={{
        
          headerShown:false
        }} />
        </Stack.Navigator>
   
  );
} */}