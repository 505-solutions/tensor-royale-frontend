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
import { AddProblemSubmissionComponent } from './components/problems/AddProblemSubmissionComponent';
import { AddModelComponent } from './components/models/AddModelComponent';
import FilecoinUpload from './components/filecoinUpload';
import { EthersExtension } from '@dynamic-labs/ethers-v5';
import { DynamicWagmiConnector } from '@dynamic-labs/wagmi-connector';

import { DynamicWidget, DynamicContextProvider } from '@dynamic-labs/sdk-react-core';

import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';
import { StarknetWalletConnectors } from '@dynamic-labs/starknet';
import { IconUser } from '@tabler/icons-react';
import { ProfilePage } from './pages/Profile.page';

const evmNetworks = [
  {
    blockExplorerUrls: ['https://etherscan.io/'],
    chainId: 314159,
    chainName: 'Filecoin - Calibration testnet',
    iconUrls: ['https://app.dynamic.xyz/assets/networks/eth.svg'],
    name: 'Filecoin - Calibration testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'Test FIL',
      symbol: 'tFIL',
    },
    networkId: 314159,

    rpcUrls: ['https://rpc.ankr.com/filecoin_testnet'],
    vanityName: 'Filecoin - Calibration teostnet',
  },
];

export default function App() {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: '7af57577-b9bb-4503-b0c7-27da15986c8a',
        walletConnectors: [EthereumWalletConnectors, StarknetWalletConnectors],
        walletConnectorExtensions: [EthersExtension],
        evmNetworks: evmNetworks,
      }}
    >
      <DynamicWagmiConnector>
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
                  <NavLink to="/profile">
                    <IconUser />
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
                  path="/problems/add-submission/:id"
                  element={<AddProblemSubmissionComponent />}
                />
                <Route path="/models/add" element={<AddModelComponent />} />
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
                <Route
                  path="/data-sets/add/:id"
                  element={
                    <Center w="100vw">
                      <Flex w="70vw" direction="column">
                        <AddDatasetComponent displayTitle />
                      </Flex>
                    </Center>
                  }
                />
                <Route path="/problems/detail/:id" element={<ProblemDetailComponent />}></Route>
                <Route path="/filecoin" element={<FilecoinUpload />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </AppShell.Main>
          </AppShell>
        </MantineProvider>
      </DynamicWagmiConnector>
    </DynamicContextProvider>
  );
}
