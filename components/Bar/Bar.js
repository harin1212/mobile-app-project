import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import menu1 from '../../assets/image/menu1.png'
import menu2 from '../../assets/image/menu2.png'
import menu3 from '../../assets/image/menu3.png'
import menu4 from '../../assets/image/menu4.png'

const Bar = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.item}>
          <Image source={menu1} style={styles.image} />
          <Text style={styles.text}>홈</Text>
        </View>
        <View style={styles.item}>
          <Image source={menu2} style={styles.image} />
          <Text style={styles.text}>현재가</Text>
        </View>
        <View style={styles.item}>
          <Image source={menu3} style={styles.image} />
          <Text style={styles.text}>주문</Text>
        </View>
        <View style={styles.item}>
          <Image source={menu4} style={styles.image} />
          <Text style={styles.text}>잔고</Text>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      flexDirection: 'row',
      height: 87,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    item: {
      alignItems: 'center',
    },
    image: {
      width: 24,
      height: 24,
      margin: 25,
      marginTop: 25,
      marginBottom: 5,
    },
    text: {
      fontSize: 10,
      color: "#8863E4",
    },
  });

export default Bar;