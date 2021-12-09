import React from "react";

import { View, Text, Button, StyleSheet, Image } from "react-native";

const Introduction = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>
				Welcome all to the Easy Malayalam App! The App focuses on giving you
				tips, necessary grammar, common mistakes, confusions while learning
				Malayalam and a collection of resources to get you started. We are
				trying to get all the information under one hood to make Malayalam
				learning faster than ever. Thanks to all the content creators of
				Malayalam, who is constantly striving to bring all the content on the
				books to life in a fun and enjoyable way! Good Luck! Thanks Elikutty for
				your dedication, support and for allowing your resources to be used for
				educational purposes! It's time to learn something now! Let's get
				started.
			</Text>
			<Image
				source={require("../assets/images/homes.jpg")}
				style={{ height: "50%", width: "90%", justifyContent: "space-evenly" }}
			/>
			<Button
				title="Get Started"
				onPress={() => navigation.navigate("Category")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	item: {
		flex: 1,
	},
});

export default Introduction;
