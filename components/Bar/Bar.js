import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styled";
import menu1 from '../../assets/image/menu1.png';
import menu2 from '../../assets/image/menu2.png';
import menu3 from '../../assets/image/menu3.png';
import menu4 from '../../assets/image/menu4.png';

// 하단바 컴포넌트
const Bar = () => {
  const [selectedMenu, setSelectedMenu] = useState("home"); // Initial selection

  const handleMenuPress = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <View style={styles.container}>
      <MenuItem
        image={menu1}
        text="홈"
        isSelected={selectedMenu === "home"}
        onPress={() => handleMenuPress("home")}
      />
      <MenuItem
        image={menu2}
        text="현재가"
        isSelected={selectedMenu === "current"}
        onPress={() => handleMenuPress("current")}
      />
      <MenuItem
        image={menu3}
        text="주문"
        isSelected={selectedMenu === "order"}
        onPress={() => handleMenuPress("order")}
      />
      <MenuItem
        image={menu4}
        text="잔고"
        isSelected={selectedMenu === "balance"}
        onPress={() => handleMenuPress("balance")}
      />
    </View>
  );
};

const MenuItem = ({ image, text, isSelected, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Image source={image} style={[styles.image, isSelected && styles.selectedImage]} />
    <Text style={[styles.text, isSelected && styles.selectedText]}>{text}</Text>
  </TouchableOpacity>
);



export default Bar;
