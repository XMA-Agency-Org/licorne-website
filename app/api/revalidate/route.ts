import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = { _type?: string; slug?: string | null };

export async function POST(request: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      request,
      process.env.SANITY_REVALIDATE_SECRET,
      true,
    );

    if (!isValidSignature) {
      return new Response("Invalid signature", { status: 401 });
    }

    revalidatePath("/", "layout");
    return NextResponse.json({ revalidated: true, type: body?._type, slug: body?.slug });
  } catch (error) {
    return new Response((error as Error).message, { status: 500 });
  }
}
