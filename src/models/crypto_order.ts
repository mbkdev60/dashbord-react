export type CryptoOrderStatus = 'completed' | 'pending' | 'failed';

export interface CryptoOrder {
  order_id: string,
  nomclient: string
  dateorder: string
  montanttotal: string
}
