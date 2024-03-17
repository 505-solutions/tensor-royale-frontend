import { Center, Flex, Title, Button, Text, Tabs, Card, Group } from '@mantine/core';
import { NavLink, useNavigate } from 'react-router-dom';
import { IconDna, IconRobot } from '@tabler/icons-react';
import { dummyActiveModels } from '@/utils/dummy-data';
import { ModelItemComponent } from '@/components/models/ModelItemComponent';
import { useEffect, useState } from 'react';
import { getAllModels } from '@/utils/data-connections';
import { getDate } from '@/utils/helper-functions';
import { ModelTraining } from '@/utils/models';

export function ModelsPage() {
  const [models, setModels] = useState<ModelTraining[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllModels().then((res) => {
      console.log(res);
      setModels(res.data);
    });
  }, []);

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
          <Flex direction="column">
            {models.map((model) => (
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                mb="4px"
                mt="md"
                w="100%"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  navigate(`../models/detail/${model.id}`);
                }}
              >
                <Flex direction="row" justify="space-between">
                  <Title order={2}>{model?.name}</Title>
                  <Text>By: {model.author}</Text>
                </Flex>

                <Text>{model?.description}</Text>

                <Flex direction="row" justify="space-between">
                  <Text>Published at: {getDate(model.timestamp)}</Text>
                  <Group gap="xs">
                    <Text>Problem: </Text>
                    {/* <NavLink to={`../problems/detail/${problem?.id}`}>
                      <Text>{problem?.title}</Text>
                    </NavLink> */}
                  </Group>
                </Flex>
              </Card>
            ))}
          </Flex>

          {/* <Tabs defaultValue="all" pt="md">
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
          </Tabs> */}
        </Flex>
      </Center>
    </>
  );
}
