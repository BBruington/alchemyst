import { relations } from "drizzle-orm/relations";
import { user, message, post, campaign, like, comment, campaignChat, campaignSchedules, campaignNote, friendship, character, campaignPlayers, requestingInvite, invitedGame } from "./schema";

export const messageRelations = relations(message, ({one}) => ({
	user_senderId: one(user, {
		fields: [message.senderId],
		references: [user.clerkId],
		relationName: "message_senderId_user_clerkId"
	}),
	user_recipientId: one(user, {
		fields: [message.recipientId],
		references: [user.clerkId],
		relationName: "message_recipientId_user_clerkId"
	}),
}));

export const userRelations = relations(user, ({many}) => ({
	messages_senderId: many(message, {
		relationName: "message_senderId_user_clerkId"
	}),
	messages_recipientId: many(message, {
		relationName: "message_recipientId_user_clerkId"
	}),
	posts: many(post),
	campaigns: many(campaign),
	likes: many(like),
	comments: many(comment),
	friendships_senderId: many(friendship, {
		relationName: "friendship_senderId_user_clerkId"
	}),
	friendships_receiverId: many(friendship, {
		relationName: "friendship_receiverId_user_clerkId"
	}),
	characters: many(character),
	campaignPlayers: many(campaignPlayers),
	requestingInvites: many(requestingInvite),
	invitedGames: many(invitedGame),
}));

export const postRelations = relations(post, ({one, many}) => ({
	user: one(user, {
		fields: [post.userId],
		references: [user.clerkId]
	}),
	campaign: one(campaign, {
		fields: [post.campaignId],
		references: [campaign.id]
	}),
	likes: many(like),
	comments: many(comment),
}));

export const campaignRelations = relations(campaign, ({one, many}) => ({
	posts: many(post),
	user: one(user, {
		fields: [campaign.dmUserId],
		references: [user.clerkId]
	}),
	campaignChats: many(campaignChat),
	campaignSchedules: many(campaignSchedules),
	campaignNotes: many(campaignNote),
	campaignPlayers: many(campaignPlayers),
	requestingInvites: many(requestingInvite),
	invitedGames: many(invitedGame),
}));

export const likeRelations = relations(like, ({one}) => ({
	post: one(post, {
		fields: [like.postId],
		references: [post.id]
	}),
	user: one(user, {
		fields: [like.userId],
		references: [user.id]
	}),
}));

export const commentRelations = relations(comment, ({one}) => ({
	post: one(post, {
		fields: [comment.postId],
		references: [post.id]
	}),
	user: one(user, {
		fields: [comment.userId],
		references: [user.id]
	}),
}));

export const campaignChatRelations = relations(campaignChat, ({one}) => ({
	campaign: one(campaign, {
		fields: [campaignChat.campaignId],
		references: [campaign.id]
	}),
}));

export const campaignSchedulesRelations = relations(campaignSchedules, ({one}) => ({
	campaign: one(campaign, {
		fields: [campaignSchedules.campaignId],
		references: [campaign.id]
	}),
}));

export const campaignNoteRelations = relations(campaignNote, ({one}) => ({
	campaign: one(campaign, {
		fields: [campaignNote.campaignId],
		references: [campaign.id]
	}),
}));

export const friendshipRelations = relations(friendship, ({one}) => ({
	user_senderId: one(user, {
		fields: [friendship.senderId],
		references: [user.clerkId],
		relationName: "friendship_senderId_user_clerkId"
	}),
	user_receiverId: one(user, {
		fields: [friendship.receiverId],
		references: [user.clerkId],
		relationName: "friendship_receiverId_user_clerkId"
	}),
}));

export const characterRelations = relations(character, ({one}) => ({
	user: one(user, {
		fields: [character.userId],
		references: [user.clerkId]
	}),
}));

export const campaignPlayersRelations = relations(campaignPlayers, ({one}) => ({
	campaign: one(campaign, {
		fields: [campaignPlayers.a],
		references: [campaign.id]
	}),
	user: one(user, {
		fields: [campaignPlayers.b],
		references: [user.id]
	}),
}));

export const requestingInviteRelations = relations(requestingInvite, ({one}) => ({
	campaign: one(campaign, {
		fields: [requestingInvite.a],
		references: [campaign.id]
	}),
	user: one(user, {
		fields: [requestingInvite.b],
		references: [user.id]
	}),
}));

export const invitedGameRelations = relations(invitedGame, ({one}) => ({
	campaign: one(campaign, {
		fields: [invitedGame.a],
		references: [campaign.id]
	}),
	user: one(user, {
		fields: [invitedGame.b],
		references: [user.id]
	}),
}));