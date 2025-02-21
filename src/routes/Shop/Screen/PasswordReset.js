import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Alert} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import {scale} from 'react-native-size-matters';

class PasswordReset extends Component {
  state = {
    old_password: '',
    password: '',
    password_check: '',
  };

  handleSubmit = () => {
    const {PUT_user_password, navigation, user} = this.props;
    const {old_password, password, password_check} = this.state;
    if (old_password === '' || password === '' || password_check === '') {
      Alert.alert('資料輸入不完全');
      return;
    }
    const callback = status => {
      switch (status) {
        case 200:
          Alert.alert('編輯成功');
          navigation.navigate('Member');
          return;
        case 400:
          Alert.alert('確認密碼輸入錯誤');
          return;
        case 401:
          Alert.alert('密碼輸入錯誤');
          return;
        case 404:
          Alert.alert('查無此用戶');
          return;
        default:
          Alert.alert('系統錯誤');
      }
    };

    PUT_user_password(
      {username: user.username, old_password, password, password_check},
      callback,
    );
  };

  render() {
    const {old_password, password, password_check} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={{fontSize: 20, marginLeft: 10}}>舊密碼</Text>
          <Input
            secureTextEntry={true}
            autoCapitalize="none"
            value={old_password}
            placeholder="請輸入舊密碼"
            onChangeText={text => this.setState({old_password: text})}
          />
          <Text style={{fontSize: 20, marginLeft: 10}}>新密碼</Text>
          <Input
            secureTextEntry={true}
            autoCapitalize="none"
            value={password}
            placeholder="請輸入新密碼"
            onChangeText={text => this.setState({password: text})}
          />
          <Text style={{fontSize: 20, marginLeft: 10}}>確認新密碼</Text>
          <Input
            secureTextEntry={true}
            autoCapitalize="none"
            value={password_check}
            placeholder="請再次輸入新密碼"
            onChangeText={text => this.setState({password_check: text})}
          />
          <Button
            buttonStyle={styles.btn}
            title="送出"
            titleStyle={{
              color: 'white',
            }}
            onPress={() => this.handleSubmit()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flex: 1,
    margin: scale(10),
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
    PUT_user_password(payload, callback) {
      dispatch({type: 'member/PUT_user_password', payload, callback});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset);
