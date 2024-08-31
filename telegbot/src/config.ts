import * as dotenv from 'dotenv';

dotenv.config();

export const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN as string;

export const PORT = Number(process.env.PORT);

export const AI_URL = process.env.AI_URL as string