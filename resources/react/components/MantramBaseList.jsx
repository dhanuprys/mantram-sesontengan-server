import useSWRImmutable from 'swr/immutable';
import CardSkeleton from './CardSkeleton';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MantramBaseCard({ name, mantramBaseId, count }) {
    return (
        <Link to={`/mantram/${mantramBaseId}`} className="p-4 shadow flex items-center gap-2 border rounded-lg border-slate-300 hover:shadow-lg">
            <div>
                <h1 className="text-[1.25em] font-semibold">{name}</h1>
                <p className="text-[0.875em]">Terdapat {count} mantram</p>
            </div>
            <span className="ml-auto">
                <svg className="w-[25px] h-[25px] text-slate-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
            </span>
        </Link>
    );
}

function MantramBaseList() {
    const { data: mantramBases, error: mantramBasesError, isLoading } = useSWRImmutable(
        '/api/mantram',
        (url) => axios.get(url).then(response => response.data)
    );

    return (
        <div>
            <h2 className="px-4 py-2 font-semibold text-[1.25em] text-center">Pilih Mantram</h2>
            <div className="p-4 flex flex-col gap-2 transition-all min-h-[100vh]">
                {
                    mantramBases
                        ? mantramBases.map(mantram => {
                            return <MantramBaseCard
                                key={mantram.id}
                                mantramBaseId={mantram.id}
                                name={mantram.name}
                                count={mantram.mantram_count} />
                        })
                        : isLoading
                            ? <CardSkeleton />
                            : 'Gagal memuat'
                }
            </div>
        </div>
    );
}

export default MantramBaseList;
