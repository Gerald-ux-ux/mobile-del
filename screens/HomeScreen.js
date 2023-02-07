import React, { useLayoutEffect } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";


const HomeScreen = () => {
  
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,

    })


  },[])


  return (
    <SafeAreaView>
      <Text style={{ color: "red" }}>
        <View className="flex flex-row">
          <Text className="text-green-500">Hello, World!</Text>
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
