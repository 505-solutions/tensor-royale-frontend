import { Code, List, ListItem } from '@mantine/core';
import { IconFile } from '@tabler/icons-react';

export function IpfsFilesList({ data }) {
  return (
    <>
      <List spacing="xs" size="sm" center icon={<IconFile />}>
        {data.map((file: any, index: number) => (
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
    </>
  );
}
