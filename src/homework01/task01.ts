import { stdin, stdout } from 'process'
import { Transform } from 'stream'

const LINE_BREAK = '\n\n'
const mapChunkToStr = chunk => chunk.toString().trim()
const processStdinChunk = chunk => [...mapChunkToStr(chunk)].reverse().join('') + LINE_BREAK

const transformStream = new Transform({
  transform: (chunk, encoding, callback) => {
    const data = processStdinChunk(chunk)
    callback(null, data)
  }
})

stdin.pipe(transformStream).pipe(stdout)