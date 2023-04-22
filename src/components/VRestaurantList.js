import { View, Text } from "react-native";
import React from "react";
import { Skeleton, VStack } from "native-base";
import RestaurantItem from "./RestaurantItem";
import thumbnail_img_5 from "../../assets/images/thumbnail_img-5.png";

const VRestaurantList = ({ sectionTitle, isLoaded }) => {
  return (
    <View className=" mt-7">
      {isLoaded && (
        <VStack mb="20px">
          <Skeleton h={7} maxW={"70%"} />
        </VStack>
      )}
      {!isLoaded && (
        <VStack className="mb-5">
          <Text className="font-[mb] text-secondary-1 text-xl">
            {sectionTitle}
          </Text>
        </VStack>
      )}
      <RestaurantItem
        imageuri={thumbnail_img_5}
        type="large"
        title={"Magora Gluten Free"}
        subtitle={"394 St, New York, NY 10013, USA"}
        isOpen={true}
        isLoaded={isLoaded}
      />

      <RestaurantItem
        imageuri={thumbnail_img_5}
        type="large"
        title={"Magora Gluten Free"}
        subtitle={"394 St, New York, NY 10013, USA"}
        isOpen={false}
        isLoaded={isLoaded}
      />
    </View>
  );
};

export default VRestaurantList;
