/*
* LOC counter for JS files. Includes also arrow style functions
*/
const fs = require('fs');

const fileName = process.argv.slice(2)[0];
const extension = fileName.split('.').pop();
// Support only javascript/typescript
if (!['js', 'ts'].includes(extension)){
    throw Error('Unsupported language, only JS and TS are supported.')
}
const file = fs.readFileSync(fileName, 'utf-8');
const result = {
    "comments": 0,
    "classes": 0,
    "functions": 0,
    "ifStatements": 0,
    "loops": 0
};

// Save lines as string array
let lines = file.split('\n');

// Remove empty lines
for (let i = 0; i < lines.length; i++) {
    lines[i] = lines[i].trim();
}

lines = lines.filter((line) => line);

// Matching and counting
const commentsRegExp = new RegExp(/^\s*(\/\/|\/\*|\*)/g);
const classesRegExp = new RegExp(/\s*class\s+/g);
const funcRegExp = new RegExp(/(function|\)\s*\=\>)/g);
const ifRegExp = new RegExp(/if\s*\(/g);
const loopsRegExp = new RegExp(/(for|while|do)\s*\(/g)

for (const line of lines) {
    if (line.match(commentsRegExp)) {
        result.comments++;
    } else {
        if (line.match(classesRegExp)) {
            result.classes++;
        }

        if (line.match(funcRegExp)) {
            result.functions++;
        }

        if (line.match(ifRegExp)) {
            result.ifStatements++;
        }

        if (line.match(loopsRegExp)) {
            result.loops++;
        }
    }
}

const pctTotal = (val) => parseFloat((val/lines.length) * 100).toFixed(2);

console.log(`\n   CONTENT   |   ${fileName}   |   TOTAL LOC: ${lines.length}                                                      `);
console.log(`\n             comments: ${result.comments}   |   classes: ${result.classes}   |   functions: ${result.functions}   |   if statements: ${result.ifStatements}   |   loops: ${result.loops}`);
console.log(`\n% of total   comments: ${pctTotal(result.comments)}%   |   classes: ${pctTotal(result.classes)}%   |   functions: ${pctTotal(result.functions)}%   |   if statements: ${pctTotal(result.ifStatements)}%   |   loops: ${pctTotal(result.loops)}%`)