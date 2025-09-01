import Navbar from '@/components/Navbar'
import USAmap from '@/components/USAmap'
import { getVisitedStates } from '@/lib/travels'

export default async function TravelsPage() {
    const statesData = await getVisitedStates();
    return (
        <div className="flex flex-col items-start px-5 py-8 max-w-full md:max-w-7xl mx-auto min-h-screen">
            <div className="flex justify-end md:justify-start">
                <Navbar />
            </div>

            <div className="w-full border-b border-[hsl(331,13%,54%)] my-8"></div>

            <USAmap statesData={statesData} />
        </div>
    )
}