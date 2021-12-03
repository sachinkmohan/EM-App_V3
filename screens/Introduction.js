import React from "react";

import { View, Text, Button, StyleSheet, Image } from "react-native";

const Introduction = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Ellavarkum Namaskaram</Text>
			<Image
				style={{ width: "90%", height: "30%" }}
				source={{ uri: "https://i.ytimg.com/vi/330WTVCHGfE/maxresdefault.jpg" }}
			/>
			<Button
				title="Categories"
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
