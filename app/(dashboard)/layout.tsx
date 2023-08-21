import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({
    children
}: {
    children : React.ReactNode;
}) => {

    const apiLimitcount = await getApiLimitCount();
    const isPro = await checkSubscription();
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:insert-y-0  bg-gray-900">
                <Sidebar isPro={isPro} apiLimitCount={apiLimitcount}/>
            </div>
            <main className="md:pl-72">
                <Navbar/>
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout;