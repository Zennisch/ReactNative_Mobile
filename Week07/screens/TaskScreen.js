import {Image, SafeAreaView, Text, TextInput, View} from "react-native";
import s from "../styles/MyStyles";
import Button from "../components/Button";
import {useState} from "react";

export default function TaskScreen({navigation}) {

    let username = "John Doe";

    const api_tasks = "https://67137f306c5f5ced66269d90.mockapi.io/week07/tasks";

    let [task, setTask] = useState("");

    const addTask = async () => {
        if (task === "") {
            return;
        }
        const payload = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                task: task
            })
        };

        try {
            const response = await fetch(api_tasks, payload);
            const json = await response.json();
            setTask("");
            navigation.navigate("ProfileScreen");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <SafeAreaView style={[s.flex, s.flexColumn, s.bgWhite, s.alignCenter]}>
            <View style={[s.h10, s.w90, s.flexRow, s.justifyBetween, s.alignCenter]}>
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
                <Button title={"←"}
                        styleText={[s.textSize36, s.lineHeight36]}
                />
            </View>
            <View style={[s.h10, s.justifyCenter_alignCenter]}>
                <Text style={[s.textBold, s.textSize36]}>ADD YOUR JOB</Text>
            </View>
            <View style={[s.h5, s.w90]}>
                <View style={[s.flexRow, s.w100, s.h100, s.justifyEvenly, s.alignCenter, {
                    borderWidth: 1,
                    borderColor: "gray",
                    borderRadius: 10
                }]}>
                    <Image source={require("../myassets/document.png")}
                           style={[s.h90, s.aspectRatio1]}
                           resizeMode={"contain"}
                    />
                    <TextInput placeholder={"Input your job"}
                               style={[s.w85, s.textBlack]}
                               placeholderTextColor={"black"}
                               onChangeText={(text) => setTask(text)}
                    />
                </View>
            </View>
            <View style={[s.h20, s.w100, s.justifyCenter_alignCenter]}>
                <Button title={"FINISH →"}
                        onPress={addTask}
                        styleButton={[{
                            backgroundColor: "#00BDD6",
                            borderRadius: 15
                        }, s.w40, s.h30, s.justifyCenter_alignCenter]}
                        styleText={[s.textWhite, s.textSize18]}/>
            </View>
            <View style={[s.h60, s.w100, s.justifyCenter_alignCenter]}>
                <Image source={require("../myassets/task.png")}
                       style={[s.h80]}
                       resizeMode={"contain"}
                />
            </View>
        </SafeAreaView>
    )
}