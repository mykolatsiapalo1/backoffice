export interface Account {
  id: string;
  referral: string;
  status: string;
  alias: null;
  created_at: number;
  balance: Record<string, number>;

  status_verification: string;
  complete_name: string;
  identification_external_uuid: string;
  identification_uuid: string;
}
