import { Center, Flex, Title, Textarea, Group, Button, Text, FileInput, Code, List, ListItem } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconFile } from '@tabler/icons-react';
import { FilecoinUploadField } from '../fields/FilecoinUploadField';
import { useEffect, useState } from 'react';

export function AddModelComponent() {
  const [fileUrls, setFileUrls] = useState([]);
  const [modelPlaceholder, setModelPlaceholder] = useState('Model...');


  useEffect(() => {
    const p = fileUrls.length !== 1 ? ' files' : ' file';

    setModelPlaceholder(fileUrls.length + p);
  }, [fileUrls]);

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
