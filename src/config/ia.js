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

    async geminiModel() {
        try {
            const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
            return model
        } catch (error) {
            console.error("Error en Gemini:", error);
            throw new Error("No se pudo obtener respuesta del chatbot.");
        }
    }
}

// Exportamos una única instancia para que todos los servicios la usen
export default new GeminiClient();
