import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import productImages from '../assets/productImages';
import {scale} from 'react-native-size-matters';

export default class Newproduct extends Component {
  state = {};

  handleProductPress = item => {
    const {navigation} = this.props; //從父組件導入屬性，本身沒有navigation屬性

    // 根據商品 id 來決定導航的頁面
    switch (item.id) {
      case 57: // 洋芋片
        navigation.navigate('PotatoChipsProduct');
        break;
      case 58:
        navigation.navigate('GamingKeyboardProduct');
        break;
      case 59:
        navigation.navigate('CleansingMilkProduct');
        break;
      case 60:
        navigation.navigate('SanitaryPadProduct');
        break;
      case 61:
        navigation.navigate('TissuePaperProduct');
        break;
      default:
        Alert.alert('該商品暫無詳情頁');
        break;
    }
  };

  render() {
    const {new_product} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.imagecontainer}>
          <Image
            source={require('../assets/logo/logo2.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>最新商品</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scroll_container}>
          {new_product.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.product_container}
                onPress={() => this.handleProductPress(item)}>
                <Image
                  source={productImages[`${item.images}`]} // 使用 item 的圖片名稱來動態加載對應圖片
                  style={styles.product_image}
                />
                <Text style={styles.product_text}>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: scale(10),
    justifyContent: 'center',
  },
  title: {
    fontSize: scale(20),
    fontWeight: 'bold',
    marginLeft: scale(3),
    marginTop: scale(10),
  },
  scroll_container: {
    margin: scale(10),
  },
  product_container: {
    marginTop: scale(8),
    width: scale(160),
    height: scale(200),
    alignItems: 'center',
  },
  product_image: {
    width: scale(120), // 設置圖片寬度
    height: scale(120), // 設置圖片高度
    borderRadius: scale(10), // 可以添加圓角效果
  },
  product_text: {
    fontSize: scale(18),
    margin: scale(5),
    color: 'black',
  },
  logo: {
    width: scale(30),
    height: scale(30),
    marginTop: scale(8),
    marginRight: scale(2),
  },
  imagecontainer: {
    padding: scale(10),
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: scale(-198),
  },
});
