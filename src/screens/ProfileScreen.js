import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity ,Text} from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'



const ProfileScreen=({navigation})=>{
    return (
        <Background>
          <Logo />
          <Button
            mode="outlined"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
              })
            }
          >
            Logout
          </Button>
        </Background>
      )

}


export default ProfileScreen;