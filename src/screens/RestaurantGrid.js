import { FlatList, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import { HRestaurantList, RestaurantHeader } from "../components";
import VRestaurantList from "../components/VRestaurantList";

const data = [
  {
    id: "1",
    title: "Popular Restaurants",
    isHorizontal: true,
  },
  {
    id: "2",
    title: "Nearby Restaurants",
    isHorizontal: true,
  },
  {
    id: "3",
    title: "All Restaurants",
    isHorizontal: false,
  },
];

const RestaurantGrid = () => {
  const [isLoaded, setIsLoaded] = useState(true);

  const renderSections = () => {
    return data.map(({ id, title, isHorizontal }) => {
      if (isHorizontal) {
        return (
          <HRestaurantList key={id} isLoaded={isLoaded} sectionTitle={title} />
        );
      }
      return (
        <VRestaurantList key={id} isLoaded={isLoaded} sectionTitle={title} />
      );
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View className="bg-[#F6F6F6] flex-1 pt-4 px-5">
      <RestaurantHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderSections()}
      </ScrollView>
    </View>
  );
};

export default RestaurantGrid;
