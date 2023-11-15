import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from "react-native";

const News = () => {

  return (
    <>
    <Text style={styles.topText}>뉴스 키워드</Text>
    <View style={styles.newsWrap}>
        <View style={styles.newsBox}>
            <Text style={styles.newstxt}>#동전주</Text>
        </View>
        <View style={styles.newsBox}>
            <Text style={styles.newstxt}>#배당금</Text>
        </View>
        <View style={styles.newsBox}>
            <Text style={styles.newstxt}>#CPI</Text>
        </View>
        <View style={styles.newsBox}>
            <Text style={styles.newstxt}>#코스피</Text>
        </View>
    </View>

    <View style={styles.newsWrap}>
        <View style={styles.newsBox}>
            <Text style={styles.newstxt}>#공매도</Text>
        </View>
        <View style={styles.newsBox}>
            <Text style={styles.newstxt}>#금리</Text>
        </View>
        <View style={styles.newsBox}>
            <Text style={styles.newstxt}>#신한알파</Text>
        </View>
        <View style={styles.newsBox}>
            <Text style={styles.newstxt}>#플개부짱</Text>
        </View>
    </View>

    </>
    
)};

const styles = StyleSheet.create({
    topText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 40,
        marginLeft: 5,
        marginBottom: 10
    },
    newsWrap:{
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    newsBox: {
        width: 90,   
        backgroundColor: "#FFF", 
        borderRadius: 30, 
        padding: 10,
        margin: 10
    },
    newstxt: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: "center",
    },
});

export default News;
