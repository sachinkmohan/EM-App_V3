import React from "react";

import {
	View,
	Text,
	Button,
	StyleSheet,
	Image,
	Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { dstyles } from "../styles/DefaultStyle";

var screenWidth = Dimensions.get("window").width;

const Introduction = ({ navigation }) => {
	return (
		<ScrollView style={{ backgroundColor: "#fff" }}>
			<View style={[dstyles.container, styles.marginT]}>
				<Text style={[dstyles.text]}>
					<Text
						style={{ fontSize: 19, fontWeight: "bold", fontStyle: "italic" }}
					>
						Hello Malayalees!!
					</Text>{" "}
					Welcome all to the Easy Malayalam App! The App focuses on giving you
					tips, necessary grammar, common mistakes, confusions while learning
					Malayalam and a collection of resources to get you started. We are
					trying to get all the information under one hood to make Malayalam
					learning faster than ever. Thanks to all the content creators of
					Malayalam, who is constantly striving to bring all the content on the
					books to life in a fun and enjoyable way! Good Luck! Thanks Elikutty
					for your dedication, support and for allowing your resources to be
					used for educational purposes! It's time to learn something now! Let's
					get started.
				</Text>
			</View>
		</ScrollView>
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
	textA: {
		fontSize: 17,
		lineHeight: 25,
		textAlign: "left",
	},
	marginT: {
		marginTop: 80,
	},
	paddingT: {
		padding: 10,
	},
});

export default Introduction;
