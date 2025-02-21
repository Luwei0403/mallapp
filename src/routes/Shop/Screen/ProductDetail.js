import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import productImages from '../../../assets/productImages';
import {scale} from 'react-native-size-matters';

class ProductDetail extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    const {route, GET_product_detail} = this.props;
    const {item} = route.params; //this.props.route.params.item
    GET_product_detail(item, loading => this.setState({loading}));
  }

  
  handleProductPress = item => {
    switch (item.name) {
      case '天然礦泉水':
        this.props.navigation.navigate('MineralWaterProduct');
        break;
      case '高效能熱水器':
        this.props.navigation.navigate('WaterHeaterProduct');
        break;
      case '世界美食食譜書':
        this.props.navigation.navigate('CookbookProduct');
        break;
      case '天然開心果':
        this.props.navigation.navigate('PistachiosProduct');
        break;
      case '運動步鞋':
        this.props.navigation.navigate('RunningShoesProduct');
        break;
      case '高效能電競主機':
        this.props.navigation.navigate('GamingPCProduct');
        break;
      case '多功能掃把':
        this.props.navigation.navigate('BroomProduct');
        break;
      case '經典鋼彈模型':
        this.props.navigation.navigate('GundamProduct');
        break;
      case '智能洗衣機':
        this.props.navigation.navigate('WashingMachineProduct');
        break;
      case '純棉T恤':
        this.props.navigation.navigate('TShirtProduct');
        break;
      case '綠茶':
        this.props.navigation.navigate('GreenTeaProduct');
        break;
      case '變頻冷氣':
        this.props.navigation.navigate('AirConditionerProduct');
        break;
      case '手工餅乾':
        this.props.navigation.navigate('CookiesProduct');
        break;
      case '健康生活指南':
        this.props.navigation.navigate('HealthBookProduct');
        break;
      case '皮鞋':
        this.props.navigation.navigate('LeatherShoesProduct');
        break;
      case '蘋果筆記型電腦':
        this.props.navigation.navigate('MacbookProduct');
        break;
      case '吸塵器':
        this.props.navigation.navigate('VacuumCleanerProduct');
        break;
      case '樂高積木':
        this.props.navigation.navigate('LegoProduct');
        break;
      case '空氣清淨機':
        this.props.navigation.navigate('AirPurifierProduct');
        break;
      case '運動褲':
        this.props.navigation.navigate('SportsPantsProduct');
        break;
      case '無糖黑咖啡':
        this.props.navigation.navigate('BlackCoffeeProduct');
        break;
      case '智慧音響':
        this.props.navigation.navigate('SmartSpeakerProduct');
        break;
      case '科技與未來':
        this.props.navigation.navigate('TechFutureBookProduct');
        break;
      case '黑巧克力':
        this.props.navigation.navigate('DarkChocolateProduct');
        break;
      case '休閒鞋':
        this.props.navigation.navigate('CasualShoesProduct');
        break;
      case '輕薄文書型筆電':
        this.props.navigation.navigate('UltrabookProduct');
        break;
      case '抗菌洗手液':
        this.props.navigation.navigate('HandSanitizerProduct');
        break;
      case '遙控汽車':
        this.props.navigation.navigate('RCCarProduct');
        break;
      case '微波爐':
        this.props.navigation.navigate('MicrowaveProduct');
        break;
      case '牛仔褲':
        this.props.navigation.navigate('JeansProduct');
        break;
      case '檸檬汁':
        this.props.navigation.navigate('LemonJuiceProduct');
        break;
      case '智能冰箱':
        this.props.navigation.navigate('SmartFridgeProduct');
        break;
      case '歷史與文化':
        this.props.navigation.navigate('HistoryBookProduct');
        break;
      case '義大利麵':
        this.props.navigation.navigate('SpaghettiProduct');
        break;
      case '運動涼鞋':
        this.props.navigation.navigate('SportsSandalsProduct');
        break;
      case '桌上型電腦':
        this.props.navigation.navigate('DesktopPCProduct');
        break;
      case '洗衣粉':
        this.props.navigation.navigate('DetergentProduct');
        break;
      case '毛絨玩具熊':
        this.props.navigation.navigate('TeddyBearProduct');
        break;
      case '多功能榨汁機':
        this.props.navigation.navigate('JuicerProduct');
        break;
      case '風衣':
        this.props.navigation.navigate('TrenchCoatProduct');
        break;
      case '可樂':
        this.props.navigation.navigate('ColaProduct');
        break;
      case '智慧冷暖空調':
        this.props.navigation.navigate('AirConProduct');
        break;
      case '文學經典選集':
        this.props.navigation.navigate('LiteratureClassicsProduct');
        break;
      case '蜂蜜':
        this.props.navigation.navigate('HoneyProduct');
        break;
      case '高跟鞋':
        this.props.navigation.navigate('HighHeelsProduct');
        break;
      case '超薄電競筆電':
        this.props.navigation.navigate('GamingLaptopProduct');
        break;
      case '廚房清潔劑':
        this.props.navigation.navigate('KitchenCleanerProduct');
        break;
      case '積木遊戲桌':
        this.props.navigation.navigate('BlockTableProduct');
        break;
      case '電磁爐':
        this.props.navigation.navigate('InductionCookerProduct');
        break;
      case '毛衣':
        this.props.navigation.navigate('SweaterProduct');
        break;
      case '液晶電視':
        this.props.navigation.navigate('LcdTVProduct');
        break;
      case '檯燈':
        this.props.navigation.navigate('DeskLampProduct');
        break;
      case '智慧手機':
        this.props.navigation.navigate('SmartphoneProduct');
        break;
      case '藍牙耳機':
        this.props.navigation.navigate('BluetoothEarbudsProduct');
        break;
      case '面膜':
        this.props.navigation.navigate('FaceMaskProduct');
        break;
      case '洗面乳':
        this.props.navigation.navigate('CleanserProduct');
        break;
      case '洋芋片':
        this.props.navigation.navigate('PotatoChipsProduct');
        break;
      case '電競炫彩鍵盤':
        this.props.navigation.navigate('GamingKeyboardProduct');
        break;
      case '卸妝乳':
        this.props.navigation.navigate('CleansingMilkProduct');
        break;
      case '衛生棉':
        this.props.navigation.navigate('SanitaryPadProduct');
        break;
      case '舒柔面紙':
        this.props.navigation.navigate('TissuePaperProduct');
        break;
      default:
        Alert.alert('該產品無詳細頁面');
    }
  };

  // 渲染產品項目，僅顯示產品圖片與價格，可點擊查看詳細內容
  renderProductItem = ({item}) => (
    <TouchableOpacity onPress={() => this.handleProductPress(item)}>
      <View style={styles.productItem}>
        <Image
          source={productImages[item.images]} //productImages.js裡面的物件， item.images是key 返回value(image)
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    const {loading} = this.state;
    const {product_detail} = this.props;

    return (
      <SafeAreaView style={{flex: 1}}>
        {loading ? (
          <ActivityIndicator style={styles.loadingContainer} />
        ) : (
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={product_detail}
            renderItem={this.renderProductItem} //上述定義的函數
            contentContainerStyle={{paddingBottom: 100}}
          />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'row',
    padding: scale(10),
    borderBottomWidth: scale(1),
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  productImage: {
    width: scale(50),
    height: scale(50),
    marginRight: scale(10),
  },
  productInfo: {
    flexDirection: 'column',
  },
  productName: {
    fontSize: scale(18),
  },
  productPrice: {
    fontSize: scale(16),
    color: 'red',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {
    product_detail: state.product.product_detail,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GET_product_detail(payload, loading) {
      dispatch({type: 'product/GET_product_detail', payload, loading});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
