import { View, Text, FlatList } from "react-native";
import React from "react";
import { Skeleton, VStack } from "native-base";
import RestaurantItem from "./RestaurantItem";
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

const HRestaurantList = ({ isLoaded, sectionTitle = "test" }) => {
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
        isLoaded={isLoaded}
      />
    );
  };

  const Separator = () => {
    return <View style={{ width: 20 }} />;
  };

  return (
    <View className="mt-7">
      {isLoaded && (
        <VStack>
          <Skeleton h={7} maxW={"70%"} />
          <Skeleton h={4} maxW={"25%"} alignSelf={"flex-end"} mb={2} />
        </VStack>
      )}
      {!isLoaded && (
        <VStack className="mb-5">
          <Text className="font-[mb] text-secondary-1 text-xl">
            {sectionTitle}
          </Text>
          <Text className="font-[wsr] -mt-3 text-[#6E7FAA] text-base text-right">
            See all (25)
          </Text>
        </VStack>
      )}
      <FlatList
        data={dataPopularRestaurants}
        renderItem={renderRestaurantItem}
        keyExtractor={(item) => item.key}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

export default HRestaurantList;
