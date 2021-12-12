import React from "react";

import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { dstyles } from "../styles/DefaultStyle";
var screenWidth = Dimensions.get("window").width;

const ConfusedLetters = ({ navigation }) => {
	return (
		<ScrollView>
			<View style={styles.movetoCenter}>
				<Text style={dstyles.h1}>Most Confused Letters</Text>
				<Text style={[dstyles.h2, dstyles.bold, styles.text]}>
					{"\n"} Letter's <Text style={{ fontSize: 30 }}>ല & ള </Text> {"\n"}
				</Text>
				<Text></Text>
				<Image
					source={require("../assets/images/shabdam/La.png")}
					style={{
						height: 400,
						width: screenWidth,
						resizeMode: "contain",
						marginTop: -30.0,
					}}
				/>
				<Text style={dstyles.text}>
					<Text style={styles.malLetters}>La or ല</Text> sound is produced by
					placing the tongue behind the teeth. Whereas{" "}
					<Text style={styles.malLetters}>La or ള</Text> is produced by curling
					your tongue back and touching it on the soft part(soft palate) of the
					mouth. Refer the images above for better understanding of the tongue
					placement.
				</Text>
				<Text style={[dstyles.h2, dstyles.bold, styles.text]}>
					{"\n"} Letter's <Text style={{ fontSize: 30 }}>ര & റ </Text> {"\n"}
				</Text>
				<Text></Text>
				<Image
					source={require("../assets/images/shabdam/Ra.png")}
					style={{
						height: 400,
						width: screenWidth,
						resizeMode: "contain",
						marginTop: -30.0,
					}}
				/>
				<Text style={dstyles.text}>
					<Text style={styles.malLetters}>Ra or ര</Text> is produced by touching
					the tip of the tongue on the hard palate just behind the teeth
					creating a soft sound whereas{" "}
					<Text style={styles.malLetters}>Ra or റ</Text> is similar to the
					rolling R sound which is made by vibrating the tongue behind the teeth
					similar to Arabic & Spanish.
				</Text>
				<Text style={[dstyles.h2, dstyles.bold, styles.text]}>
					{"\n"} Letter's <Text style={{ fontSize: 30 }}> ന & ണ </Text> {"\n"}
				</Text>
				<Text></Text>
				<Image
					source={require("../assets/images/shabdam/Na.png")}
					style={{
						height: 400,
						width: screenWidth,
						resizeMode: "contain",
						marginTop: -30.0,
					}}
				/>
				<Text style={dstyles.text}>
					<Text style={styles.malLetters}>Na or ന</Text> is produced by placing
					the tongue behind the teeth. Whereas the{" "}
					<Text style={styles.malLetters}>Na or ണ</Text>
					sound is produced by touching the tongue to the retroflex of the
					mouth.
				</Text>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	malLetters: {
		fontWeight: "bold",
		fontSize: 23,
	},
	text: {
		paddingLeft: 15,
		fontSize: 20,
		color: "#0000ff",
	},
	movetoCenter: {
		justifyContent: "center",
		alignItems: "center",
	},
});
export default ConfusedLetters;
