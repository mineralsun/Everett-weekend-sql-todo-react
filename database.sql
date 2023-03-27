CREATE TABLE "tasklist" (
	"id" SERIAL PRIMARY KEY,
	"taskName" VARCHAR(256) NOT NULL,
	"taskDesc" VARCHAR(2048),
	"taskStatus" BOOLEAN DEFAULT FALSE
);

INSERT INTO "tasklist" ("taskName", "taskDesc", "taskStatus")
VALUES ('Put Away Laundry', 'Fold and put away clean laundry!', 'f')