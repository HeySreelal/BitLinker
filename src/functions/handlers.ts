import TelegramBot from "node-telegram-bot-api";
import { bot } from "../config/config";
import { shortenURL } from "../services/shortner";
import { showTyping } from "./helpers";

export const startHandler = async (msg: TelegramBot.Message) => {
    const id = msg.chat.id;
    await showTyping(id);
    await bot.sendMessage(id, `Hey ${msg.from.first_name}, welcome to BitLinker! 🔗\n\nI can help you shorten your URLs with domain bit.ly. 🚀`);
    return bot.sendMessage(id, "Send me a link now 😎");
}

export const shortnerHandler = async (msg: TelegramBot.Message) => {
    const id = msg.chat.id;
    const url = msg.text;
    showTyping(id);
    const result = await shortenURL(url);
    if(result["errors"]) {
        return bot.sendMessage(id, result["description"]);
    }
    return bot.sendMessage(id, `Here we go! 😎\n\n🔗 ${result["link"]}`);
}