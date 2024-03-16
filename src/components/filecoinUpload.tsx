import { useEffect, useState } from 'react';
import lighthouse from '@lighthouse-web3/sdk'
import { Button, FileInput, Progress, Stack } from '@mantine/core';

function App() {
    const [value, setValue] = useState<File[]>([]);
    const [currentUpload, setCurrentUpload] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [output, setOutput] = useState<any>([]);
    const [priceEstimate, setPriceEstimate] = useState<BigInt>(BigInt(0));

    useEffect(() => {
        const estimatePrice = async () => {
            let price = await lighthouse.getPrice(value, "calibration", "usdc")
            console.log(price)
            const regex = /\d+/g;
            const numericPart = price.toString().match(regex)?.join('');
            console.log(numericPart);
            setPriceEstimate(BigInt(numericPart!) / BigInt("1000000000000000"));
        }
        if (value.length > 0) {
            estimatePrice();
        }
    }, [value])


  const progressCallback = (progressData:any) => {
    let percentageDone =
      100 - ((progressData?.total / progressData?.uploaded) as any)?.toFixed(2)
    console.log(percentageDone)
    setProgress(percentageDone);
  }

  const uploadFile = async(file: any) =>{
    console.log(file)
    // Push file to lighthouse node
    // Both file and folder are supported by upload function
    // Third parameter is for multiple files, if multiple files are to be uploaded at once make it true
    // Fourth parameter is the deal parameters, default null
    const output = await lighthouse.upload(file, "4414e711.bdd4d86b458941e98806bcfbb1f7d396", true, undefined, progressCallback)
    console.log('File Status:', output.data[-1])
    setProgress(100)
    /*
      output:
        data: {
          Name: "filename.txt",
          Size: 88000,
          Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
        }
      Note: Hash in response is CID.
    */

  }
  const done = progress === 100;
  return (
    <div className="App" style={{maxWidth: 600, margin: 'auto', paddingTop: 50}}>
    <Stack>
            <FileInput label="Upload files" placeholder="Upload files" onChange={e => setValue(e)} multiple/>
            <p>Estimated cost: {(Number(priceEstimate))/1000} USDC</p>
            {!done? <Progress transitionDuration={500} value={progress} />: "Upload complete ✅"}
            <Button onClick={() => uploadFile(value)} disabled={progress !== 0}>{!done? "Upload" : "Upload complete"}</Button>
        </Stack>

    </div>
  )
}

export default App