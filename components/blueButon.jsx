import { Button, Pressable, Text } from "@gluestack-ui/themed";
import React, { useState } from "react";

const BlueButton = (params) => {
  const { title } = params;
  const [backgroundColor, setBackgroundColor] = useState("#4F46E5");
  const [scale, setScale] = useState("1");
  return (
    <Button
      title={title}
      w={"$full"}
      mt={32}
      py={6}
      px={12}
      justifyContent="center"
      borderRadius={6}
      backgroundColor={backgroundColor}
      hardShadow="2"
      style={{
        scale: scale,
      }}
      onPressIn={() => {
        setBackgroundColor("#4F46E5"), setScale("0.95");
      }}
      onPressOut={() => {
        setBackgroundColor("#4F46E5"), setScale("1");
      }}
    >
      <Text
        textAlign="center"
        fontSize={14}
        lineHeight={20}
        fontWeight="$bold"
        color="$white"
      >
        {title}
      </Text>
    </Button>
  );
};

export default BlueButton;
