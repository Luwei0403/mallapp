import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { scale } from 'react-native-size-matters';

class Carousel extends Component {
  state = { activeIndex: 1 };

  componentDidMount() {
    this.myInterval = setInterval(this.handleAutoScroll, this.props.transitionDuration );  //myInterval 是 Carousel 類別的一個屬性
  }

  componentWillUnmount() {
    clearInterval(this.myInterval); //清除函數
  }

  handleAutoScroll = () => {
    const { images } = this.props;
    const nextIndex = this.state.activeIndex + 1;

    this.setState({ activeIndex: nextIndex }, () => {
      this.scrollView?.scrollTo({ x: Dimensions.get('window').width * nextIndex, animated: true }); //this.scrollView 是 ScrollView 組件的 ref（引用），用來獲取 ScrollView 實例，然後調用它的 scrollTo 方法。 可選鏈（Optional Chaining） ?. 是用來確保 this.scrollView 不是 null 或 undefined，再執行 scrollTo(...) 方法

      if (nextIndex === images.length + 1) {
        setTimeout(() => this.resetScrollPosition(1), 4000);
      }
    });
  };

  handleScrollEnd = (event) => {
    const { images } = this.props;
    const currentIndex = Math.round(event.nativeEvent.contentOffset.x / Dimensions.get('window').width); //取得 ScrollView 當前滾動的水平位置（以像素為單位）

    if (currentIndex === 0) this.resetScrollPosition(images.length); //滾動到了 index[0]（假 img4）瞬間跳回 index[images.length]（真正的 img4）
    else if (currentIndex === images.length + 1) this.resetScrollPosition(1); // 表示 滾動到了 index[images.length + 1]（假 img1）瞬間跳回 index[1]（真正的 img1）
    else this.setState({ activeIndex: currentIndex }); //正常滾動時，更新 activeIndex
  };

  resetScrollPosition = (index) => {
    this.scrollView?.scrollTo({ x: Dimensions.get('window').width * index, animated: false });
    this.setState({ activeIndex: index });
  };

  handleImagePress = (index) => {
    const { navigation, images } = this.props;
    const routes = ['InductionCooker', 'SmartFridge', 'GamingLaptop', 'GamingKeyboardProduct'];

    if (routes.length !== images.length) return console.error('Routes and images length mismatch!');

    const adjustedIndex = index === enhancedImages.length - 1 ? 0 : index - 1; //假設 enhancedImages.length = 6（因為我們在 images 前後各加了一張假圖片 : index是0~5 ）
    navigation.navigate(routes[adjustedIndex]);
  };

  render() {
    const { images } = this.props;
    if (!images?.length) return null;

    const enhancedImages = [images[images.length - 1], ...images, images[0]]; //在 images 陣列的 開頭與結尾各新增一張圖片，用於實現無縫循環的輪播效果。
    

    return (
      <View>
        <ScrollView
          ref={(ref) => (this.scrollView = ref)}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.handleScrollEnd}>
          {enhancedImages.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => this.handleImagePress(index)} style={styles.carouselImg}>
              <Image source={item} style={styles.image} onError={(e) => console.error('Image load error:', e.nativeEvent.error)} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carouselImg: {
    width: Dimensions.get('window').width,
    height: scale(190),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
  },
});

export default Carousel;
