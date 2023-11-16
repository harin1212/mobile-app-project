import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      margin: 20,
    },
    topText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 40,
      marginLeft: 5,
      marginBottom: 10,
    },
    newsWrap1: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
    newsWrap2: {
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

  export default styles;