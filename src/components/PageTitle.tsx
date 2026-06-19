type PageTitleProps = { kicker: string; title: string; body: string };

export default function PageTitle({ kicker, title, body }: PageTitleProps) {
  return (
    <div className="page-title fade-in">
      <p>{kicker}</p>
      <h1>{title}</h1>
      <span>{body}</span>
    </div>
  );
}
