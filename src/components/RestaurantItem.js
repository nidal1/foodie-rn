import { View, Image, FlatList } from "react-native";
import React from "react";

import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { Badge, HStack, Text } from "native-base";
import { Skeleton, VStack } from "native-base";
const RestaurantItem = ({
  type = "list",
  isOpen = true,
  title,
  subtitle,
  imageuri,
  isLoaded = false,
}) => {
  const TypeList = () => {
    if (isLoaded) {
      return (
        <HStack mb="16px">
          <Skeleton h="90px" w="90px" rounded={"lg"} />
          <VStack flex={1} justifyContent={"space-between"}>
            <Skeleton px="4" w={"100%"} h={6} rounded="full" />
            <Skeleton px="4" w={"100%"} h={5} rounded="full" />
            <HStack>
              <Skeleton px="4" w={"50%"} h={5} rounded="full" />
              <Skeleton px="4" w={"50%"} h={5} rounded="full" />
            </HStack>
          </VStack>
        </HStack>
      );
    }
    return (
      <>
        <View className="flex-row gap-x-4 mb-4">
          <View className="max-w-[90px] w-full h-full max-h-[90px] overflow-hidden">
            <Image
              className="max-w-[90px] max-h-[90px] object-contain"
              source={imageuri}
            />
          </View>
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
    if (isLoaded) {
      return (
        <VStack
          w="200px"
          maxW="200px"
          maxH={"240px"}
          space={8}
          overflow="hidden"
          rounded="md"
          borderWidth={"1"}
          _dark={{
            borderColor: "coolGray.500",
          }}
          _light={{
            borderColor: "coolGray.200",
          }}
        >
          <Skeleton h="106px" maxH={"240px"} />
          <Skeleton.Text lines={2} px="4" />
          <HStack space="2" mt={-2}>
            <Skeleton px="4" w={"50%"} h={7} rounded="full" />
            <Skeleton px="4" w={"50%"} h={7} rounded="full" />
          </HStack>
        </VStack>
      );
    }
    return (
      <View className="max-w-[200px] w-[200px] max-h-[240px] rounded-t-md overflow-hidden">
        <View className="w-full h-[106px] relative overflow-hidden">
          <Image className="w-full h-full object-contain" source={imageuri} />
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
            <AntDesign name="star" size={13} color="#FFCC00" />
            <Text className="font-[wsb] text-[10px] text-secondary-2">4.5</Text>
          </View>
        </View>
        <View className="bg-white p-3 rounded-b-md">
          <Text className="font-[wsb] text-secondary-1 text-sm">
            Magora Gluten Free
          </Text>
          <Text className="font-[wsr] text-secondary-1 text-[10px]">
            394 St, New York, NY 10013, USA
          </Text>

          <View className="flex-row gap-x-2 mt-4">
            <Badge className="rounded-full">
              <Text className="text-[10px] text-secondary-1 font-[wsr]">
                1-4 km
              </Text>
            </Badge>
            <Badge className="rounded-full">
              <Text className="text-[10px] text-secondary-1 font-[wsr]">
                Dedicated Gluten Free
              </Text>
            </Badge>
          </View>
        </View>
      </View>
    );
  };

  const TypeLg = () => {
    if (isLoaded) {
      return (
        <VStack
          w="100%"
          h="100%"
          maxW="640px"
          maxH={"309px"}
          space={8}
          overflow="hidden"
          rounded="md"
          borderWidth={"1"}
          _dark={{
            borderColor: "coolGray.500",
          }}
          _light={{
            borderColor: "coolGray.200",
          }}
          mb="20px"
        >
          <Skeleton h="178px" maxH={"240px"} />
          <Skeleton.Text lines={2} px="4" />
          <HStack space="2" mt={-2}>
            <Skeleton px="4" w={"50%"} h={7} rounded="full" />
            <Skeleton px="4" w={"50%"} h={7} rounded="full" />
          </HStack>
        </VStack>
      );
    }
    return (
      <View className="max-w-[640px] w-full max-h-[309px] rounded-t-md overflow-hidden mb-5">
        <View className="w-full h-[178px] relative overflow-hidden">
          <Image className="w-full h-full object-contain" source={imageuri} />
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
            <AntDesign name="star" size={13} color="#FFCC00" />
            <Text className="font-[wsb] text-[10px] text-secondary-2">4.5</Text>
          </View>
        </View>
        <View className="bg-white p-3 rounded-b-md">
          <Text className="font-[wsb] text-secondary-1 text-2xl mb-3">
            Magora Gluten Free
          </Text>
          <Text className="font-[wsr] text-secondary-1 text-sm">
            394 St, New York, NY 10013, USA
          </Text>

          <View className="flex-row gap-x-2 mt-4">
            <Badge className="rounded-full">
              <Text className="text-xs text-secondary-1 font-[wsr]">
                1-4 km
              </Text>
            </Badge>
            <Badge className="rounded-full">
              <Text className="text-xs text-secondary-1 font-[wsr]">
                Dedicated Gluten Free
              </Text>
            </Badge>
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

  if (type === "large") {
    return <TypeLg />;
  }
};

export default RestaurantItem;
