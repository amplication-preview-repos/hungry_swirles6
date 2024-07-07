import { Cafe as TCafe } from "../api/cafe/Cafe";

export const CAFE_TITLE_FIELD = "id";

export const CafeTitle = (record: TCafe): string => {
  return record.id?.toString() || String(record.id);
};
