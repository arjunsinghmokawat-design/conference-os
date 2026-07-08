export default function Features() {

const features = [

"Conference Website",

"Paper Submission",

"Reviewer Dashboard",

"Payment Gateway",

"Certificate Generator",

"QR Attendance",

];

return (

<section className="bg-slate-950 py-20 text-white">

<div className="max-w-7xl mx-auto px-8">

<h2 className="text-5xl font-bold text-center">

Everything You Need

</h2>

<p className="text-center text-gray-400 mt-4">

Manage your complete conference from one dashboard.

</p>

<div className="grid md:grid-cols-3 gap-6 mt-14">

{features.map((feature)=>(

<div

key={feature}

className="rounded-xl border border-slate-800 bg-slate-900 p-8 hover:border-blue-500 transition"

>

<h3 className="text-2xl font-semibold">

{feature}

</h3>

</div>

))}

</div>

</div>

</section>

);

}