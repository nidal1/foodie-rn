import { View, Text, FlatList } from "react-native";
import React from "react";

import thumbnail_img from "../../assets/images/thumbnail_img.png";
import thumbnail_img_1 from "../../assets/images/thumbnail_img-1.png";
import thumbnail_img_2 from "../../assets/images/thumbnail_img-2.png";
import { RestaurantHeader, RestaurantItem } from "../components";
const dataRestaurants = [
  {
    key: "1",
    title: "Magora Gluten Free",
    subtitle: "Dedicated Gluten Free",
    isOpen: true,
    imageuri: thumbnail_img,
  },
  {
    key: "11",
    title: "Drop Restaurant",
    subtitle: "Drop Restaurant",
    isOpen: false,
    imageuri: thumbnail_img_1,
  },
  {
    key: "111",
    title: "Tibidabo Bakery",
    subtitle: "Tibidabo Bakery",
    isOpen: true,
    imageuri: thumbnail_img_2,
  },
  {
    key: "1111",
    title: "Magora Gluten Free",
    subtitle: "Dedicated Gluten Free",
    isOpen: true,
    imageuri: thumbnail_img,
  },
  {
    key: "11111",
    title: "Drop Restaurant",
    subtitle: "Drop Restaurant",
    isOpen: true,
    imageuri: thumbnail_img_1,
  },
  {
    key: "111111",
    title: "Tibidabo Bakery",
    subtitle: "Tibidabo Bakery",
    isOpen: true,
    imageuri: thumbnail_img_2,
  },
];

const renderRestaurantItem = ({
  item: { title, subtitle, isOpen, imageuri },
}) => {
  return (
    <RestaurantItem
      title={title}
      subtitle={subtitle}
      isOpen={isOpen}
      imageuri={imageuri}
    />
  );
};
const Restaurant = () => {
  return (
    <View className="bg-white flex-1 pt-4 px-5">
      <RestaurantHeader />
      <View className="flex-1">
        <Text
          style={{ fontFamily: "mb" }}
          className="my-8 font-bold text-secondary-1 text-xl"
        >
          Restaurants Nearby
        </Text>
        <FlatList
          data={dataRestaurants}
          renderItem={renderRestaurantItem}
          keyExtractor={(item) => item.key}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Restaurant;
