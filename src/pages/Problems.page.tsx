import { Center, Flex, Group } from '@mantine/core';

import { ProblemItemComponent } from '@/components/problems/ProblemItemComponent';
import { dummyProblems } from '../utils/dummy-data';

export function ProblemsPage() {
  const problems = dummyProblems.map((problem, i) => (
    <ProblemItemComponent problem={problem} key={i} />
  ));

  return (
    <>
      <Center w="100vw">
        <Group w="70vw">
          <Flex direction="column" w="100vw">
            {problems}
          </Flex>
        </Group>
      </Center>
    </>
  );
}
