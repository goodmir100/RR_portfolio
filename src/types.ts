export interface CertificateItem {
  /** Absolute path served from `public/certificates/`. */
  src: string;
  type: 'image' | 'pdf';
}
