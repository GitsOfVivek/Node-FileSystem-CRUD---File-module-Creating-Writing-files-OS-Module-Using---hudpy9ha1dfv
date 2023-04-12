const fs = require('fs/promises');

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName, fileContent);
};

const myFileReader = async fileName => {
	// write code here
	// dont chnage function name
	const result = await fs.readFile(fileName, 'utf-8');
	return result;
};

const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName, fileContent);
};

const myFileDeleter = async fileName => {
	// write code here
	// dont chnage function name
	await fs.rm(fileName);
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
