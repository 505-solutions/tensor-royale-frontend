import { Badge, Card, Flex, Group, Text } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export function ProblemItemComponent(props: any) {
  const { problem } = props;

  const navigate = useNavigate();

  function getDate(timestamp: number) {
    const date = new Date(timestamp);
    return date.toDateString();
  }

  function goToDetails() {
    navigate(`detail/${problem.id}`);
  }

  return (
    <>
      <div onClick={goToDetails}>
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          mb="4px"
          style={{ cursor: 'pointer' }}
        >
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={600}>{problem.title}</Text>
            {problem.solved ? (
              <Badge color="green">Solved</Badge>
            ) : (
              <Badge color="red">Active</Badge>
            )}
          </Group>

          <Text size="sm">{problem.description}</Text>

          <Flex direction="row" justify="space-between" align="center" pt="md">
            <Text size="sm" c="dimmed">
              Added: {getDate(problem.timestamp)}
            </Text>
            <Text size="sm" c="dimmed">
              Deadline: {getDate(problem.deadline)}
            </Text>
            <Text size="sm" c="dimmed">
              <Flex align="center">
                Dataset: {problem.has_dataset ? <IconCheck color="green" /> : <IconX color="red" />}
              </Flex>
            </Text>
            <Text size="sm" c="dimmed">
              Submissions: {problem.submissions_count}
            </Text>
          </Flex>
        </Card>
      </div>
    </>
  );
}
