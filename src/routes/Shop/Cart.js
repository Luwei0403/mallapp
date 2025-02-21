import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import {ListItem, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import productImages from '../../assets/productImages'; 
import {scale} from 'react-native-size-matters';

class Cart extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    const {GET_cart} = this.props;
    GET_cart(loading => this.setState({loading}));
  }

  handleCountButton(item, type) {
    const {POST_cart} = this.props;
    const newCount =
      type === '+' ? parseInt(item.count) + 1 : parseInt(item.count) - 1;

   
    if (newCount <= 0) return;

    POST_cart({
      product_id: item.product_id,
      count: newCount,
    });
  }

  handleDeleteButton(item) {
    const {DELETE_cart} = this.props;
    DELETE_cart(item.product_id);
  }

  sumPrice() {
    const {cart_personal} = this.props;
    let total = 0;
    cart_personal.forEach(item => {
      total += item.price * item.count;
    });
    return total;
  }

  renderCartItem = ({item}) => {
    return (
      <ListItem bottomDivider>
    
        <Image
          source={productImages[item.images] || productImages['default']} 
          style={styles.product_image}
        />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>
            <View>
              <View style={styles.number_container}>
                <View style={styles.number_btn}>
                  <Button
                    title="-"
                    color="white"
                    buttonStyle={{backgroundColor: '#3cb371'}}
                    onPress={() => this.handleCountButton(item, '-')}
                  />
                </View>
                <View style={styles.number_input_container}>
                  <TextInput
                    style={styles.number_input}
                    editable={false}
                    value={item.count.toString()}
                    keyboardType={'numeric'}
                  />
                </View>
                <View style={styles.number_btn}>
                  <Button
                    title="+"
                    color="white"
                    buttonStyle={{
                      backgroundColor: '#3cb371',
                    }}
                    onPress={() => this.handleCountButton(item, '+')}
                  />
                </View>
              </View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  marginTop: 10,
                }}>{`售價: $${item.price}`}</Text>
              <Text
                style={styles.delete_btn}
                onPress={() => this.handleDeleteButton(item)}>
                移除此商品
              </Text>
            </View>
          </ListItem.Subtitle>
        </ListItem.Content>

  
        <ListItem.Content right>
          <Text style={styles.item_price}>{item.price * item.count}</Text>
        </ListItem.Content>
      </ListItem>
    );
  };

  render() {
    const {navigation, cart_personal} = this.props;
    const {loading} = this.state;

    return (
      <SafeAreaView style={{flex: 1}}>
        {loading ? (
          <ActivityIndicator style={styles.loading_container} />
        ) : cart_personal.length === 0 ? (
          <View style={styles.emptyCart}>
            <Text style={styles.emptyCartText}>購物車尚無商品</Text>
          </View>
        ) : (
          <FlatList
            keyExtractor={item => item.product_id.toString()}
            data={cart_personal}
            renderItem={this.renderCartItem}
            contentContainerStyle={{paddingBottom: 100}}
          />
        )}
        <View style={styles.total}>
          <View style={styles.totalcontainer}>
            <Text style={styles.total_text}>合計：{this.sumPrice()}</Text>
          </View>
          <View style={styles.buycontainer}>
            <Button
              title="確認購買"
              buttonStyle={styles.confirm_button}
              titleStyle={styles.confirm_button_text}
              onPress={() => {
                if (cart_personal.length > 0) {
          
                  Alert.alert('購買成功！', '感謝您的購買', [
                    {
                      text: '確定',
                      onPress: () => {
                        const {CLEAR_cart} = this.props;
                        CLEAR_cart(); 
                      },
                    },
                  ]);
                } else {
                  // If Cart is empty
                  Alert.alert('購買失敗！', '購物車內尚無商品', [
                    {
                      text: '確定',
                    },
                  ]);
                }
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  product_image: {
    width: scale(100),
    height: scale(100),
  },
  emptyCart: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: scale(18),
    color: '#888',
  },
  notfound_btn: {
    marginTop: scale(20),
    backgroundColor: '#3cb371',
  },
  item_price: {
    color: 'red',
    fontSize: scale(20),
  },
  number_container: {
    height: scale(40),
    width: scale(130),
    marginTop: scale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number_btn: {
    width: '20%',
    justifyContent: 'center',
  },
  number_input_container: {
    width: '60%',
    paddingLeft: scale(5),
    paddingRight: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  number_input: {
    height: '100%',
    width: scale(40),
    borderColor: 'gray',
    borderWidth: scale(1),
    textAlign: 'center',
    justifyContent: 'center',
  },
  loading_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  delete_btn: {
    color: '#3cb371',
    marginTop: scale(5),
  },
  total: {
    width: '100%',
    height: scale(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0077ff',
    position: 'absolute',
    bottom: scale(0),
    paddingLeft: scale(20),
  },
  total_text: {
    fontSize: scale(22),
    color: 'white',
    left: scale(40),
  },
  confirm_button: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    backgroundColor: '#FFFFFF',
    borderRadius: scale(0),
    marginLeft: 'auto',
    borderWidth: scale(1.8),
    borderColor: 'red',
  },
  confirm_button_text: {
    fontSize: scale(20),
    color: '#000000',
    textAlign: 'center',
  },
});

const mapStateToProps = state => {
  return {cart_personal: state.cart.cart_personal};
};

const mapDispatchToProps = {
  GET_cart: loading => ({type: 'cart/GET_cart', loading}),
  POST_cart: payload => ({type: 'cart/POST_cart', payload}),
  DELETE_cart: payload => ({type: 'cart/DELETE_cart', payload}),
  CLEAR_cart: () => ({type: 'cart/CLEAR_cart'}),
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
