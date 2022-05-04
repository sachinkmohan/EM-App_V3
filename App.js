import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import TabNavigator from "./navigation/TabNavigator";

import { Asset } from 'expo-asset'
import AppLoading from "expo-app-loading";

function cacheImages(images) {
	return images.map(image => {
	  if (typeof image === 'string') {
		return Image.prefetch(image);
	  } else {
		return Asset.fromModule(image).downloadAsync();
	  }
	});
  }
  

export default class AppContainer extends React.Component {
	state = {
		isReady: false,
	  };
	
	  async _loadAssetsAsync() {
		const imageAssets = cacheImages([
		  require('./assets/images/grammar/saying-no.jpeg'),require("./assets/images/shabdam/La.png"),
		  require("./assets/images/shabdam/Ra.png"),require("./assets/images/shabdam/Na.png")
		]);
	
	
		await Promise.all([...imageAssets]);
	  }
	
	  render() {
		if (!this.state.isReady) {
		  return (
			<AppLoading
			  startAsync={this._loadAssetsAsync}
			  onFinish={() => this.setState({ isReady: true })}
			  onError={console.warn}
			/>
		  );
		}
	return (
		<NavigationContainer>
			<TabNavigator />
		</NavigationContainer>
		// <AppNavigator />
	);
}
}
