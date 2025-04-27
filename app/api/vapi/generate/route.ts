import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { getRandomInterviewCover } from "@/lib/utils";
import { db } from "@/firebase/admin";

export async function GET() {
  return Response.json({ success: true, data: "Thank You!" }, { status: 200 });
}

export async function POST(request: Request) {
  try {
    const { type, role, level, techstack, amount, userid } = await request.json();

    // Validate required fields
    if (!type || !role || !level || !techstack || !amount || !userid) {
      return Response.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    const { text: questions } = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: `Prepare questions for a job interview.
        The job role is ${role}.
        The job experience level is ${level}.
        The tech stack used in the job is: ${techstack}.
        The focus between behavioural and technical questions should lean towards: ${type}.
        The amount of questions required is: ${amount}.
        Please return only the questions, without any additional text.
        The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
        Return the questions formatted like this:
        ["Question 1", "Question 2", "Question 3"]
        
        Thank you! <3
    `,
    });

    console.log("Raw questions received from Gemini:", questions);

    let parsedQuestions: string[];

    // Safely parse Gemini response
    try {
      parsedQuestions = JSON.parse(questions);
      if (!Array.isArray(parsedQuestions)) {
        throw new Error("Parsed questions is not an array");
      }
    } catch (parseError) {
      console.error("Error parsing questions:", parseError, "Original:", questions);
      throw new Error("Invalid format returned from Gemini");
    }

    const interview = {
      role,
      type,
      level,
      techstack: (techstack ?? "").split(","),
      questions: parsedQuestions,
      userId: userid,
      finalized: true,
      coverImage: getRandomInterviewCover(),
      createdAt: new Date().toISOString(),
    };

    await db.collection("interviews").add(interview);

    return Response.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Error in POST handler:", error);
    return Response.json({ success: false, error: String(error) }, { status: 500 });
  }
}
