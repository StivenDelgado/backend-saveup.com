import GeminiClient from "../config/ia.js"

class IAService {


    async sendMessage(info){
        try {
            const model = await GeminiClient.geminiModel();
            const chat = model.startChat({
                history: [
                  {
                    role: "user",
                    parts: [{ text: "Hello, I have 2 dogs in my house." }],
                  },
                  {
                    role: "model",
                    parts: [{ text: "Great to meet you. What would you like to know?" }],
                  },
                ],
                generationConfig: {
                  maxOutputTokens: 100,
                },
              });
              const result = await chat.sendMessage(info.message);
              const response = await result.response.candidates[0].content.parts[0].text;	
            return {
                success: true,
                response: response
            }
        } catch (error) {
            console.error("Error en IA:", error);
            return {
                success: false,
                response: error
            }
        }
    }

    async promptIA(info){
      try {
        const model = await GeminiClient.geminiModel();
        const result = await model.generateContent(info.prompt);
        const response = result.response.candidates[0].content.parts[0].text;	
        return {
            success: true,
            response: response
        }
    } catch (error) {
        console.error("Error en IA:", error);
        return {
            success: false,
            response: error
        }
    }
    }
        
}   

export default IAService;