import { Center, Flex, Button, Title, Text } from '@mantine/core';
import { NavLink } from 'react-router-dom';

import { ProblemItemComponent } from '@/components/problems/ProblemItemComponent';
import { dummyProblems } from '../utils/dummy-data';

export function ProblemsPage() {
  const problems = dummyProblems.map((problem, i) => (
    <ProblemItemComponent problem={problem} key={i} />
  ));

  return (
    <>
      <Center w="100vw">
        <Flex w="70vw" direction="column">
          <Title order={2}>Current problems</Title>
          <Flex direction="row" justify="space-between" align="center" pb="lg" pt="sm">
            <Text>
              Discover current problems, posted by our users. You can also post a new problem by
              clicking the button on the right.
            </Text>
            <NavLink to="add">
              <Button justify="center">Add problem</Button>
            </NavLink>
          </Flex>

          <Flex direction="column">{problems}</Flex>
        </Flex>
      </Center>
    </>
  );
}
