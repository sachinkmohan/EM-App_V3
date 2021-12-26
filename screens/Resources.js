import React from "react";

import { View, Text, Button, Image, StyleSheet, Linking } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { dstyles, buttons } from "../styles/DefaultStyle";

const Resources = ({ navigation }) => {
	return (
		<ScrollView style={{ backgroundColor: "#fff" }}>
			<View style={{ flex: 1 }}>
				<Text style={dstyles.h1}> Content Creators of Malayalam {"\n"}</Text>
				<Text style={dstyles.text}>
					<Text style={dstyles.bold}>1. Fluent in Malayalam -</Text> If you are
					looking for content which are absolutely necessary for the beginner's
					then this is one of the best channel for you. Her media presence are
					<Text
						style={[styles.hyperlink, dstyles.text]}
						onPress={() => {
							Linking.openURL("https://www.youtube.com/c/FluentinMalayalam");
						}}
					>
						{" "}
						YouTube
					</Text>
					{","}
					<Text
						style={[styles.hyperlink, dstyles.text]}
						onPress={() => {
							Linking.openURL("https://www.instagram.com/fluentinmalayalam");
						}}
					>
						{" "}
						Instagram
					</Text>{" "}
					{"\n"}
				</Text>

				<Text style={dstyles.text}>
					<Text style={dstyles.bold}>2. La La Language -</Text> This channel
					focuses on reading Malayalam and Grammar. Their media presence are
					<Text
						style={[styles.hyperlink, dstyles.text]}
						onPress={() => {
							Linking.openURL(
								"https://www.youtube.com/channel/UCDAfMBnXBXtYLJ8XpPvnIkg"
							);
						}}
					>
						{" "}
						YouTube
					</Text>
					{"\n"}
				</Text>
				<Text style={dstyles.text}>
					<Text style={dstyles.bold}>3. Learn Malayalam with Elikutty</Text>{" "}
					Elikutty or Elizabeth Keyton is an American whose is so passionate
					about learning and teaching. She relentlessly creates new content
					which are useful for all level of Malayalam language learners. Her
					media presence are
					<Text
						style={[styles.hyperlink, dstyles.text]}
						onPress={() => {
							Linking.openURL(
								"https://www.youtube.com/channel/UC32ejuUaeWoE5F9sdRN1kVw"
							);
						}}
					>
						{" "}
						YouTube
					</Text>
					{","}
					<Text
						style={[styles.hyperlink, dstyles.text]}
						onPress={() => {
							Linking.openURL("https://www.instagram.com/eli.kutty/");
						}}
					>
						{" "}
						Instagram
					</Text>{" "}
					{"\n"}
				</Text>
				<Text style={dstyles.text}>
					<Text style={dstyles.bold}>4. Easy Malayalam</Text> Sachin along with
					his wonderful team of four creates content which are fun and easy to
					comprehend. Their media presence are
					<Text
						style={[styles.hyperlink, dstyles.text]}
						onPress={() => {
							Linking.openURL(
								"https://www.youtube.com/channel/UCtMwtz4hRKr6WG_n8CisiDA/featured"
							);
						}}
					>
						{" "}
						YouTube
					</Text>
					{","}
					<Text
						style={[styles.hyperlink, dstyles.text]}
						onPress={() => {
							Linking.openURL("https://www.instagram.com/easymalayalam/");
						}}
					>
						{" "}
						Instagram
					</Text>{" "}
					{"\n"}
				</Text>
				<Text style={dstyles.text}>
					<Text style={dstyles.bold}>5. Everyday Malayalam</Text> Gokul,
					Malayalee and polyglot creates short videos under 1 minute which are
					helpful for conversational Malayalam. His media presence are
					<Text
						style={[styles.hyperlink, dstyles.text]}
						onPress={() => {
							Linking.openURL("https://www.instagram.com/everyday_malayalam/");
						}}
					>
						{" "}
						Instagram
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
