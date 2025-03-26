export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      certificates: {
        Row: {
          certificate_id: string
          certificate_type: string
          event_id: string | null
          issued_at: string | null
          ngo_id: string | null
          user_id: string | null
        }
        Insert: {
          certificate_id?: string
          certificate_type: string
          event_id?: string | null
          issued_at?: string | null
          ngo_id?: string | null
          user_id?: string | null
        }
        Update: {
          certificate_id?: string
          certificate_type?: string
          event_id?: string | null
          issued_at?: string | null
          ngo_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "certificates_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["event_id"]
          },
          {
            foreignKeyName: "certificates_ngo_id_fkey"
            columns: ["ngo_id"]
            isOneToOne: false
            referencedRelation: "ngos"
            referencedColumns: ["ngo_id"]
          },
          {
            foreignKeyName: "certificates_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      donations: {
        Row: {
          amount: number
          created_at: string | null
          donation_id: string
          donation_type: string
          event_id: string | null
          in_kind_items: string | null
          ngo_id: string | null
          payment_method: string | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          donation_id?: string
          donation_type: string
          event_id?: string | null
          in_kind_items?: string | null
          ngo_id?: string | null
          payment_method?: string | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          donation_id?: string
          donation_type?: string
          event_id?: string | null
          in_kind_items?: string | null
          ngo_id?: string | null
          payment_method?: string | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "donations_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["event_id"]
          },
          {
            foreignKeyName: "donations_ngo_id_fkey"
            columns: ["ngo_id"]
            isOneToOne: false
            referencedRelation: "ngos"
            referencedColumns: ["ngo_id"]
          },
          {
            foreignKeyName: "donations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      events: {
        Row: {
          created_at: string | null
          date_time: string
          description: string
          event_id: string
          event_type: string | null
          location: string | null
          max_volunteers: number | null
          ngo_id: string | null
          title: string
        }
        Insert: {
          created_at?: string | null
          date_time: string
          description: string
          event_id?: string
          event_type?: string | null
          location?: string | null
          max_volunteers?: number | null
          ngo_id?: string | null
          title: string
        }
        Update: {
          created_at?: string | null
          date_time?: string
          description?: string
          event_id?: string
          event_type?: string | null
          location?: string | null
          max_volunteers?: number | null
          ngo_id?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "events_ngo_id_fkey"
            columns: ["ngo_id"]
            isOneToOne: false
            referencedRelation: "ngos"
            referencedColumns: ["ngo_id"]
          },
        ]
      }
      gamification: {
        Row: {
          badges: string | null
          created_at: string | null
          gamification_id: string
          points: number | null
          user_id: string | null
        }
        Insert: {
          badges?: string | null
          created_at?: string | null
          gamification_id?: string
          points?: number | null
          user_id?: string | null
        }
        Update: {
          badges?: string | null
          created_at?: string | null
          gamification_id?: string
          points?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "gamification_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      ngos: {
        Row: {
          created_at: string | null
          description: string | null
          location: string | null
          name: string
          ngo_id: string
          user_id: string | null
          website: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          location?: string | null
          name: string
          ngo_id?: string
          user_id?: string | null
          website?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          location?: string | null
          name?: string
          ngo_id?: string
          user_id?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ngos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          message: string
          notif_id: string
          status: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          message: string
          notif_id?: string
          status?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          message?: string
          notif_id?: string
          status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      reviews: {
        Row: {
          comment: string | null
          created_at: string | null
          ngo_id: string | null
          rating: number
          review_id: string
          user_id: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          ngo_id?: string | null
          rating: number
          review_id?: string
          user_id?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          ngo_id?: string | null
          rating?: number
          review_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_ngo_id_fkey"
            columns: ["ngo_id"]
            isOneToOne: false
            referencedRelation: "ngos"
            referencedColumns: ["ngo_id"]
          },
          {
            foreignKeyName: "reviews_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          name: string
          password: string
          phone: string | null
          role: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          email: string
          name: string
          password: string
          phone?: string | null
          role: string
          user_id?: string
        }
        Update: {
          created_at?: string | null
          email?: string
          name?: string
          password?: string
          phone?: string | null
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      volunteers: {
        Row: {
          created_at: string | null
          event_id: string | null
          status: string | null
          user_id: string | null
          volunteer_id: string
        }
        Insert: {
          created_at?: string | null
          event_id?: string | null
          status?: string | null
          user_id?: string | null
          volunteer_id?: string
        }
        Update: {
          created_at?: string | null
          event_id?: string | null
          status?: string | null
          user_id?: string | null
          volunteer_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "volunteers_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["event_id"]
          },
          {
            foreignKeyName: "volunteers_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
