import { FileInput, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FilecoinUpload from '../filecoinUpload';
import { useEffect, useState } from 'react';

export function FilecoinUploadField({ placeholder, label, setFileUrls }) {
  const [files, setFiles] = useState([]);

  const [opened, { open, close }] = useDisclosure(false);

  const handleClick = (event) => {
    event.preventDefault();
    open();
  };

  useEffect(() => {
    console.log(files);
    setFileUrls(files);
  }, [files]);

  return (
    <>
      <FileInput label={label} placeholder={placeholder} onClick={handleClick} />

      <Modal opened={opened} onClose={close} title="Upload files to filecoin" centered>
        <FilecoinUpload close={close} setFiles={setFiles} />
      </Modal>
    </>
  );
}
