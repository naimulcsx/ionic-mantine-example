import { IonContent, IonPage } from "@ionic/react";
import {
  Box,
  Button,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { ScreenHeader } from "../components/common/ScreenHeader";

export function SettingsScreen() {
  return (
    <IonPage>
      <ScreenHeader title="Settings" />
      <IonContent fullscreen>
        <Box px="lg" mt="lg">
          <Stack>
            <Title order={3}>Profile</Title>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
            <TextInput label="Full Name" placeholder="Full Name" />
            <PasswordInput
              label="Current Password"
              placeholder="Current Password"
            />
            <PasswordInput label="New Password" placeholder="New Password" />
            <Button size="md" variant="proghours-ui-light">
              Update
            </Button>
          </Stack>
        </Box>
      </IonContent>
    </IonPage>
  );
}
