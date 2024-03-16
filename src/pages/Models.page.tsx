import { Center, Flex, Title, Button, Text, Tabs } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { IconDna, IconRobot } from '@tabler/icons-react';
import { dummyActiveModels } from '@/utils/dummy-data';
import { ModelItemComponent } from '@/components/models/ModelItemComponent';

export function ModelsPage() {
  return (
    <>
      <Center w="100vw">
        <Flex w="70vw" direction="column">
          <Title order={2}>AI models</Title>
          <Flex direction="row" justify="space-between" align="center" pb="lg" pt="sm">
            <Text>Explore AI models available on our platform, or add your own model.</Text>
            <NavLink to="add">
              <Button justify="center">Add model</Button>
            </NavLink>
          </Flex>
          <Tabs defaultValue="all" pt="md">
            <Tabs.List>
              <Tabs.Tab value="all" leftSection={<IconRobot />}>
                All
              </Tabs.Tab>
              <Tabs.Tab value="chain" leftSection={<IconDna />}>
                On-Chain
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="all">
              <Flex wrap="wrap" gap="sm" pt="sm">
                {dummyActiveModels.map((model, key) => (
                  <ModelItemComponent model={model} key={key} />
                ))}
              </Flex>
            </Tabs.Panel>

            <Tabs.Panel value="chain">
              <Flex wrap="wrap" gap="sm" pt="sm">
                {dummyActiveModels.filter(m => m.onchain).map((model, key) => (
                  <ModelItemComponent model={model} key={key} />
                ))}
              </Flex>
            </Tabs.Panel>
          </Tabs>
        </Flex>
      </Center>
    </>
  );
}
