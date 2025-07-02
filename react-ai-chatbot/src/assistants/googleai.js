import { GoogleGenerativeAI } from "@google/generative-ai";

const googleai = new GoogleGenerativeAI(
  "AIzaSyAbYQeigJm7UZ3HBUpzAr8H_0XETtGDygY"
);

export class Assistant {
  #chat;
  constructor(model = "gemini-2.5-flash") {
    console.log(googleai.VITE_GOGGLE_AI_API_KEY);
    const gemini = googleai.getGenerativeModel({ model });
    this.#chat = gemini.startChat({ history: [] });
  }

  async chat(content) {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await this.#chat.sendMessage(content);
      return result.response.text();
    } catch (error) {
      throw error;
    }
  }

  async *chatStream(content) {
    // eslint-disable-next-line no-useless-catch
    try {
      const result = await this.#chat.sendMessageStream(content);

      for await (const chunk of result.stream) {
        yield chunk.text();
      }
    } catch (error) {
      throw error;
    }
  }
}
