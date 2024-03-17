import { getDatasetById } from '@/utils/data-connections';
import { DataModel, DatasetModel } from '@/utils/models';
import { Center, Flex, Text, Title } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IpfsFilesList } from '../IpfsFilesListComponent';

export function DatasetDetailComponent() {
  const { id } = useParams();

  const [dataset, setDataset] = useState<DataModel | undefined>();

  useEffect(() => {
    if (id !== undefined) {
      getDatasetById(+id!).then((res) => {
        console.log(res);
        res.data.file_train = JSON.parse(res.data.file_train);

        setDataset(res.data as DataModel);
      });
    }
  }, []);

  return (
    <>
      <Center w="100vw">
        <Flex w="70vw" direction="column">
          {dataset !== undefined ? (
            <>
              <Title order={2}>Dataset: {dataset?.name}</Title>
              <Text>{dataset?.description}</Text>
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
