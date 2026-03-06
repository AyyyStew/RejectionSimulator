import ClientPage from "./ClientPage";
import { generate } from "@/utils/generation";

export default function Page() {
  const initialRejection = generate();

  return <ClientPage initialRejection={initialRejection} />;
}
