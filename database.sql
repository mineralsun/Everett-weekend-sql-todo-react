CREATE TABLE "tasklist" (
	"id" SERIAL PRIMARY KEY,
	"taskName" VARCHAR(256) NOT NULL,
	"taskDesc" VARCHAR(2048),
	"status" BOOLEAN
);

INSERT INTO "tasklist" ("taskName", "taskDesc", "status")
VALUES ('Put Away Laundry', 'Fold and put away clean laundry!', 'False')