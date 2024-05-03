import 'dotenv/config'
import OpenAI from 'openai'

const open = new OpenAI()

const results = await open.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'What is the meaning of life?' },
  ],
})

console.log(results)
