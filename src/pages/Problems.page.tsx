import { Center, Flex, Button, Title, Text } from '@mantine/core';
import { NavLink } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { ProblemItemComponent } from '@/components/problems/ProblemItemComponent';
import { getProblems } from '@/utils/data-connections';

export function ProblemsPage() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    getProblems().then((result) => {
      const p = result.data.map((problem: any, i: any) => (
        <ProblemItemComponent problem={problem} key={i} />
      ));
      setProblems(p);
    });
  }, []);

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
