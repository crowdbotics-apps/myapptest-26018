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
      <View style={styles.View_0_104}>
        <View style={styles.View_0_105} />
        <View style={styles.View_0_106}>
          <View style={styles.View_0_107}>
            <Text style={styles.Text_0_107}>285</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a392/10d7/443724561afe8316cffb7b13b6d865f8"
            }}
            style={styles.ImageBackground_0_108}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ba8/d4c7/aa6752efb6f8d0264a61e60b1490ae3d"
          }}
          style={styles.ImageBackground_0_109}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d23c/b5b1/29fd2168c51635b67aecb704c4df6cf8"
          }}
          style={styles.ImageBackground_0_110}
        />
      </View>
      <View style={styles.View_0_111}>
        <Text style={styles.Text_0_111}>Your Groups</Text>
      </View>
      <View style={styles.View_0_112}>
        <Text style={styles.Text_0_112}>More Groups</Text>
      </View>
      <View style={styles.View_0_113}>
        <View style={styles.View_0_114} />
        <View style={styles.View_0_115}>
          <Text style={styles.Text_0_115}>High School Group</Text>
        </View>
        <View style={styles.View_0_116}>
          <View style={styles.View_579_10}>
            <View style={styles.View_I579_10_0_43}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a36a/fdb5/265584d394ecab238eec741c38fabb34"
                }}
                style={styles.ImageBackground_I579_10_0_45}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/831f/d8ca/34f544955cd1c3b8558c8b9480b71b9c"
                }}
                style={styles.ImageBackground_I579_10_0_44}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7704/a5d1/2a80cbc34076cc1c73720f1385bb7a79"
                }}
                style={styles.ImageBackground_I579_10_0_46}
              />
            </View>
          </View>
          <View style={styles.View_579_5}>
            <View style={styles.View_I579_5_0_33}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/790b/07a3/228f26bfa4aa506b5c573328e9f291bd"
                }}
                style={styles.ImageBackground_I579_5_0_35}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/831f/d8ca/34f544955cd1c3b8558c8b9480b71b9c"
                }}
                style={styles.ImageBackground_I579_5_0_34}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d93/91e1/4d563da1257191336923cb18c502b63c"
                }}
                style={styles.ImageBackground_I579_5_0_36}
              />
            </View>
          </View>
          <View style={styles.View_579_0}>
            <View style={styles.View_I579_0_0_38}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a36a/fdb5/265584d394ecab238eec741c38fabb34"
                }}
                style={styles.ImageBackground_I579_0_0_40}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/831f/d8ca/34f544955cd1c3b8558c8b9480b71b9c"
                }}
                style={styles.ImageBackground_I579_0_0_39}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4290/4d18/a88b0d069fc92dc44e72348f1a473eb9"
                }}
                style={styles.ImageBackground_I579_0_0_41}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_120}>
        <View style={styles.View_0_121} />
        <View style={styles.View_0_122}>
          <Text style={styles.Text_0_122}>Programming</Text>
        </View>
        <View style={styles.View_0_123}>
          <View style={styles.View_0_124}>
            <View style={styles.View_0_125}>
              <View style={styles.View_I0_125_0_25}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a36a/fdb5/265584d394ecab238eec741c38fabb34"
                  }}
                  style={styles.ImageBackground_I0_125_0_27}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/831f/d8ca/34f544955cd1c3b8558c8b9480b71b9c"
                  }}
                  style={styles.ImageBackground_I0_125_0_26}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/055f/7239/670b18edb8c86ef603ab471be824ae1d"
                  }}
                  style={styles.ImageBackground_I0_125_0_28}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0581/bc90/50682aed2fc4540b6feb914526fa4abf"
              }}
              style={styles.ImageBackground_0_126}
            />
          </View>
          <View style={styles.View_0_127}>
            <View style={styles.View_0_128}>
              <View style={styles.View_I0_128_0_15}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a36a/fdb5/265584d394ecab238eec741c38fabb34"
                  }}
                  style={styles.ImageBackground_I0_128_0_17}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/831f/d8ca/34f544955cd1c3b8558c8b9480b71b9c"
                  }}
                  style={styles.ImageBackground_I0_128_0_16}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7901/097d/17e81158070e26d5f981e0c5e4512814"
                  }}
                  style={styles.ImageBackground_I0_128_0_18}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0581/bc90/50682aed2fc4540b6feb914526fa4abf"
              }}
              style={styles.ImageBackground_0_129}
            />
          </View>
          <View style={styles.View_0_130}>
            <View style={styles.View_0_131}>
              <View style={styles.View_I0_131_0_20}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a36a/fdb5/265584d394ecab238eec741c38fabb34"
                  }}
                  style={styles.ImageBackground_I0_131_0_22}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/831f/d8ca/34f544955cd1c3b8558c8b9480b71b9c"
                  }}
                  style={styles.ImageBackground_I0_131_0_21}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6147/04af/ab65059b3ee109beba88bed8ab9b32e6"
                  }}
                  style={styles.ImageBackground_I0_131_0_23}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0581/bc90/50682aed2fc4540b6feb914526fa4abf"
              }}
              style={styles.ImageBackground_0_132}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_133}>
        <View style={styles.View_0_134}>
          <Text style={styles.Text_0_134}>Algorithms</Text>
        </View>
        <View style={styles.View_0_135}>
          <Text style={styles.Text_0_135}>Nursing</Text>
        </View>
        <View style={styles.View_0_136}>
          <Text style={styles.Text_0_136}>Dog Photos</Text>
        </View>
        <View style={styles.View_0_137}>
          <Text style={styles.Text_0_137}>Sports</Text>
        </View>
        <View style={styles.View_0_138}>
          <Text style={styles.Text_0_138}>Band</Text>
        </View>
        <View style={styles.View_0_139}>
          <Text style={styles.Text_0_139}>Party time</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60ed/f78f/63ef7ab1384bf17446867fe6d7f2a1c9"
          }}
          style={styles.ImageBackground_0_140}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60ed/f78f/63ef7ab1384bf17446867fe6d7f2a1c9"
          }}
          style={styles.ImageBackground_0_141}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60ed/f78f/63ef7ab1384bf17446867fe6d7f2a1c9"
          }}
          style={styles.ImageBackground_0_142}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60ed/f78f/63ef7ab1384bf17446867fe6d7f2a1c9"
          }}
          style={styles.ImageBackground_0_143}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60ed/f78f/63ef7ab1384bf17446867fe6d7f2a1c9"
          }}
          style={styles.ImageBackground_0_144}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c64/aae5/1db882569620620002bda02d6793e26d"
        }}
        style={styles.ImageBackground_0_145}
      />
      <View style={styles.View_0_146}>
        <View style={styles.View_0_150}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cea4/b8dd/e832807d632c6430c9ce8889f5b7279f"
            }}
            style={styles.ImageBackground_0_147}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cea4/b8dd/e832807d632c6430c9ce8889f5b7279f"
            }}
            style={styles.ImageBackground_0_148}
          />
          <View style={styles.View_0_149} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f94/b76b/dc81f48abbd8d7f7dcb4688f40dd7104"
          }}
          style={styles.ImageBackground_0_151}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ae8/e9fa/f90b0379cd48a6a16aecaf065c9c33a5"
          }}
          style={styles.ImageBackground_0_152}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06d3/a7c2/4d1e6ceb80cecfbf7a5759831839534e"
          }}
          style={styles.ImageBackground_0_153}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f029/141a/23fabdbda0da831a5ebb3d645f2edde2"
          }}
          style={styles.ImageBackground_0_154}
        />
      </View>
      <View style={styles.View_0_155}>
        <Text style={styles.Text_0_155}>Create New</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_104: {
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
  View_0_105: {
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
  View_0_106: {
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
  View_0_107: {
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_107: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_108: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0.27322404371584685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.800000000000004%")
  },
  ImageBackground_0_109: {
    width: wp("6.70967763264974%"),
    minWidth: wp("6.70967763264974%"),
    height: hp("3.9925966106477335%"),
    minHeight: hp("3.9925966106477335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("6.663142136537312%")
  },
  ImageBackground_0_110: {
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
  View_0_111: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("15.163934426229508%")
  },
  Text_0_111: {
    color: "rgba(11, 11, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_112: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("40.84699453551913%")
  },
  Text_0_112: {
    color: "rgba(11, 11, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_113: {
    width: wp("65.33333333333333%"),
    minWidth: wp("65.33333333333333%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("20.21857923497268%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_114: {
    width: wp("65.33333333333333%"),
    height: hp("16.939890710382514%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_115: {
    width: wp("41.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333325%"),
    top: hp("1.775956284153004%")
  },
  Text_0_115: {
    color: "rgba(11, 11, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_116: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333345%"),
    top: hp("9.289617486338795%")
  },
  View_579_10: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.599999999999998%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I579_10_0_43: {
    flexGrow: 1,
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I579_10_0_45: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I579_10_0_44: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I579_10_0_46: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_579_5: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999998%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I579_5_0_33: {
    flexGrow: 1,
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I579_5_0_35: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I579_5_0_34: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I579_5_0_36: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_579_0: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I579_0_0_38: {
    flexGrow: 1,
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I579_0_0_40: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I579_0_0_39: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I579_0_0_41: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_120: {
    width: wp("65.33333333333333%"),
    minWidth: wp("65.33333333333333%"),
    height: hp("16.939890710382514%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.06666666666666%"),
    top: hp("20.21857923497268%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_121: {
    width: wp("65.33333333333333%"),
    height: hp("16.939890710382514%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_122: {
    width: wp("29.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333337%"),
    top: hp("1.775956284153004%")
  },
  Text_0_122: {
    color: "rgba(11, 11, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_123: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333337%"),
    top: hp("9.289617486338795%")
  },
  View_0_124: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_125: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_125_0_25: {
    flexGrow: 1,
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_125_0_27: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_125_0_26: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_125_0_28: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_126: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_127: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%"),
    top: hp("0%")
  },
  View_0_128: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_128_0_15: {
    flexGrow: 1,
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_128_0_17: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_128_0_16: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_128_0_18: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_129: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_130: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.800000000000011%"),
    top: hp("0%")
  },
  View_0_131: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_131_0_20: {
    flexGrow: 1,
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_131_0_22: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_131_0_21: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_131_0_23: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_132: {
    width: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_133: {
    width: wp("95.46666666666667%"),
    minWidth: wp("95.46666666666667%"),
    height: hp("46.994535519125684%"),
    minHeight: hp("46.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("50.81967213114754%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_134: {
    width: wp("24.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_134: {
    color: "rgba(11, 11, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_135: {
    width: wp("17.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.879781420765035%")
  },
  Text_0_135: {
    color: "rgba(11, 11, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_136: {
    width: wp("25.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.759562841530055%")
  },
  Text_0_136: {
    color: "rgba(11, 11, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_137: {
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.639344262295083%")
  },
  Text_0_137: {
    color: "rgba(11, 11, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_138: {
    width: wp("11.200000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.38251366120218%")
  },
  Text_0_138: {
    color: "rgba(11, 11, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_139: {
    width: wp("22.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.26229508196721%")
  },
  Text_0_139: {
    color: "rgba(11, 11, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_140: {
    width: wp("94.39999999999999%"),
    height: hp("0.273224043715847%"),
    top: hp("5.4644808743169335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666673%")
  },
  ImageBackground_0_141: {
    width: wp("94.39999999999999%"),
    height: hp("0.273224043715847%"),
    top: hp("14.344262295081961%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666673%")
  },
  ImageBackground_0_142: {
    width: wp("94.39999999999999%"),
    height: hp("0.273224043715847%"),
    top: hp("23.224043715847003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666673%")
  },
  ImageBackground_0_143: {
    width: wp("94.39999999999999%"),
    height: hp("0.273224043715847%"),
    top: hp("32.103825136612016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666673%")
  },
  ImageBackground_0_144: {
    width: wp("94.39999999999999%"),
    height: hp("0.273224043715847%"),
    top: hp("40.846994535519116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666673%")
  },
  ImageBackground_0_145: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.03825136612022%")
  },
  View_0_146: {
    width: wp("80.53333333333333%"),
    minWidth: wp("80.53333333333333%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("99.59016393442623%")
  },
  View_0_150: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.3160433743169397%"),
    minHeight: hp("3.3160433743169397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.303726946721298%")
  },
  ImageBackground_0_147: {
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
  ImageBackground_0_148: {
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
  View_0_149: {
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
  ImageBackground_0_151: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.466666666666654%"),
    top: hp("2.5956284153005527%")
  },
  ImageBackground_0_152: {
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
  ImageBackground_0_153: {
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
  ImageBackground_0_154: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333333%"),
    top: hp("3.1420765027322375%")
  },
  View_0_155: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.2%"),
    top: hp("15.573770491803279%")
  },
  Text_0_155: {
    color: "rgba(53, 123, 226, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2240000069141388,
    textTransform: "none"
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
