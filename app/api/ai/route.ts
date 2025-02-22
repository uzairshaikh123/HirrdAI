// import { Configuration, OpenAIApi } from "openai"
// import { NextResponse } from "next/server"
// import { redis, rateLimit } from "../config"

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// })
// const openai = new OpenAIApi(configuration)

// export async function POST(req: Request) {
//   try {
//     const { prompt, tone, length, userId, plan } = await req.json()

//     // Rate limiting
//     const requests = await redis.incr(`user:${userId}:requests`)
//     if (requests > rateLimit[plan]) {
//       return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 })
//     }

//     const completion = await openai.createCompletion({
//       model: "text-davinci-002",
//       prompt: `Write a ${tone} article about ${prompt} that is approximately ${length} words long.`,
//       max_tokens: Number.parseInt(length) * 1.5, // Adjust as needed
//     })

//     return NextResponse.json({ content: completion.data.choices[0].text })
//   } catch (error) {
//     console.error("OpenAI API error:", error)
//     return NextResponse.json({ error: "Error generating content" }, { status: 500 })
//   }
// }
