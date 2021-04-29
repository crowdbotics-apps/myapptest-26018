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
      <View style={styles.View_0_157}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c07/c5d5/7ee0ac698650b47b0bc67be94c1af42d"
          }}
          style={styles.ImageBackground_0_158}
        />
        <View style={styles.View_0_159}>
          <View style={styles.View_0_160}>
            <Text style={styles.Text_0_160}>Noam Levine</Text>
          </View>
          <View style={styles.View_0_161}>
            <Text style={styles.Text_0_161}>Student at Hanks High School</Text>
          </View>
        </View>
        <View style={styles.View_0_162}>
          <View style={styles.View_0_163}>
            <Text style={styles.Text_0_163}>72%</Text>
          </View>
          <View style={styles.View_0_164}>
            <Text style={styles.Text_0_164}>Completed</Text>
          </View>
        </View>
        <View style={styles.View_0_165}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7bf/76c1/aedcb7feb1645a5fae61f78e3f0dc9ea"
            }}
            style={styles.ImageBackground_0_166}
          />
          <View style={styles.View_0_167}>
            <Text style={styles.Text_0_167}>Score: 285</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f82/cec7/2db3283b58e8308bfd3eb22794259417"
          }}
          style={styles.ImageBackground_0_168}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e3c/f1ba/8e0a94b727b2d96c340eb3c278454f6e"
          }}
          style={styles.ImageBackground_0_169}
        />
      </View>
      <View style={styles.View_0_170}>
        <View style={styles.View_0_171}>
          <View style={styles.View_0_173} />
          <View style={styles.View_0_172} />
        </View>
        <View style={styles.View_0_174}>
          <Text style={styles.Text_0_174}>Connect facebook</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf7e/f5be/38f5cc741a3bd6c31213a672d2772abb"
          }}
          style={styles.ImageBackground_0_175}
        />
      </View>
      <View style={styles.View_0_178}>
        <View style={styles.View_0_179}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4ea/9c60/937aaedb178005e61cc51ee8829ef30e"
            }}
            style={styles.ImageBackground_0_181}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/940d/dffa/afaf0222459924e3e602a89e33688202"
            }}
            style={styles.ImageBackground_0_180}
          />
        </View>
        <View style={styles.View_0_182}>
          <Text style={styles.Text_0_182}>Invite Friends</Text>
        </View>
        <View style={styles.View_0_183}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/575a/3739/de75d964bc4c20a1e4c93aaa409c44bc"
            }}
            style={styles.ImageBackground_0_184}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/246e/a68e/d37d064d33c99722e359a5d7137311ca"
            }}
            style={styles.ImageBackground_0_185}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be39/5aa6/56c3ae3e05496457cec4923c9ba5e06e"
        }}
        style={styles.ImageBackground_0_188}
      />
      <View style={styles.View_0_189}>
        <View style={styles.View_0_193}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a688/2228/f91182a759338e0702f30e978ddb0eb7"
            }}
            style={styles.ImageBackground_0_190}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a688/2228/f91182a759338e0702f30e978ddb0eb7"
            }}
            style={styles.ImageBackground_0_191}
          />
          <View style={styles.View_0_192} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f39/6633/5a74232bddaf915541ec1c77f952e504"
          }}
          style={styles.ImageBackground_0_194}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4493/229c/1f097c2893c4399ad454f158f73b6efd"
          }}
          style={styles.ImageBackground_0_195}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65a0/cd27/5d19855aa18262ce6a693ffa13fc7d32"
          }}
          style={styles.ImageBackground_0_196}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/547d/3c8b/1cbb20d58ea359c97f14acc9e2acfef3"
          }}
          style={styles.ImageBackground_0_197}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_157: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("83.33333333333334%"),
    minHeight: hp("83.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_158: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("72.26775956284153%"),
    minHeight: hp("72.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_159: {
    width: wp("62.31884057971014%"),
    minWidth: wp("62.31884057971014%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.082125603864732%"),
    top: hp("17.89617486338798%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_160: {
    width: wp("27.96358302019645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.04446543817935%"),
    top: hp("0.06505413785006553%")
  },
  Text_0_160: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_161: {
    width: wp("62.052519425101906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13315689160628352%"),
    top: hp("3.213634386740093%")
  },
  Text_0_161: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_162: {
    width: wp("31.642512077294686%"),
    minWidth: wp("31.642512077294686%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.29951690821256%"),
    top: hp("38.9344262295082%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_163: {
    width: wp("31.642512077294686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.01607201789897772%")
  },
  Text_0_163: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 48.30155944824219,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_164: {
    width: wp("22.069988158589975%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.7862767021437165%"),
    top: hp("9.349887618601649%")
  },
  Text_0_164: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.912911415100098,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_165: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("17.48633879781421%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65.84699453551912%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_166: {
    width: wp("100%"),
    height: hp("17.48633879781421%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_167: {
    width: wp("30.400000678168404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.80000518946256%"),
    top: hp("5.5943181605938435%")
  },
  Text_0_167: {
    color: "rgba(55, 51, 51, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_168: {
    width: wp("9.178743961352657%"),
    minWidth: wp("9.178743961352657%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.23188405797102%"),
    top: hp("6.830601092896176%")
  },
  ImageBackground_0_169: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5893719806763285%"),
    top: hp("7.240437158469945%")
  },
  View_0_170: {
    width: wp("82.6086956521739%"),
    minWidth: wp("82.6086956521739%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("83.33333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_171: {
    width: wp("82.6086956521739%"),
    minWidth: wp("82.6086956521739%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_173: {
    width: wp("82.6086956521739%"),
    height: hp("8.333333333333332%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(66, 103, 178, 1)",
    opacity: 0.5,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_172: {
    width: wp("82.6086956521739%"),
    height: hp("8.333333333333332%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(66, 103, 178, 1)",
    opacity: 0.5,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_174: {
    width: wp("45.893719806763286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.256038647342994%"),
    top: hp("2.868852459016381%")
  },
  Text_0_174: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_0_175: {
    width: wp("14.734299516908212%"),
    height: hp("8.333333333333332%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_178: {
    width: wp("82.6086956521739%"),
    minWidth: wp("82.6086956521739%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("95.49180327868852%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_179: {
    width: wp("82.6086956521739%"),
    minWidth: wp("82.6086956521739%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_181: {
    width: wp("82.6086956521739%"),
    height: hp("8.333333333333332%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_180: {
    width: wp("82.6086956521739%"),
    height: hp("8.333333333333332%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_182: {
    width: wp("35.26570048309179%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.256038647342994%"),
    top: hp("2.868852459016395%")
  },
  Text_0_182: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_0_183: {
    width: wp("14.734299516908212%"),
    minWidth: wp("14.734299516908212%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_184: {
    width: wp("14.734299516908212%"),
    height: hp("8.333333333333332%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_185: {
    width: wp("10.628019323671497%"),
    height: hp("3.9617486338797816%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1739130434782616%")
  },
  ImageBackground_0_188: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.09661835748793%"),
    top: hp("6.0109289617486334%")
  },
  View_0_189: {
    width: wp("77.77777777777779%"),
    minWidth: wp("77.77777777777779%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.11111111111111%"),
    top: hp("111.47540983606557%")
  },
  View_0_193: {
    width: wp("24.154589371980677%"),
    minWidth: wp("24.154589371980677%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_190: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.595628415300567%")
  },
  ImageBackground_0_191: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.595628415300567%")
  },
  View_0_192: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.595628415300567%"),
    backgroundColor: "rgba(149, 159, 186, 1)"
  },
  ImageBackground_0_194: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.623188405797094%"),
    top: hp("2.868852459016395%")
  },
  ImageBackground_0_195: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.400966183574877%"),
    top: hp("0%")
  },
  ImageBackground_0_196: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.8743961352657%"),
    top: hp("2.7322404371584668%")
  },
  ImageBackground_0_197: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.49758454106279%"),
    top: hp("3.415300546448094%")
  },
  View_2: { height: 896 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
