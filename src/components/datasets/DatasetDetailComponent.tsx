import { getDatasetById, getProblemById } from '@/utils/data-connections';
import { DataModel, DatasetModel, ProblemModel } from '@/utils/models';
import { Card, Center, Flex, Group, Text, Title } from '@mantine/core';
import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { IpfsFilesList } from '../IpfsFilesListComponent';
import { getDate } from '@/utils/helper-functions';

export function DatasetDetailComponent() {
  const { id } = useParams();

  const [dataset, setDataset] = useState<DataModel | undefined>();
  const [problem, setProblem] = useState<ProblemModel | undefined>();

  useEffect(() => {
    if (id !== undefined) {
      getDatasetById(+id!).then((res) => {
        console.log(res);
        res.data.file_train = JSON.parse(res.data.file_train);

        setDataset(res.data as DataModel);
      });
    }
  }, []);

  useEffect(() => {
    if (dataset?.problem_id !== undefined) {
      getProblemById(dataset?.problem_id).then((res) => {
        console.log('problem', res);
        setProblem(res);
      });
    }
  }, [dataset]);

  return (
    <>
      <Center w="100vw">
        <Flex w="70vw" direction="column">
          {dataset !== undefined ? (
            <>
              <Card shadow="sm" padding="lg" radius="md" withBorder mb="4px" mt="md">
                <Flex direction="row" justify="space-between">
                  <Title order={2}>Dataset: {dataset?.name}</Title>
                  <Text>By: {dataset.author}</Text>
                </Flex>

                <Text>{dataset?.description}</Text>

                <Flex direction="row" justify="space-between">
                  <Text>Published at: {getDate(dataset.timestamp)}</Text>
                  <Group gap="xs">
                    <Text>Problem: </Text>
                    <NavLink to={`../problems/detail/${problem?.id}`}>
                      <Text>{problem?.title}</Text>
                    </NavLink>
                  </Group>
                </Flex>
              </Card>
              <Title mt="md" order={3}>
                Files on IPFS
              </Title>
              <IpfsFilesList data={dataset?.file_train} />
            </>
          ) : (
            <></>
          )}
        </Flex>
      </Center>
    </>
  );
}
