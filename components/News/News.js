import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Animatable from 'react-native-animatable';

const News = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>뉴스 키워드</Text>

      <View style={styles.newsWrap}>
        <NewsBox text="#동전주" />
        <NewsBox text="#배당금" />
        <NewsBox text="#CPI" />
        <NewsBox text="#공매도" />
      </View>

      <View style={styles.newsWrap}>
        <NewsBox text="#금리" />
        <NewsBox text="#신한알파" />
        <NewsBox text="#플개부짱" />
      </View>
    </View>
  );
};

const NewsBox = ({ text }) => (
  <Animatable.View
    style={styles.newsBox}
    animation={{
      from: { translateX: 500 },
      to: { translateX: -500 },
    }}
    iterationCount="infinite"
    duration={5000} // Adjust the duration as needed
    easing="linear"
  >
    <Text style={styles.newstxt}>{text}</Text>
  </Animatable.View>
);

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  topText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
    marginLeft: 5,
    marginBottom: 10,
  },
  newsWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  newsBox: {
    width: 90,
    backgroundColor: "#FFF",
    borderRadius: 30,
    padding: 10,
    margin: 10,
  },
  newstxt: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: "center",
  },
});

export default News;
