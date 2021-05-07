import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LoginPage = () => {
    return (
        <View style={Styles.mainWrapper}>
            <Text style={Styles.welcome}>WELCOME</Text>
        </View>
    )
}

export default LoginPage

const Styles = StyleSheet.create({
    mainWrapper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'teal',
        flexDirection:'row'
    },
    welcome:{
        fontSize:28,
        fontWeight:'bold',
        color:'#FFF',
        
    }
})