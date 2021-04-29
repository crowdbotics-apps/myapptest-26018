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
      <View style={styles.View_0_199}>
        <View style={styles.View_0_200} />
        <View style={styles.View_0_201}>
          <View style={styles.View_0_202}>
            <Text style={styles.Text_0_202}>285</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a723/fa7a/53cfaced3016b55f2b0880add28d26c2"
            }}
            style={styles.ImageBackground_0_203}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c39c/bbb4/6e3d39ebf9f010f59ac9fa191a221bb1"
          }}
          style={styles.ImageBackground_0_204}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8509/1eda/2d6d1bdd728b3ff00b578988881e36a1"
          }}
          style={styles.ImageBackground_0_205}
        />
      </View>
      <View style={styles.View_0_206}>
        <Text style={styles.Text_0_206}>Categories</Text>
      </View>
      <View style={styles.View_0_207}>
        <View style={styles.View_0_208}>
          <Text style={styles.Text_0_208}>Explore</Text>
        </View>
      </View>
      <View style={styles.View_0_209}>
        <View style={styles.View_0_210}>
          <View style={styles.View_0_211} />
          <View style={styles.View_0_212}>
            <Text style={styles.Text_0_212}>Careers</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e7c/923e/4d29045c833e5229f5ad89dffc910602"
            }}
            style={styles.ImageBackground_0_213}
          />
        </View>
      </View>
      <View style={styles.View_0_214}>
        <View style={styles.View_0_215}>
          <View style={styles.View_0_216} />
          <View style={styles.View_0_217}>
            <Text style={styles.Text_0_217}>Majors</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e7c/923e/4d29045c833e5229f5ad89dffc910602"
            }}
            style={styles.ImageBackground_0_218}
          />
        </View>
      </View>
      <View style={styles.View_0_219}>
        <View style={styles.View_0_220}>
          <View style={styles.View_0_221} />
          <View style={styles.View_0_222}>
            <Text style={styles.Text_0_222}>Colleges</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e7c/923e/4d29045c833e5229f5ad89dffc910602"
            }}
            style={styles.ImageBackground_0_223}
          />
        </View>
      </View>
      <View style={styles.View_0_224}>
        <Text style={styles.Text_0_224}>Continue Learning</Text>
      </View>
      <View style={styles.View_0_225}>
        <Text style={styles.Text_0_225}>View All</Text>
      </View>
      <View style={styles.View_0_226}>
        <View style={styles.View_0_227}>
          <View style={styles.View_0_228} />
          <View style={styles.View_0_229}>
            <Text style={styles.Text_0_229}>Fundamentals of Algorithms</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37d2/6f3c/6d8a9a88220b3673ceff39df7781cb34"
            }}
            style={styles.ImageBackground_0_230}
          />
        </View>
      </View>
      <View style={styles.View_0_231}>
        <View style={styles.View_0_232}>
          <View style={styles.View_0_233}>
            <View style={styles.View_0_234} />
            <View style={styles.View_0_235}>
              <Text style={styles.Text_0_235}>Finance</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5b0/2761/2c3d48b163ef558774df5738bc7df765"
              }}
              style={styles.ImageBackground_0_236}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_237}>
        <Text style={styles.Text_0_237}>Lessons</Text>
      </View>
      <View style={styles.View_0_238}>
        <View style={styles.View_0_239}>
          <View style={styles.View_0_240} />
          <View style={styles.View_0_241}>
            <Text style={styles.Text_0_241}>Fundamentals of Algorithms</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37d2/6f3c/6d8a9a88220b3673ceff39df7781cb34"
            }}
            style={styles.ImageBackground_0_242}
          />
        </View>
      </View>
      <View style={styles.View_0_243}>
        <View style={styles.View_0_244}>
          <View style={styles.View_0_245}>
            <View style={styles.View_0_246} />
            <View style={styles.View_0_247}>
              <Text style={styles.Text_0_247}>Finance</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5b0/2761/2c3d48b163ef558774df5738bc7df765"
              }}
              style={styles.ImageBackground_0_248}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_249}>
        <View style={styles.View_0_253}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a688/2228/f91182a759338e0702f30e978ddb0eb7"
            }}
            style={styles.ImageBackground_0_250}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a688/2228/f91182a759338e0702f30e978ddb0eb7"
            }}
            style={styles.ImageBackground_0_251}
          />
          <View style={styles.View_0_252} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f39/6633/5a74232bddaf915541ec1c77f952e504"
          }}
          style={styles.ImageBackground_0_254}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06b5/3f5e/1f6682bd8ef79b4a58aa5ca9f7ef7a30"
          }}
          style={styles.ImageBackground_0_255}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65a0/cd27/5d19855aa18262ce6a693ffa13fc7d32"
          }}
          style={styles.ImageBackground_0_256}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/547d/3c8b/1cbb20d58ea359c97f14acc9e2acfef3"
          }}
          style={styles.ImageBackground_0_257}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_0_199: {
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
  View_0_200: {
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
  View_0_201: {
    width: wp("18.84057971014493%"),
    minWidth: wp("18.84057971014493%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.79999693349939%"),
    top: hp("6.967213114754098%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_202: {
    width: wp("9.178743961352657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_202: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_203: {
    width: wp("5.866666692466552%"),
    height: hp("3.0054644808743167%"),
    top: hp("0.27322404371584685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.800001061480984%")
  },
  ImageBackground_0_204: {
    width: wp("6.7096774704790345%"),
    minWidth: wp("6.7096774704790345%"),
    height: hp("3.9925966106477335%"),
    minHeight: hp("3.9925966106477335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533334630698974%"),
    top: hp("6.663142136537312%")
  },
  ImageBackground_0_205: {
    width: wp("9.066666497124567%"),
    minWidth: wp("9.066666497124567%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.93333132831371%"),
    top: hp("6.557377049180328%")
  },
  View_0_206: {
    width: wp("21.014492753623188%"),
    minWidth: wp("21.014492753623188%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("21.85792349726776%")
  },
  Text_0_206: {
    color: "rgba(11, 11, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_207: {
    width: wp("30.434782608695656%"),
    minWidth: wp("30.434782608695656%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: hp("15.437158469945356%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_208: {
    width: wp("28.985507246376812%"),
    minWidth: wp("28.985507246376812%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_208: {
    color: "rgba(4, 44, 92, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.6240000128746033,
    textTransform: "none"
  },
  View_0_209: {
    width: wp("25.36231884057971%"),
    minWidth: wp("25.36231884057971%"),
    height: hp("21.174863387978142%"),
    minHeight: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: hp("27.049180327868854%")
  },
  View_0_210: {
    width: wp("25.36231884057971%"),
    minWidth: wp("25.36231884057971%"),
    height: hp("21.174863387978142%"),
    minHeight: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_211: {
    width: wp("25.36231884057971%"),
    height: hp("21.174863387978142%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(53, 152, 251, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_212: {
    width: wp("15.217391304347828%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.314009661835748%"),
    top: hp("17.622950819672127%")
  },
  Text_0_212: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_213: {
    width: wp("17.632850241545896%"),
    height: hp("10.10928961748634%"),
    top: hp("3.8251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8647342995169085%")
  },
  View_0_214: {
    width: wp("25.36231884057971%"),
    minWidth: wp("25.36231884057971%"),
    height: hp("21.174863387978142%"),
    minHeight: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.43961352657005%"),
    top: hp("27.049180327868854%")
  },
  View_0_215: {
    width: wp("25.36231884057971%"),
    minWidth: wp("25.36231884057971%"),
    height: hp("21.174863387978142%"),
    minHeight: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_216: {
    width: wp("25.36231884057971%"),
    height: hp("21.174863387978142%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(53, 152, 251, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_217: {
    width: wp("13.043478260869565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714972%"),
    top: hp("17.622950819672127%")
  },
  Text_0_217: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_218: {
    width: wp("17.632850241545896%"),
    height: hp("10.10928961748634%"),
    top: hp("3.8251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516904%")
  },
  View_0_219: {
    width: wp("25.36231884057971%"),
    minWidth: wp("25.36231884057971%"),
    height: hp("21.174863387978142%"),
    minHeight: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.56521739130434%"),
    top: hp("27.049180327868854%")
  },
  View_0_220: {
    width: wp("25.36231884057971%"),
    minWidth: wp("25.36231884057971%"),
    height: hp("21.174863387978142%"),
    minHeight: hp("21.174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_221: {
    width: wp("25.36231884057971%"),
    height: hp("21.174863387978142%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(53, 152, 251, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_222: {
    width: wp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.347826086956516%"),
    top: hp("17.622950819672127%")
  },
  Text_0_222: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_223: {
    width: wp("17.632850241545896%"),
    height: hp("10.10928961748634%"),
    top: hp("3.8251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516911%")
  },
  View_0_224: {
    width: wp("36.71497584541063%"),
    minWidth: wp("36.71497584541063%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("50.68306010928961%")
  },
  Text_0_224: {
    color: "rgba(11, 11, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_225: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.1256038647343%"),
    top: hp("51.229508196721305%")
  },
  Text_0_225: {
    color: "rgba(54, 142, 242, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_226: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("57.240437158469945%")
  },
  View_0_227: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_228: {
    width: wp("39.85507246376812%"),
    height: hp("27.322404371584703%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(127, 54, 197, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_229: {
    width: wp("27.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("1.9125683060109324%")
  },
  Text_0_229: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_230: {
    width: wp("23.42995169082126%"),
    height: hp("13.25136612021858%"),
    top: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%")
  },
  View_0_231: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.65700483091788%"),
    top: hp("57.240437158469945%")
  },
  View_0_232: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_233: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_234: {
    width: wp("39.85507246376812%"),
    height: hp("27.322404371584703%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.8500000238418579,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_235: {
    width: wp("15.70048309178744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.077294685990331%"),
    top: hp("1.9125683060109324%")
  },
  Text_0_235: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_236: {
    width: wp("31.88405797101449%"),
    height: hp("12.704918032786885%"),
    top: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516904%")
  },
  View_0_237: {
    width: wp("15.942028985507244%"),
    minWidth: wp("15.942028985507244%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.695652173913043%"),
    top: hp("85.51912568306011%")
  },
  Text_0_237: {
    color: "rgba(11, 11, 11, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_238: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("90.7103825136612%")
  },
  View_0_239: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_240: {
    width: wp("39.85507246376812%"),
    height: hp("27.322404371584703%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(127, 54, 197, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_241: {
    width: wp("27.77777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("1.9125683060109253%")
  },
  Text_0_241: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_242: {
    width: wp("23.42995169082126%"),
    height: hp("13.25136612021858%"),
    top: hp("10.109289617486326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%")
  },
  View_0_243: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.65700483091788%"),
    top: hp("90.7103825136612%")
  },
  View_0_244: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_245: {
    width: wp("39.85507246376812%"),
    minWidth: wp("39.85507246376812%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_246: {
    width: wp("39.85507246376812%"),
    height: hp("27.322404371584703%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.8500000238418579,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_247: {
    width: wp("15.70048309178744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.077294685990331%"),
    top: hp("1.9125683060109253%")
  },
  Text_0_247: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_248: {
    width: wp("31.88405797101449%"),
    height: hp("12.704918032786885%"),
    top: hp("10.109289617486326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516904%")
  },
  View_0_249: {
    width: wp("77.77777777777779%"),
    minWidth: wp("77.77777777777779%"),
    height: hp("8.181817935464162%"),
    minHeight: hp("8.181817935464162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%"),
    top: hp("111.84964206049351%")
  },
  View_0_253: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.494620234588453%")
  },
  ImageBackground_0_250: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_251: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_252: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(149, 159, 186, 1)"
  },
  ImageBackground_0_254: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.62318840579711%"),
    top: hp("2.7678442783043096%")
  },
  ImageBackground_0_255: {
    width: wp("12.695652505625848%"),
    minWidth: wp("12.695652505625848%"),
    height: hp("8.181817935464162%"),
    minHeight: hp("8.181817935464162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.57487952190897%"),
    top: hp("0%")
  },
  ImageBackground_0_256: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.874396135265705%"),
    top: hp("2.9044563001622237%")
  },
  ImageBackground_0_257: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.4975845410628%"),
    top: hp("3.3142923657359944%")
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
