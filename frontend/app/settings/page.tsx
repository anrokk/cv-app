import { getCurrentUser } from "@/lib/server/auth";
import { redirect } from "next/dist/client/components/navigation";


export default async function Page() {
    const user = await getCurrentUser();

    if (!user) {
        redirect("/login");
    }
    
}