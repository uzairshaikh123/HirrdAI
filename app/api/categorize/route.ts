// import { Configuration, OpenAIApi } from "openai"
// import { NextResponse } from "next/server"

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// })
// const openai = new OpenAIApi(configuration)

// export async function POST(req: Request) {
//   try {
//     const { content } = await req.json()
//     const completion = await openai.createCompletion({
//       model: "text-davinci-002",
//       prompt: `Categorize the following content into 3-5 relevant categories:\n\n${content}\n\nCategories:`,
//       max_tokens: 50,
//     })

//     const categories = completion.data.choices[0].text.split(",").map((cat) => cat.trim())
//     return NextResponse.json({ categories })
//   } catch (error) {
//     console.error("OpenAI API error:", error)
//     return NextResponse.json({ error: "Error categorizing content" }, { status: 500 })
//   }
// }
