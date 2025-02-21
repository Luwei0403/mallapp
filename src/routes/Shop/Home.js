import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import Carousel from '../../components/Carousel';
import Category from '../../components/Category';
import NewProduct from '../../components/NewProduct';
import {scale} from 'react-native-size-matters';

class Home extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    const {GET_new_product} = this.props;
    GET_new_product(loading => this.setState({loading}));
  }

  render() {
    const {loading} = this.state;
    const {images, product_type, new_product} = this.props;
    const categoryList = [];
    for (let i = 1; i <= Math.ceil(product_type.length / 4); i += 1) {
      categoryList.push(
        <Category
          key={i}
          product_type={product_type.slice((i - 1) * 4, i * 4)}
          goToScreen={(screen, payload) =>
            this.props.navigation.navigate(screen, payload)
          }
        />,
      );
    } //Math.ceil:Round the number up
    return (
      <SafeAreaView style={styles.safeareaview}>
        <ScrollView>
          {loading ? (
            <View
              style={{
                justifyContent: 'center',
                height: '100%',
              }}>
              <ActivityIndicator size="large" color="#3cb371" />
            </View>
          ) : (
            <View>
              <Carousel images={images} navigation={this.props.navigation}  transitionDuration={4000} />
              <View style={styles.container}>
                <Image
                  source={require('../../assets/logo/logo2.png')}
                  style={styles.logo}
                />
                <Text style={styles.title}>商品種類</Text>
              </View>
              {categoryList}

              <NewProduct
                new_product={new_product}
                navigation={this.props.navigation} 
              />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  images: state.carousel.images,
  product_type: state.product.product_type,
  new_product: state.product.new_product,
});

const mapDispatchToProps = dispatch => {
  return {
    GET_new_product(loading) {
      dispatch({type: 'product/GET_new_product', loading});
    },
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: scale(20),
    fontWeight: 'bold',
    marginLeft: scale(3),
    marginTop: scale(10),
  },
  container: {
    padding: scale(10),
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: scale(-198),
  },
  logo: {
    width: scale(30),
    height: scale(30),
    marginTop: scale(8),
    marginRight: scale(2),
  },
  safeareaview: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
