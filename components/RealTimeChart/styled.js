import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      margin: 20,
    },
    topText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
      marginLeft: 5,
    },
    chartBar: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
    },
    chartText: {
      fontSize: 15,
      color: "grey",
      padding: 20,
    },
    chartSelectedText: {
      fontWeight: "bold",
      color: "black",
    },
    stockItem: {
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
    rank: {
      fontSize: 16,
      marginRight: 10,
    },
    stockImg: {
      width: 40,
      height: 40,
      marginHorizontal: 10,
    },
    heartImg: {
      width: 20,
      height: 20,
    },
    textContainer: {
      flex: 1,
    },
    stockName: {
      fontSize: 16,
      fontWeight: "bold",
    },
    priceChangeContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    stockPrice: {
      fontSize: 12,
      marginRight: 5,
      marginTop: 5,
    },
    stockChange: {
      fontSize: 10,
      marginLeft: 100
    },
  });

  export default styles;