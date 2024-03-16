import { Button, Center, Textarea, Flex, Group, TextInput, Title, Text } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { IconCheck } from '@tabler/icons-react';
import { AddDatasetComponent } from '../datasets/AddDatasetComponent';

export function AddProblemComponent() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    initialValues: {
      title: '',
      description: '',
      deadline: 0,
      reward: 100,
    },
  });

  function onFormSubmit(data: any) {
    setSubmitted(true);
    console.log(data);
  }

  return (
    <>
      <Center w="100vw">
        <Flex w="70vw" direction="column">
          <Title order={2}>Add a problem</Title>
          <Text>
            You can add your problem to our network using this form. After you submit the problem
            you will be able to add the dataset, if you have one.
          </Text>
          <form onSubmit={form.onSubmit((values) => onFormSubmit(values))}>
            <TextInput
              withAsterisk
              label="Title"
              placeholder="My problem title"
              {...form.getInputProps('title')}
            />

            <Textarea
              label="Description"
              description="Describe your problem as well as you can. Include details about your required solution."
              placeholder="Description..."
              {...form.getInputProps('description')}
            />

            <DateTimePicker
              valueFormat="DD MMM YYYY hh:mm A"
              label="Deadline date and time"
              placeholder="Pick date and time"
              {...form.getInputProps('deadline')}
            />

            <TextInput
              withAsterisk
              label="Reward"
              placeholder="Enter your reward for best submission"
              {...form.getInputProps('reward')}
            />

            <Group justify="flex-end" mt="md">
              {submitted ? (
                <Button type="submit" color="green">
                  <IconCheck /> Submited
                </Button>
              ) : (
                <Button type="submit">Submit</Button>
              )}
            </Group>
          </form>

          {submitted ? <AddDatasetComponent /> : null}
        </Flex>
      </Center>
    </>
  );
}
