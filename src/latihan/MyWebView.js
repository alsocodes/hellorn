import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class MyWebView extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: true };
  }

  showLoader() {
    this.setState({ isVisible: true });
  }

  hideLoader() {
    this.setState({ isVisible: false });
  }

  render() {
    return (
      <View
        style={
          this.state.isVisible === true ? styles.stylBefore : styles.styleAfter
        }>
        {this.state.isVisible ? (
          <ActivityIndicator
            color="blue"
            size="large"
            style={styles.activityIndicatorStyle}
          />
        ) : null}

        <WebView
          style={styles.webViewStyle}
          source={{ uri: 'https://www.konsepkoding.com/' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          onLoadStart={() => this.showLoader()}
          onLoad={() => this.hideLoader()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  stylBefore: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleAfter: {
    flex: 1,
  },
  webViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 40,
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});