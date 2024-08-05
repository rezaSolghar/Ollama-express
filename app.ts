import ollama from 'ollama'

const response = await ollama.chat({
    model: 'phi3:mini',
    messages: [{ role: 'system', content: 'Why is the sky blue?' }],
  })
  console.log(response)