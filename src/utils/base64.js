// Core
import { promises as fs } from 'fs';


export const fileToBase64 = async (file) => {
  try {
    const bitMap = await fs.readFile(file);

    return Buffer.from(bitMap).toString('base64');
  } catch ({ message }) {
    throw new Error(message);
  }
};

export const base64ToFile = async (data, fileName) => {
  try {
    const buffer = Buffer.from(data, 'base64');

    return await fs.writeFile(fileName, buffer);
  } catch ({ message }) {
    throw new Error(message);
  }
};

export const base64ToString = (data) => {
  try {
    const buffer = Buffer.from(data, 'base64');

    return buffer.toString('ascii');
  } catch ({ message }) {
    throw new Error(message);
  }
};
