import { Button, Center, Textarea, Flex, Group, TextInput, Title, Text } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { IconCheck } from '@tabler/icons-react';
import { AddDatasetComponent } from '../datasets/AddDatasetComponent';
import { postProblem } from '@/utils/data-connections';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { Signer } from 'ethers';

import json from '../../utils/TensorRoyale.json';

import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';

export function AddProblemComponent() {
  const { primaryWallet } = useDynamicContext();

  const [submitted, setSubmitted] = useState(false);
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

  const form = useForm({
    initialValues: {
      title: '',
      description: '',
      deadline: 0,
      reward: 100,
    },
  });

  async function onFormSubmit(data: any) {
    data.address = primaryWallet?.address;
    const res = await postProblem(data);
    setReqId(res.data.id);
    setReqCom(res.data.hash);
    write?.();
    setSubmitted(true);
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

          {submitted && !isLoading ? <AddDatasetComponent /> : null}
        </Flex>
      </Center>
    </>
  );
}
