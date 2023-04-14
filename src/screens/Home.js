import { Text, View, Image } from "react-native";
import { Button } from "native-base";
import React, { useContext } from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { FontContext } from "../context/FontContext";

const Home = (props) => {
  const { navigation } = props;
  // const { mb, mr, msb, wsb, wsr, wssb } = useContext(FontContext);
  return (
    <View className="bg-primary-2 flex-1 pb-[53px]">
      <Image
        source={require("../../assets/images/Illustration_img.png")}
        alt="Alternate Text"
      />

      <View className="z-20 justify-center items-center flex-1">
        <View className="justify-between flex-1 w-full px-6">
          <View className="z-20 justify-center items-center">
            <View className="flex-row gap-2">
              <Text className="font-[mb] font-semibold text-[34px] text-[#222B45] mb-5 leading-[41px]">
                Gluten
              </Text>
              <Text className="font-[mb] font-semibold text-[34px] text-[#222B45] mb-5 leading-[41px] border-b-2 border-[#DB9F01]">
                Free
              </Text>
            </View>

            <Text className="font-[wsr] font-semibold text-base text-secondary-2 text-center">
              We Help You Find Gluten Free Food
            </Text>
            <Text className="font-[wsr] font-semibold text-base text-secondary-2 text-center">
              Around You.
            </Text>
          </View>
          <View className="gap-[20px]">
            <Button
              className="p-[17px] rounded-full bg-white"
              onPress={() => navigation.navigate("Restaurant")}
            >
              <View className="flex-row gap-2 items-center">
                <EvilIcons name="sc-facebook" size={24} color="black" />
                <Text className="font-[wsb] font-semibold text-base">
                  Login with Facebook
                </Text>
              </View>
            </Button>
            <Button
              className="p-[17px] rounded-full bg-white"
              onPress={() => navigation.navigate("Restaurant")}
            >
              <View className="flex-row gap-2 items-center">
                <EvilIcons name="sc-google-plus" size={24} color="black" />
                <Text className="font-[wsb] font-semibold text-base text-secondary-1">
                  Login with Google
                </Text>
              </View>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
