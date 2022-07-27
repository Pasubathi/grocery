import React from "react";
import  { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES, icons, FONTS } from  "../constants"
const Home = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.section1}>
                <TouchableOpacity style={styles.menuSection}>
                    <Image source={icons.menu} style={styles.menu} />
                </TouchableOpacity>
                <View style={styles.titleSection}>
                    <Text style={styles.menuTitle}>Home</Text>
                </View>
                <TouchableOpacity style={styles.cartSection}>
                    <Image source={icons.cart} style={styles.menu} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white
    },
    section1:{
        flexDirection: 'row',
        alignItems:'center',
        marginHorizontal: SIZES.radius,
        height: 80,
    },
    menuSection:{
       flex: 1,
       width: '20%'
    },
    cartSection:{
       width: '20%',
       right: 0
    },
    titleSection:{
       flex: 1,
       width: '60%'
    },
    menuTitle:{
        width: '60%',
        alignItems:'center',
        justifyContent: 'center',
        color: COLORS.darkGreen,
        ...FONTS.h2
    },
    menu: {
        width: 25,
        height: 25,
        color: COLORS.gray2
    }
})

export default Home;