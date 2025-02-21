import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, Alert} from 'react-native';
import {Button} from 'react-native-elements'; 
import {connect} from 'react-redux'; 
import productImages from '../../../../assets/productImages';

class BroomProduct extends Component {

  handleAddToCart = () => {
    const {POST_cart, isLoggedIn} = this.props; 

    if (!isLoggedIn) {
      Alert.alert('請先登入會員', '您必須登入才能將商品加入購物車');
      return; 
    }

    POST_cart({
      product_id: 7,
      count: 1,
    });

    Alert.alert('加入購物車成功', '已將多功能掃把加入購物車');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.productContainer}>
     
          <Image
            source={productImages['broom.png']}
            style={styles.productImage}
          />
        
          <Text style={styles.productName}>多功能掃把</Text>
    
          <Text style={styles.productDescription}>
            這款多功能掃把不僅清潔力強大，更具備靈活的設計，無論是細小的角落還是大面積地板，都能輕鬆應對。每次清掃後，你都能看到閃亮如新的地面，讓居家清潔變得輕鬆愉快。
          </Text>
        
          <Text style={styles.productPrice}>$499</Text>
     
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


const mapDispatchToProps = dispatch => {
  return {
    POST_cart: payload => dispatch({type: 'cart/POST_cart', payload}),
  };
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.member.isLoggedIn, 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BroomProduct);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  productContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
    marginTop: 15,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 20,
    color: 'black',
    textAlign: 'justify',
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  productPrice: {
    fontSize: 20,
    color: 'red',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#F84930', 
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10, 
  },
  buttonTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
