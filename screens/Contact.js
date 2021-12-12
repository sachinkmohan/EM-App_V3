import React from "react";

import {
	View,
	Text,
	Button,
	Image,
	Dimensions,
	StyleSheet,
	Linking,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { dstyles, buttons } from "../styles/DefaultStyle";

import Icon from "react-native-vector-icons/FontAwesome";
var screenWidth = Dimensions.get("window").width;

const Contact = ({ navigation }) => {
	return (
		<ScrollView style={{ backgroundColor: "#fff" }}>
			<View style={dstyles.container}>
				<Text style={[dstyles.text, styles.marginT, styles.borderA]}>
					You can see more of our content on
					<Text
						style={[styles.hyperlink, dstyles.text]}
						onPress={() => {
							Linking.openURL("https://www.instagram.com/easymalayalam/");
						}}
					>
						{" "}
						Instagram
					</Text>
					{","}
					<Text
						style={[styles.hyperlink, dstyles.text]}
						onPress={() => {
							Linking.openURL(
								"https://www.youtube.com/channel/UCtMwtz4hRKr6WG_n8CisiDA/featured"
							);
						}}
					>
						{" "}
						YouTube,
					</Text>{" "}
					<Text
						style={[styles.hyperlink, dstyles.text]}
						onPress={() => {
							Linking.openURL("https://twitter.com/easy_malayalam");
						}}
					>
						Twitter
					</Text>{" "}
					<Text>and on our </Text>
					<Text
						style={[styles.hyperlink, dstyles.text]}
						onPress={() => {
							Linking.openURL("https://easymalayalam.fun/");
						}}
					>
						Website
					</Text>
					. {"\n"}
					{"\n"} You can also email us at{" "}
					<Text style={{ fontWeight: "bold" }}> ecmalayalam@gmail.com</Text> for
					any queries.
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
	marginT: {
		marginTop: 30,
	},
	borderA: {
		borderRadius: 20,
	},
});
export default Contact;
