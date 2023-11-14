import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

const RealTimeChart = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.TopText}> 실시간 차트</Text>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      height: "30%",
    },
    TopText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'left',
    },
  });

export default RealTimeChart;