import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import cateImages from '../assets/categories/categories';
import {scale} from 'react-native-size-matters';

export default class Category extends Component {
  state = {};

  render() {
    const {product_type, goToScreen} = this.props; //父組件導入
    return (
      <View style={styles.container}>
        <View style={styles.rowStyle}>
          {product_type.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.buttonContainer}
                onPress={() => goToScreen('ProductDetail', {item})}>
                <Image
                  source={cateImages[`${item.images}`]}
                  style={styles.imageStyle}
                />
                <Text style={styles.titleStyle}>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: scale(10),
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  rowStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: scale(-17),
  },
  buttonContainer: {
    alignItems: 'center',
    width: '25%',
    marginBottom: scale(15),
  },
  imageStyle: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(20), // 與按鈕形狀一致
    opacity: 0.85, // 設置透明度
  },
  titleStyle: {
    fontSize: scale(14),
    textAlign: 'center',
    marginTop: scale(5), // 與圖片保持距離
  },
});
