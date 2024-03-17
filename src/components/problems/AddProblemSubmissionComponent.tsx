import {
  Center,
  Flex,
  Title,
  Textarea,
  Group,
  Button,
  Text,
  FileInput,
  Select,
  TextInput,
  Code,
  List,
  ListItem,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProblemById, getProblemDatasets, postSubmission } from '@/utils/data-connections';
import { ProblemModel } from '@/utils/models';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { IconFile } from '@tabler/icons-react';
import { FilecoinUploadField } from '../fields/FilecoinUploadField';

export function AddProblemSubmissionComponent() {
  const { primaryWallet } = useDynamicContext();

  const { id } = useParams();

  const [problem, setProblem] = useState<ProblemModel | undefined>(undefined);
  const [datasets, setDatasets] = useState([]);

  const [fileUrls, setFileUrls] = useState([]);
  const [modelPlaceholder, setModelPlaceholder] = useState('Model...');

  useEffect(() => {
    const p = fileUrls.length !== 1 ? ' files' : ' file';

    setModelPlaceholder(fileUrls.length + p);
  }, [fileUrls]);

  useEffect(() => {
    getProblemById(+id!).then((r) => {
      setProblem(r);
    });
    getProblemDatasets(+id!).then((r: any) => {
      const ds = r.data.map((d: any) => ({ value: d.id.toString(), label: d.name }));
      setDatasets(ds);
    });
  }, []);

  // const problem = getProblemById(+id!);

  const form = useForm({
    initialValues: {
      dataset_id: null,
      file: '',
      name: '',
      description: '',
    },
  });

  function onFormSubmit(data: any) {
    data.author = primaryWallet.address;
    data.file = JSON.stringify(fileUrls);
    postSubmission(data);
  }

  return (
    <>
      <Center w="100vw">
        <Flex w="70vw" direction="column">
          <Title order={2} pt="sm">
            Add a submission
          </Title>

          <Text mb="sm">
            You are adding a submission for:{' '}
            <Link to={`../problems/detail/${problem?.id}`}>{problem?.title}</Link>
          </Text>
          <form onSubmit={form.onSubmit((values: any) => onFormSubmit(values))}>
            <Select
              label="Dataset"
              placeholder="Pick one of your problems to add dataset for it"
              data={datasets}
              searchable
              {...form.getInputProps('dataset_id')}
            />

            <TextInput
              label="Name"
              placeholder="Name of your model"
              {...form.getInputProps('name')}
            />

            <Textarea
              label="Description"
              description="Describe your solution as well as you can."
              placeholder="Description..."
              {...form.getInputProps('description')}
            />

            <FilecoinUploadField
              label="Model file"
              placeholder={modelPlaceholder}
              setFileUrls={setFileUrls}
            />

            <List spacing="xs" size="sm" center icon={<IconFile />}>
              {fileUrls.map((file: any, index: number) => (
                <ListItem key={index}>
                  <Code>
                    <b>{file.Name || '< Parent folder >'}</b>
                  </Code>{' '}
                  -{' '}
                  <Code>
                    {file.Hash} |{' '}
                    <a
                      href={`https://gateway.lighthouse.storage/ipfs/${file.Hash}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      IPFS ↗
                    </a>{' '}
                  </Code>
                </ListItem>
              ))}
            </List>

            <Group justify="flex-end" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Flex>
      </Center>
    </>
  );
}
