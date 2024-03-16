import { Badge, Card, Flex, Group, Text } from '@mantine/core';

export function ProblemItemComponent(props: any) {
  const { problem } = props;

  function getDate(timestamp: number) {
    const date = new Date(timestamp);
    return date.toDateString();
  }

  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder mb="4px">
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={600}>{problem.title}</Text>
          {problem.solved ? <Badge color="green">Solved</Badge> : <Badge color="red">Active</Badge>}
        </Group>

        <Text size="sm">{problem.description}</Text>

        <Flex direction="row" justify="space-between" pt="md">
          <Text size="sm" c="dimmed">
            Added: {getDate(problem.timestamp)}
          </Text>
          <Text size="sm" c="dimmed">
            Deadline: {getDate(problem.deadline)}
          </Text>
          <Text size="sm" c="dimmed">
            Submissions: {problem.submissions_count}
          </Text>
        </Flex>
      </Card>
    </>
  );
}
