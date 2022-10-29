import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="pt-20">{children}</div>
    </div>
  );
}
