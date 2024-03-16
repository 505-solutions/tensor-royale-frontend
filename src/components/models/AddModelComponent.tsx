import { Center, Flex, Title, Textarea, Group, Button, Text, FileInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export function AddModelComponent() {
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
            Add a new model
          </Title>

          <Text mb="sm">
            You can submit a new model for our platform here. Make sure to specify the purpuse of
            your AI model, as well as its inputs and outputs.
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
