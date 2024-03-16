import { getProblemById } from '@/utils/data-connections';
import { Center, Flex, Title, TextInput, Textarea, Group, Button, Text, FileInput } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { Link, useParams } from 'react-router-dom';

export function AddProblemSubmissionComponent() {
  const { id } = useParams();

  const problem = getProblemById(+id!);

  const form = useForm({
    initialValues: {
      title: '',
      description: '',
      deadline: 0,
      reward: 100,
    },
  });

  function onFormSubmit(data: any) {
    console.log(data);
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
