CREATE TABLE "tasklist" (
	"id" SERIAL PRIMARY KEY,
	"taskName" VARCHAR(256) NOT NULL,
	"taskDesc" VARCHAR(2048),
	"status" BOOLEAN
);