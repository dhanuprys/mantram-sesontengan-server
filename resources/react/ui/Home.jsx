import HomeHeader from '../components/HomeHeader';
import MantramBaseList from '../components/MantramBaseList';

function Home() {
    return (
        <div className="bg-black">
            <HomeHeader />
            <div className="sticky top-0">
                <div className="relative w-full h-full flex justify-center items-center p-20">
                    <div className="glowing-effect absolute left-1/2 top-1/2 -z-10"></div>
                    <img src="/hindu.png" className="w-[50px] h-[50px]" />
                </div>
            </div>
            <div className="bg-white pt-4 rounded-t-3xl border border-slate-300 relative z-[2]">
                <MantramBaseList />
            </div>
        </div>
    );
}

export default Home;
