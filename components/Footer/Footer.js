import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.footerContent}>
        <Text style={styles.footerText}>H&H증권</Text>
        <Text style={styles.disclaimer}>
          H&H증권에서 제공하는 투자 정보는 고객의 투자 판단을 위한 단순 참고용일 뿐,
          투자 제안 및 권유, 종목 추천을 위해 작성된 것이 아닙니다
        </Text>
      </View>
      <View style={styles.bottomLinks}>
        <Text style={styles.linkText}>
          고객센터 | 투자 유의사항 | 개인정보처리방침 | 신용정보 활용체제
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.20)",
    padding: 25,
    marginTop: 30,
  },
  footerContent: {
    marginBottom: 20,
  },
  footerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  disclaimer: {
    fontSize: 12,
    color: "#FFF",
    marginTop: 20,
  },
  bottomLinks: {
    marginTop: 10,
  },
  linkText: {
    color: "#FFF",
    fontSize: 12,
  },
});

export default Footer;
