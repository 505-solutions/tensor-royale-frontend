import { Card, Group, Text } from '@mantine/core';

export function DatasetItemComponent(props: any) {
  const { dataset } = props;

  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder mb="4px">
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={600}>Problem: {dataset.problem.title}</Text>
        </Group>

        <Text size="sm">{dataset.description}</Text>
      </Card>
    </>
  );
}
