import React, { Component } from "react";
import { SafeAreaView, FlatList, Text } from "react-native";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";

class Product extends Component {
  state = {};

  componentDidMount() {
    Icon.loadFont();
  }

  render() {
    const { product_type } = this.props;
    if (!product_type || product_type.length === 0) {
      return <Text>沒有可顯示的產品</Text>;
    }

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={product_type}
          renderItem={({ item }) => (
            <ListItem
              bottomDivider
              onPress={() =>
                this.props.navigation.navigate("ProductDetail", { item })
              }
            >
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron /> 
            </ListItem>
          )}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product_type: state.product.product_type,
  };
};

export default connect(mapStateToProps, null)(Product);
