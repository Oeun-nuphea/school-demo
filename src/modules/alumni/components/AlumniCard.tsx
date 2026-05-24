import Image from "next/image";

export default function AlumniCard({ data }: { data: any }) {
  return (
    <div className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col w-[450px] shrink-0 mx-4">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 ring-4 ring-white">
          <Image src={`https://i.pravatar.cc/150?u=${data.id}`} alt={data.name} fill sizes="64px" className="object-cover" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">{data.name}</h3>
          <p className="text-blue-600 font-semibold text-sm">{data.role}</p>
        </div>
      </div>
      <p className="text-slate-600 leading-relaxed italic">"{data.desc}"</p>
    </div>
  );
}
