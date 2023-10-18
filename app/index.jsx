import { Center, Link, Text } from "@gluestack-ui/themed";
import { Redirect } from "expo-router";

function index() {
  return (
    <Center height="100%">
      <Text color="white"> index </Text>
      <Link href={"/signup"}>
        <Redirect href="/login" />
      </Link>
    </Center>
  );
}

export default index;
