import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Introduction from "../screens/Introduction";
import Categories from "../screens/Categories";
import ConfusedLetters from "../screens/ConfusedLetters";
import Resources from "../screens/Resources";
import PastFuture from "../screens/PastFuture";
import MUsedGrammar from "../screens/MUsedGrammar";
import Home from "../screens/Home";
import BestMovies from "../screens/BestMovies";

const EMStack = createStackNavigator();

const AppNavigator = () => {
	return (
		<EMStack.Navigator>
			<EMStack.Screen name="Home" component={Home} />
			<EMStack.Screen name="Intro" component={Introduction} />
			<EMStack.Screen name="Category" component={Categories} />
			<EMStack.Screen name="Confused" component={ConfusedLetters} />
			<EMStack.Screen name="Grammar" component={MUsedGrammar} />
			<EMStack.Screen name="PastFuture" component={PastFuture} />
			<EMStack.Screen name="BestMovies" component={BestMovies} />
		</EMStack.Navigator>
	);
};

const ResourceNavigator = () => {
	return (
		<EMStack.Navigator>
			<EMStack.Screen name="Resource" component={Resources} />
		</EMStack.Navigator>
	);
};

export { AppNavigator, ResourceNavigator };
