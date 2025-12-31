import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client only if the key exists to avoid runtime crashes on init
// In a real app, we might handle the missing key more gracefully in the UI
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateEditorResponse = async (
  userMessage: string, 
  portfolioContext: string
): Promise<string> => {
  if (!ai) {
    return "Error: API Key is missing. Please configure the environment.";
  }

  try {
    const model = ai.models;
    
    const systemPrompt = `
      You are the "Editor-in-Chief" of a newspaper that represents a developer's portfolio.
      The user is a reader asking questions about the developer (the subject of the portfolio).
      
      Here is the context about the developer:
      ${portfolioContext}

      Your persona:
      - Old-school, witty, slightly cynical but professional newspaper editor.
      - Use terms like "Stop the presses!", "This just in", "Off the record".
      - Be concise but informative.
      - If the answer isn't in the context, say you need to send a reporter to investigate (don't make up facts).
      
      Answer the user's question based on the context provided.
    `;

    const response: GenerateContentResponse = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: systemPrompt,
      }
    });

    return response.text || "The telegraph lines are down. No response received.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "We're experiencing technical difficulties with our printing press. Try again later.";
  }
};