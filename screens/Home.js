import React from "react";

import {
	Button,
	View,
	SafeAreaView,
	StyleSheet,
	StatusBar,
	FlatList,
	Text,
	TouchableOpacity,
} from "react-native";

import { StackActions } from "@react-navigation/native";

import Constants from "expo-constants";

const Home = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => navigation.navigate("Intro")}
				style={styles.buttonContainer}
			>
				<Text style={styles.buttonText}>Introduction</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => navigation.push("Grammar")}
				style={styles.buttonContainer}
			>
				<Text style={styles.buttonText}>Most Used Grammar</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => navigation.navigate("Letters")}
				style={styles.buttonContainer}
			>
				<Text style={styles.buttonText}>Most Confused Letters</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => navigation.navigate("Past and Future")}
				style={styles.buttonContainer}
			>
				<Text style={styles.buttonText}>Past and Future</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => navigation.navigate("Best Movies")}
				style={styles.buttonContainer}
			>
				<Text style={styles.buttonText}>Best Malayalam Movies</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: Constants.statusBarHeight + 50,
	},
	buttonContainer: {
		marginVertical: 10,
		height: 60,
		marginHorizontal: 10,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		borderWidth: 4,
		borderColor: "#5d57ff",
	},
	buttonContainer2: {
		marginTop: Constants.statusBarHeight + 50,
		marginVertical: 20,
		height: 60,
		marginHorizontal: 10,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		borderWidth: 4,
		borderColor: "#5d57ff",
	},
	buttonText: {
		textTransform: "uppercase",
		color: "black",
		fontSize: 18,
	},
});

export default Home;
