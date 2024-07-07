import { CafeWhereInput } from "./CafeWhereInput";
import { CafeOrderByInput } from "./CafeOrderByInput";

export type CafeFindManyArgs = {
  where?: CafeWhereInput;
  orderBy?: Array<CafeOrderByInput>;
  skip?: number;
  take?: number;
};
