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
import Contact from "../screens/Contact";

const EMStack = createStackNavigator();

const AppNavigator = () => {
	return (
		<EMStack.Navigator>
			<EMStack.Screen name="Home" component={Home} />
			<EMStack.Screen name="Intro" component={Introduction} />
			<EMStack.Screen name="Category" component={Categories} />
			<EMStack.Screen name="Confused" component={ConfusedLetters} />
			<EMStack.Screen name="Grammar" component={MUsedGrammar} />
			<EMStack.Screen name="Past and Future" component={PastFuture} />
			<EMStack.Screen name="Best Movies" component={BestMovies} />
		</EMStack.Navigator>
	);
};

const ResourceNavigator = () => {
	return (
		<EMStack.Navigator>
			<EMStack.Screen name="Resources" component={Resources} />
		</EMStack.Navigator>
	);
};

const ContactsNavigator = () => {
	return (
		<EMStack.Navigator>
			<EMStack.Screen name="Contact Us" component={Contact} />
		</EMStack.Navigator>
	);
};
export { AppNavigator, ResourceNavigator, ContactsNavigator };
