import { IonContent, IonPage } from "@ionic/react";
import { Box, Stack } from "@mantine/core";
import { ScreenHeader } from "../components/common/ScreenHeader";

export function LeaderboardScreen() {
  return (
    <IonPage>
      <ScreenHeader title="Leaderboard" />
      <IonContent fullscreen>
        <Box px="lg" mt="lg">
          <Stack></Stack>
        </Box>
      </IonContent>
    </IonPage>
  );
}
