import { Card, Image, Title, Text, Flex } from '@mantine/core';
import { IconDna } from '@tabler/icons-react';

export function ModelItemComponent(props: any) {
  const { model } = props;

  return (
    <>
      <Card w="22vw" shadow="sm" radius="md" withBorder style={{ cursor: 'pointer' }}>
        <Card.Section>
          <Image src={model.icon_url} h="160" />
        </Card.Section>
        <Flex direction="row" justify="space-between" align="center">
          <Title order={3} pt="xs">
            {model.name}
          </Title>
          {model.onchain ? (
            <IconDna style={{ background: 'green', borderRadius: '100px', color: 'white' }} />
          ) : (
            <></>
          )}
        </Flex>

        <Text>{model.description}</Text>
      </Card>
    </>
  );
}
