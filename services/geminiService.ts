
import { GoogleGenAI, Type } from "@google/genai";
import { ConsultationResponse } from "../types";

/**
 * Generates a business roadmap using Gemini AI based on user input.
 * Adheres to the @google/genai SDK guidelines.
 * Incorporates GetNowDigital's specific service methodology.
 */
export const getAIPlanner = async (userInput: string): Promise<ConsultationResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are a Senior Digital Strategy Consultant at GetNowDigital, a world-class digital agency.
    Your methodology focuses on "Clarity Before Execution".
    When analyzing user ideas, recommend services from our 8 core departments:
    1. Digital Strategy & Advisory (Always start here)
    2. Engineering & Development
    3. Custom Software Solutions
    4. Mobile Application Development
    5. Digital Marketing & Performance
    6. Branding & Identity
    7. Creative Production
    8. IT Infrastructure & Support
    
    Provide a professional, realistic, and highly strategic consultation roadmap.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze the following business idea/need and provide a professional digital consultation roadmap: "${userInput}"`,
    config: {
      systemInstruction: systemInstruction,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: {
            type: Type.STRING,
            description: "A professional executive summary of the project."
          },
          roadmap: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                phase: { type: Type.STRING },
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                recommendedServices: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                }
              },
              required: ["phase", "title", "description", "recommendedServices"]
            }
          },
          estimatedComplexity: {
            type: Type.STRING,
            description: "Complexity level: Low, Medium, or High."
          }
        },
        required: ["summary", "roadmap", "estimatedComplexity"]
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error("No response from AI");
  return JSON.parse(text) as ConsultationResponse;
};
