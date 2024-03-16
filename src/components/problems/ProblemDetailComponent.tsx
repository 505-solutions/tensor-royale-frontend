import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Center, Flex, Badge, Card, Group, Text, Title, ScrollArea } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';
import { dummyProblems } from '@/utils/dummy-data';
import { ProblemModel } from '@/utils/models';
import { getDate } from '@/utils/helper-functions';

export function ProblemDetailComponent() {
  const { id } = useParams();

  const [problem, setProblem] = useState<ProblemModel | undefined>(undefined);
  useEffect(() => {
    if (id) {
      const p = getProblem(+id);
      setProblem(p);
    }
  }, []);

  function getProblem(problem_id: number) {
    return dummyProblems.filter((p) => p.id === problem_id)[0] as ProblemModel;
  }

  return (
    <>
      <Center w="100vw">
        <Flex w="70vw" direction="column">
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            mb="4px"
            style={{ cursor: 'pointer' }}
          >
            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={600}>{problem?.title}</Text>
              {problem?.solved ? (
                <Badge color="green">Solved</Badge>
              ) : (
                <Badge color="red">Active</Badge>
              )}
            </Group>

            <Text size="sm">{problem?.description}</Text>

            <Flex direction="row" justify="space-between" align="center" pt="md">
              <Text size="sm" c="dimmed">
                Added: {problem?.timestamp ? getDate(problem?.timestamp) : 'None'}
              </Text>
              <Text size="sm" c="dimmed">
                Deadline: {problem?.timestamp ? getDate(problem?.timestamp) : 'None'}
              </Text>
              <Text size="sm" c="dimmed">
                <Flex align="center">
                  Dataset:{' '}
                  {problem?.has_dataset ? <IconCheck color="green" /> : <IconX color="red" />}
                </Flex>
              </Text>
              <Text size="sm" c="dimmed">
                Submissions: {problem?.submissions_count}
              </Text>
            </Flex>
          </Card>
          <Title order={2}>Submissions</Title>
          <ScrollArea>
            {}
          </ScrollArea>
        </Flex>
      </Center>
    </>
  );
}
