import { bot } from "../config/config";

export const sleep = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const showTyping = async (id: number, ms: number = 300) => {
    await bot.sendChatAction(id, "typing");
    await sleep(ms);
}