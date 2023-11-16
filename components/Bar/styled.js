import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: "100%",
      height: "10%",
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    item: {
      alignItems: 'center',
    },
    image: {
      width: 22,
      height: 22,
      marginBottom: 10
    },
    text: {
      fontSize: 10,
      color: "#74736C",
    },
    selectedImage: {
      tintColor: '#FFDD79', 
    },
    selectedText: {
      color: '#74736C',
    },
    
  });

  export default styled;