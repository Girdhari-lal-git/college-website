interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-slate-800">{title}</h2>

      {subtitle && (
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;