import { bot } from "./config/config";
import { intents } from "./config/etc";
import { shortnerHandler, startHandler } from "./functions/handlers";

bot.onText(intents.start, startHandler)
bot.onText(intents.url, shortnerHandler)