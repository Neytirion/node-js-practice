import books from "@/app/api/db";

export async function GET() {
  return Response.json(books);
}

export async function POST() {
  const book = await request.json();
  books.push(book);
  return Response.json(book);
}