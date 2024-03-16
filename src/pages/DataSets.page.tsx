import { Center, Flex, Title, Button, Text } from '@mantine/core';
import { NavLink } from 'react-router-dom';

import { dummyDatasets } from '@/utils/dummy-data';
import { DatasetItemComponent } from '@/components/datasets/DatasetItemComponent';

export function DataSetsPage() {
  const datasets = dummyDatasets.map((dataset, key) => (
    <DatasetItemComponent dataset={dataset} key={key} />
  ));

  return (
    <>
      <Center w="100vw">
        <Flex w="70vw" direction="column">
          <Title order={2}>Datasets</Title>
          <Flex direction="row" justify="space-between" align="center" pb="lg" pt="sm">
            <Text>
              Explore datasets available on our platform and add your own datasets for existing
              problems.
            </Text>
            <NavLink to="add">
              <Button justify="center">Add dataset</Button>
            </NavLink>
          </Flex>

          <Flex direction="column">{datasets}</Flex>
        </Flex>
      </Center>
    </>
  );
}
