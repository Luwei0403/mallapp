import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {scale} from 'react-native-size-matters';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleLoginButton = () => {
    const {username, password} = this.state;
    const {POST_login} = this.props;

    if (username === '' || password === '') {
      Alert.alert('資料輸入不完全', '請輸入帳號及密碼');
      return;
    }

    const callback = status => {
      switch (status) {
        case 200:
          Alert.alert('登入成功');
          this.props.navigation.navigate('Home');
          return;
        case 400:
          Alert.alert('密碼錯誤');
          return;
        case 404:
          Alert.alert('查無此用戶');
          return;
        default:
          Alert.alert('系統錯誤');
      }
    };

    POST_login({username, password}, callback); //dispatch fuction
  };

  render() {
    const {username, password} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"> 
          <Text style={styles.title}>購物商城</Text>
          <View style={styles.content}>
            <Text style={styles.label}>帳號</Text>
            <Input
              value={username}
              placeholder="請輸入帳號"
              onChangeText={text => this.setState({username: text})}
            />
            <Text style={styles.label}>密碼</Text>
            <Input
              secureTextEntry={true}
              value={password}
              placeholder="請輸入密碼"
              onChangeText={text => this.setState({password: text})}
            />
            <Button
              buttonStyle={styles.btn}
              title="登入"
              titleStyle={{color: '#0077ff', fontWeight: '700'}}
              onPress={this.handleLoginButton}
            />
            <Button
              buttonStyle={styles.btn}
              title="註冊"
              titleStyle={{color: '#0077ff', fontWeight: '700'}}
              onPress={() => this.props.navigation.navigate('Register')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffbb0c',
  },
  title: {
    fontSize: scale(40),
    marginBottom: scale(80),
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    width: scale(250),
    justifyContent: 'space-evenly',
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: scale(20),
  },
  btn: {
    marginTop: scale(20),
    backgroundColor: 'white',
    borderRadius: scale(10),
    paddingVertical: scale(10),
    paddingHorizontal: scale(20),
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});



const mapDispatchToProps = dispatch => {
  return {
    POST_login: (payload, callback) =>
      dispatch({type: 'member/POST_login', payload, callback}),
  };
};

export default connect(null, mapDispatchToProps)(Login);
