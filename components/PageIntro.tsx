type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <div className="flex items-start gap-5 md:gap-10 px-6 md:px-10 pt-6 md:pt-8">
      <div className="shrink-0 w-24 md:w-32 lg:w-36" aria-hidden="true" />
      <div className="min-w-0 pb-8 max-w-3xl">
        {eyebrow && <div className="page-eyebrow mb-2">{eyebrow}</div>}
        <h1 className="page-title--intro">{title}</h1>
        {description && <p className="page-description mt-3">{description}</p>}
      </div>
    </div>
  );
}