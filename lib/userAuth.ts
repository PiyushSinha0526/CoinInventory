import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";
import { User } from "@prisma/client";

export const userAuth = async (): Promise<User | null> => {
  const user = await currentUser();
  if (!user) return null;

  try {
    const getUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (getUser) return getUser;

    const name = `${user.firstName} ${user.lastName}`;
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return newUser;
  } catch (error) {
    console.error("Error in checkUser:", error instanceof Error ? error.message : error);
    throw new Error("Failed to check or create user");
  }
};
