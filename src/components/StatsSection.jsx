import StatsCard from "./StatsCard";
function StatsSection({solved,total}){
    return (
        <>
        <div className="stats-container">
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
</div>
        </>
    );
}
export default StatsSection;