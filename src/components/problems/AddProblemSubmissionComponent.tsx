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
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProblemById, getProblemDatasets, postSubmission } from '@/utils/data-connections';
import { ProblemModel } from '@/utils/models';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';

export function AddProblemSubmissionComponent() {
  const { primaryWallet } = useDynamicContext();

  const { id } = useParams();

  const [problem, setProblem] = useState<ProblemModel | undefined>(undefined);
  const [datasets, setDatasets] = useState([]);

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

            <FileInput
              label="Model file"
              description="Add your model file in one of the standard model formats here. "
              placeholder="Dataset..."
              {...form.getInputProps('file')}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </Flex>
      </Center>
    </>
  );
}
