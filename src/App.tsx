import '@mantine/core/styles.css';
import { MantineProvider, AppShell, Text, Group, Button } from '@mantine/core';
import { NavLink, Route, Routes } from 'react-router-dom';

import { theme } from './theme';
import { HomePage } from './pages/Home.page';
import { ProblemsPage } from './pages/Problems.page';
import { DataSetsPage } from './pages/DataSets.page';
import { ModelsPage } from './pages/Models.page';
import { LeaderboardPage } from './pages/Leaderboard.page';
import FilecoinUpload from './components/filecoinUpload';

import {
  DynamicWidget,
  DynamicContextProvider,
} from "@dynamic-labs/sdk-react-core";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

export default function App() {
  return (
    <DynamicContextProvider
    settings={{
      environmentId: "7af57577-b9bb-4503-b0c7-27da15986c8a",
      walletConnectors: [EthereumWalletConnectors],
    }}
>

    <MantineProvider theme={theme}>
      <AppShell>

        <AppShell.Header>
          <Group h="70px" px="md" justify="space-between">
            <Text size="xl" fw={700}>
              TensorRoyale
            </Text>

            <Group justify="center">
              <NavLink to="/">
                <Button justify="center" variant="default" style={{ border: '0px' }}>
                  Home
                </Button>
              </NavLink>
              <NavLink to="/problems">
                <Button justify="center" variant="default" style={{ border: '0px' }}>
                  Problems
                </Button>
              </NavLink>
              <NavLink to="/data-sets">
                <Button justify="center" variant="default" style={{ border: '0px' }}>
                  Data sets
                </Button>
              </NavLink>
              <NavLink to="/models">
                <Button justify="center" variant="default" style={{ border: '0px' }}>
                  Models
                </Button>
              </NavLink>
              <NavLink to="/leaderboard">
                <Button justify="center" variant="default" style={{ border: '0px' }}>
                  Leaderboard
                </Button>
              </NavLink>
              <NavLink to="/filecoin">
                <Button justify="center" variant="default" style={{ border: '0px' }}>
                  Filecoin
                </Button>
              </NavLink>
              <DynamicWidget />

            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Main pt="70px">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/problems" element={<ProblemsPage />} />
            <Route path="/data-sets" element={<DataSetsPage />} />
            <Route path="/models" element={<ModelsPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/filecoin" element={<FilecoinUpload />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  </DynamicContextProvider>

  );
}
