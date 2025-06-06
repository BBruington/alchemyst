import { pgTable, foreignKey, text, boolean, timestamp, uniqueIndex, integer, index, varchar, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const friendshipStatus = pgEnum("FriendshipStatus", ['PENDING', 'ACCEPTED'])


export const campaignNote = pgTable("CampaignNote", {
	id: text().primaryKey().notNull(),
	campaignId: text().notNull(),
	userId: text(),
	private: boolean(),
	title: text().notNull(),
	content: text().notNull(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.campaignId],
			foreignColumns: [campaign.id],
			name: "CampaignNote_campaignId_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const campaignSchedules = pgTable("CampaignSchedules", {
	id: text().primaryKey().notNull(),
	campaignId: text().notNull(),
	time: text().notNull(),
	date: text().notNull(),
	scheduledEvent: text().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.campaignId],
			foreignColumns: [campaign.id],
			name: "CampaignSchedules_campaignId_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const user = pgTable("User", {
	id: text().primaryKey().notNull(),
	clerkId: text().notNull(),
	username: text(),
	imgUrl: text(),
	email: text().notNull(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
}, (table) => [
	uniqueIndex("User_email_key").using("btree", table.email.asc().nullsLast().op("text_ops")),
	uniqueIndex("User_username_key").using("btree", table.username.asc().nullsLast().op("text_ops")),
]);

export const character = pgTable("Character", {
	id: text().primaryKey().notNull(),
	charname: text(),
	classname: text(),
	background: text(),
	playername: text(),
	race: text(),
	alignment: text(),
	level: integer(),
	strengthscore: integer(),
	dexterityscore: integer(),
	constitutionscore: integer(),
	wisdomscore: integer(),
	intelligencescore: integer(),
	charismascore: integer(),
	inspiration: boolean(),
	proficiencybonus: integer(),
	strengthsave: integer(),
	strengthsaveprof: boolean(),
	dexteritysave: integer(),
	dexteritysaveprof: boolean(),
	constitutionsave: integer(),
	constitutionsaveprof: boolean(),
	wisdomsave: integer(),
	wisdomsaveprof: boolean(),
	intelligencesave: integer(),
	intelligencesaveprof: boolean(),
	charismasave: integer(),
	charismasaveprof: boolean(),
	acrobatics: integer(),
	acrobaticsexpertise: boolean(),
	acrobaticsprof: boolean(),
	animalhandling: integer(),
	animalhandlingexpertise: boolean(),
	animalhandlingprof: boolean(),
	arcana: integer(),
	arcanaexpertise: boolean(),
	arcanaprof: boolean(),
	athletics: integer(),
	athleticsexpertise: boolean(),
	athleticsprof: boolean(),
	deception: integer(),
	deceptionexpertise: boolean(),
	deceptionprof: boolean(),
	history: integer(),
	historyexpertise: boolean(),
	historyprof: boolean(),
	insight: integer(),
	insightexpertise: boolean(),
	insightprof: boolean(),
	intimidation: integer(),
	intimidationexpertise: boolean(),
	intimidationprof: boolean(),
	investigation: integer(),
	investigationexpertise: boolean(),
	investigationprof: boolean(),
	medicine: integer(),
	medicineexpertise: boolean(),
	medicineprof: boolean(),
	nature: integer(),
	natureexpertise: boolean(),
	natureprof: boolean(),
	perception: integer(),
	perceptionexpertise: boolean(),
	perceptionprof: boolean(),
	performance: integer(),
	performanceexpertise: boolean(),
	performanceprof: boolean(),
	persuasion: integer(),
	persuasionexpertise: boolean(),
	persuasionprof: boolean(),
	religion: integer(),
	religionexpertise: boolean(),
	religionprof: boolean(),
	sleightofhand: integer(),
	sleightofhandexpertise: boolean(),
	sleightofhandprof: boolean(),
	stealth: integer(),
	stealthexpertise: boolean(),
	stealthprof: boolean(),
	survival: integer(),
	survivalexpertise: boolean(),
	survivalprof: boolean(),
	passiveperception: integer(),
	otherprofs: text(),
	ac: integer(),
	initiative: integer(),
	speed: integer(),
	maxhp: integer(),
	currenthp: integer(),
	temphp: integer(),
	totalhd: text(),
	remaininghd: integer(),
	deathsuccess1: boolean(),
	deathsuccess2: boolean(),
	deathsuccess3: boolean(),
	deathfail1: boolean(),
	deathfail2: boolean(),
	deathfail3: boolean(),
	atkname1: text(),
	atkbonus1: integer(),
	atkdamage1: text(),
	atkname2: text(),
	atkbonus2: integer(),
	atkdamage2: text(),
	atkname3: text(),
	atkbonus3: integer(),
	atkdamage3: text(),
	cp: integer(),
	sp: integer(),
	ep: integer(),
	gp: integer(),
	pp: integer(),
	equipmentlist: text(),
	personality: text(),
	ideals: text(),
	bonds: text(),
	flaws: text(),
	features: text(),
	userId: text().notNull(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.clerkId],
			name: "Character_userId_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const post = pgTable("Post", {
	id: text().primaryKey().notNull(),
	userId: text().notNull(),
	players: integer(),
	startingLevel: integer(),
	finishingLevel: integer(),
	title: text().notNull(),
	description: text().notNull(),
	author: text().notNull(),
	mainImage: text().notNull(),
	body: text().notNull(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
	campaignId: text().notNull(),
}, (table) => [
	uniqueIndex("Post_campaignId_key").using("btree", table.campaignId.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.campaignId],
			foreignColumns: [campaign.id],
			name: "Post_campaignId_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.clerkId],
			name: "Post_userId_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const friendship = pgTable("Friendship", {
	id: text().primaryKey().notNull(),
	senderId: text().notNull(),
	senderName: text().notNull(),
	receiverId: text().notNull(),
	receiverName: text().notNull(),
	senderImgUrl: text(),
	receiverImgUrl: text(),
	status: friendshipStatus().default('PENDING').notNull(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.receiverId],
			foreignColumns: [user.clerkId],
			name: "Friendship_receiverId_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.senderId],
			foreignColumns: [user.clerkId],
			name: "Friendship_senderId_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const like = pgTable("Like", {
	id: text().primaryKey().notNull(),
	postId: text().notNull(),
	userId: text().notNull(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.postId],
			foreignColumns: [post.id],
			name: "Like_postId_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "Like_userId_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const message = pgTable("Message", {
	id: text().primaryKey().notNull(),
	content: text().notNull(),
	senderId: text().notNull(),
	recipientId: text().notNull(),
	sentAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.recipientId],
			foreignColumns: [user.clerkId],
			name: "Message_recipientId_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.senderId],
			foreignColumns: [user.clerkId],
			name: "Message_senderId_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const comment = pgTable("Comment", {
	id: text().primaryKey().notNull(),
	content: text().notNull(),
	postId: text().notNull(),
	userId: text().notNull(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.postId],
			foreignColumns: [post.id],
			name: "Comment_postId_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [user.id],
			name: "Comment_userId_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const campaign = pgTable("Campaign", {
	id: text().primaryKey().notNull(),
	name: text().notNull(),
	description: text().notNull(),
	image: text(),
	password: text(),
	dmUserId: text().notNull(),
	dmName: text(),
	dmProfileImg: text(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.dmUserId],
			foreignColumns: [user.clerkId],
			name: "Campaign_dmUserId_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const invitedGame = pgTable("_InvitedGame", {
	a: text("A").notNull(),
	b: text("B").notNull(),
}, (table) => [
	uniqueIndex("_InvitedGame_AB_unique").using("btree", table.a.asc().nullsLast().op("text_ops"), table.b.asc().nullsLast().op("text_ops")),
	index().using("btree", table.b.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.a],
			foreignColumns: [campaign.id],
			name: "_InvitedGame_A_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	foreignKey({
			columns: [table.b],
			foreignColumns: [user.id],
			name: "_InvitedGame_B_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
]);

export const requestingInvite = pgTable("_RequestingInvite", {
	a: text("A").notNull(),
	b: text("B").notNull(),
}, (table) => [
	uniqueIndex("_RequestingInvite_AB_unique").using("btree", table.a.asc().nullsLast().op("text_ops"), table.b.asc().nullsLast().op("text_ops")),
	index().using("btree", table.b.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.a],
			foreignColumns: [campaign.id],
			name: "_RequestingInvite_A_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	foreignKey({
			columns: [table.b],
			foreignColumns: [user.id],
			name: "_RequestingInvite_B_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
]);

export const prismaMigrations = pgTable("_prisma_migrations", {
	id: varchar({ length: 36 }).primaryKey().notNull(),
	checksum: varchar({ length: 64 }).notNull(),
	finishedAt: timestamp("finished_at", { withTimezone: true, mode: 'string' }),
	migrationName: varchar("migration_name", { length: 255 }).notNull(),
	logs: text(),
	rolledBackAt: timestamp("rolled_back_at", { withTimezone: true, mode: 'string' }),
	startedAt: timestamp("started_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	appliedStepsCount: integer("applied_steps_count").default(0).notNull(),
});

export const campaignChat = pgTable("CampaignChat", {
	id: text().primaryKey().notNull(),
	campaignId: text().notNull(),
	username: text().notNull(),
	chat: text().notNull(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.campaignId],
			foreignColumns: [campaign.id],
			name: "CampaignChat_campaignId_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const campaignPlayers = pgTable("_CampaignPlayers", {
	a: text("A").notNull(),
	b: text("B").notNull(),
}, (table) => [
	uniqueIndex("_CampaignPlayers_AB_unique").using("btree", table.a.asc().nullsLast().op("text_ops"), table.b.asc().nullsLast().op("text_ops")),
	index().using("btree", table.b.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.a],
			foreignColumns: [campaign.id],
			name: "_CampaignPlayers_A_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	foreignKey({
			columns: [table.b],
			foreignColumns: [user.id],
			name: "_CampaignPlayers_B_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
]);
