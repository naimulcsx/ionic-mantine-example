import { Route } from "react-router-dom";
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import {
  IconCalendarTime,
  IconChartBar,
  IconHome,
  IconNotes,
  IconReport,
  IconSettings,
} from "@tabler/icons-react";

import { MantineProvider, Text } from "@mantine/core";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* Mantine styles */
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";

/* App Screens */
import { HomeScreen } from "./pages/Home";
import { SubmissionsScreen } from "./pages/Submissions";
import { LeaderboardScreen } from "./pages/Leaderboard";
import { SettingsScreen } from "./pages/Settings";
import { resolver, theme } from "./theme";

setupIonicReact();

export default function App() {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            {/* app routes */}
            <IonRouterOutlet>
              <Route exact path="/home">
                <HomeScreen />
              </Route>
              <Route exact path="/submissions">
                <SubmissionsScreen />
              </Route>
              <Route path="/leaderboard">
                <LeaderboardScreen />
              </Route>
              <Route path="/settings">
                <SettingsScreen />
              </Route>
            </IonRouterOutlet>

            {/* bottom menu bar */}
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IconHome />
                <IonLabel>Home</IonLabel>
              </IonTabButton>

              <IonTabButton tab="submissions" href="/submissions">
                <IconNotes />
                <IonLabel>Submissions</IonLabel>
              </IonTabButton>

              <IonTabButton tab="leaderboard" href="/leaderboard">
                <IconChartBar />
                <IonLabel>Leaderboard</IonLabel>
              </IonTabButton>

              <IonTabButton tab="settings" href="/settings">
                <IconSettings />
                <IonLabel>Settings</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    </MantineProvider>
  );
}
