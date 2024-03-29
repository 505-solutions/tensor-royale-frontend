import {
  Textarea,
  Group,
  Button,
  Select,
  FileInput,
  Title,
  Text,
  TextInput,
  List,
  Code,
  ListItem,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { getProblems, postDataset } from '@/utils/data-connections';
import { FilecoinUploadField } from '../fields/FilecoinUploadField';
import { IconCheck, IconFile } from '@tabler/icons-react';

import json from '../../utils/TensorRoyale.json';

import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';

export function AddDatasetComponent(props?: any) {
  const { primaryWallet } = useDynamicContext();

  const { id } = useParams();

  const { displayTitle } = props ?? false;

  const [submitted, setSubmitted] = useState(false);
  const [problems, setProblems] = useState([]);
  const [fileUrls, setFileUrls] = useState([]);
  const [reqId, setReqId] = useState(0);
  const [reqCom, setReqCom] = useState(0);

  const { config } = usePrepareContractWrite({
    abi: json.abi,
    address: '0xc28cF49aCCeFB1F570008Fe484d6D5AA22ac3f5C',
    functionName: 'registerRequest',
    args: [BigInt(1), BigInt(reqId), BigInt(reqCom), BigInt(0)],
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const [datasetPlaceholder, setDatasetPlaceholder] = useState('Dataset...');

  useEffect(() => {
    getProblems().then((rsp) => {
      const p = rsp.data.map((el: any) => ({ value: el.id.toString(), label: el.title }));
      setProblems(p);
    });
  }, []);

  useEffect(() => {
    const p = fileUrls.length !== 1 ? ' files' : ' file';

    setDatasetPlaceholder(fileUrls.length + p);
  }, [fileUrls]);

  const form = useForm({
    initialValues: {
      problem_id: id ? id.toString() : '', //should be one of the users problems
      name: '',
      description: '',
      file: 0,
    },
  });

  async function onFormSubmit(data: any) {
    data.author = primaryWallet?.address;

    data.file_train = JSON.stringify(fileUrls);
    const res = await postDataset(data);
    setReqId(res.data.id);
    setReqCom(res.data.hash);
    write?.();
    setSubmitted(true);
  }

  return (
    <form onSubmit={form.onSubmit((values) => onFormSubmit(values))}>
      {displayTitle ? (
        <>
          <Title order={2}>Add a dataset</Title>
          <Text>You can add a dataset for one of your existing problems</Text>
        </>
      ) : (
        <></>
      )}

      <Select
        label="Problem"
        placeholder="Pick one of your problems to add dataset for it"
        data={problems}
        readOnly={!!id}
        value={id?.toString()}
        searchable
        {...form.getInputProps('problem_id')}
      />

      <TextInput label="Name" placeholder="Your dataset name" {...form.getInputProps('name')} />

      <Textarea
        label="Description"
        description="Describe your dataset as well as you can. Include details about your dataset structure (filetype, data organization, data models...)."
        placeholder="Description..."
        {...form.getInputProps('description')}
      />

      {/* <FileInput
        label="Dataset file"
        description="Add your dataset here. It can be a .zip or .rar file, or any of the recognised dataset file forms."
        placeholder="Dataset..."
        {...form.getInputProps('file')}
      /> */}

      <FilecoinUploadField
        label="Dataset file"
        placeholder={datasetPlaceholder}
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
        {submitted && !isLoading ? (
          <Button type="submit" color="green">
            <IconCheck /> Submited
          </Button>
        ) : (
          <Button type="submit" loading={isLoading}>
            Submit
          </Button>
        )}
      </Group>
    </form>
  );
}
