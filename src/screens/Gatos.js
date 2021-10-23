import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
export default function Gatos() {
    return (
        <ScrollView style={{flexDirection:'column',margin:10, paddingHorizontal:10}}> 
            <View>
                <Text style={styles.title}>Lista de Gatos </Text>
            </View>
            <View style={styles.box}>
                <Image style={styles.img} source={require('../img/gato1.jpeg')}></Image>
                <View style={styles.box_text}>
                    <Text style={styles.text_name}>Gato Persa</Text> 
                    <Text style={{paddingTop:20, fontStyle:'italic', fontSize: 15}}> Región de origen: Irán </Text> 
                </View>
            </View>
            <View style={styles.box}>
                <Image style={styles.img} source={require('../img/gato2.jpg')}></Image>
                <View style={styles.box_text}>
                    <Text style={styles.text_name}>Gato Angora</Text> 
                    <Text style={{paddingTop:20,  fontSize: 15}}> Región de origen: Turquía </Text> 
                </View>
            </View>
            <View style={styles.box}>
                <Image style={styles.img} source={require('../img/gato3.jpg')}></Image>
                <View style={styles.box_text}>
                    <Text style={styles.text_name}>Gato Esfinge</Text> 
                    <Text style={{paddingTop:20,  fontSize: 15}}> Región de origen: Toronto </Text> 
                </View>
            </View>
            <View style={styles.box}>
                <Image style={styles.img} source={require('../img/gato4.jpeg')}></Image>
                <View style={styles.box_text}>
                    <Text style={styles.text_name}>Gato Siamés</Text> 
                    <Text style={{paddingTop:20,  fontSize: 15}}> Región de origen: Thailandia</Text> 
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