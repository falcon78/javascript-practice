// converts directory hierarchy into an json file recursively

const fs = require("fs").promises;

// start scanning from this directory
const startDirectory = "/";
// all the files and folders in this array will be ignored
const ignoreFiles = [".git"];

const cliArguments = process.argv;

if (cliArguments.length < 3) {
  // if no argument is supplied
  main(startDirectory);
} else {
  main(cliArguments[2]);
}

async function directoryToJson(dir = ".") {
  let obj;
  const files = await fs.readdir(dir);

  const openFiles = [];
  const openFolders = [];

  for (let i = 0; i < files.length; i++) {
    const item = await fs.lstat(dir + "/" + files[i]);

    if (await item.isDirectory()) {
      if (ignoreFiles.indexOf(files[i]) !== -1) continue;
      openFolders.push(files[i]);
    } else if (await item.isFile()) {
      openFiles.push(files[i]);
    }
  }

  obj = {
    files: openFiles
  };

  if (openFolders.length === 0) return obj;

  for (let i = 0; i < openFolders.length; i++) {
    const files = await directoryToJson(dir + "/" + openFolders[i]);
    obj[openFolders[i]] = { ...files };
  }

  return obj;
}

async function main(directory) {
  let json;
  try {
    json = await directoryToJson(directory);
  } catch (e) {
    await fs.writeFile("./error.json", JSON.stringify(e));
    console.log(e);
    return;
  }

  await fs.writeFile("./output.json", JSON.stringify(json));
}
