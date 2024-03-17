import { getDatasetById, getModelById, getProblemById } from '@/utils/data-connections';
import { DataModel, DatasetModel, ModelTraining, ProblemModel } from '@/utils/models';
import { Card, Center, Flex, Group, Text, Title } from '@mantine/core';
import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { IpfsFilesList } from '../IpfsFilesListComponent';
import { getDate } from '@/utils/helper-functions';

export function ModelDetailComponent() {
  const { id } = useParams();

  const [model, setModel] = useState<ModelTraining | undefined>();
  const [problem, setProblem] = useState<ProblemModel | undefined>();

  useEffect(() => {
    if (id !== undefined) {
      getModelById(+id!).then((res) => {
        res.data.model = JSON.parse(res.data.model);

        console.log(res.data);

        setModel(res.data as ModelTraining);
      });
    }
  }, []);

  useEffect(() => {
    if (model?.problem_id !== undefined) {
      getProblemById(model?.problem_id!).then((res) => {
        console.log('problem', res);
        setProblem(res);
      });
    }
  }, [model]);

  return (
    <>
      <Center w="100vw">
        <Flex w="70vw" direction="column">
          {model !== undefined ? (
            <>
              <Card shadow="sm" padding="lg" radius="md" withBorder mb="4px" mt="md">
                <Flex direction="row" justify="space-between">
                  <Title order={2}>Model: {model?.name}</Title>
                  <Text>By: {model.author}</Text>
                </Flex>

                <Text>{model?.description}</Text>

                <Flex direction="row" justify="space-between">
                  <Text>Published at: {getDate(model.timestamp)}</Text>
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
              <IpfsFilesList data={model?.model} />
            </>
          ) : (
            <></>
          )}
        </Flex>
      </Center>
    </>
  );
}
