import { RankingsNavbar } from "../(components)/rankings-navbar";

export default function RankingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RankingsNavbar />
      {children}
    </>
  );
}