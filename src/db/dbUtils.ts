"use server";

import fs from "fs";
import path from "path";
import { randomUUID as uuid } from "crypto";

const TABLES = {
  users: "users_table.json",
  journeys: "journeys_table.json",
  places: "places_table.json",
  locations: "locations_table.json",
  messages: "messages_table.json",
} as const;

const getFilePath = (table) =>
  path.join(__dirname, TABLES[table]).replace(/^\/ROOT/, process.cwd());

export const readRecords = async (table) => {
  const filePath = getFilePath(table);
  const data = fs.readFileSync(filePath, "utf8");
  const records = JSON.parse(data);
  return records;
};

export const writeRecords = async (table, records) => {
  const filePath = getFilePath(table);
  fs.writeFileSync(filePath, JSON.stringify(records, null, 2));
};

export const insertRecord = async (table, data) => {
  const records = await readRecords(table);
  records.push({
    id: uuid(),
    ...data,
  });
  await writeRecords(table, records);
  return records.at(-1);
};

export const readRecord = async (table, id) => {
  const records = await readRecords(table);
  return records.find(record => record.id === id);
};

export const updateRecord = async (table, data) => {
  const records = await readRecords(table);
  const recordIndex = records.findIndex(record => record.id === data.id);
  if (recordIndex >= 0) {
    records[recordIndex] = data;
    await writeRecords(table, records);
  }
  return records[recordIndex];
};

export const deleteRecord = async (table, id) => {
  const records = await readRecords(table);
  const recordIndex = records.findIndex(record => record.id === id);
  if (recordIndex >= 0) {
    records.splice(recordIndex, 1);
    await writeRecords(table, records);
  }
  return true;
};
