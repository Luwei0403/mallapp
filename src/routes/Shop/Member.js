import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
  Alert,
} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
import {connect} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker'; // import Image Selector
import {scale} from 'react-native-size-matters';

class Member extends Component {
  state = {
    avatarUri: null, 
  };

  // click to choose photo
  handleAvatarPress = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: scale(300),
      maxHeight: scale(300),
      quality: 1, 
    };

    // Image Selector
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const uri = response.assets[0].uri;
        this.setState({avatarUri: uri}); 
      }
    });
  };

  render() {
    const {user, navigation, LOGOUT_user} = this.props;
    const {avatarUri} = this.state; 
    const column = [
      {
        key: 'UserUpdateInfo',
        title: '修改會員資訊',
        onPress: () => navigation.navigate('UserUpdateInfo'),
      },
      {
        key: 'passwordreset',
        title: '修改會員密碼',
        onPress: () => navigation.navigate('PasswordReset'),
      },
      {
        key: 'logout',
        title: '登出',
        onPress: () => {
          LOGOUT_user(() => {  //arrow function is callback function
            Alert.alert('登出成功');
            navigation.navigate('Home'); 
          });
        },
      },
    ];

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Avatar
            size="large"
            rounded
            source={
              avatarUri
                ? {uri: avatarUri} 
                : null
            }
            icon={{name: 'user-circle', type: 'font-awesome'}}
            activeOpacity={0.7}
            onPress={this.handleAvatarPress} 
          />
          <Text style={styles.avatar_text}>{user.name}</Text>
          <Text style={styles.email_text}>{user.email}</Text>
        </View>
        <FlatList
          keyExtractor={item => item.key}
          data={column}
          renderItem={({item}) => (
            <ListItem bottomDivider onPress={() => item.onPress()}>
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: scale(200),
    color: 'white',
    backgroundColor: '#ffcc0c',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center', 
  },
  avatar_text: {
    marginTop: scale(10),
    fontSize: scale(24),
    fontWeight: 'bold',
    color: 'white',
  },
  email_text: {
    marginTop: scale(10),
    fontSize: scale(24),
    fontWeight: 'bold',
    color: 'white',
  },
});

const mapStateToProps = state => {
  return {
    user: state.member.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    LOGOUT_user(callback) {
      dispatch({type: 'member/LOGOUT_user', callback});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Member);
