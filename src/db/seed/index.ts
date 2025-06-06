import { exec } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import util from "node:util";
import dotenv from "dotenv";

dotenv.config();

const execPromise = util.promisify(exec);

const remoteDbUrl = process.env.REMOTE_DATABASE_URL;
const localDbUrl = process.env.DATABASE_URL;

// Check if Docker is installed
async function checkDockerInstallation() {
	try {
		await execPromise("docker --version");
		return true;
	} catch {
		return false;
	}
}

// Check if Docker Compose is installed
async function checkDockerComposeInstallation() {
	try {
		await execPromise("docker compose version");
		return true;
	} catch {
		return false;
	}
}

async function dumpAndRestore() {
	if (!remoteDbUrl || !localDbUrl) {
		throw new Error("Database URLs are not set in environment variables");
	}

	const dumpFilePath = path.resolve(process.cwd(), "database_dump.pg");

	try {
		// Check for Docker installation
		const isDockerInstalled = await checkDockerInstallation();
		const isDockerComposeInstalled = await checkDockerComposeInstallation();

		if (!isDockerInstalled || !isDockerComposeInstalled) {
			throw new Error("Docker or Docker Compose is not available");
		}

		// Start Docker database
		// const isDbStarted = await startDockerDatabase();
		// if (!isDbStarted) {
		// 	throw new Error("Failed to start PostgreSQL in Docker");
		// }

		// Dump the remote database
		await execPromise(
			`pg_dump --format=c --no-owner --no-acl ${remoteDbUrl} > ${dumpFilePath}`,
		);

		// Restore to the local database
		await execPromise(
			`pg_restore --clean --if-exists --no-owner --no-acl -d ${localDbUrl} ${dumpFilePath}`,
		);

		// Clean up the dump file
		fs.unlinkSync(dumpFilePath);
	} catch (error) {
		throw error;
	}
}

async function main() {
  try {
    const isDockerInstalled = await checkDockerInstallation();
    const isDockerComposeInstalled = await checkDockerComposeInstallation();
    if (!isDockerInstalled || !isDockerComposeInstalled) {
      throw new Error("Docker or Docker Compose is not available");
    }
    await dumpAndRestore();
  } catch (error) {
    console.error("Error during database dump and restore:", error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("An unexpected error occurred:", error);
  process.exit(1);
});