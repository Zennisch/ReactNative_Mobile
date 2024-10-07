import {FlatList, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View} from "react-native";
import s from "../styles/MyStyles";
import Button from "../components/Button";

export default function ProfileScreen() {

    let username = "John Doe";

    const tasks = [
        {
            "id": "1",
            "task": "To check email",
        },
        {
            "id": "2",
            "task": "UI task web page",
        },
        {
            "id": "3",
            "task": "Learn JavaScript basic",
        },
        {
            "id": "4",
            "task": "Learn HTML advance",
        },
        {
            "id": "5",
            "task": "Medical App UI",
        },
        {
            "id": "6",
            "task": "Learn Java",
        },
    ];

    return (
        <SafeAreaView style={[s.flex, s.flexColumn, s.w100, s.alignCenter, s.bgWhite]}>
            <View style={[s.h10, s.w90, s.flexRow, s.justifyBetween, s.alignCenter]}>
                <Button title={"←"}
                        styleText={[s.textSize36, s.lineHeight36]}
                />
                <View style={[s.flexRow, s.w50, s.justifyBetween]}>
                    <View>
                        <Image source={require("../myassets/avatar.png")}
                               style={[s.w30, s.aspectRatio1, {backgroundColor: "#D9CBF6", borderRadius: 25}]}
                               resizeMode={"contain"}
                        />
                    </View>
                    <View style={[s.flexColumn]}>
                        <Text style={[s.textCenter, s.textBold, s.textSize18]}>{"Hi " + username}</Text>
                        <Text style={[s.textCenter, s.textBold, s.textGray]}>{"Have a great day ahead"}</Text>
                    </View>
                </View>
            </View>
            <View style={[s.h10, s.justifyCenter, s.w90]}>
                <View style={[{
                    borderWidth: 1,
                    borderColor: "gray",
                    borderRadius: 10
                }, s.flexRow, s.p6, s.alignCenter, s.justifyEvenly]}>
                    <View style={[s.justifyCenter_alignCenter]}>
                        <Image source={require("../myassets/search.png")}
                               style={[s.w5, s.aspectRatio1]}
                               resizeMode={"contain"}
                        />
                    </View>
                    <TextInput placeholder={"Search"}
                               style={[s.w90, s.textBlack]}
                               placeholderTextColor={"black"}
                    />
                </View>

            </View>
            <View style={[s.h50, s.alignCenter]}>
                <FlatList data={tasks}
                          renderItem={({item}) => (Task({item}))}
                          keyExtractor={item => item.id.toString()}
                />
            </View>
            <View style={[s.h30]}>
                <Button title={"+"}
                        styleButton={[{
                            backgroundColor: "#00BDD6",
                            borderRadius: 35
                        }, s.justifyCenter_alignCenter, s.w15, s.aspectRatio1]}
                        styleText={[s.textWhite, s.textSize42, s.lineHeight48]}
                />
            </View>
        </SafeAreaView>
    )
}

function Task({item}) {
    return (
        <View style={[s.flexRow, s.w100, s.justifyEvenly, s.alignCenter, {height: 50, marginBottom: 10, borderRadius: 20, backgroundColor: "#DEE1E678"}]}>
            <TouchableOpacity>
                <Image source={require("../myassets/check.png")}
                       style={[s.w5, s.aspectRatio1]}
                       resizeMode={"contain"}
                />
            </TouchableOpacity>
            <View style={[s.w70, s.justifyCenter]}>
                <Text>{item.task}</Text>
            </View>
            <TouchableOpacity>
                <Image source={require("../myassets/write.png")}
                       style={[s.w5, s.aspectRatio1]}
                       resizeMode={"contain"}
                />
            </TouchableOpacity>
        </View>
    )
}