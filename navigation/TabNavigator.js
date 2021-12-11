import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/FontAwesome";

import { AppNavigator, ResourceNavigator } from "../navigation/AppNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={AppNavigator}
				options={{
					tabBarIcon: ({ size, color }) => (
						<Icon name={"home"} color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Resources"
				component={ResourceNavigator}
				options={{
					tabBarIcon: ({ size, color }) => (
						<Icon name={"internet-explorer"} color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;
