import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

import thumbnail_img from "../../assets/images/thumbnail_img.png";
import thumbnail_img_1 from "../../assets/images/thumbnail_img-1.png";
import thumbnail_img_2 from "../../assets/images/thumbnail_img-2.png";
import { RestaurantHeader, RestaurantItem } from "../components";
import { Skeleton, VStack } from "native-base";
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

const Restaurant = () => {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const renderRestaurantItem = ({
    item: { title, subtitle, isOpen, imageuri },
  }) => {
    return (
      <RestaurantItem
        title={title}
        subtitle={subtitle}
        isOpen={isOpen}
        imageuri={imageuri}
        isLoaded={isLoaded}
      />
    );
  };
  return (
    <View className="bg-white flex-1 pt-4 px-5">
      <RestaurantHeader />
      {isLoaded && (
        <VStack mb="20px" mt="20px">
          <Skeleton h={7} maxW={"70%"} />
        </VStack>
      )}
      {!isLoaded && (
        <VStack className="mb-5">
          <Text className="font-[mb] text-secondary-1 text-xl">
            Restaurants Nearby
          </Text>
        </VStack>
      )}
      <View className="flex-1">
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
