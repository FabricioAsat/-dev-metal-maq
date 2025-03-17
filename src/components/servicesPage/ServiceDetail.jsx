export const ServiceDetail = ({ service }) => {
  return (
    <div className="w-full max-w-5xl p-5 mx-auto bg-white rounded-lg shadow-md md:shadow-lg shadow-neutral-800/15">
      <img
        src={service.image}
        alt={service.title}
        className="object-cover w-full h-64 rounded-lg"
      />
      <h2 className="mt-4 text-2xl font-bold text-center">{service.title}</h2>
      <p className="mt-2 text-sm italic text-neutral-500">{service.details}</p>

      <h3 className="mt-4 text-xl font-bold">Aplicaciones</h3>
      <ul className="list-disc list-inside text-neutral-500">
        {service.applications.map((app, index) => (
          <li className="text-sm" key={index}>
            {app}
          </li>
        ))}
      </ul>

      <h3 className="mt-4 text-xl font-bold">Beneficios</h3>
      <ul className="list-disc list-inside text-neutral-500">
        {service.benefits.map((benefit, index) => (
          <li className="text-sm" key={index}>
            {benefit}
          </li>
        ))}
      </ul>

      <button className="px-4 py-2 mt-6 font-bold rounded-lg text-neutral-600 bg-emerald-200 active:scale-95">
        Consultar sobre este servicio
      </button>
    </div>
  );
};
