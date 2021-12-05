import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import TabNavigator from "./navigation/TabNavigator";

export default function App() {
	return (
		<NavigationContainer>
			<TabNavigator />
		</NavigationContainer>
		// <AppNavigator />
	);
}
