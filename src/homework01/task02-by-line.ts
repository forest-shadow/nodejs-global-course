import readline from 'readline'
import path from 'path'
import csvtojson from 'csvtojson'
import fs from 'fs'

const CSV_FILE_PATH = path.resolve(__dirname, 'csv', 'nodejs-hw1-ex1.csv')
const LOG_DIR = path.resolve(__dirname, 'logs')
const LOG_FILE_PATH = path.resolve(LOG_DIR, 'log.txt')
let lineCounter = 0

const readStream = fs.createReadStream(CSV_FILE_PATH)

const readlineInterface = readline.createInterface({
  input: readStream.pipe(csvtojson()),
})

const writeLine = async (line, lineCounter) => {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR)
  }

  try {
    await fs.promises.appendFile(LOG_FILE_PATH, line + '\n')
    console.log(line)
    console.log(`Success: Line ${lineCounter} was written successfully.`)
  } catch (e) {
    throw new Error(`Line ${lineCounter} wasn't logged. Reason:\n` + e)
  }
}

readlineInterface.on('line', line => {
  lineCounter++
  writeLine(line, lineCounter)
})