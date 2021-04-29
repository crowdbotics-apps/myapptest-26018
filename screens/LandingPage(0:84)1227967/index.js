import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ec2/482b/c7b3160e02d54186383a312d098da958"
        }}
        style={styles.ImageBackground_0_85}
      />
      <View style={styles.View_0_86} />
      <View style={styles.View_0_87}>
        <Text style={styles.Text_0_87}>A new way to learn about careers</Text>
      </View>
      <View style={styles.View_0_88}>
        <Text style={styles.Text_0_88}>
          Inspyred provides resources to help you make the best decisions.
        </Text>
      </View>
      <View style={styles.View_0_89}>
        <View style={styles.View_0_90}>
          <View style={styles.View_0_91} />
          <View style={styles.View_0_92}>
            <Text style={styles.Text_0_92}>Sign Up</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_93}>
        <View style={styles.View_0_94} />
        <View style={styles.View_0_95}>
          <Text style={styles.Text_0_95}>Log in</Text>
        </View>
      </View>
      <View style={styles.View_0_96}>
        <View style={styles.View_0_97} />
        <View style={styles.View_0_98}>
          <View style={styles.View_0_99}>
            <Text style={styles.Text_0_99}>285</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a392/10d7/443724561afe8316cffb7b13b6d865f8"
            }}
            style={styles.ImageBackground_0_100}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94d1/e89d/ad88f2c782f05c917a9f07d08a06d7e9"
          }}
          style={styles.ImageBackground_0_101}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d23c/b5b1/29fd2168c51635b67aecb704c4df6cf8"
          }}
          style={styles.ImageBackground_0_102}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_0_85: {
    width: wp("58.93333333333334%"),
    minWidth: wp("58.93333333333334%"),
    height: hp("56.4207650273224%"),
    minHeight: hp("56.4207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.8%"),
    top: hp("14.48087431693989%")
  },
  View_0_86: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("37.02185792349727%"),
    minHeight: hp("37.02185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("73.90710382513662%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_0_87: {
    width: wp("77.86666666666666%"),
    minWidth: wp("77.86666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("76.91256830601093%")
  },
  Text_0_87: {
    color: "rgba(4, 44, 92, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.2222222238779068,
    textTransform: "none"
  },
  View_0_88: {
    width: wp("62.66666666666667%"),
    minWidth: wp("62.66666666666667%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.666666666666668%"),
    top: hp("80.87431693989072%")
  },
  Text_0_88: {
    color: "rgba(119, 134, 158, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.11100000143051147,
    textTransform: "none"
  },
  View_0_89: {
    width: wp("76.8%"),
    minWidth: wp("76.8%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("90.7103825136612%")
  },
  View_0_90: {
    width: wp("76.8%"),
    minWidth: wp("76.8%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_91: {
    width: wp("76.8%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(53, 152, 251, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_92: {
    width: wp("17.599999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.6%"),
    top: hp("0%")
  },
  Text_0_92: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_0_93: {
    width: wp("76.8%"),
    minWidth: wp("76.8%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("99.04371584699454%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_94: {
    width: wp("76.8%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_95: {
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.066666666666663%"),
    top: hp("0%")
  },
  Text_0_95: {
    color: "rgba(126, 126, 126, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_0_96: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.978142076502733%"),
    minHeight: hp("12.978142076502733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_97: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.978142076502733%"),
    minHeight: hp("12.978142076502733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(53, 152, 251, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_98: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.8%"),
    top: hp("6.967213114754098%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_99: {
    width: wp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_99: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_100: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0.27322404371584685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.800000000000004%")
  },
  ImageBackground_0_101: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("6.557377049180328%")
  },
  ImageBackground_0_102: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.93333333333332%"),
    top: hp("6.557377049180328%")
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
