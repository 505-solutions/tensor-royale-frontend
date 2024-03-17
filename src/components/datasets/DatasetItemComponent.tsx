import { Card, Group, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export function DatasetItemComponent(props: any) {
  const { dataset } = props;
  const navigate = useNavigate();

  return (
    <>
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        mb="4px"
        onClick={() => {
          navigate(`../data-sets/detail/${dataset.id}`);
        }}
        style={{ cursor: 'pointer' }}
      >
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={600}>Problem: {dataset.problem.title}</Text>
        </Group>

        <Text size="sm">{dataset.description}</Text>
      </Card>
    </>
  );
}
