import { getDatasetById, getModelById } from '@/utils/data-connections';
import { DataModel, DatasetModel, ModelTraining } from '@/utils/models';
import { Center, Flex, Text, Title } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IpfsFilesList } from '../IpfsFilesListComponent';

export function ModelDetailComponent() {
  const { id } = useParams();

  const [model, setModel] = useState<ModelTraining | undefined>();

  useEffect(() => {
    if (id !== undefined) {
      getModelById(+id!).then((res) => {
        res.data.model = JSON.parse(res.data.model);

        console.log(res.data);

        setModel(res.data as ModelTraining);
      });
    }
  }, []);

  return (
    <>
      <Center w="100vw">
        <Flex w="70vw" direction="column">
          {model !== undefined ? (
            <>
              <Title order={2}>Dataset: {model?.name}</Title>
              <Text>{model?.description}</Text>
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
