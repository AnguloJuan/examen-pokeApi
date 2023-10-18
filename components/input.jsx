import { Box, Input, InputField, Text } from "@gluestack-ui/themed";

const StyledInput = (props) => {
  const {
    id,
    type,
    label,
    placeholder,
    required,
    disabled,
    autoComplete,
    onChange,
  } = props;
  var { invalid } = props;
  if (!invalid) {
    invalid = false;
  }

  return (
    id !== "" && (
      <>
        <Box my={6}>
          <Text color="$white" fontSize={14} lineHeight={24} fontWeight="$bold">
            {label}
          </Text>
          <Input
            isRequired={required}
            isInvalid={invalid}
            isDisabled={disabled}
            size="sm"
            my="$2"
            borderWidth={0}
            sx={{
              ":focus": {
                shadowColor: "$blueGray600",
                shadowRadius: "$2",
                elevation: "$2",
              },
            }}
          >
            <InputField
              id={id}
              placeholder={placeholder}
              onChange={onChange}
              color="$white"
              placeholderTextColor={"#9CA3AF"}
              autoComplete={autoComplete}
              secureTextEntry={type == "password" ? true : false}
              borderWidth={2}
              bgColor="$blueGray800"
              borderColor="$blueGray600"
              sx={{
                ":focus": {
                  borderColor: "$blue500",
                  ":invalid": {
                    borderColor: "$error600",
                  },
                },
                ":invalid": {
                  borderColor: "$error600",
                },
              }}
            />
          </Input>
        </Box>
      </>
    )
  );
};

export default StyledInput;
