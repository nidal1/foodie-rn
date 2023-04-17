import { View, Text } from "react-native";
import React from "react";
import menu_img from "../../assets/images/menu_img.png";
import { Image, Input, StatusBar } from "native-base";
const RestaurantHeader = () => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <View className="flex-row gap-2 relative mb-6">
        <Image
          className="absolute top-1/4"
          source={menu_img}
          alt="menu icon"
        ></Image>
        <Text
          style={{ fontFamily: "mb" }}
          className="font-[wsr] flex-1 text-center font-bold text-2xl text-secondary-1"
        >
          Restaurant
        </Text>
      </View>
      <Input
        variant="filled"
        placeholder="Search"
        className="m-0 font-[mb] bg-[#F9F9F9] rounded-lg"
      />
    </>
  );
};

export default RestaurantHeader;
