import StatsCard from "./StatsCard";
function StatsSection({solved,total}){
const progress = (solved / total) * 100;
    const stats=[
   {
    title: "Problems Solved",
    value: `${solved}/${total}`,
    icon: "📈",
    progress: progress
},
    {
        
     title: "Progress",
    value:  `${progress.toFixed(1)}%`,
    icon: "🚀",
    progress: progress

    }
    ,
    {
    title: "Current Streak",
    value: "9 Days",
    icon: "🔥"
}
];
    return (
        <>
                <div className="stats-container">
       { stats.map((stat) => (

   <StatsCard
        key={stat.title}
        title={stat.title}
        value={stat.value}
        icon={stat.icon}
        progress={stat.progress}
    />
))}</div>
       
        </>
    );
}
export default StatsSection;