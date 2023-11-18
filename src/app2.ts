import fs from 'fs';
import { yarg } from './config/plugins/args.plugins';


const { b:base, l:limit, s:show } = yarg;

let outputMessage = `
====================================
            Table of ${ base }
====================================
`;

for (let i = 0; i < limit; i++) {
    outputMessage += `            ${ base } x ${ i } = ${ base * i }\n`;
}

if (show) {
    console.log(outputMessage);
}

const outputPath = `outputs/folder1/folder2`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${ outputPath }/table-${ base }.txt`, outputMessage);