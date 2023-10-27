import { IonHeader, IonToolbar } from "@ionic/react";
import { Box, Title } from "@mantine/core";

export interface ScreenHeaderProps {
  title: string;
}

export function ScreenHeader({ title }: ScreenHeaderProps) {
  return (
    <Box
      px="lg"
      mih={56}
      component={IonHeader}
      style={{
        boxShadow: "none",
        borderBottom: "1px solid hsl(var(--border))",
      }}
    >
      <IonToolbar>
        <Title order={4} fw={600} style={{ color: "hsl(var(--foreground))" }}>
          {title}
        </Title>
      </IonToolbar>
    </Box>
  );
}
