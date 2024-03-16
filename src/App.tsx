import '@mantine/core/styles.css';
import { MantineProvider, AppShell, Text, Group, Button, Center, Flex } from '@mantine/core';
import { NavLink, Route, Routes } from 'react-router-dom';

import { theme } from './theme';
import { HomePage } from './pages/Home.page';
import { ProblemsPage } from './pages/Problems.page';
import { DataSetsPage } from './pages/DataSets.page';
import { ModelsPage } from './pages/Models.page';
import { LeaderboardPage } from './pages/Leaderboard.page';
import { AddProblemComponent } from './components/problems/AddProblemComponent';
import { AddDatasetComponent } from './components/datasets/AddDatasetComponent';
import { ProblemDetailComponent } from './components/problems/ProblemDetailComponent';

export default function App() {
  return (
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
            <Route path="/problems/add" element={<AddProblemComponent />} />
            <Route
              path="/data-sets/add"
              element={
                <Center w="100vw">
                  <Flex w="70vw" direction="column">
                    <AddDatasetComponent displayTitle />
                  </Flex>
                </Center>
              }
            />
            <Route path="/problems/detail/:id" element={<ProblemDetailComponent />}></Route>
          </Routes>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
