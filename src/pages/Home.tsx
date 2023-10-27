import { IonContent, IonPage } from "@ionic/react";
import {
  Badge,
  Box,
  Button,
  Card,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { ScreenHeader } from "../components/common/ScreenHeader";

export function HomeScreen() {
  return (
    <IonPage>
      <ScreenHeader title="Home" />
      <IonContent fullscreen>
        <Box px="lg" mt="lg">
          <Stack gap="md">
            <Title order={3}>Hello World!</Title>

            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
              doloribus ipsam perferendis in consequuntur placeat perspiciatis.
            </Text>

            <Button>Learn More</Button>
          </Stack>
        </Box>
      </IonContent>
    </IonPage>
  );
}
