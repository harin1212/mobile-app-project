import React from "react";
import { View, ScrollView,StyleSheet } from "react-native";
import Header from "../../components/Header/Header.js";
import Bar from "../../components/Bar/Bar.js";
import RealTimeChart from "../../components/RealTimeChart/RealTimeChart.js";
import TopMenu from "../../components/TopMenu/TopMenu.js";
import StockIndex from "../../components/StockIndex/StockIndex.js";
import News from "../../components/News/News.js";
import Interested from "../../components/Interested/interested.js";
import Footer from "../../components/Footer/Footer.js";
function Main() {
  return (
    <View style={styles.container}>
      <Header />
        <TopMenu />
      <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
        <StockIndex />
        <Interested />
        <RealTimeChart />
        <News />
        <Footer />
      </ScrollView>
        <Bar />
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingTop: 10, 
    alignItems: "center",
  },
  scrollViewContainer: {
    justifyContent: 'center',
    flexGrow: 1,
    width: "100%"
  },
});

export default Main;
