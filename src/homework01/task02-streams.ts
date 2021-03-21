import path from 'path'
import csvtojson from 'csvtojson'
import { pipeline } from 'stream'
import fs from 'fs'

const CSV_FILE_PATH = path.resolve(__dirname, 'csv', 'nodejs-hw1-ex1.csv')
const LOG_DIR = path.resolve(__dirname, 'logs')
const LOG_FILE_PATH = path.resolve(LOG_DIR, 'log.txt')

if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR)
}

const readStream = fs.createReadStream(CSV_FILE_PATH)
const writeStream = fs.createWriteStream(LOG_FILE_PATH, {
  flags: 'a+'
})

pipeline(
  readStream,
  csvtojson(),
  writeStream,
  e => {
    if (e) {
      throw new Error('CSV file logging was failed. Reason:\n' + e)
    } else {
      console.log('CSV file was successfully logged')
    }
  }
)