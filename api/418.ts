import { NowRequest, NowResponse } from "@vercel/node";

export default async (
    request: NowRequest,
    response: NowResponse
): Promise<void> => {
    response.setHeader("cache-control", "s-maxage=31536000");
    response.status(418).send("418 I'm a teapot.");
    return;
};