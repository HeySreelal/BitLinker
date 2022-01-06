# BitLinker

Just a Telegram bot to shorten your links. Purely written in Typescript using [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api).
If you want to see a test flight, you can check out the [@BitLinkerBot](https://t.me/BitLinkerBot) on Telegram.

## Prerequisites:
1. [node.js](https://nodejs.org/en/)
2. [TypeScript](https://www.typescriptlang.org/)

## Setup
1. Send `/newbot` to [@BotFather](https://t.me/botfather) and follow the instructions to create a bot.
2. Clone the repo.
3. Run `npm install` to install the dependencies.
4. Add an .env file with following content:
   - TOKEN: your bot token (you'll get this from @BotFather on successful bot creation).
   - BITLY_TOKEN: Your Access token for bit.ly, [see more here](https://app.bitly.com/settings/api/).
Your `.env` file should look like this:

```
TOKEN=<YOUR_BOT_TOKEN>
BITLY_TOKEN=<YOUR_BITLY_ACCESS_TOKEN>
```

4. Run `tsc` to compile the code.
5. Run `node bin/main` to run the bot!

### You're all set to go! 🚀