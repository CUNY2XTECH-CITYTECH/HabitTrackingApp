import { getAppDirRequestHandler } from 'supertokens-node/nextjs';
import { NextRequest, NextResponse } from 'next/server';
import SuperTokens from 'supertokens-node';
import { withSession } from 'supertokens-node/custom';          //custom since our backend is configured as framework: "custom"
import '../../../supertokens/config/backend';                   //this calls backend config for supertoken


//Backend supertoken has a 
const handleCall = getAppDirRequestHandler();

export async function GET(request: NextRequest) {
  const res = await handleCall(request);
  if (!res.headers.has('Cache-Control')) {
    // This is needed for production deployments with Vercel
    res.headers.set(
      'Cache-Control',
      'no-cache, no-store, max-age=0, must-revalidate'
    )
  }
  return res;
}



export async function POST(request: NextRequest) {
  return handleCall(request);
//    return withSession(request, async (err, session) => {
//     if (err) {
//         return NextResponse.json(err, { status: 500 });
//     }
//     let jwt = session!.getAccessToken();
//     return NextResponse.json({ token: jwt });
// });
}

export async function DELETE(request: NextRequest) {
  return handleCall(request);
}

export async function PUT(request: NextRequest) {
  return handleCall(request);
}

export async function PATCH(request: NextRequest) {
  return handleCall(request);
}

export async function HEAD(request: NextRequest) {
  return handleCall(request);
}