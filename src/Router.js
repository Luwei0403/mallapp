import React, {Component} from 'react';
import {connect} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import {Header} from 'react-native-elements';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './routes/Shop/Home';
import Product from './routes/Shop/Product';
import Member from './routes/Shop/Member';
import Cart from './routes/Shop/Cart';
import Login from './routes/Shop/Screen/Login';
import Register from './routes/Shop/Screen/Register';
import UserUpdateInfo from './routes/Shop/Screen/UserUpdateInfo';
import PasswordReset from './routes/Shop/Screen/PasswordReset';
import ProductDetail from './routes/Shop/Screen/ProductDetail';
import mineral_water from './routes/Shop/Screen/productinfo/mineral_water';
import water_heater from './routes/Shop/Screen/productinfo/water_heater';
import cookbook from './routes/Shop/Screen/productinfo/cookbook';
import pistachios from './routes/Shop/Screen/productinfo/pistachios';
import running_shoes from './routes/Shop/Screen/productinfo/running_shoes';
import gaming_pc from './routes/Shop/Screen/productinfo/gaming_pc';
import broom from './routes/Shop/Screen/productinfo/broom';
import gundam from './routes/Shop/Screen/productinfo/gundam';
import washing_machine from './routes/Shop/Screen/productinfo/washing_machine';
import tshirt from './routes/Shop/Screen/productinfo/tshirt';
import green_tea from './routes/Shop/Screen/productinfo/green_tea';
import air_conditioner from './routes/Shop/Screen/productinfo/air_conditioner';
import cookies from './routes/Shop/Screen/productinfo/cookies';
import health_book from './routes/Shop/Screen/productinfo/health_book';
import leather_shoes from './routes/Shop/Screen/productinfo/leather_shoes';
import macbook from './routes/Shop/Screen/productinfo/macbook';
import vacuum_cleaner from './routes/Shop/Screen/productinfo/vacuum_cleaner';
import lego from './routes/Shop/Screen/productinfo/lego';
import air_purifier from './routes/Shop/Screen/productinfo/air_purifier';
import sports_pants from './routes/Shop/Screen/productinfo/sports_pants';
import black_coffee from './routes/Shop/Screen/productinfo/black_coffee';
import smart_speaker from './routes/Shop/Screen/productinfo/smart_speaker';
import tech_future_book from './routes/Shop/Screen/productinfo/tech_future_book';
import dark_chocolate from './routes/Shop/Screen/productinfo/dark_chocolate';
import casual_shoes from './routes/Shop/Screen/productinfo/casual_shoes';
import ultrabook from './routes/Shop/Screen/productinfo/ultrabook';
import hand_sanitizer from './routes/Shop/Screen/productinfo/hand_sanitizer';
import rc_car from './routes/Shop/Screen/productinfo/rc_car';
import microwave from './routes/Shop/Screen/productinfo/microwave';
import jeans from './routes/Shop/Screen/productinfo/jeans';
import lemon_juice from './routes/Shop/Screen/productinfo/lemon_juice';
import smart_fridge from './routes/Shop/Screen/productinfo/smart_fridge';
import history_book from './routes/Shop/Screen/productinfo/history_book';
import spaghetti from './routes/Shop/Screen/productinfo/spaghetti';
import sports_sandals from './routes/Shop/Screen/productinfo/sports_sandals';
import desktop_pc from './routes/Shop/Screen/productinfo/desktop_pc';
import detergent from './routes/Shop/Screen/productinfo/detergent';
import teddy_bear from './routes/Shop/Screen/productinfo/teddy_bear';
import juicer from './routes/Shop/Screen/productinfo/juicer';
import trench_coat from './routes/Shop/Screen/productinfo/trench_coat';
import cola from './routes/Shop/Screen/productinfo/cola';
import aircon from './routes/Shop/Screen/productinfo/aircon';
import literature_classics from './routes/Shop/Screen/productinfo/literature_classics';
import honey from './routes/Shop/Screen/productinfo/honey';
import high_heels from './routes/Shop/Screen/productinfo/high_heels';
import gaming_laptop from './routes/Shop/Screen/productinfo/gaming_laptop';
import kitchen_cleaner from './routes/Shop/Screen/productinfo/kitchen_cleaner';
import block_table from './routes/Shop/Screen/productinfo/block_table';
import induction_cooker from './routes/Shop/Screen/productinfo/induction_cooker';
import sweater from './routes/Shop/Screen/productinfo/sweater';
import lcd_tv from './routes/Shop/Screen/productinfo/lcd_tv';
import desk_lamp from './routes/Shop/Screen/productinfo/desk_lamp';
import smartphone from './routes/Shop/Screen/productinfo/smartphone';
import bluetooth_earbuds from './routes/Shop/Screen/productinfo/bluetooth_earbuds';
import face_mask from './routes/Shop/Screen/productinfo/face_mask';
import cleanser from './routes/Shop/Screen/productinfo/cleanser';
import potato_chips from './routes/Shop/Screen/productinfo/potato_chips';
import gaming_keyboard from './routes/Shop/Screen/productinfo/gaming_keyboard';
import cleansing_milk from './routes/Shop/Screen/productinfo/cleansing_milk';
import sanitary_pad from './routes/Shop/Screen/productinfo/sanitary_pad';
import tissue_paper from './routes/Shop/Screen/productinfo/tissue_paper';
import {scale} from 'react-native-size-matters';

class Router extends Component {
  render() {
    const {isLoggedIn} = this.props;

    const Tab = createBottomTabNavigator();

    const MemberScreen = isLoggedIn ? Member : Login;

    const TabNavigator = () => (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#0077ff',
          tabBarLabelStyle: {
            fontSize: scale(12),
            textAlign: 'center',
          },
          tabBarStyle: {
            backgroundColor: '#f7f7f7',
            height: 60,
          },
          header: () => null,
          headerShown: false,
        }}>
        <Tab.Screen
          name="商城首頁"
          component={Home}
          options={{
            tabBarLabel: '首頁',
            tabBarIcon: ({focused}) => (
              <FontAwesome
                name="home"
                style={{color: focused ? '#0077ff' : 'black'}}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="商品"
          component={Product}
          options={{
            tabBarLabel: '商品',
            tabBarIcon: ({focused}) => (
              <FontAwesome
                name="list"
                style={{color: focused ? '#0077ff' : 'black'}}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="購物車"
          component={Cart}
          options={{
            tabBarLabel: '購物車',
            tabBarIcon: ({focused}) => (
              <FontAwesome
                name="shopping-cart"
                style={{color: focused ? '#0077ff' : 'black'}}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="會員"
          component={MemberScreen}
          options={{
            tabBarLabel: '會員',
            tabBarIcon: ({focused}) => (
              <FontAwesome
                name="user"
                style={{color: focused ? '#0077ff' : 'black'}}
                size={20}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );

    const Stack = createStackNavigator();

    const StackNavigator = () => (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{
            header: () => (
              <Header  //import { Header } from 'react-native-elements';
                statusBarProps={{
                  translucent: true, 
                  backgroundColor: 'transparent', 
                }}
                containerStyle={{
                  backgroundColor: '#0077ff',
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UserUpdateInfo"
          component={UserUpdateInfo}
          options={{
            title: '編輯會員資料',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="PasswordReset"
          component={PasswordReset}
          options={{
            title: '重設會員密碼',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={({route}) => ({
            title: route.params.item.name,
            headerBackTitle: '返回',
          })}
        />
        {/* Product's Stack.Screen */}
        <Stack.Screen
          name="MineralWaterProduct"
          component={mineral_water}
          options={{
            title: '天然礦泉水',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="WaterHeaterProduct"
          component={water_heater}
          options={{
            title: '高效能熱水器',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="CookbookProduct"
          component={cookbook}
          options={{
            title: '世界美食食譜書',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="PistachiosProduct"
          component={pistachios}
          options={{
            title: '天然開心果',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="RunningShoesProduct"
          component={running_shoes}
          options={{
            title: '運動步鞋',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="GamingPCProduct"
          component={gaming_pc}
          options={{
            title: '高效能電競主機',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="BroomProduct"
          component={broom}
          options={{
            title: '多功能掃把',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="GundamProduct"
          component={gundam}
          options={{
            title: '經典鋼彈模型',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="WashingMachineProduct"
          component={washing_machine}
          options={{
            title: '智能洗衣機',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="TShirtProduct"
          component={tshirt}
          options={{
            title: '純棉T恤',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="GreenTeaProduct"
          component={green_tea}
          options={{
            title: '綠茶',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="AirConditionerProduct"
          component={air_conditioner}
          options={{
            title: '變頻冷氣',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="CookiesProduct"
          component={cookies}
          options={{
            title: '手工餅乾',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="HealthBookProduct"
          component={health_book}
          options={{
            title: '健康生活指南',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="LeatherShoesProduct"
          component={leather_shoes}
          options={{
            title: '皮鞋',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="MacbookProduct"
          component={macbook}
          options={{
            title: '蘋果筆記型電腦',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="VacuumCleanerProduct"
          component={vacuum_cleaner}
          options={{
            title: '吸塵器',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="LegoProduct"
          component={lego}
          options={{
            title: '樂高積木',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="AirPurifierProduct"
          component={air_purifier}
          options={{
            title: '空氣清淨機',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="SportsPantsProduct"
          component={sports_pants}
          options={{
            title: '運動褲',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="BlackCoffeeProduct"
          component={black_coffee}
          options={{
            title: '無糖黑咖啡',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="SmartSpeakerProduct"
          component={smart_speaker}
          options={{
            title: '智慧音響',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="TechFutureBookProduct"
          component={tech_future_book}
          options={{
            title: '科技與未來',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="DarkChocolateProduct"
          component={dark_chocolate}
          options={{
            title: '黑巧克力',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="CasualShoesProduct"
          component={casual_shoes}
          options={{
            title: '休閒鞋',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="UltrabookProduct"
          component={ultrabook}
          options={{
            title: '輕薄文書行筆電',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="HandSanitizerProduct"
          component={hand_sanitizer}
          options={{
            title: '抗菌洗手液',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="RCCarProduct"
          component={rc_car}
          options={{
            title: '遙控汽車',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="MicrowaveProduct"
          component={microwave}
          options={{
            title: '微波爐',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="JeansProduct"
          component={jeans}
          options={{
            title: '牛仔褲',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="LemonJuiceProduct"
          component={lemon_juice}
          options={{
            title: '檸檬汁',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="SmartFridgeProduct"
          component={smart_fridge}
          options={{
            title: '智能冰箱',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="HistoryBookProduct"
          component={history_book}
          options={{
            title: '歷史與文化',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="SpaghettiProduct"
          component={spaghetti}
          options={{
            title: '義大利麵',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="SportsSandalsProduct"
          component={sports_sandals}
          options={{
            title: '運動涼鞋',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="DesktopPCProduct"
          component={desktop_pc}
          options={{
            title: '桌上型電腦',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="DetergentProduct"
          component={detergent}
          options={{
            title: '洗衣粉',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="TeddyBearProduct"
          component={teddy_bear}
          options={{
            title: '毛絨玩具熊',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="JuicerProduct"
          component={juicer}
          options={{
            title: '多功能榨汁機',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="TrenchCoatProduct"
          component={trench_coat}
          options={{
            title: '風衣',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="ColaProduct"
          component={cola}
          options={{
            title: '可樂',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="AirConProduct"
          component={aircon}
          options={{
            title: '智慧冷暖空調',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="LiteratureClassicsProduct"
          component={literature_classics}
          options={{
            title: '文學經典選集',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="HoneyProduct"
          component={honey}
          options={{
            title: '蜂蜜',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="HighHeelsProduct"
          component={high_heels}
          options={{
            title: '高跟鞋',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="GamingLaptopProduct"
          component={gaming_laptop}
          options={{
            title: '超薄電競筆電',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="KitchenCleanerProduct"
          component={kitchen_cleaner}
          options={{
            title: '廚房清潔劑',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="BlockTableProduct"
          component={block_table}
          options={{
            title: '積木遊戲桌',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="InductionCookerProduct"
          component={induction_cooker}
          options={{
            title: '電磁爐',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="SweaterProduct"
          component={sweater}
          options={{
            title: '毛衣',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="LcdTVProduct"
          component={lcd_tv}
          options={{
            title: '液晶電視',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="DeskLampProduct"
          component={desk_lamp}
          options={{
            title: '檯燈',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="SmartphoneProduct"
          component={smartphone}
          options={{
            title: '智慧手機',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="BluetoothEarbudsProduct"
          component={bluetooth_earbuds}
          options={{
            title: '藍牙耳機',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="FaceMaskProduct"
          component={face_mask}
          options={{
            title: '面膜',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="CleanserProduct"
          component={cleanser}
          options={{
            title: '洗面乳',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="PotatoChipsProduct"
          component={potato_chips}
          options={{
            title: '洋芋片',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="GamingKeyboardProduct"
          component={gaming_keyboard}
          options={{
            title: '電競炫彩鍵盤',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="CleansingMilkProduct"
          component={cleansing_milk}
          options={{
            title: '卸妝乳',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="SanitaryPadProduct"
          component={sanitary_pad}
          options={{
            title: '衛生棉',
            headerBackTitle: '返回',
          }}
        />
        <Stack.Screen
          name="TissuePaperProduct"
          component={tissue_paper}
          options={{
            title: '舒柔面紙',
            headerBackTitle: '返回',
          }}
        />

        <Stack.Screen
          name="InductionCooker"
          component={induction_cooker}
          options={{title: '電磁爐'}}
        />
        <Stack.Screen
          name="SmartFridge"
          component={smart_fridge}
          options={{title: '智能冰箱'}}
        />
        <Stack.Screen
          name="GamingLaptop"
          component={gaming_laptop}
          options={{title: '超薄電競筆電'}}
        />
        <Stack.Screen
          name="SmartSpeaker"
          component={smart_speaker}
          options={{title: '智慧音響'}}
        />
      </Stack.Navigator>
    );

    return <StackNavigator />;
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.member.isLoggedIn,
});

export default connect(mapStateToProps)(Router);
