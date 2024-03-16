import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Center, Flex, Badge, Card, Group, Text, Title, ScrollArea, Button } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';
import { DatasetModel, ModelTraining, ProblemModel } from '@/utils/models';
import { getDate } from '@/utils/helper-functions';
import {
  getProblemById,
  getProblemDatasets,
  getProblemSubmissions,
} from '@/utils/data-connections';

export function ProblemDetailComponent() {
  const { id } = useParams();

  const [submissions, setSubmissions] = useState([]);
  const [datasets, setDatasets] = useState([]);
  const [problem, setProblem] = useState<ProblemModel | undefined>(undefined);

  useEffect(() => {
    if (id) {
      getProblemById(+id).then((resp) => setProblem(resp));
      getProblemSubmissions(+id).then((resp) => {
        setSubmissions(resp.data);
      });
      getProblemDatasets(+id).then((resp) => {
        setDatasets(resp.data);
      });
    }
  }, []);

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
            mt="md"
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

          <Group justify="space-between" pt="sm" pb="xs">
            <Title order={2}>Datasets</Title>
            <Link to={`../data-sets/add/${problem?.id}`}>
              <Button justify="center">Add dataset</Button>
            </Link>
          </Group>

          <ScrollArea mah="500px">
            {datasets.map((ds: DatasetModel) => (
              <Card shadow="sm" padding="lg" radius="md" withBorder mb="4px">
                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={600}>Author:{ds?.author}</Text>
                  <Badge color="green">{ds.size ?? '?'}MB</Badge>
                </Group>
                <Text size="sm">{ds?.description}</Text>
              </Card>
            ))}
          </ScrollArea>

          <Group justify="space-between" pt="sm" pb="xs">
            <Title order={2}>Submissions</Title>
            <Link to={`../problems/add-submission/${problem?.id}`}>
              <Button justify="center">Add submission</Button>
            </Link>
          </Group>

          <ScrollArea h="500px">
            {submissions.map((ds: ModelTraining) => (
              <Card shadow="sm" padding="lg" radius="md" withBorder mb="4px">
                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={600}>Author:{ds?.author}</Text>
                  <Badge color="green">{ds.size ?? '?'}MB</Badge>
                </Group>
                <Text size="sm">{ds?.description}</Text>
              </Card>
            ))}
          </ScrollArea>
        </Flex>
      </Center>
    </>
  );
}
