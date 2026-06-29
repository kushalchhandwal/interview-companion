import StatsCard from "./StatsCard";
function StatsSection({solved,total}){
    return (
        <>
         <StatsCard
    title="Problems Solved"
    value={solved}
/>

<StatsCard
    title="Progress"
    value={`${((solved / total) * 100).toFixed(1)}%`}
/>

<StatsCard
    title="Current Streak"
    value="9 Days"
/>
        </>
    );
}
export default StatsSection;