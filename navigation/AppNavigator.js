import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Introduction from "../screens/Introduction";
import Categories from "../screens/Categories";

const EMStack = createStackNavigator();

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<EMStack.Navigator>
				<EMStack.Screen name="Home" component={Introduction} />
				<EMStack.Screen name="Category" component={Categories} />
			</EMStack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
