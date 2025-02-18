import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

class GeminiClient {
    constructor() {
        if (!GeminiClient.instance) {
            this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
            GeminiClient.instance = this;
        }
        return GeminiClient.instance;
    }

    async generateResponse(message) {
        try {
            const model = this.genAI.getGenerativeModel({ model: "gemini-pro" });

            const result = await model.generateContent(message);
            return result.response.text();
        } catch (error) {
            console.error("Error en Gemini:", error);
            throw new Error("No se pudo obtener respuesta del chatbot.");
        }
    }
}

// Exportamos una única instancia para que todos los servicios la usen
export default new GeminiClient();
