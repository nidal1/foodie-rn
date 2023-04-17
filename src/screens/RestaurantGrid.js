import { View, Text, FlatList } from "react-native";
import React from "react";
import { RestaurantHeader, RestaurantItem } from "../components";
import thumbnail_img_3 from "../../assets/images/thumbnail_img-3.png";
import thumbnail_img_4 from "../../assets/images/thumbnail_img-4.png";
const dataPopularRestaurants = [
  {
    key: "1",
    title: "Magora Gluten Free",
    subtitle: "Dedicated Gluten Free",
    isOpen: true,
    imageuri: thumbnail_img_3,
  },
  {
    key: "11",
    title: "Drop Restaurant",
    subtitle: "Drop Restaurant",
    isOpen: false,
    imageuri: thumbnail_img_4,
  },
  {
    key: "111",
    title: "Tibidabo Bakery",
    subtitle: "Tibidabo Bakery",
    isOpen: true,
    imageuri: thumbnail_img_3,
  },
];

const renderRestaurantItem = ({
  item: { title, subtitle, isOpen, imageuri },
}) => {
  return (
    <RestaurantItem
      type="grid"
      title={title}
      subtitle={subtitle}
      isOpen={isOpen}
      imageuri={imageuri}
    />
  );
};

const RestaurantGrid = () => {
  return (
    <View className="bg-white flex-1 pt-4 px-5">
      <RestaurantHeader />
      <View className="flex-1 mt-7">
        <Text className="font-[mb] text-secondary-1 text-xl">
          Popular Restaurants
        </Text>
        <Text className="font-[wsr] -mt-3 text-[#6E7FAA] text-base text-right">
          See all (25)
        </Text>
        <FlatList
          data={dataPopularRestaurants}
          renderItem={renderRestaurantItem}
          keyExtractor={(item) => item.key}
          showsVerticalScrollIndicator={false}
          horizontal={true}
        />
      </View>
    </View>
  );
};

export default RestaurantGrid;
