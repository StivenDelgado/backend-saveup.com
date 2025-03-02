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
              const objetMessage = {
                instructions: "Envía la respuesta que sea más claro, conciso y fácil de comprender, asegurándote de que el lenguaje sea sencillo y directo. Evita el uso de caracteres extraños o comandos de código, ya que el texto final se mostrará en un modal.",
                message: info.message
              }
              const result = await chat.sendMessage(JSON.stringify(objetMessage));
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
        const objetMessage = {
          instructions: "Envía la respuesta que sea más claro, conciso y fácil de comprender, asegurándote de que el lenguaje sea sencillo y directo. Evita el uso de caracteres extraños o comandos de código, ya que el texto final se mostrará en un modal.",
          message: info.prompt
        }
        const result = await model.generateContent(JSON.stringify(objetMessage));
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