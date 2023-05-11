export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Projekt: {
        Row: {
          Content: Json[] | null
          created_at: string | null
          id: number
          Title: string
        }
        Insert: {
          Content?: Json[] | null
          created_at?: string | null
          id?: number
          Title: string
        }
        Update: {
          Content?: Json[] | null
          created_at?: string | null
          id?: number
          Title?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
