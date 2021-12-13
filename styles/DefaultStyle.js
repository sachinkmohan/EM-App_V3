import { StyleSheet } from "react-native";

const dstyles = StyleSheet.create({
	h1: {
		fontSize: 28,
		textTransform: "uppercase",
		textAlign: "center",
	},
	h2: {
		fontSize: 22,
		fontWeight: "bold",
		color: "#006400",
		textAlign: "left",
	},
	h3: {
		fontSize: 18,
		fontWeight: "bold",
	},
	text: {
		fontSize: 17,
		textAlign: "left",
		lineHeight: 25,
		padding: 7,
	},
	bold: {
		fontWeight: "bold",
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	marginT: {
		marginTop: 30,
	},
	paddingDS: {
		padding: 10,
	},
});

const borders = StyleSheet.create({
	border1: {
		borderRadius: 20,
		borderWidth: 2,
		borderColor: "#CDDC39",
		// Setting up Text Font Color.
		color: "#fff",
		borderStyle: "dashed",
		// Setting Up Background Color of Text component.
		backgroundColor: "#CDDC39",

		// Adding padding on Text component.

		fontSize: 20,
	},
});

export { dstyles, borders };
