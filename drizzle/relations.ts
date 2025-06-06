import { relations } from "drizzle-orm/relations";
import { campaign, campaignNote, campaignSchedules, user, character, post, friendship, like, message, comment, invitedGame, requestingInvite, campaignChat, campaignPlayers } from "./schema";

export const campaignNoteRelations = relations(campaignNote, ({one}) => ({
	campaign: one(campaign, {
		fields: [campaignNote.campaignId],
		references: [campaign.id]
	}),
}));

export const campaignRelations = relations(campaign, ({one, many}) => ({
	campaignNotes: many(campaignNote),
	campaignSchedules: many(campaignSchedules),
	posts: many(post),
	user: one(user, {
		fields: [campaign.dmUserId],
		references: [user.clerkId]
	}),
	invitedGames: many(invitedGame),
	requestingInvites: many(requestingInvite),
	campaignChats: many(campaignChat),
	campaignPlayers: many(campaignPlayers),
}));

export const campaignSchedulesRelations = relations(campaignSchedules, ({one}) => ({
	campaign: one(campaign, {
		fields: [campaignSchedules.campaignId],
		references: [campaign.id]
	}),
}));

export const characterRelations = relations(character, ({one}) => ({
	user: one(user, {
		fields: [character.userId],
		references: [user.clerkId]
	}),
}));

export const userRelations = relations(user, ({many}) => ({
	characters: many(character),
	posts: many(post),
	friendships_receiverId: many(friendship, {
		relationName: "friendship_receiverId_user_clerkId"
	}),
	friendships_senderId: many(friendship, {
		relationName: "friendship_senderId_user_clerkId"
	}),
	likes: many(like),
	messages_recipientId: many(message, {
		relationName: "message_recipientId_user_clerkId"
	}),
	messages_senderId: many(message, {
		relationName: "message_senderId_user_clerkId"
	}),
	comments: many(comment),
	campaigns: many(campaign),
	invitedGames: many(invitedGame),
	requestingInvites: many(requestingInvite),
	campaignPlayers: many(campaignPlayers),
}));

export const postRelations = relations(post, ({one, many}) => ({
	campaign: one(campaign, {
		fields: [post.campaignId],
		references: [campaign.id]
	}),
	user: one(user, {
		fields: [post.userId],
		references: [user.clerkId]
	}),
	likes: many(like),
	comments: many(comment),
}));

export const friendshipRelations = relations(friendship, ({one}) => ({
	user_receiverId: one(user, {
		fields: [friendship.receiverId],
		references: [user.clerkId],
		relationName: "friendship_receiverId_user_clerkId"
	}),
	user_senderId: one(user, {
		fields: [friendship.senderId],
		references: [user.clerkId],
		relationName: "friendship_senderId_user_clerkId"
	}),
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

export const messageRelations = relations(message, ({one}) => ({
	user_recipientId: one(user, {
		fields: [message.recipientId],
		references: [user.clerkId],
		relationName: "message_recipientId_user_clerkId"
	}),
	user_senderId: one(user, {
		fields: [message.senderId],
		references: [user.clerkId],
		relationName: "message_senderId_user_clerkId"
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

export const campaignChatRelations = relations(campaignChat, ({one}) => ({
	campaign: one(campaign, {
		fields: [campaignChat.campaignId],
		references: [campaign.id]
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