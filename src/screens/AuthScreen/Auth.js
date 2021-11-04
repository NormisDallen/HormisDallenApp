import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./Login";
import { theme } from "../../theme"
import Register from "./Register";
import AuthBar from '../../components/AppBar/AuthBar'
import Otp from "./Otp";
import Resend from "./Resend";
import SendForgotPasswordEmail from "./SendEmail";
import ForgotOtpPassword from "./ForgotPassswordOtp";
import ResetPasword from "./UpdatePassword";

const Stack = createNativeStackNavigator();


const Auth = () => {

  return (

    <Stack.Navigator
      initialRouteName="Login"
      headerMode="screen"
    >



      <Stack.Screen
        name="Login Here"
        component={Login}
        options={{ headerShown: false }}

      />


      {/*otp */}
      <Stack.Screen name="Otp"
        component={Otp}
        options={({ route }) => ({
          header: (props) => <AuthBar
            title={`Email Verification`}
            titleStyle={{ fontSize: 20, fontWeight: 'bold', color: theme.colors.primary, alignSelf: "center", }}
            headerStyles={{ backgroundColor: theme.colors.text, elevation: 0 }}
          />
        })}

      />
      {/*otp */}

      {/*resend email */}
      <Stack.Screen name="Resend"
        component={Resend}
        options={({ route }) => ({
          header: (props) => <AuthBar
            title={`Resend Otp`}
            titleStyle={{ fontSize: 20, fontWeight: 'bold', color: theme.colors.primary, }}
            headerStyles={{ backgroundColor: theme.colors.text, elevation: 0 }}
          />
        })}

      />

      {/*resend email */}
      <Stack.Screen
        name="Create an Account"
        options={{
          headerTitleStyle: {
            color: theme.colors.primary,
            fontSize: 28,
            fontWeight: '900'
          }
        }}
        component={Register}


      />
      {/*sendemail */}
      <Stack.Screen
        name="SendEmail"
        component={SendForgotPasswordEmail}
        options={({ route }) => ({
          header: (props) => <AuthBar
            title={`SendEmail`}
            titleStyle={{ fontSize: 28, fontWeight: 'bold', color: theme.colors.primary }}
            headerStyles={{ backgroundColor: theme.colors.text, elevation: 0 }}
          />
        })}
      />
      {/*send email */}

      {/*password otp */}
      <Stack.Screen
        name="ForgotPasswordOtp"
        component={ForgotOtpPassword}
        options={{
          headerShown: false
        }}
      />
      {/*password otp */}

      {/*new password */}
      <Stack.Screen
        name="NewPassword"
        component={ResetPasword}
        options={({ route }) => ({
          header: (props) => <AuthBar
            title={`Reset Password`}
            titleStyle={{ fontSize: 28, fontWeight: 'bold', color: theme.colors.primary }}
            headerStyles={{ backgroundColor: theme.colors.text, elevation: 0 }}
          />
        })}
      />
      {/*new password */}


    </Stack.Navigator>

  )
}
export default Auth;