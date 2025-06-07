import type { WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "svix";
import { headers } from "next/headers";
import db, { user } from "@/db";
import { eq } from "drizzle-orm";

const webhookSecret: string = process.env.WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const payload = (await req.json()) as object;
  const payloadString = JSON.stringify(payload);

  const headerPayload = headers();
  const svixId = headerPayload.get("svix-id");
  const svixIdTimeStamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");

  if (!svixId || !svixIdTimeStamp || !svixSignature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Create an object of the headers
  const svixHeaders = {
    "svix-id": svixId,
    "svix-timestamp": svixIdTimeStamp,
    "svix-signature": svixSignature,
  };

  // Create a new Webhook instance with your webhook secret
  const wh = new Webhook(webhookSecret);

  let evt: WebhookEvent;
  try {
    // Verify the webhook payload and headers
    evt = wh.verify(payloadString, svixHeaders) as WebhookEvent;
  } catch (error) {
    console.error("Webhook verification failed:", error);
    return new Response("Error occured", {
      status: 400,
    });
  }
  const { id } = evt.data;
  const eventType = evt.type;
  
  // Handle the webhook

  if (eventType === "user.created" || eventType === "user.updated") {
    await db.insert(user).values({
      id: crypto.randomUUID(),
      email: evt.data.email_addresses[0]!.email_address,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      clerkId: id!,
        username: evt.data.username,
        imgUrl: evt.data.image_url,
      }).onConflictDoUpdate({
      target: [user.clerkId],
      set: {
        email: evt.data.email_addresses[0]!.email_address,
        username: evt.data.username,
        imgUrl: evt.data.image_url,
        updatedAt: new Date().toISOString(),
      }
      })

    return new Response("User updated", {
      status: 201,
    });
  }

  if (eventType === "user.deleted") {
    // Delete the user from the database
    if (!id) {
    return new Response("Missing user ID", { status: 400 });
  }
    await await db.delete(user).where(eq(user.clerkId, id));

    return new Response("User was deleted", {
      status: 200,
    });
  }
}