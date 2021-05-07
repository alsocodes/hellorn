import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from 'react-native';
//import Constants from 'expo-constants';

export default class ClickListener extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Klik Saya" onPress={() => alert('Tombol di tekan')} />
        <TouchableOpacity onPressIn={() => alert('Dengan Efek Opacity')}>
          <Text> Tekan Saya </Text>
        </TouchableOpacity>
        <TouchableHighlight onPressIn={() => alert('Dengan Efek Highlight')}>
          <Text> Press Saya </Text>
        </TouchableHighlight>
        <TouchableHighlight onPressIn={() => alert('TANPA EFEK')}>
          <Text> Tanpa Efek </Text>
        </TouchableHighlight>
        <TouchableNativeFeedback onPressIn={() => alert('Efek Bawaan Android Kamu')}>
          <Text> Hanya Android Saja </Text>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});