import React from "react";

import { View, Text, Button, Image, StyleSheet } from "react-native";

const Categories = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.container}>Category Page</Text>
			<Image
				source={require("../assets/images/confused-letters.png")}
				style={{ height: 200, width: 320, justifyContent: "space-evenly" }}
			/>
			<Button title="Home" onPress={() => navigation.navigate("Home")} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignContent: "center",
		paddingLeft: 30,
	},
});
export default Categories;
