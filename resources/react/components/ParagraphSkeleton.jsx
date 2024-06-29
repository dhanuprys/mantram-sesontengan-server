function ParagraphSkeleton() {
    return (
        <div className="flex flex-col gap-2">
            <div className="shadow rounded-lg h-[20px] bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse">
            </div>
            <div className="shadow rounded-lg h-[20px] w-[90%] bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse">
            </div>
            <div className="shadow rounded-lg h-[20px] w-[95%] bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse">
            </div>
            <div className="shadow rounded-lg h-[20px] w-[85%] bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse">
            </div>
            <div className="shadow rounded-lg h-[20px] w-[40%] bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse">
            </div>
        </div>
    );
}

export default ParagraphSkeleton;
