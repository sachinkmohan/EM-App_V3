import React from "react";

import {
	View,
	Text,
	Button,
	Image,
	StyleSheet,
	ScrollView,
} from "react-native";

const Categories = ({ navigation }) => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.textHeader}>Most Confused Letters</Text>
				<Image
					source={require("../assets/images/shabdam/confused-letter.png")}
					style={{ height: 240, width: 320, justifyContent: "space-evenly" }}
				/>
				<Button title="Show" onPress={() => navigation.navigate("Confused")} />
				<Text style={styles.textHeader}>Most Used Grammar</Text>
				<Image
					source={require("../assets/images/grammar/most-used-grammar.png")}
					style={{ height: 240, width: 320, justifyContent: "space-evenly" }}
				/>
				<Button title="Show" onPress={() => navigation.navigate("Grammar")} />
				<Text style={styles.textHeader}>Past and Future</Text>
				<Image
					source={require("../assets/images/grammar/past-and-future.png")}
					style={{ height: 240, width: 320, justifyContent: "space-evenly" }}
				/>
				<Button
					title="Show"
					onPress={() => navigation.navigate("PastFuture")}
				/>
			</View>
		</ScrollView>
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
