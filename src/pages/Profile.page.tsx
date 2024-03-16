import { getUserDatasets, getUserProblems, getUserSubmissions } from '@/utils/data-connections';
import { DatasetModel, ProblemModel } from '@/utils/models';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { Badge, Card, Center, Flex, Group, ScrollArea, Title, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ProfilePage() {
  const { primaryWallet } = useDynamicContext();

  const navigate = useNavigate();

  const [submissions, setSubmissions] = useState([]);
  const [datasets, setDatasets] = useState([]);
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    getUserProblems(primaryWallet?.address!).then((res) => {
      console.log('user result', res);
      setProblems(res.data);
    });
    getUserDatasets(primaryWallet?.address!).then((res) => {
      console.log('datasets result', res);
      setDatasets(res.data);
    });

    getUserSubmissions(primaryWallet?.address!).then((res) => {
      console.log('submissions result', res);
      setSubmissions(res.data);
    });
  }, []);

  function cardClick(url: string) {
    navigate(url);
  }

  return (
    <>
      <Center w="100vw">
        <Flex w="70vw" direction="column">
          <Title order={2}>User profile</Title>
          <Title order={4}>Address: {primaryWallet?.address}</Title>

          <Title order={3} pt="lg" pb="sm">
            Your submitted problems
          </Title>
          <ScrollArea h="500px">
            {problems.map((p: ProblemModel, key) => (
              <Card
                key={key}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                mb="4px"
                style={{ cursor: 'pointer' }}
                onClick={() => cardClick(`../problems/detail/${p.id}`)}
              >
                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={600}>{p.title}</Text>
                </Group>
                <Text size="sm">{p?.description}</Text>
              </Card>
            ))}
          </ScrollArea>

          <Title order={3} pt="lg" pb="sm">
            Your submitted datasets
          </Title>
          <ScrollArea h="500px">
            {datasets.map((p: DatasetModel, key) => (
              <Card key={key} shadow="sm" padding="lg" radius="md" withBorder mb="4px">
                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={600}>{p.name}</Text>
                </Group>
                <Text size="sm">{p?.description}</Text>
              </Card>
            ))}
          </ScrollArea>

          <Title order={3} pt="lg" pb="sm">
            Your submitted models
          </Title>
          <ScrollArea h="500px">
            {submissions.map((p: ProblemModel, key) => (
              <Card key={key} shadow="sm" padding="lg" radius="md" withBorder mb="4px">
                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={600}>{p.title}</Text>
                </Group>
                <Text size="sm">{p?.description}</Text>
              </Card>
            ))}
          </ScrollArea>
        </Flex>
      </Center>
    </>
  );
}
