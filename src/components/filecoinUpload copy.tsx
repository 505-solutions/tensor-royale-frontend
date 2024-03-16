import { useEffect, useState } from 'react';
import lighthouse from '@lighthouse-web3/sdk';
import { Button, FileInput, Progress, Stack } from '@mantine/core';

function FilecoinUpload() {
    const [value, setValue] = useState<File[]>([]);
    const [currentUpload, setCurrentUpload] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [output, setOutput] = useState<any>([]);

    const progressCallback = (progressData: any) => {
        let uploaded: number = progressData?.uploaded;
        let total: number = progressData?.total;

        let percentageDone = 100 - ((total / uploaded) as any)?.toFixed(2);
        setProgress(percentageDone);
        console.log(percentageDone);
    };

    useEffect(() => {
        console.log(value);
    }
    , [value]);

    const uploadFile = async (files: any) => {
        
        let hashes = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            // Push file to lighthouse node
            // Both file and folder are supported by upload function
            // Third parameter is for multiple files, if multiple files are to be uploaded at once make it true
            // Fourth parameter is the deal parameters, default null
            const output = await lighthouse.upload(file, "7b422aea.63a01ed86c3d42ddaf280e5d9ba3b156", false, null, progressCallback);
            console.log('File Status:', output);

            console.log('Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash);
            hashes.push(output.data.Hash);
            setCurrentUpload(i);
        }
        setOutput(hashes);
    };

    return (
        <div className="App" style={{maxWidth: 600, margin: 'auto', paddingTop: 50}}>
            <Stack>
                {progress == 1000? <>{output.map((hash: any) => <li>{hash}</li>)} <br></br> File uploaded successfully!</> : 
                <>
                    <FileInput label="Upload files" placeholder="Upload files" multiple onChange={setValue}/>
                    <Progress animated value={currentUpload / value.length} />
                    <Button onClick={() => uploadFile(value)}>Upload</Button>
                </>}

            </Stack>
        </div>
    );
}

export default FilecoinUpload;