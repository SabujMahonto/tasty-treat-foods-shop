interface SectionTitleProps {
  title: string;
  subTitle: string;
}
export const SectionTitle: React.FC<SectionTitleProps> = ({
  subTitle,
  title,
}) => {
  return (
    <div className="wrapper text-center pb-10">
      <span className="uppercase font-semibold tracking-widest text-accent">
        {subTitle}
      </span>
      <h2 className="text-4xl">{title}</h2>
    </div>
  );
};
