# BitLinker

Just a Telegram bot to shorten your links. Purely written in Typescript using [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api).


## Setup

Prerequisites:
1. [node.js](https://nodejs.org/en/)
2. [TypeScript](https://www.typescriptlang.org/)


3. Send /newbot to [@BotFather](https://t.me/botfather) and follow the instructions to create a bot.
4. Clone the repo.
5. Add an .env file with following content:
   - TOKEN: your bot token (you'll get this from @BotFather on successful bot creation).
   - BITLY_TOKEN: Your Access token for bit.ly, [see more here](https://app.bitly.com/settings/api/).
6. Run `tsc` to compile the code.
7. Run `node bin/main` to run the bot!

### You're all set to go! 🚀