import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Alert,
  ScrollView,
} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import {scale} from 'react-native-size-matters';

class Register extends Component {
  state = {
    username: '',
    password: '',
    password_check: '',
    name: '',
    email: '',
  };

  handleRegisterButton = () => {
    const {username, password, password_check, email, name} = this.state;
    const {POST_user, navigation} = this.props;
    if (
      username === '' ||
      password === '' ||
      password_check === '' ||
      email === '' ||
      name === ''
    ) {
      Alert.alert('資料輸入不完全');
      return;
    }

    const usernamePattern = /^[a-zA-Z0-9]+$/; // only letters and numbers
    if (!usernamePattern.test(username)) {
      Alert.alert('僅允許字母和數字');
      return;
    }

    if (password !== password_check) {
      Alert.alert('確認密碼錯誤');
      return;
    }

    if (password.length < 8) {
      Alert.alert('密碼最少要8個字的長度');
      return;
    }

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/; // at least one letter and one number
    if (!passwordPattern.test(password)) {
      Alert.alert('密碼至少包含一個字母和一個數字');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Alert.alert('無效的電子信箱格式');
      return;
    }

    const callback = status => {
      switch (status) {
        case 200:
          Alert.alert('註冊成功');
          navigation.navigate('Login');
          return;
        case 400:
          Alert.alert('該用戶已存在');
          return;
        default:
          Alert.alert('系統錯誤');
      }
    };

    POST_user({username, password, email, name, password_check}, callback);
  };

  render = () => {
    const {username, password, password_check, email, name} = this.state;
    const {navigation} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.register_text}>用戶註冊</Text>
          <View style={styles.content}>
            <Text style={styles.username}>帳號</Text>
            <Input
              value={username}
              placeholder="請輸入帳號"
              onChangeText={text => this.setState({username: text})}
            />
            <Text style={styles.text}>密碼</Text>
            <Input
              value={password}
              placeholder="英文+數字最少8個字元"
              onChangeText={text => this.setState({password: text})}
            />
            <Text style={styles.text}>確認密碼</Text>
            <Input
              value={password_check}
              placeholder="再次輸入密碼"
              onChangeText={text => this.setState({password_check: text})}
            />
            <Text style={styles.text}>姓名</Text>
            <Input
              value={name}
              placeholder="請輸入姓名"
              onChangeText={text => this.setState({name: text})}
            />
            <Text style={styles.text}>電子信箱</Text>
            <Input
              value={email}
              placeholder="請輸入電子信箱"
              onChangeText={text => this.setState({email: text})}
            />
            <Button
              buttonStyle={styles.btn}
              title="送出"
              titleStyle={{
                color: '#0077ff',
                fontWeight: '700',
              }}
              onPress={this.handleRegisterButton}
            />
            <Button
              buttonStyle={styles.btn}
              title="返回"
              titleStyle={{
                color: '#0077ff',
                fontWeight: '700',
              }}
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffbb0c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: scale(40),
  },
  register_text: {
    fontSize: scale(25),
    marginBottom: scale(20),
    color: 'white',
    fontWeight: 'bold',
    marginTop: scale(100),
  },
  content: {
    width: scale(250),
    justifyContent: 'space-between',
  },
  username: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: scale(20),
  },
  text: {
    marginTop: scale(20),
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
});

const mapDispatchToProps = dispatch => {
  return {
    POST_user(payload, callback) {
      dispatch({
        type: 'member/POST_user',
        payload,
        callback,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Register);
