import { View, Image } from "react-native";
import React, { useEffect, useRef } from "react";

import { EvilIcons } from "@expo/vector-icons";
import { Badge, Text } from "native-base";
const RestaurantItem = ({ isOpen = true, title, subtitle, imageuri }) => {
  return (
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
  );
};

export default RestaurantItem;
