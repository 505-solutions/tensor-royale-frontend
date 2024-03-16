import { Textarea, Group, Button, Select, FileInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export function AddDatasetComponent() {
  const form = useForm({
    initialValues: {
      problem_id: 0, //should be one of the users problems
      description: '',
      file: 0,
    },
  });

  function onFormSubmit(data: any) {
    console.log(data);
  }

  return (
    <form onSubmit={form.onSubmit((values) => onFormSubmit(values))}>
      <Select
        label="Problem"
        placeholder="Pick one of your problems to add dataset for it"
        data={[
          { value: '1', label: 'Problem 1' },
          { value: '2', label: 'Problem 2' },
          { value: '3', label: 'Problem 3' },

          { value: '4', label: 'Problem 4' },
        ]}
        searchable
        {...form.getInputProps('problem_id')}
      />

      <Textarea
        label="Description"
        description="Describe your dataset as well as you can. Include details about your dataset structure (filetype, data organization, data models...)."
        placeholder="Description..."
        {...form.getInputProps('description')}
      />

      <FileInput
        label="Dataset file"
        description="Add your dataset here. It can be a .zip or .rar file, or any of the recognised dataset file forms."
        placeholder="Dataset..."
        {...form.getInputProps('file')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
