import { compileFromFile, DEFAULT_OPTIONS } from 'json-schema-to-typescript'
import * as fs from 'fs'
import { basename, extname } from 'path';

function stripExtension(filename: string): string {
    return filename.replace(extname(filename), '')
}


async function generateClass(schemaName: string) {
    const path = `./assets/${schemaName}.json`;
    fs.writeFileSync(`./src/${schemaName}.gen.ts`, 
        await compileFromFile(path, {...DEFAULT_OPTIONS, declareReferenced: false }));
    return schemaName;
}

async function main(){
    fs.readdir('./assets/', async function(err, items) {
        if (err) {
            console.error(err);
            return;
        }
        for (var i=0; i<items.length; i++) {
            if (!items[i].endsWith('.json')){
                continue;
            }
            try {
                const schema = await generateClass(stripExtension(items[i]));
                console.log(`${schema}.gen.ts generated!`);
            } catch (error) {
                console.error(error);
            }
            
        }
    });
}

main();