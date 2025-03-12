import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const Theme = {
        colors: {
            primaryGradientStart: "#18608c",
            primaryGradientMiddle: "#2094ab",
            primaryGradientEnd: "#071021",
            gradientColors: ["#18608c", "#2094ab", "#071021"],
            borderColor: "rgba(255, 255, 255, 0.2)",
            taskBorderColor: "#256da1",
            shadowColor: "#000",
            taskBackground: "#f0f8ff",
            btnBackground: "#1b798c",
            taskItemBackground: "#1b798c",
            textColor: "white",
            placeholderTextColor: "#256da1",
        },
        fonts: {
            titleFont: "Lobster-Regular",
            bodyFont: "Roboto-VariableFont", 
            taskFont: "Roboto-VariableFont",
        },
};

const styles = StyleSheet.create({
    gradientContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: "column",
        margin: wp("2.5%"),
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Theme.colors.borderColor,
    },
    titleView: {
        width: "100%",
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        marginVertical: wp("3%"),
    },
    bodyView: {
        flex: 0.9,
        flexDirection: "row",
        marginTop: hp("1%"),
    },
    addTaskView: {
        flex: 1,
        alignItems: "center",
        paddingTop: hp("1.5%"),
    },
    title: {
        fontSize: wp("5%"),
        color: Theme.colors.textColor,
        fontStyle: "italic",
        fontFamily: Theme.fonts.titleFont,
        textShadowColor: Theme.colors.borderColor,
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
    quoteContainer: {
        padding: wp("1.5%"),
        marginBottom: hp("1.5%"),
    },
    quote: {
        fontSize: wp("2.5%"),
        color: Theme.colors.textColor,
        fontStyle: "italic",
        fontFamily: Theme.fonts.bodyFont,
        textAlign: "center",
    },
    task: {
        borderWidth: 0.8,
        borderColor: Theme.colors.taskBorderColor,
        color: Theme.colors.taskBorderColor,
        fontSize: wp("1.5%"),
        fontFamily: Theme.fonts.taskFont,
        width: "80%",
        textAlign: "center",
        paddingVertical: hp("2%"),
        paddingHorizontal: wp("2.5%"),
        marginVertical: hp("0.8%"),
        borderRadius: 25,
        backgroundColor: Theme.colors.taskBackground,
        shadowColor: Theme.colors.taskBorderColor,
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    btn: {
        backgroundColor: Theme.colors.btnBackground,
        width: "35%",
        paddingVertical: hp("0.8%"),
        paddingHorizontal: wp("2.5%"),
        marginVertical: hp("2.5%"),
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: Theme.colors.shadowColor,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 2,
        borderColor: Theme.colors.textColor,
        borderWidth: 1,
    },
    btnText: {
        textAlign: "center",
        color: Theme.colors.textColor,
        fontSize: wp("2%"),
        fontFamily: Theme.fonts.titleFont,
        textTransform: "uppercase",
    },
    taskViewer: {
        flex: 1,
        marginLeft: wp("1%"),
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: Theme.colors.textColor,
        height: "95%",
        width: "95%",
        marginRight: wp("2%"),
        marginLeft: wp("3%"),
    },
    taskListContent: {
        paddingVertical: hp("0.5%"),
        paddingHorizontal: wp("1.5%"),
    },
    taskItemContainer: {
        backgroundColor: Theme.colors.taskItemBackground,
        borderRadius: 15,
        marginVertical: hp("0.5%"),
        marginHorizontal: wp("1.5%"),
        paddingHorizontal: wp("1%"),
        paddingVertical: wp("0.3%"),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: Theme.colors.shadowColor,
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    taskItem: {
        fontSize: wp("1.5%"),
        color: Theme.colors.textColor,
        fontFamily: Theme.fonts.taskFont,
    },
    deleteIcon: {
        padding: wp("1.5%"),
    },
});

export default styles;
export { Theme };