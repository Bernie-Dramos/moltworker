import { DurableObject } from 'cloudflare:workers';

/**
 * MoltbotDurableObject - Manages persistent state for Moltbot sessions
 * This Durable Object maintains the Sandbox instance and coordinates
 * between multiple clients connecting to the same bot instance.
 */
export class MoltbotDurableObject extends DurableObject {
  constructor(ctx: DurableObjectState, env: any) {
    super(ctx, env);
  }

  async fetch(request: Request): Promise<Response> {
    // Pass through to the sandbox handler
    return new Response('Moltbot Durable Object OK', { status: 200 });
  }
}
