/*
  Warnings:

  - Added the required column `script` to the `Template` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Template" ADD COLUMN     "script" TEXT NOT NULL;
