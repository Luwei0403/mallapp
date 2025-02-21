import React, {Component} from 'react';
import {SafeAreaView, View, StyleSheet, Text, Alert} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {scale} from 'react-native-size-matters';

class UserUpdateInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.name,
      email: props.user.email, 
    };
  }

  handleSubmit = () => {
    const {PUT_user, navigation, user} = this.props;
    const {name, email} = this.state;
    if (name === '' || email === '') {
      Alert.alert('資料輸入不完全');
      return;
    }

    const callback = status => {
      switch (status) {
        case 200:
          Alert.alert('編輯成功');
          navigation.navigate('Member');
          return;
        case 404:
          Alert.alert('查無此用戶');
          return;
        default:
          Alert.alert('系統錯誤');
      }
    };

    PUT_user({username: user.username, name, email}, callback);
  };

  render() {
    const {name, email} = this.state;
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={{fontSize: 20, marginLeft: 10}}>姓名</Text>
          <Input
            value={name}
            placeholder="請輸入姓名"
            onChangeText={text => this.setState({name: text})}
          />
          <Text style={{fontSize: 20, marginLeft: 10}}>電子信箱</Text>
          <Input
            value={email}
            placeholder="請輸入電子信箱"
            onChangeText={text => this.setState({email: text})}
          />
          <Button
            buttonStyle={styles.btn}
            title="送出"
            titleStyle={{color: 'white'}}
            onPress={() => this.handleSubmit()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: scale(200),
    margin: scale(10),
    backgroundColor: 'white',
  },
  btn: {
    marginTop: scale(20),
    backgroundColor: '#3cb371',
  },
});

const mapStateToProps = state => {
  return {
    user: state.member.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    PUT_user: (payload, callback) => {
      dispatch({type: 'member/PUT_user', payload, callback});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdateInfo);
