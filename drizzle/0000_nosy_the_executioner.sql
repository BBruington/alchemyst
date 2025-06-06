-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TYPE "public"."FriendshipStatus" AS ENUM('PENDING', 'ACCEPTED');--> statement-breakpoint
CREATE TABLE "CampaignNote" (
	"id" text PRIMARY KEY NOT NULL,
	"campaignId" text NOT NULL,
	"userId" text,
	"private" boolean,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "CampaignSchedules" (
	"id" text PRIMARY KEY NOT NULL,
	"campaignId" text NOT NULL,
	"time" text NOT NULL,
	"date" text NOT NULL,
	"scheduledEvent" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "User" (
	"id" text PRIMARY KEY NOT NULL,
	"clerkId" text NOT NULL,
	"username" text,
	"imgUrl" text,
	"email" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Character" (
	"id" text PRIMARY KEY NOT NULL,
	"charname" text,
	"classname" text,
	"background" text,
	"playername" text,
	"race" text,
	"alignment" text,
	"level" integer,
	"strengthscore" integer,
	"dexterityscore" integer,
	"constitutionscore" integer,
	"wisdomscore" integer,
	"intelligencescore" integer,
	"charismascore" integer,
	"inspiration" boolean,
	"proficiencybonus" integer,
	"strengthsave" integer,
	"strengthsaveprof" boolean,
	"dexteritysave" integer,
	"dexteritysaveprof" boolean,
	"constitutionsave" integer,
	"constitutionsaveprof" boolean,
	"wisdomsave" integer,
	"wisdomsaveprof" boolean,
	"intelligencesave" integer,
	"intelligencesaveprof" boolean,
	"charismasave" integer,
	"charismasaveprof" boolean,
	"acrobatics" integer,
	"acrobaticsexpertise" boolean,
	"acrobaticsprof" boolean,
	"animalhandling" integer,
	"animalhandlingexpertise" boolean,
	"animalhandlingprof" boolean,
	"arcana" integer,
	"arcanaexpertise" boolean,
	"arcanaprof" boolean,
	"athletics" integer,
	"athleticsexpertise" boolean,
	"athleticsprof" boolean,
	"deception" integer,
	"deceptionexpertise" boolean,
	"deceptionprof" boolean,
	"history" integer,
	"historyexpertise" boolean,
	"historyprof" boolean,
	"insight" integer,
	"insightexpertise" boolean,
	"insightprof" boolean,
	"intimidation" integer,
	"intimidationexpertise" boolean,
	"intimidationprof" boolean,
	"investigation" integer,
	"investigationexpertise" boolean,
	"investigationprof" boolean,
	"medicine" integer,
	"medicineexpertise" boolean,
	"medicineprof" boolean,
	"nature" integer,
	"natureexpertise" boolean,
	"natureprof" boolean,
	"perception" integer,
	"perceptionexpertise" boolean,
	"perceptionprof" boolean,
	"performance" integer,
	"performanceexpertise" boolean,
	"performanceprof" boolean,
	"persuasion" integer,
	"persuasionexpertise" boolean,
	"persuasionprof" boolean,
	"religion" integer,
	"religionexpertise" boolean,
	"religionprof" boolean,
	"sleightofhand" integer,
	"sleightofhandexpertise" boolean,
	"sleightofhandprof" boolean,
	"stealth" integer,
	"stealthexpertise" boolean,
	"stealthprof" boolean,
	"survival" integer,
	"survivalexpertise" boolean,
	"survivalprof" boolean,
	"passiveperception" integer,
	"otherprofs" text,
	"ac" integer,
	"initiative" integer,
	"speed" integer,
	"maxhp" integer,
	"currenthp" integer,
	"temphp" integer,
	"totalhd" text,
	"remaininghd" integer,
	"deathsuccess1" boolean,
	"deathsuccess2" boolean,
	"deathsuccess3" boolean,
	"deathfail1" boolean,
	"deathfail2" boolean,
	"deathfail3" boolean,
	"atkname1" text,
	"atkbonus1" integer,
	"atkdamage1" text,
	"atkname2" text,
	"atkbonus2" integer,
	"atkdamage2" text,
	"atkname3" text,
	"atkbonus3" integer,
	"atkdamage3" text,
	"cp" integer,
	"sp" integer,
	"ep" integer,
	"gp" integer,
	"pp" integer,
	"equipmentlist" text,
	"personality" text,
	"ideals" text,
	"bonds" text,
	"flaws" text,
	"features" text,
	"userId" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Post" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"players" integer,
	"startingLevel" integer,
	"finishingLevel" integer,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"author" text NOT NULL,
	"mainImage" text NOT NULL,
	"body" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL,
	"campaignId" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Friendship" (
	"id" text PRIMARY KEY NOT NULL,
	"senderId" text NOT NULL,
	"senderName" text NOT NULL,
	"receiverId" text NOT NULL,
	"receiverName" text NOT NULL,
	"senderImgUrl" text,
	"receiverImgUrl" text,
	"status" "FriendshipStatus" DEFAULT 'PENDING' NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Like" (
	"id" text PRIMARY KEY NOT NULL,
	"postId" text NOT NULL,
	"userId" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Message" (
	"id" text PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"senderId" text NOT NULL,
	"recipientId" text NOT NULL,
	"sentAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Comment" (
	"id" text PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"postId" text NOT NULL,
	"userId" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Campaign" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"image" text,
	"password" text,
	"dmUserId" text NOT NULL,
	"dmName" text,
	"dmProfileImg" text,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "_InvitedGame" (
	"A" text NOT NULL,
	"B" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "_RequestingInvite" (
	"A" text NOT NULL,
	"B" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "_prisma_migrations" (
	"id" varchar(36) PRIMARY KEY NOT NULL,
	"checksum" varchar(64) NOT NULL,
	"finished_at" timestamp with time zone,
	"migration_name" varchar(255) NOT NULL,
	"logs" text,
	"rolled_back_at" timestamp with time zone,
	"started_at" timestamp with time zone DEFAULT now() NOT NULL,
	"applied_steps_count" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "CampaignChat" (
	"id" text PRIMARY KEY NOT NULL,
	"campaignId" text NOT NULL,
	"username" text NOT NULL,
	"chat" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "_CampaignPlayers" (
	"A" text NOT NULL,
	"B" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "CampaignNote" ADD CONSTRAINT "CampaignNote_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "public"."Campaign"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "CampaignSchedules" ADD CONSTRAINT "CampaignSchedules_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "public"."Campaign"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "Character" ADD CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("clerkId") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "Post" ADD CONSTRAINT "Post_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "public"."Campaign"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("clerkId") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "public"."User"("clerkId") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "public"."User"("clerkId") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "Like" ADD CONSTRAINT "Like_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."Post"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "Like" ADD CONSTRAINT "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "Message" ADD CONSTRAINT "Message_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "public"."User"("clerkId") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "public"."User"("clerkId") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."Post"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_dmUserId_fkey" FOREIGN KEY ("dmUserId") REFERENCES "public"."User"("clerkId") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "_InvitedGame" ADD CONSTRAINT "_InvitedGame_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Campaign"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "_InvitedGame" ADD CONSTRAINT "_InvitedGame_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "_RequestingInvite" ADD CONSTRAINT "_RequestingInvite_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Campaign"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "_RequestingInvite" ADD CONSTRAINT "_RequestingInvite_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "CampaignChat" ADD CONSTRAINT "CampaignChat_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "public"."Campaign"("id") ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "_CampaignPlayers" ADD CONSTRAINT "_CampaignPlayers_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Campaign"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "_CampaignPlayers" ADD CONSTRAINT "_CampaignPlayers_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
CREATE UNIQUE INDEX "User_email_key" ON "User" USING btree ("email" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "User_username_key" ON "User" USING btree ("username" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "Post_campaignId_key" ON "Post" USING btree ("campaignId" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "_InvitedGame_AB_unique" ON "_InvitedGame" USING btree ("A" text_ops,"B" text_ops);--> statement-breakpoint
CREATE INDEX "_InvitedGame_B_index" ON "_InvitedGame" USING btree ("B" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "_RequestingInvite_AB_unique" ON "_RequestingInvite" USING btree ("A" text_ops,"B" text_ops);--> statement-breakpoint
CREATE INDEX "_RequestingInvite_B_index" ON "_RequestingInvite" USING btree ("B" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "_CampaignPlayers_AB_unique" ON "_CampaignPlayers" USING btree ("A" text_ops,"B" text_ops);--> statement-breakpoint
CREATE INDEX "_CampaignPlayers_B_index" ON "_CampaignPlayers" USING btree ("B" text_ops);
*/