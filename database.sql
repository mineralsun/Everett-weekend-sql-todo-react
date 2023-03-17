CREATE TABLE "tasklist" (
	"id" SERIAL PRIMARY KEY,
	"taskName" VARCHAR(256) NOT NULL,
	"taskDesc" VARCHAR(2048),
	"status" BOOLEAN
);

-- I might change the status from a BOOLEAN to something else because I wanted to mark
-- it as incomplete/complete and SQL would not let me
-- I will ask an instructor for guidance there!

INSERT INTO "tasklist" ("taskName", "taskDesc", "status")
VALUES ('Put Away Laundry', 'Fold and put away clean laundry!', 'False')