import React, { useState, useRef, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView,TouchableOpacity, View,Text,StyleSheet,ImageBackground} from 'react-native';
import { Card, HelperText, Subheading, TextInput } from 'react-native-paper';
import { confirmPasswordError, emailError, EmptyError, passwordError, numberError, EmptyFieldError } from '../../helpers';
import { theme } from '../../theme';
import ButtonComponent from '../../components/Button/Button';
import Loading from '../../components/Indicator/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/slices/authSlice/actions';
import { constantstyles } from '../../Constants/constanstStyles'
import img11 from '../../../assets/images/img11.jpg'




const Register = ({ navigation }) => {

  const { user } = useSelector(({ authSlice }) => authSlice)

  //useEffect
  useEffect(() => {
    if (user?.errorMessageRegister != null || user?.registerSuccess != null) {
      setLoading(false)
    }
    if (user?.registerSuccess != null) {
      //alert('here');
      setEmail('')
      setConfirmPassword('')
      setPassword('')
      setDateOfBirth('')
      setName('')
      navigation.navigate('Otp')

    }

  }, [user])
  //useEffect



  //dispatch
  const dispatch = useDispatch()
  //dispatch


  //input fields
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [lastName, setlastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [dateofBirth, setDateOfBirth] = useState("");


  //select date

  //select date

  const [loading, setLoading] = useState(false);


  //phone area
 
  //password icons
  const [passwordType, setPasswordType] = useState(true)
  const [confirmPasswordType, setConfirmPasswordType] = useState(true)

  //handle username error
  const [handleNameError, sethandleNameError] = useState(false)
  const [handlelastNameError, setHandlelastNameError] = useState(false)



  //handleRegister
  const onRegister = () => {

    const userInfo = {
      fname:name,
      lname:lastName,
      email,
      password,
      dob: dateofBirth,
      c_password:confirmPassword
    }
    setLoading(true)

    dispatch(registerUser(userInfo))

  }

  //disable
  const disableButton = () => {
    if (EmptyFieldError(name) || EmptyFieldError(email) || EmptyFieldError(lastName) || EmptyFieldError(password)
     || EmptyFieldError(confirmPassword)
       || EmptyFieldError(dateofBirth)
    ) {
      return true
    }
    else {
      return false;
    }

  }
  //disbale


  return (
    <>


    
    <Card>

    <View>
    <ImageBackground source={ img11 } style={{width:700,height:700,flex:2}} resizeMode="cover" />
    </View>
      <KeyboardAvoidingView
        style={{ flex: 1,  }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          style={{
            borderTopRightRadius: theme.roundness,
            borderTopLeftRadius: theme.roundness,
            paddingTop: '10%',
          }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'always'}
          contentContainerStyle={{ paddingBottom: 20 }}
        >

          {loading &&
            <View
              style={[constantstyles.absoluteStyles, {
                top: theme.dimensions.height / 1.5,
                left: theme.dimensions.width / 2.4
              }]}
            >
              <Loading />
            </View>

          }
          { /*loading */}




          {/**<View style={[{ marginHorizontal: 10, marginTop: 2, justifyContent: "center", marginBottom: 10 }]}>
            <Text
              style={{
                alignSelf: "center",
                color: theme.colors.primary,
                fontSize: 28,
                fontWeight: "900",
                marginBottom:30

              }}
            >Create An Account</Text>
          </View> */}


          {/**first name */}
          <View style={styles.spaceTop}>
            <TextInput
              label="First name"
              onChangeText={(text) => setName(text)}

              value={name}
              style={{
                backgroundColor: theme.colors.text,
                width: '96%',
                alignSelf: 'center',
                borderBottomWidth: 0,
                height: 55,
                marginBottom:20,
                borderColor: theme.colors.disabled
              }}
              left={<TextInput.Icon name="account-outline" color={theme.colors.primary} size={27} />}
              theme={{ colors: { text: 'black', primary: theme.colors.primary }, borderWith: 2 }}
              mode={'flat'}
              autoCorrect={false}
              error={handleNameError && EmptyError(name, `first name`)}
              placeholder="enter first name"
              outlineColor={theme.colors.primary}
              underlineColor={theme.colors.disabled}
              selectionColor={theme.colors.primary}
              textContentType="name"

            />
            <HelperText type="error" visible={true}>
              {handleNameError && EmptyError(name, `name`)}
            </HelperText>
          </View>

          {/*first name */}


          {/*second name */}

          <View style={styles.spaceTop}>
            <TextInput
              label="Last name"
              onChangeText={(text) => setlastName(text)}

              value={lastName}
              style={{
                backgroundColor: theme.colors.text,
                color: 'red',
                width: '96%',
                alignSelf: 'center',
                borderBottomWidth: 0,
                height: 55,
                marginBottom:20,
                borderColor: theme.colors.disabled

              }}
              left={<TextInput.Icon name="account-outline" color={theme.colors.primary} size={27} />}

              theme={{ colors: { text: 'black', primary: theme.colors.primary }, borderWith: 2 }}
              mode={'flat'}
              autoCorrect={false}
              error={handlelastNameError && EmptyError(lastName, `last name`)}
              placeholder="enter last name"
              outlineColor={theme.colors.primary}
              underlineColor={theme.colors.disabled}
              selectionColor={theme.colors.primary}
              textContentType="name"
            />
            <HelperText type="error" visible={true}>
              {handlelastNameError && EmptyError(address, `address`)}
            </HelperText>
          </View>
          {/*second name */}



          {/*date of birth */}


          {/**<View style={[styles.spaceTop]}>
            <Text style={{ color:theme.colors.placeholder, marginLeft:30, fontWeight:"500", fontSize:18 }}>BIRTH DAY</Text>
            <DateField
              styleInput={styles.inputBorder}
              labelDate="DD"
              labelMonth="MM"
              labelYear="YYYY"
              onSubmit={(value) => setDateOfBirth(moment(value).format("DD/MM/YYYY"))}
            />

          </View> */}


          {/*date of birth */}

          {/*email */}
          {/*email */}


          <View style={styles.spaceTop}>
            <TextInput
              label="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
              style={{
                backgroundColor: theme.colors.text,
                color: 'red',
                width: '96%',
                alignSelf: 'center',
                borderBottomWidth: 0,
                height: 55,
                marginBottom:20,
                borderColor: theme.colors.disabled
              }}

              left={<TextInput.Icon name="email-outline" color={theme.colors.primary} size={27} />}
              theme={{ colors: { text: 'black', primary: theme.colors.primary }, borderWith: 2 }}
              mode={'flat'}
              autoCorrect={false}
              error={emailError(email)}
              placeholder="enter username"
              outlineColor={theme.colors.primary}
              underlineColor={theme.colors.disabled}
              selectionColor={theme.colors.primary}
              textContentType="emailAddress"
            />
            <HelperText type="error" visible={true} style={styles.bottom}>
              {emailError(email)}
            </HelperText>
          </View>
          {/*email */}
          {/*email */}



          {/*password */}
          <View style={[styles.spaceTop]}>
            <TextInput
              label="Password"
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={passwordType}
              value={password}
              style={{
                backgroundColor: theme.colors.text,
                color: 'red',
                width: '96%',
                alignSelf: 'center',
                borderBottomWidth: 0,
                height: 55,
                marginBottom:20,
                borderColor: theme.colors.disabled
              }}
              left={

                <TextInput.Icon
                  name={passwordType ? "eye-off-outline" : "eye"}
                  style={{ marginRight: 15, padding: 5 }}
                  color={theme.colors.primary}
                  size={27}
                  onPress={() => setPasswordType(!passwordType)}
                />
              }

              theme={{ colors: { text: 'black', primary: theme.colors.primary }, borderWith: 2 }}
              mode={'flat'}
              autoCorrect={false}
              error={passwordError(password)}
              placeholder="enter password"
              outlineColor={theme.colors.primary}
              underlineColor={theme.colors.disabled}
              selectionColor={theme.colors.primary}

            />
            <HelperText type="error" visible={true}>
              {passwordError(password)}
            </HelperText>
          </View>
          {/*password */}
          {/*confirm password */}
          <View style={[styles.spaceTop]}>
            <TextInput
              label="Confirm passward"
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry={confirmPasswordType}
              value={confirmPassword}
              style={{
                backgroundColor: theme.colors.text,
                color: 'red',
                width: '96%',
                alignSelf: 'center',
                borderBottomWidth: 0,
                height: 55,
                marginBottom:20,
                borderColor: theme.colors.disabled
              }}
              left={
                <TextInput.Icon
                  name={confirmPasswordType ? "eye-off-outline" : "eye"}
                  style={{ marginRight: 15 }}
                  color={theme.colors.primary}
                  onPress={() => setConfirmPasswordType(!confirmPasswordType)}
                  size={27} />}

              theme={{ colors: { text: 'black', primary: theme.colors.primary }, borderWith: 2 }}
              mode={'flat'}
              autoCorrect={false}
              error={confirmPasswordError(password, confirmPassword)}
              placeholder="confirm password"
              outlineColor={theme.colors.primary}
              underlineColor={theme.colors.disabled}
              selectionColor={theme.colors.primary}
              onSubmitEditing={onRegister}
            />
            <HelperText type="error" visible={true}>
              {confirmPasswordError(password, confirmPassword)}
            </HelperText>
          </View>
          {/*confirm password */}

          <View
            style={{ padding: 10, alignSelf: 'center',color:'white' }}
          >
            {/*button */}

            <ButtonComponent mode="outlined" text="Continue"   color={theme.colors.text} 
              style={{
                marginTop: 40,
                
              borderWith:10,
              backgroundColor:'#006a4e',
                height:30,
                width:'50vh',
                marginLeft:10,
                borderColor: theme.colors.primary,
                marginHorizontal: 10,
                

              }}
              contentStyle={{
                fontSize: 8,
                 height: 25,
                 color:'white'
              }}
              disabled={disableButton()}
              onPress={onRegister}
            />
            {/*button */}

            {/*error message */}
            <View style={[{ marginHorizontal: 10, marginTop: 2, justifyContent: "center", marginBottom: 10, marginTop: 10 }]}>
              {
                user?.errorMessageRegister !== null &&

                <View style={[constantstyles.flexStyles, {
                  justifyContent: "center", backgroundColor: "red", borderRadius: 10, padding: 5,
                }]}>
                  <Text style={{ color: theme.colors.text }}>
                    {`${user?.errorMessageRegister}`}</Text>
                </View>




              }

              {/*sucess message */}
              {
                user?.registerSuccess != null &&
                <View style={[constantstyles.resideViews,
                {
                  backgroundColor: "green", borderRadius: 20, padding: 5
                }
                ]}>
                  <Text style={{ color: theme.colors.text }}>
                    {`An email confirmation link has been sent to your email. Confirm and Login`}</Text>
                </View>
              }

              {/*success message */}


            </View>
            {/*error message */}
            <TouchableOpacity activeOpacity={0.4}>
              <Text
                style={{ color: 'black', textAlign: 'center', paddingTop: 40 }}
              >
                Already have and Account?{' '}
                <Text
                onPress={()=>{navigation.navigate('Login')}}
                  style={{ fontWeight: 'bold', fontSize: 17, color: '#006a4e' }}
                >
                  Login
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      </Card>
     
   
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  spaceTop: {
    marginHorizontal: 30
  },
  top: {
    marginBottom: 10
  },
  inputBorder: {
    width: '30%',
    borderColor: '#cacaca',
    borderBottomWidth: 1,
    marginBottom: 20,
    height: 55
  }
})