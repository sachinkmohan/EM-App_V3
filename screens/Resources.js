import React from "react";

import { View, Text, Button, Image, StyleSheet, Linking } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import HyperLink from "react-native-hyperlink";

const Resources = ({ navigation }) => {
	return (
		<ScrollView>
			<View style={styles.movetoCenter}>
				<Text style={styles.h2}>YouTube {"\n"}</Text>
				<Text style={styles.text}>
					1. Fluent in Malayalam
					<Text
						style={styles.hyperlink}
						onPress={() => {
							Linking.openURL("https://www.youtube.com/c/FluentinMalayalam");
						}}
					>
						{" "}
						- Source {"\n"}
					</Text>
				</Text>
				<Text style={styles.text}>
					2. Laa Laa Language
					<Text
						style={styles.hyperlink}
						onPress={() => {
							Linking.openURL(
								"https://www.youtube.com/channel/UCDAfMBnXBXtYLJ8XpPvnIkg"
							);
						}}
					>
						{" "}
						- Source {"\n"}
					</Text>
				</Text>
				<Text style={styles.text}>
					3. Learn Malayalam with Elikutty
					<Text
						style={styles.hyperlink}
						onPress={() => {
							Linking.openURL(
								"https://www.youtube.com/channel/UC32ejuUaeWoE5F9sdRN1kVw"
							);
						}}
					>
						{" "}
						- Source {"\n"}
					</Text>
				</Text>
				<Text style={styles.h2}>Instagram {"\n"}</Text>
				<Text style={styles.text}>
					1. Fluent in Malayalam
					<Text
						style={styles.hyperlink}
						onPress={() => {
							Linking.openURL("https://www.instagram.com/fluentinmalayalam/");
						}}
					>
						{" "}
						- Source {"\n"}
					</Text>
				</Text>
				<Text style={styles.text}>
					2. Learn Malayalam with Elikutty
					<Text
						style={styles.hyperlink}
						onPress={() => {
							Linking.openURL("https://www.instagram.com/eli.kutty/");
						}}
					>
						{" "}
						- Source {"\n"}
					</Text>
				</Text>
				<Text style={styles.text}>
					3. Easy Malayalam
					<Text
						style={styles.hyperlink}
						onPress={() => {
							Linking.openURL("https://www.instagram.com/easymalayalam/");
						}}
					>
						{" "}
						- Source {"\n"}
					</Text>
				</Text>
				<Text style={styles.text}>
					4. Everyday Malayalam with Gokul
					<Text
						style={styles.hyperlink}
						onPress={() => {
							Linking.openURL("https://www.instagram.com/everyday_malayalam/");
						}}
					>
						{" "}
						- Source {"\n"}
					</Text>
				</Text>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	boldtext: {
		fontWeight: "bold",
		paddingLeft: 10,
		fontSize: 20,
	},
	h2: {
		fontSize: 22,
	},
	text: {
		paddingLeft: 15,
		fontSize: 20,
		color: "black",
	},
	movetoCenter: {
		justifyContent: "center",
		alignItems: "center",
	},
	hyperlink: {
		fontSize: 18,
		fontWeight: "600",
		color: "blue",
		marginTop: 30,
	},
});
export default Resources;
