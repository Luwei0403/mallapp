import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";
import { Button } from "react-native-elements"; 
import { connect } from "react-redux";
import productImages from "../../../../assets/productImages";

class AirConProduct extends Component {

  handleAddToCart = () => {
    const { POST_cart, isLoggedIn } = this.props;

    if (!isLoggedIn) {
      Alert.alert("請先登入會員", "您必須登入才能將商品加入購物車");
      return; 
    }

    POST_cart({
      product_id: 42, 
      count: 1, 
    });

    Alert.alert("加入購物車成功", "已將智慧冷暖空調加入購物車");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.productContainer}>
      
          <Image
            source={productImages["aircon.png"]}
            style={styles.productImage}
          />
       
          <Text style={styles.productName}>智慧冷暖空調</Text>
    
          <Text style={styles.productDescription}>
            這款智慧冷暖空調讓你無論身處夏日炎熱還是冬季嚴寒，都能享受舒適的室內溫度。節能省電，智能控制，為你提供高效又貼心的家庭體驗。
          </Text>
        
          <Text style={styles.productPrice}>$29000</Text>
   
          <Button
            title="加入購物車"
            onPress={this.handleAddToCart}
            buttonStyle={styles.addButton}
            titleStyle={styles.buttonTitle}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.member.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    POST_cart: (payload) => dispatch({ type: "cart/POST_cart", payload }), 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AirConProduct);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  productContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  productImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
    marginTop: 15,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 20,
    color: "black",
    textAlign: "justify",
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  productPrice: {
    fontSize: 20,
    color: "red",
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: "#F84930",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
