import { View, Image } from "react-native";
import React, { useEffect, useRef } from "react";

import { EvilIcons } from "@expo/vector-icons";
import { Badge, Text } from "native-base";
const RestaurantItem = ({
  type = "list",
  isOpen = true,
  title,
  subtitle,
  imageuri,
}) => {
  const TypeList = () => {
    return (
      <>
        <View className="flex-row gap-x-4 mb-4">
          <Image className="max-w-[90px] max-h-[90px]" source={imageuri} />
          <View className="justify-between">
            <Text className="font-[wsb] text-lg font-bold text-secondary-1">
              {title}
            </Text>
            <View className="flex-row gap-x-2">
              <View className="flex-row gap-x-1 items-center">
                <EvilIcons name="location" size={24} color="#8F9BB3" />
                <Text className="font-[wsr] text-placeholder text-xs font-normal">
                  1-4 km
                </Text>
              </View>
              <View className="flex-row gap-x-1 items-center">
                <EvilIcons name="star" size={24} color="#8F9BB3" />
                <Text className="font-[wsr] text-placeholder text-xs font-normal">
                  3.5 (502 Reviews)
                </Text>
              </View>
            </View>

            <View className="flex-row items-center gap-x-2">
              <Badge
                style={{
                  backgroundColor: isOpen ? "#15C895" : "#FEC633",
                  color: isOpen ? "white" : "#131313",
                }}
                className={`w-16 rounded-lg`}
              >
                <Text
                  style={{
                    color: isOpen ? "white" : "#131313",
                  }}
                  className="font-[wsb] font-bold text-[10px] text-secondary-1"
                >
                  {isOpen ? "OPEN" : "CLOSED"}
                </Text>
              </Badge>
              <Text className="font-[wsr] text-secondary-1 text-sm">
                {subtitle}
              </Text>
            </View>
          </View>
        </View>
      </>
    );
  };

  const TypeGrid = () => {
    return (
      <View className="max-w-[200px] w-[200px] max-h-[195px] rounded-md overflow-hidden">
        <View className="w-full h-[106px] relative">
          <Image className="w-full h-auto" source={imageuri} />
          <Badge
            style={{
              backgroundColor: isOpen ? "#15C895" : "#FEC633",
              color: isOpen ? "white" : "#131313",
            }}
            className={`rounded-lg absolute top-3 left-3`}
          >
            <Text
              style={{
                color: isOpen ? "white" : "#131313",
              }}
              className="font-[wsb] text-[10px] text-secondary-1"
            >
              {isOpen ? "OPEN" : "CLOSED"}
            </Text>
          </Badge>

          <View
            className={`rounded-full absolute top-3 right-3 flex-row py-[2px] pr-2 items-center justify-between gap-x-1 bg-white`}
          >
            <EvilIcons name="star" size={15} color="#FFCC00" />
            <Text className="font-[wsb] text-[10px] text-secondary-2">4.5</Text>
          </View>
        </View>
      </View>
    );
  };

  if (type === "list") {
    return <TypeList />;
  }

  if (type === "grid") {
    return <TypeGrid />;
  }
};

export default RestaurantItem;
