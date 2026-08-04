-- CreateTable
CREATE TABLE "Conference" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "mode" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "submissionDeadline" DATETIME NOT NULL,
    "registrationDeadline" DATETIME NOT NULL,
    "registrationFee" REAL NOT NULL,
    "website" TEXT,
    "email" TEXT,
    "description" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Draft',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
