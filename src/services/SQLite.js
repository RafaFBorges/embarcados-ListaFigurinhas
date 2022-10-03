import * as SQLite from "expo-sqlite";

function openConection() {
    const db = SQLite.openDatabase("db.db");
    return db;
}

export const db = openConection();
