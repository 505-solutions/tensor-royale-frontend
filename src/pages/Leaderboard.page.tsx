import { dummyLeaderboardData } from '@/utils/dummy-data';
import { Button, Center, Flex, NavLink, Title, Text, Card, ScrollArea } from '@mantine/core';

export function LeaderboardPage() {
  return (
    <>
      <Center w="100vw">
        <Flex w="70vw" direction="column">
          <Title order={2}>Leaderboard</Title>
          <Text>Users with most sucessful model submissions:</Text>

          <ScrollArea h="85vh">
            <Flex direction="column">
              {dummyLeaderboardData.map((e) => (
                <Card shadow="sm" radius="md" withBorder>
                  <Flex direction="row" justify="space-between">
                    <Title order={4}>{e.user}</Title>
                    <Title order={4}>{e.points}</Title>
                  </Flex>
                </Card>
              ))}
            </Flex>
          </ScrollArea>
        </Flex>
      </Center>
    </>
  );
}
