import { Center, Image, Text } from '@mantine/core';
import ReactMarkdown from 'react-markdown'

import logo from '../images/logo.jpg';

const text: string = 
`
# TensorRoyale - ETHGlobal London 2024
`

export function HomePage() {
  return (
    <>
      <Center>
        <Image style={{maxWidth: 350, padding: 15}} src={logo} w="100vw" />
      </Center>
      <Center >
        <div style={{flexDirection: 'column', maxWidth: 600, margin: 'auto', textAlign: 'justify'}}>        <ReactMarkdown>
        {text}

        </ReactMarkdown>
</div>
        </Center>
        
        </>
  );
}
