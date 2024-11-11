import { Text, SafeAreaView, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import s from './styles/MyStyles';
import Button from './components/Button';
import {useState} from "react";
import {Provider, useSelector, useDispatch} from "react-redux";
import store from "./Store"

export default function App() {
  return(
    <Provider store={store}>
      <AppTask />
    </Provider>
  )
}

function AppTask() {

  data_array = useSelector((state) => state)
  dispatch = useDispatch()

  return (
    <SafeAreaView style={[s.flex, s.bgWhite]}>
      <View style={[s.h15, s.flexRow]}>
        <View style={[s.w20, s.justifyCenter, s.alignStart, s.p12]}>
          <Button
            title="←"
            styleButton={[]}
            styleText={[s.textSize30, s.textGray]}
          />
        </View>
        <View style={[s.w80, s.flexRow]}>
          <View style={[s.w30, s.justifyCenter_alignCenter]}>
            <Image
              source={require('./myassets/avatar.png')}
              resizeMode="contain"
              style={[{ backgroundColor: 'purple', borderRadius: 25 }]}
            />
          </View>
          <View style={[s.w70, s.justifyCenter_alignCenter]}>
            <Text style={[s.textBold]}>{"Hi Twinkle"}</Text>
            <Text>{"Have a greate day ahead"}</Text>
          </View>
        </View>
      </View>
      <View style={[s.h15, s.justifyCenter_alignCenter]}>
        <View style={[{
          borderRadius: 5,
          borderColor: "lightgray",
          borderWidth: 2
        }, s.w90, s.flexRow, s.p6, s.alignCenter]}>
          <Image source={require("./myassets/search.png")} 
              style={[s.w10]}
              resizeMode="contain"
          />
          <TextInput style={[s.w90]}
            placeholder={"Search"}
            placeholderTextColor={"black"}
          />
        </View>
      </View>



      <View style={[s.h50, s.w90]}>
        <FlatList data={data_array}
                renderItem={({item}) => <Item item={item} dispatch={dispatch} /> }
                keyExtractor={(item) => item.id.toString()}
        />
      </View>



      <View style={[s.h20, s.justifyCenter_alignCenter]}>
        <Button title={"+"}
                styleText={[s.textWhite, s.textSize24, s.lineHeight24]}
                styleButton={[{backgroundColor: "cyan", borderRadius: 25}, s.h50, s.aspectRatio1, s.justifyCenter_alignCenter]}
        />
      </View>
    </SafeAreaView>
  );
}

function Item({item, dispatch}) {
  check = item.check

  const map_check = {
    true: require("./myassets/check.png"),
    false: require("./myassets/uncheck.png")
  }

  return(
    <View style={[s.flexRow, s.justifyAround]}>
      <TouchableOpacity style={[s.w10, s.h100]}
        onPress={()=>{
          dispatch({ type: "check", payload: { id: item.id } });
        }}
      >
        <Image source={map_check[check]}
            style={[s.w100]}
            resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={[s.w60]}>{item.task}</View>
      <TouchableOpacity style={[s.w10, s.h100]}>
        <Image source={require("./myassets/write.png")}
            style={[s.w100]}
            resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
    )
}
