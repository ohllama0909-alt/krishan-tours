import { chmod, mkdir, readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import Database from "better-sqlite3";

const source = process.env.INQUIRY_DB_PATH || "/home/ubuntu/tours-data/inquiries/inquiries.db";
const backupDirectory = process.env.INQUIRY_BACKUP_DIR || "/home/ubuntu/tours-data/inquiries/backups";
const retentionDays = 30;

await mkdir(backupDirectory, { recursive: true, mode: 0o700 });
const timestamp = new Date().toISOString().replaceAll(":", "-").replace(".", "-");
const destination = path.join(backupDirectory, `inquiries-${timestamp}.db`);
const database = new Database(source, { readonly: true });

try {
  await database.backup(destination);
  await chmod(destination, 0o600);
} finally {
  database.close();
}

const cutoff = Date.now() - retentionDays * 24 * 60 * 60 * 1_000;
for (const name of await readdir(backupDirectory)) {
  if (!name.startsWith("inquiries-") || !name.endsWith(".db")) continue;
  const file = path.join(backupDirectory, name);
  if ((await stat(file)).mtimeMs < cutoff) await unlink(file);
}

console.log(`Inquiry backup created: ${destination}`);
