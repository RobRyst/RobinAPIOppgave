import { NextResponse } from "next/server";

const catfacts = [
    {
        id: 1,
        text: "A group of cats is called a “clowder.”"
    }, {
        id: 2, 
        text: "Cat's can't taste sweetness. Scientists believe it's due to a genetic mutation that affects key taste receptors. "
    }, {
        id: 3, 
        text: "Cats only meow as a way to communicate with humans. "
    }, {
        id: 4, 
        text: "I like cats"
    },  {
        id: 5, 
        text: "But dogs are better :)"
    }
]
export function GET() {
    return NextResponse.json(catfacts, { status: 200 });
  }
  
  export async function POST(request) {
    const data = await request.json();
    return NextResponse.json(data, { status: 200 });
  }

