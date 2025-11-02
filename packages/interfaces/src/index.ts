export type DigestAlgo = 'SHA-256'|'SHA-512';

export interface IHashService {
  hashFile(stream: NodeJS.ReadableStream, algo?: DigestAlgo): Promise<string>;
}

export interface ITsaService {
  timestampDigest(digestHex: string): Promise<{ rfc3161Token: Buffer; utc: string; serial: string; }>;
}

export interface IChainService {
  anchorDigest(digestHex: string, network?: 'bitcoin'|'ethereum'): Promise<{ txId: string; network: string; anchoredAt: string; }>;
  getTxStatus(txId: string, network: string): Promise<'pending'|'confirmed'|'unknown'>;
}

export type CertificateInput = {
  holder: { id: string; displayName: string; email?: string };
  work: { hash: string; algo: string; filename?: string; size?: number };
  tsa?: { token: Buffer; utc: string; serial: string };
  chain?: { network: string; txId: string; anchoredAt: string };
  issuer: { org: string; orgId: string; certificateId: string; };
  policy: { version: string; };
};

export interface ICertService {
  buildCertificate(input: CertificateInput): Promise<Buffer>;
}

export type ProofBundle = {
  hash: string; algo: string;
  tsa?: { tokenB64: string; utc: string; serial: string };
  chain?: { network: string; txId: string; anchoredAt: string };
  sig?: { signerCN: string; notBefore: string; notAfter: string; qual: boolean };
};

export type VerifyReport = {
  ok: boolean;
  details: { tsaValid?: boolean; chainConfirmed?: boolean; signatureValid?: boolean };
  warnings?: string[]; errors?: string[];
};

export interface IVerifyService {
  verifyBundle(bundle: ProofBundle): Promise<VerifyReport>;
}
