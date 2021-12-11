import React from "react";

import { View, Text, Button, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { dstyles, borders } from "../styles/DefaultStyle";

const MUsedGrammar = ({ navigation }) => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={dstyles.h1}>Most Used Grammar</Text>
				<Text style={dstyles.h2}>
					{"\n"} Ways to say no in Malayalam {"\n"}
				</Text>
				<Image
					source={require("../assets/images/grammar/saying-no.jpeg")}
					style={{ height: 320, width: "100%", resizeMode: "contain" }}
				/>
				<Text style={dstyles.text}>
					<Text style={dstyles.h3}> {"\n"} 1. Alla or Alla - </Text>
					is used to express something that you are not. For eg., Njan Kurangan
					alla, which means I am not a monkey.
				</Text>
				<Text style={dstyles.text}>
					<Text style={dstyles.h3}> {"\n"} 2. Illa or Illa - </Text>
					is used to express something that you don't have or didn't do. For
					eg., Ente kaiyil panam illa means I don't have money with me. Njan
					athu cheythilla means I didn't do it.
				</Text>
				<Text style={dstyles.text}>
					<Text style={dstyles.h3}> {"\n"} 2. Venda or venda - </Text>
					is used to express when you don't want something. For eg., Enikku
					choru venda means I don't need food.{"\n"}
				</Text>
				<Text style={dstyles.h2}>
					{"\n"} Njan and Enikku - The Difference {"\n"}
				</Text>
				<Text
					style={{
						fontSize: 20,
						fontWeight: "bold",
						color: "#0000ff",
					}}
				>
					Njan
				</Text>
				<Text style={dstyles.text}>
					<Text style={{ fontWeight: "bold", fontSize: 18 }}>
						1. Actions -{" "}
					</Text>
					Used to denote an action. For eg., Njan cake thinnu which means I cate
					the cake.{"\n"}
				</Text>
				<Text style={dstyles.text}>
					<Text style={{ fontWeight: "bold", fontSize: 18 }}>
						2. Status/Position -{" "}
					</Text>
					Used for representing the status or a position. For eg., Njan Doctor
					aanu which means I am a Doctor.{"\n"}
				</Text>
				<Text style={dstyles.text}>
					<Text style={{ fontWeight: "bold", fontSize: 18 }}>
						3. Nationality -{" "}
					</Text>
					Used for representing your Nationality. For eg., Njan Indian aanu
					which means I am an Indian.{"\n"}
				</Text>
				<Text
					style={{
						fontSize: 20,
						fontWeight: "bold",
						color: "#0000ff",
					}}
				>
					Enikku
				</Text>
				<Text style={dstyles.text}>
					<Text style={{ fontWeight: "bold", fontSize: 18 }}>1. Mood - </Text>
					Used to express your mood. For eg., Enikku santhosham undu which means
					I am happy.{"\n"}
				</Text>
				<Text style={dstyles.text}>
					<Text style={{ fontWeight: "bold", fontSize: 18 }}>2. Wants - </Text>
					Used for express your wants. For eg., Enikku ice-cream venam which
					means I want an ice-cream.{"\n"}
				</Text>
				<Text style={dstyles.text}>
					<Text style={{ fontWeight: "bold", fontSize: 18 }}>
						3. Ability -{" "}
					</Text>
					Used for express your ability. For eg., Eniku car odikkan ariyam which
					means I know to drive a car.{"\n"}
				</Text>
				<Text style={dstyles.text}>
					<Text style={{ fontWeight: "bold", fontSize: 18 }}>
						4. Receiver -{" "}
					</Text>
					Used for express when you receive something. For eg., Eniku e-mail
					kitti which means I got the e-mail.{"\n"}
				</Text>
				<Text style={dstyles.text}>
					<Text style={{ fontWeight: "bold", fontSize: 18 }}>
						5. Condition -{" "}
					</Text>
					Used for express your condition. For eg., Eniku pani undu which means
					I have fever.{"\n"}
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
	text: {
		paddingLeft: 15,
		fontSize: 20,
		color: "#0000ff",
	},
	movetoCenter: {
		justifyContent: "center",
		alignItems: "center",
	},
	container: {
		flex: 1,
	},
});
export default MUsedGrammar;
