import React from "react";

import { View, Text, Button, Image, StyleSheet } from "react-native";

const Categories = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.textHeader}>Most Confused Letters</Text>
			<Image
				source={require("../assets/images/confused-letters.png")}
				style={{ height: 200, width: 320, justifyContent: "space-evenly" }}
			/>
			<Button title="More.." onPress={() => navigation.navigate("Confused")} />
			<Text style={styles.textHeader}>Most used Grammar</Text>
			<Image
				source={require("../assets/images/confused-letters.png")}
				style={{ height: 200, width: 320, justifyContent: "space-evenly" }}
			/>
			<Button title="More.." onPress={() => navigation.navigate("Confused")} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignContent: "center",
		paddingLeft: 30,
	},
	textHeader: {
		color: "black",
		paddingLeft: 30,
		paddingTop: 10,
		fontWeight: "bold",
		fontSize: 25,
	},
});
export default Categories;
