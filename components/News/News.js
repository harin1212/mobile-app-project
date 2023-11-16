import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Linking } from "react-native";
import styles from "./styled.js";
import * as Animatable from "react-native-animatable";


const NewsBox = ({ text, link }) => {
  const handlePress = () => {
    Linking.openURL(link);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Animatable.View
        style={styles.newsBox}
        animation={{
          from: { translateY: -10 },
          to: { translateY: 10 },
          easing: "linear",
        }}
        iterationCount="infinite"
        duration={2000}
        useNativeDriver
      >
        <Text style={styles.newstxt}>{text}</Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

// 뉴스 컴포넌트
const News = () => {
  const newsItems = [
    { text: "#동전주", link: "https://news.google.com/search?q=%EB%8F%99%EC%A0%84%EC%A3%BC&hl=ko&gl=KR&ceid=KR%3Ako" },
    { text: "#배당금", link: "https://news.google.com/search?q=%EB%B0%B0%EB%8B%B9%EA%B8%88&hl=ko&gl=KR&ceid=KR%3Ako" },
    { text: "#CPI", link: "https://news.google.com/search?q=CPI&hl=ko&gl=KR&ceid=KR%3Ako" },
    { text: "#공매도", link: "https://news.google.com/search?q=%EA%B3%B5%EB%A7%A4%EB%8F%84&hl=ko&gl=KR&ceid=KR%3Ako" },
    { text: "#금리", link: "https://news.google.com/search?q=%EA%B8%88%EB%A6%AC&hl=ko&gl=KR&ceid=KR%3Ako" },
    { text: "#플개부짱", link: "https://news.google.com/search?q=%EC%8B%A0%ED%95%9C%ED%88%AC%EC%9E%90%EC%A6%9D%EA%B6%8C&hl=ko&gl=KR&ceid=KR%3Ako" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.topText}>뉴스 키워드</Text>

      <View style={styles.newsWrap1}>
        {newsItems.slice(0, 3).map((item, index) => (
          <NewsBox key={index} text={item.text} link={item.link} />
        ))}
      </View>

      <View style={styles.newsWrap2}>
        {newsItems.slice(3).map((item, index) => (
          <NewsBox key={index} text={item.text} link={item.link} />
        ))}
      </View>
    </View>
  );
};

export default News;
