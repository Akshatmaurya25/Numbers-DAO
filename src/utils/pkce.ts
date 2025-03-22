export function generateCodeVerifier() {
  const array = new Uint32Array(56);
  crypto.getRandomValues(array);
  return Buffer.from(array.buffer).toString('base64url');
}

export async function generateCodeChallenge(verifier: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Buffer.from(hash).toString('base64url');
}
