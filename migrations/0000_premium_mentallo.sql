CREATE TABLE IF NOT EXISTS "product" (
	"id" text PRIMARY KEY NOT NULL,
	"product" text NOT NULL,
	"description" text,
	"price" text NOT NULL,
	"image_url" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" text PRIMARY KEY NOT NULL,
	"created_at" text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
