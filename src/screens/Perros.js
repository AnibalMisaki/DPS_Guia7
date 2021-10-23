import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function Perros() {
    return (
        <ScrollView style={{flexDirection:'column',margin:10, paddingHorizontal:10}}> 
            <View>
                <Text style={styles.title}>Lista de Perros </Text>
            </View>
            <View style={styles.box}>
                <Image style={styles.img} source={require('../img/perro1.jpg')}></Image>
                <View style={styles.box_text}>
                    <Text style={styles.text_name}> Pastor Aleman </Text> 
                    <Text style={{paddingTop:20, fontSize: 15}}> Región de origen: Alemania </Text> 
                </View>
            </View>
            <View style={styles.box}>
                <Image style={styles.img} source={require('../img/perro2.jpg')}></Image>
                <View style={styles.box_text}>
                    <Text style={styles.text_name}>Syberian Husky</Text> 
                    <Text style={{paddingTop:20, fontSize: 15}}> Región de origen: Russia </Text> 
                </View>
            </View>
            <View style={styles.box}>
                <Image style={styles.img} source={require('../img/perro3.jpg')}></Image>
                <View style={styles.box_text}>
                    <Text style={styles.text_name}>Chow Chow</Text> 
                    <Text style={{paddingTop:20, fontSize: 15}}> Región de origen: China </Text> 
                </View>
            </View>
            <View style={styles.box}>
                <Image style={styles.img} source={require('../img/perro4.jpg')}></Image>
                <View style={styles.box_text}>
                    <Text style={styles.text_name}>Pastor ingles</Text> 
                    <Text style={{paddingTop:20, fontSize: 15}}> Región de origen: Inglaterra</Text> 
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 12,
        fontWeight: '700',
        fontFamily: 'sans-serif-medium'
    },

    box: {
        flexDirection:'row', 
        margin:10
    },

    box_text: {
        flexDirection:'column'
    },

    text_name: {
        fontWeight:'bold',
        fontSize: 18
    },

    img: {
        width: 70,
        height: 70,
        marginRight: 10
    }
});