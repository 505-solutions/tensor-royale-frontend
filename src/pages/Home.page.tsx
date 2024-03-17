import { Card, Center, Flex, Grid, Image, SimpleGrid, Text, Title } from '@mantine/core';
import ReactMarkdown from 'react-markdown';

import problems from '../images/problems.jpeg';
import competing from '../images/competiting.jpeg';
import models from '../images/models.jpeg';
import dataset from '../images/dataset.jpeg';

import logo from '../images/logo.jpg';
import { useNavigate } from 'react-router-dom';

const text: string = `
# TensorRoyale - ETHGlobal London 2024
`;

export function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Center>
        <Image style={{ maxWidth: 450, padding: 15 }} src={logo} w="100vw" />
      </Center>

      <Center w="100vw">
        <Flex w="80vw" direction="column">
          <SimpleGrid cols={4}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              m="3vw"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                navigate('problems');
              }}
            >
              <Card.Section>
                <Image src={problems} />
              </Card.Section>
              <Title mt="sm" order={2} style={{ textAlign: 'center' }}>
                Post your problem
              </Title>
            </Card>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              m="3vw"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                navigate('data-sets');
              }}
            >
              <Card.Section>
                <Image src={dataset} />
              </Card.Section>
              <Title mt="sm" order={2} style={{ textAlign: 'center' }}>
                Publish your dataset
              </Title>
            </Card>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              m="3vw"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                navigate('models');
              }}
            >
              <Card.Section>
                <Image src={models} />
              </Card.Section>
              <Title mt="sm" order={2} style={{ textAlign: 'center' }}>
                Enter with your model
              </Title>
            </Card>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              m="3vw"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                navigate('leaderboard');
              }}
            >
              <Card.Section>
                <Image src={competing} />
              </Card.Section>
              <Title mt="sm" order={2} style={{ textAlign: 'center' }}>
                Compete with others
              </Title>
            </Card>
          </SimpleGrid>
        </Flex>
      </Center>
      <Center></Center>
    </>
  );
}
