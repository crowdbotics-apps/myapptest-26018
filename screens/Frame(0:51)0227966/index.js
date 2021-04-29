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
      <View style={styles.View_0_52}>
        <View style={styles.View_0_53} />
        <View style={styles.View_0_54}>
          <View style={styles.View_0_55}>
            <Text style={styles.Text_0_55}>285</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a392/10d7/443724561afe8316cffb7b13b6d865f8"
            }}
            style={styles.ImageBackground_0_56}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d5f/5790/0e9a4ec904f1d4461940c22365e81a16"
          }}
          style={styles.ImageBackground_0_57}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d23c/b5b1/29fd2168c51635b67aecb704c4df6cf8"
          }}
          style={styles.ImageBackground_0_58}
        />
      </View>
      <View style={styles.View_0_59}>
        <Text style={styles.Text_0_59}>Recommended Majors</Text>
      </View>
      <View style={styles.View_0_60}>
        <Text style={styles.Text_0_60}>Favorites</Text>
      </View>
      <View style={styles.View_0_63}>
        <View style={styles.View_0_64}>
          <Text style={styles.Text_0_64}>Majors</Text>
        </View>
      </View>
      <View style={styles.View_0_69}>
        <Text style={styles.Text_0_69}>Most Popular Majors</Text>
      </View>
      <View style={styles.View_0_74}>
        <Text style={styles.Text_0_74}>Advanced Search</Text>
      </View>
      <View style={styles.View_0_75}>
        <View style={styles.View_0_79}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cea4/b8dd/e832807d632c6430c9ce8889f5b7279f"
            }}
            style={styles.ImageBackground_0_76}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cea4/b8dd/e832807d632c6430c9ce8889f5b7279f"
            }}
            style={styles.ImageBackground_0_77}
          />
          <View style={styles.View_0_78} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f94/b76b/dc81f48abbd8d7f7dcb4688f40dd7104"
          }}
          style={styles.ImageBackground_0_80}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ae8/e9fa/f90b0379cd48a6a16aecaf065c9c33a5"
          }}
          style={styles.ImageBackground_0_81}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06d3/a7c2/4d1e6ceb80cecfbf7a5759831839534e"
          }}
          style={styles.ImageBackground_0_82}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f029/141a/23fabdbda0da831a5ebb3d645f2edde2"
          }}
          style={styles.ImageBackground_0_83}
        />
      </View>
      <View style={styles.View_568_100}>
        <View style={styles.View_I568_100_568_91}>
          <View style={styles.View_I568_100_568_92} />
          <View style={styles.View_I568_100_568_93}>
            <Text style={styles.Text_I568_100_568_93}>Information Systems</Text>
          </View>
        </View>
        <View style={styles.View_I568_100_568_94}>
          <View style={styles.View_I568_100_568_95}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64df/a26a/b42ccfb5f217e108400e73386c8164f4"
              }}
              style={styles.ImageBackground_I568_100_568_96}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93be/e996/5bb91c80d982055ff64a31a74eac1a09"
              }}
              style={styles.ImageBackground_I568_100_568_97}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_568_109}>
        <View style={styles.View_I568_109_568_91}>
          <View style={styles.View_I568_109_568_92} />
          <View style={styles.View_I568_109_568_93}>
            <Text style={styles.Text_I568_109_568_93}>Information Systems</Text>
          </View>
        </View>
        <View style={styles.View_I568_109_568_94}>
          <View style={styles.View_I568_109_568_95}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64df/a26a/b42ccfb5f217e108400e73386c8164f4"
              }}
              style={styles.ImageBackground_I568_109_568_96}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93be/e996/5bb91c80d982055ff64a31a74eac1a09"
              }}
              style={styles.ImageBackground_I568_109_568_97}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_568_118}>
        <View style={styles.View_I568_118_568_91}>
          <View style={styles.View_I568_118_568_92} />
          <View style={styles.View_I568_118_568_93}>
            <Text style={styles.Text_I568_118_568_93}>Information Systems</Text>
          </View>
        </View>
        <View style={styles.View_I568_118_568_94}>
          <View style={styles.View_I568_118_568_95}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64df/a26a/b42ccfb5f217e108400e73386c8164f4"
              }}
              style={styles.ImageBackground_I568_118_568_96}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93be/e996/5bb91c80d982055ff64a31a74eac1a09"
              }}
              style={styles.ImageBackground_I568_118_568_97}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_568_127}>
        <View style={styles.View_I568_127_568_91}>
          <View style={styles.View_I568_127_568_92} />
          <View style={styles.View_I568_127_568_93}>
            <Text style={styles.Text_I568_127_568_93}>Information Systems</Text>
          </View>
        </View>
        <View style={styles.View_I568_127_568_94}>
          <View style={styles.View_I568_127_568_95}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64df/a26a/b42ccfb5f217e108400e73386c8164f4"
              }}
              style={styles.ImageBackground_I568_127_568_96}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93be/e996/5bb91c80d982055ff64a31a74eac1a09"
              }}
              style={styles.ImageBackground_I568_127_568_97}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_568_136}>
        <View style={styles.View_I568_136_568_91}>
          <View style={styles.View_I568_136_568_92} />
          <View style={styles.View_I568_136_568_93}>
            <Text style={styles.Text_I568_136_568_93}>Information Systems</Text>
          </View>
        </View>
        <View style={styles.View_I568_136_568_94}>
          <View style={styles.View_I568_136_568_95}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64df/a26a/b42ccfb5f217e108400e73386c8164f4"
              }}
              style={styles.ImageBackground_I568_136_568_96}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93be/e996/5bb91c80d982055ff64a31a74eac1a09"
              }}
              style={styles.ImageBackground_I568_136_568_97}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_568_145}>
        <View style={styles.View_I568_145_568_91}>
          <View style={styles.View_I568_145_568_92} />
          <View style={styles.View_I568_145_568_93}>
            <Text style={styles.Text_I568_145_568_93}>Information Systems</Text>
          </View>
        </View>
        <View style={styles.View_I568_145_568_94}>
          <View style={styles.View_I568_145_568_95}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64df/a26a/b42ccfb5f217e108400e73386c8164f4"
              }}
              style={styles.ImageBackground_I568_145_568_96}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93be/e996/5bb91c80d982055ff64a31a74eac1a09"
              }}
              style={styles.ImageBackground_I568_145_568_97}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_568_154}>
        <View style={styles.View_I568_154_568_82}>
          <View style={styles.View_I568_154_568_83} />
          <View style={styles.View_I568_154_568_84}>
            <Text style={styles.Text_I568_154_568_84}>Information Systems</Text>
          </View>
        </View>
        <View style={styles.View_I568_154_568_85}>
          <View style={styles.View_I568_154_568_86}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b37/292a/b7f2f33cafe79fcb5fabbcdafe69ba65"
              }}
              style={styles.ImageBackground_I568_154_568_87}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/938b/7c50/d0cff04c3d4251791d39065c9bc0d615"
              }}
              style={styles.ImageBackground_I568_154_568_88}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_568_163}>
        <View style={styles.View_I568_163_568_82}>
          <View style={styles.View_I568_163_568_83} />
          <View style={styles.View_I568_163_568_84}>
            <Text style={styles.Text_I568_163_568_84}>Information Systems</Text>
          </View>
        </View>
        <View style={styles.View_I568_163_568_85}>
          <View style={styles.View_I568_163_568_86}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b37/292a/b7f2f33cafe79fcb5fabbcdafe69ba65"
              }}
              style={styles.ImageBackground_I568_163_568_87}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/938b/7c50/d0cff04c3d4251791d39065c9bc0d615"
              }}
              style={styles.ImageBackground_I568_163_568_88}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_568_172}>
        <View style={styles.View_I568_172_568_82}>
          <View style={styles.View_I568_172_568_83} />
          <View style={styles.View_I568_172_568_84}>
            <Text style={styles.Text_I568_172_568_84}>Information Systems</Text>
          </View>
        </View>
        <View style={styles.View_I568_172_568_85}>
          <View style={styles.View_I568_172_568_86}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b37/292a/b7f2f33cafe79fcb5fabbcdafe69ba65"
              }}
              style={styles.ImageBackground_I568_172_568_87}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/938b/7c50/d0cff04c3d4251791d39065c9bc0d615"
              }}
              style={styles.ImageBackground_I568_172_568_88}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_568_181}>
        <View style={styles.View_I568_181_568_82}>
          <View style={styles.View_I568_181_568_83} />
          <View style={styles.View_I568_181_568_84}>
            <Text style={styles.Text_I568_181_568_84}>Information Systems</Text>
          </View>
        </View>
        <View style={styles.View_I568_181_568_85}>
          <View style={styles.View_I568_181_568_86}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b37/292a/b7f2f33cafe79fcb5fabbcdafe69ba65"
              }}
              style={styles.ImageBackground_I568_181_568_87}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/938b/7c50/d0cff04c3d4251791d39065c9bc0d615"
              }}
              style={styles.ImageBackground_I568_181_568_88}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_52: {
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
  View_0_53: {
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
  View_0_54: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06666666666667%"),
    top: hp("6.967213114754098%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_55: {
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_56: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0.27322404371584685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.79999999999999%")
  },
  ImageBackground_0_57: {
    width: wp("6.70967763264974%"),
    minWidth: wp("6.70967763264974%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("6.557377049180328%")
  },
  ImageBackground_0_58: {
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
  View_0_59: {
    width: wp("47.733333333333334%"),
    minWidth: wp("47.733333333333334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("39.48087431693989%")
  },
  Text_0_59: {
    color: "rgba(11, 11, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_60: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("22.6775956284153%")
  },
  Text_0_60: {
    color: "rgba(11, 11, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_63: {
    width: wp("30.133333333333333%"),
    minWidth: wp("30.133333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("15.437158469945356%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_64: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_64: {
    color: "rgba(4, 44, 92, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.6240000128746033,
    textTransform: "none"
  },
  View_0_69: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("70.49180327868852%")
  },
  Text_0_69: {
    color: "rgba(11, 11, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_74: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.33333333333333%"),
    top: hp("17.349726775956285%")
  },
  Text_0_74: {
    color: "rgba(54, 142, 242, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_75: {
    width: wp("80.53333333333333%"),
    minWidth: wp("80.53333333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("100.27322404371584%")
  },
  View_0_79: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.3160433743169397%"),
    minHeight: hp("3.3160433743169397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.303726946721312%")
  },
  ImageBackground_0_76: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.3160433743169397%"),
    minHeight: hp("3.3160433743169397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_77: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.3160433743169397%"),
    minHeight: hp("3.3160433743169397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_78: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.3160433743169397%"),
    minHeight: hp("3.3160433743169397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(149, 159, 186, 1)"
  },
  ImageBackground_0_80: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.466666666666654%"),
    top: hp("2.595628415300567%")
  },
  ImageBackground_0_81: {
    width: wp("13.575757853190105%"),
    minWidth: wp("13.575757853190105%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("0%")
  },
  ImageBackground_0_82: {
    width: wp("6.222222391764324%"),
    minWidth: wp("6.222222391764324%"),
    height: hp("3.1876139302071325%"),
    minHeight: hp("3.1876139302071325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.400000000000002%"),
    top: hp("2.4590163934426243%")
  },
  ImageBackground_0_83: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333333%"),
    top: hp("3.1420765027322517%")
  },
  View_568_100: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("27.049180327868854%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I568_100_568_91: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I568_100_568_92: {
    width: wp("44%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(54, 87, 196, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I568_100_568_93: {
    width: wp("31.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("1.775956284153004%")
  },
  Text_I568_100_568_93: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I568_100_568_94: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I568_100_568_95: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I568_100_568_96: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I568_100_568_97: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%")
  },
  View_568_109: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I568_109_568_91: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I568_109_568_92: {
    width: wp("44%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(54, 87, 196, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I568_109_568_93: {
    width: wp("31.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("1.775956284152997%")
  },
  Text_I568_109_568_93: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I568_109_568_94: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I568_109_568_95: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I568_109_568_96: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I568_109_568_97: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%")
  },
  View_568_118: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("87.70491803278688%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I568_118_568_91: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I568_118_568_92: {
    width: wp("44%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(54, 87, 196, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I568_118_568_93: {
    width: wp("31.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("1.7759562841530112%")
  },
  Text_I568_118_568_93: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I568_118_568_94: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I568_118_568_95: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I568_118_568_96: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I568_118_568_97: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%")
  },
  View_568_127: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.733333333333334%"),
    top: hp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I568_127_568_91: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I568_127_568_92: {
    width: wp("44%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(54, 87, 196, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I568_127_568_93: {
    width: wp("31.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.775956284152997%")
  },
  Text_I568_127_568_93: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I568_127_568_94: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.60000000000001%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I568_127_568_95: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I568_127_568_96: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I568_127_568_97: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.59999999999998%")
  },
  View_568_136: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("87.70491803278688%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I568_136_568_91: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I568_136_568_92: {
    width: wp("44%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(54, 87, 196, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I568_136_568_93: {
    width: wp("31.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.7759562841530112%")
  },
  Text_I568_136_568_93: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I568_136_568_94: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.600000000000016%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I568_136_568_95: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I568_136_568_96: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I568_136_568_97: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999943%")
  },
  View_568_145: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.733333333333334%"),
    top: hp("57.240437158469945%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I568_145_568_91: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I568_145_568_92: {
    width: wp("44%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(54, 87, 196, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I568_145_568_93: {
    width: wp("31.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.775956284153004%")
  },
  Text_I568_145_568_93: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I568_145_568_94: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.60000000000001%"),
    top: hp("1.092896174863391%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I568_145_568_95: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I568_145_568_96: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I568_145_568_97: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.59999999999998%")
  },
  View_568_154: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("57.240437158469945%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I568_154_568_82: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I568_154_568_83: {
    width: wp("44%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(54, 87, 196, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I568_154_568_84: {
    width: wp("31.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("1.775956284153004%")
  },
  Text_I568_154_568_84: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I568_154_568_85: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%"),
    top: hp("1.092896174863391%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I568_154_568_86: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I568_154_568_87: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I568_154_568_88: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%")
  },
  View_568_163: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("44.53551912568306%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I568_163_568_82: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I568_163_568_83: {
    width: wp("44%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(54, 87, 196, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I568_163_568_84: {
    width: wp("31.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("1.775956284153004%")
  },
  Text_I568_163_568_84: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I568_163_568_85: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%"),
    top: hp("1.092896174863391%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I568_163_568_86: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I568_163_568_87: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I568_163_568_88: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000014%")
  },
  View_568_172: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.733333333333334%"),
    top: hp("44.53551912568306%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I568_172_568_82: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I568_172_568_83: {
    width: wp("44%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(54, 87, 196, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I568_172_568_84: {
    width: wp("31.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.775956284153004%")
  },
  Text_I568_172_568_84: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I568_172_568_85: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.60000000000001%"),
    top: hp("1.092896174863391%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I568_172_568_86: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I568_172_568_87: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I568_172_568_88: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.59999999999998%")
  },
  View_568_181: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.733333333333334%"),
    top: hp("27.049180327868854%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I568_181_568_82: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I568_181_568_83: {
    width: wp("44%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(54, 87, 196, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I568_181_568_84: {
    width: wp("31.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.775956284153004%")
  },
  Text_I568_181_568_84: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I568_181_568_85: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.60000000000001%"),
    top: hp("1.0928961748633839%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I568_181_568_86: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I568_181_568_87: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I568_181_568_88: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.59999999999998%")
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
