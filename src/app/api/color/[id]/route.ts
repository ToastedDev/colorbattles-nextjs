import { notFound } from "next/navigation";
import { db } from "~/db";

export const GET = async (
  _: any,
  { params }: { params: Record<"id", string> }
) => {
  const color = await db.color.findFirst({
    where: {
      name: params.id,
    },
  });
  if (!color) return notFound();
  return Response.json(color, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
};

export const POST = async (
  _: any,
  { params }: { params: Record<"id", string> }
) => {
  const color = await db.color.findFirst({
    where: {
      name: params.id,
    },
  });

  if (!color) return notFound();

  await db.color.update({
    where: {
      id: color.id,
    },
    data: {
      clicks: {
        increment: 1,
      },
    },
  });

  return new Response(undefined, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
};

export const DELETE = async (
  _: any,
  { params }: { params: Record<"id", string> }
) => {
  const color = await db.color.findFirst({
    where: {
      name: params.id,
    },
  });

  if (!color) return notFound();

  await db.color.update({
    where: {
      id: color.id,
    },
    data: {
      clicks: {
        decrement: 1,
      },
    },
  });

  return new Response(undefined, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
};
